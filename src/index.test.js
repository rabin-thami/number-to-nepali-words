import test from "ava";
import convert from "./index.js";

// Basic conversion tests
test("converts english numbers to nepali", (t) => {
  t.is(convert("123", "toNp"), "१२३");
  t.is(convert("456789", "toNp"), "४५६७८९");
  t.is(convert("0", "toNp"), "०");
});

test("converts nepali numbers to english", (t) => {
  t.is(convert("१२३", "toEn"), "123");
  t.is(convert("४५६७८९", "toEn"), "456789");
  t.is(convert("०", "toEn"), "0");
});

// Nepali word conversion tests
test("converts numbers to nepali words", (t) => {
  t.is(convert("0", "toNpWord"), "शुन्य");
  t.is(convert("1", "toNpWord"), "एक");
  t.is(convert("21", "toNpWord"), "एक्काइस");
  t.is(convert("34", "toNpWord"), "चौतीस");
  t.is(convert("100", "toNpWord"), "एक सय");
  t.is(convert("1000", "toNpWord"), "एक हजार");
  t.is(convert("1234567", "toNpWord"), "बाह्र लाख चौतीस हजार पाँच सय सतसठ्ठी");
});

// Currency format tests
test("converts numbers to nepali currency words", (t) => {
  t.is(convert("0", "toNpWord", "currency"), "शुन्य रुपैया");
  t.is(convert("1", "toNpWord", "currency"), "एक रुपैया");
  t.is(convert("21.50", "toNpWord", "currency"), "एक्काइस रुपैया पचास पैसा");
  t.is(convert("100.25", "toNpWord", "currency"), "एक सय रुपैया पच्चीस पैसा");
  t.is(
    convert("1245", "toNpWord", "currency"),
    "एक हजार दुई सय पैंतालिस रुपैया"
  );
  t.is(
    convert("1245.98", "toNpWord", "currency"),
    "एक हजार दुई सय पैंतालिस रुपैया अन्ठान्नब्बे पैसा"
  );
});

// English word conversion tests
test("converts numbers to english words", (t) => {
  t.is(convert("०", "toEnWord"), "zero");
  t.is(convert("१", "toEnWord"), "one");
  t.is(convert("२१", "toEnWord"), "twenty-one");
  t.is(convert("१००", "toEnWord"), "one hundred");
  t.is(convert("१०००", "toEnWord"), "one thousand");
  t.is(
    convert("१२३४५", "toEnWord"),
    "twelve thousand three hundred and forty-five"
  );
});

test("converts numbers to english currency words", (t) => {
  t.is(convert("0", "toEnWord", "currency"), "zero dollars");
  t.is(convert("1", "toEnWord", "currency"), "one dollars");
  t.is(
    convert("21.50", "toEnWord", "currency"),
    "twenty-one dollars and fifty cents"
  );
  t.is(
    convert("100.25", "toEnWord", "currency"),
    "one hundred dollars and twenty-five cents"
  );
});

// Error handling tests
test("throws error for invalid method", (t) => {
  t.throws(() => convert("123", "invalid"), {
    message: "Invalid method. Use toNp, toEn, toNpWord, or toEnWord",
  });
});

test("throws error for invalid value type", (t) => {
  t.throws(() => convert({}, "toNp"), {
    message: "Value must be a string or number",
  });
});

// New range limit tests
test("throws error for numbers exceeding English limit", (t) => {
  t.throws(() => convert("1300000000000", "toEnWord"), {
    message:
      "Number not supported. Please enter a number between 0 and 1.2 trillion",
  });
});

test("throws error for numbers exceeding Nepali limit", (t) => {
  t.throws(() => convert("1300000000000", "toNpWord"), {
    message:
      "Error converting to Nepali words: Error: संख्या समर्थित छैन। कृपया ० देखि १.२ खर्ब बीचको संख्या प्रविष्ट गर्नुहोस्",
  });
});

test("throws error for invalid number in Nepali", (t) => {
  t.throws(() => convert("abc", "toNpWord"), {
    message: "Error converting to Nepali words: Error: अमान्य संख्या",
  });
});

// Edge case tests
test("handles maximum allowed number", (t) => {
  t.notThrows(() => convert("1200000000000", "toEnWord"));
  t.notThrows(() => convert("1200000000000", "toNpWord"));
});
