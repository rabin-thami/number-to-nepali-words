import { NEPALI_DIGITS, ENGLISH_DIGITS } from "../constants/nepaliNumbers.js";
import {
  ENGLISH_WORDS,
  ENGLISH_LARGE_NUMBERS,
} from "../constants/englishWords.js";

export function toEnglishNumber(value) {
  return value
    .split("")
    .map((char) => {
      const index = NEPALI_DIGITS.indexOf(char);
      return index !== -1 ? ENGLISH_DIGITS[index] : char;
    })
    .join("");
}

export function toEnglishWord(value, currency) {
  const num = parseInt(value);
  if (isNaN(num)) {
    throw new Error("Invalid number");
  }
  if (num < 0 || num > 1200000000000) {
    throw new Error(
      "Number not supported. Please enter a number between 0 and 1.2 trillion"
    );
  }
  if (num === 0) {
    return currency ? "zero dollars" : "zero";
  }

  function processGroup(n) {
    if (n === 0) return "";
    if (n < 100) return ENGLISH_WORDS[n];

    const hundreds = Math.floor(n / 100);
    const remainder = n % 100;

    let result = ENGLISH_WORDS[hundreds] + " hundred";
    if (remainder > 0) {
      result += " and " + ENGLISH_WORDS[remainder];
    }
    return result;
  }

  let result = "";
  let remaining = num;
  const groups = [];

  while (remaining > 0) {
    groups.push(remaining % 1000);
    remaining = Math.floor(remaining / 1000);
  }

  for (let i = groups.length - 1; i >= 0; i--) {
    if (groups[i] !== 0) {
      const groupWord = processGroup(groups[i]);
      if (i > 0 && groupWord) {
        result += groupWord + " " + ENGLISH_LARGE_NUMBERS[i] + " ";
      } else {
        result += groupWord + " ";
      }
    }
  }

  result = result.trim();

  // Handle currency format
  if (currency) {
    const parts = value.toString().split(".");
    if (parts.length > 1) {
      const cents = parseInt(parts[1]);
      if (!isNaN(cents)) {
        result += " dollars and " + ENGLISH_WORDS[cents] + " cents";
      } else {
        result += " dollars";
      }
    } else {
      result += " dollars";
    }
  }

  return result;
}
