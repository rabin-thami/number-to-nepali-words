# Nepali Number Converter

A lightweight, versatile toolkit to convert numbers between English and Nepali formats. Whether you need to transform numerals into Nepali digits, spell out numbers as words, or format currency amounts, number-to-nepali-words has you covered. This package is ideal for projects requiring Nepali localization, internationalization (i18n), and currency conversion.

## 🚀 Quick Start

Install the package in your project:

```bash
npm install number-to-nepali-words
```

## 📖 How to Use

### Basic Usage

Import the converter and use it to convert numbers between English and Nepali formats:

```javascript
import convert from "number-to-nepali-words";

// Convert English to Nepali numbers:
convert("123", "toNp"); // Returns: १२३

// Convert Nepali to English numbers:
convert("१२३", "toEn"); // Returns: 123

// Convert numbers to Nepali words:
convert("1234", "toNpWord"); // Returns: एक हजार दुई सय चौतीस

// Convert numbers to English words:
convert("1234", "toEnWord"); // Returns: one thousand two hundred and thirty-four
```

### Currency Format Conversion

To format currency values, pass "currency" as the third parameter:

```javascript
// Convert to Nepali currency format:
convert("1234.50", "toNpWord", "currency");
// Returns: एक हजार दुई सय चौतीस रुपैया पचास पैसा मात्र

// Convert to English currency format:
convert("1234.50", "toEnWord", "currency");
// Returns: one thousand two hundred and thirty-four dollars and fifty cents
```

## 🔧 Available Methods

- `toNp`: Converts English numbers to Nepali digits (e.g., 123 → १२३)
- `toEn`: Converts Nepali numbers to English digits (e.g., १२३ → 123)
- `toNpWord`: Converts numbers to Nepali words (e.g., 1234 → एक हजार दुई सय चौतीस)
- `toEnWord`: Converts numbers to English words (e.g., 1234 → one thousand two hundred and thirty-four)

## 💡 Examples

```javascript
// Basic number conversion:
convert("123", "toNp"); // १२३
convert("१२३", "toEn"); // 123

// Word conversion:
convert("1234", "toNpWord"); // एक हजार दुई सय चौतीस
convert("1234", "toEnWord"); // one thousand two hundred and thirty-four

// Currency conversion:
convert("1234.50", "toNpWord", "currency"); // एक हजार दुई सय चौतीस रुपैया पचास पैसा मात्र
convert("1234.50", "toEnWord", "currency"); // one thousand two hundred and thirty-four dollars and fifty cents
```

## ⚠️ Error Handling

The converter provides clear error messages if:

- An invalid method name is used.
- An invalid number is provided.
- The number exceeds the supported range (0 to 1.2 trillion).
- An incorrect value type is supplied.

Example (English):

```javascript
convert("1300000000000", "toEnWord");
// Error: Number not supported. Please enter a number between 0 and 1.2 trillion
```

Example (Nepali):

```javascript
convert("1300000000000", "toNpWord");
// Error: संख्या समर्थित छैन। कृपया ० देखि १.२ खर्ब बीचको संख्या प्रविष्ट गर्नुहोस्
```

## 📝 Notes

- Supports number conversion up to 1.2 trillion (English) and १.२ खर्ब (Nepali).
- Handles decimals for accurate currency formatting.
- Accepts both string and number inputs.
- Provides bilingual error messages.
- Includes TypeScript type definitions.

## 📄 License

This project is licensed under the MIT License. Feel free to use and modify it in your projects.

Keywords: Nepali, number converter, English to Nepali, Nepali words, currency conversion, localization, i18n, npm package, nepali-words, numeral conversion, number-to-nepali-words
