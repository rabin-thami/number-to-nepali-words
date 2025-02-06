import { NEPALI_DIGITS, ENGLISH_DIGITS } from "../constants/nepaliNumbers.js";
import { NEPALI_WORDS } from "../constants/nepaliWords.js";

export function toNepaliNumber(value) {
  return value
    .split("")
    .map((char) => {
      const index = ENGLISH_DIGITS.indexOf(char);
      return index !== -1 ? NEPALI_DIGITS[index] : char;
    })
    .join("");
}

function cleanNumber(input) {
  return input.toString().replace(/,/g, "");
}

function getNumberWord(num) {
  return NEPALI_WORDS[num] || "";
}

function convertToWords(number) {
  const num = parseInt(number);
  if (isNaN(num)) {
    throw new Error("अमान्य संख्या");
  }
  if (num < 0 || num > 1200000000000) {
    throw new Error(
      "संख्या समर्थित छैन। कृपया ० देखि १.२ खर्ब बीचको संख्या प्रविष्ट गर्नुहोस्"
    );
  }

  if (!number || number === "0") return "शुन्य";

  var str = number.toString();
  var length = str.length;

  // Handle numbers less than 100
  if (length <= 2) {
    return getNumberWord(parseInt(str));
  }

  // Initialize result array
  var result = [];

  // Handle last two digits (ones and tens)
  var lastTwo = str.slice(-2);
  if (parseInt(lastTwo) > 0) {
    result.unshift(getNumberWord(parseInt(lastTwo)));
  }

  // Handle hundreds place
  if (length > 2) {
    var hundreds = str.slice(-3, -2);
    if (parseInt(hundreds) > 0) {
      result.unshift(getNumberWord(parseInt(hundreds)) + " सय");
    }
  }

  // Handle thousands place
  if (length > 3) {
    var thousands = str.slice(-5, -3);
    if (parseInt(thousands) > 0) {
      result.unshift(getNumberWord(parseInt(thousands)) + " हजार");
    }
  }

  // Handle lakhs place
  if (length > 5) {
    var lakhs = str.slice(-7, -5);
    if (parseInt(lakhs) > 0) {
      result.unshift(getNumberWord(parseInt(lakhs)) + " लाख");
    }
  }

  // Handle crores place
  if (length > 7) {
    var crores = str.slice(-9, -7);
    if (parseInt(crores) > 0) {
      result.unshift(getNumberWord(parseInt(crores)) + " करोड");
    }
  }

  // Handle arabs place
  if (length > 9) {
    var arabs = str.slice(-11, -9);
    if (parseInt(arabs) > 0) {
      result.unshift(getNumberWord(parseInt(arabs)) + " अरब");
    }
  }

  // Handle kharabs place
  if (length > 11) {
    var kharabs = str.slice(-13, -11);
    if (parseInt(kharabs) > 0) {
      result.unshift(getNumberWord(parseInt(kharabs)) + " खरब");
    }
  }

  // Handle neels place
  if (length > 13) {
    var neels = str.slice(-15, -13);
    if (parseInt(neels) > 0) {
      result.unshift(getNumberWord(parseInt(neels)) + " नील");
    }
  }

  // Handle padmas place
  if (length > 15) {
    var padmas = str.slice(-17, -15);
    if (parseInt(padmas) > 0) {
      result.unshift(getNumberWord(parseInt(padmas)) + " पद्म");
    }
  }

  // Handle sankhas place
  if (length > 17) {
    var sankhas = str.slice(-19, -17);
    if (parseInt(sankhas) > 0) {
      result.unshift(getNumberWord(parseInt(sankhas)) + " शंख");
    }
  }

  return result.join(" ");
}

export function toNepaliWord(value, currency) {
  try {
    if (value === null || value === undefined || value === "") return "";

    // Convert the input to string and handle any formatting
    var number = cleanNumber(value);
    var parts = number.split(".");

    // Convert main number
    var mainText = convertToWords(parts[0]);

    // If currency mode is on, always add रुपैया
    if (currency) {
      mainText += " रुपैया";

      // Handle decimal part if exists
      if (parts.length > 1 && parts[1]) {
        // Ensure two decimal places
        let decimalPart = parts[1].padEnd(2, "0").slice(0, 2);
        var decimalText = convertToWords(decimalPart);
        return mainText + " " + decimalText + " पैसा";
      }
    }

    return mainText;
  } catch (e) {
    throw new Error("Error converting to Nepali words: " + e.toString());
  }
}
