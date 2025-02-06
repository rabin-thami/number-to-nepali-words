import convert from './src/index.js';

// Test all conversion methods
console.log('Converting numbers between English and Nepali:');
console.log('English to Nepali: 123 →', convert('123', 'toNp'));
console.log('Nepali to English: १२३ →', convert('१२३', 'toEn'));
console.log('English to Nepali words: 1234 →', convert('1234', 'toNpWord'));
console.log('English to Nepali currency: 1234.50 →', convert('1234.50', 'toNpWord', 'currency'));
console.log('Nepali to English words: १२३४ →', convert('१२३४', 'toEnWord'));