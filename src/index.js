import { toNepaliNumber, toNepaliWord } from './utils/nepaliConverter.js';
import { toEnglishNumber, toEnglishWord } from './utils/englishConverter.js';

export default function convert(value, method, currency) {
  if (typeof value !== 'string' && typeof value !== 'number') {
    throw new Error('Value must be a string or number');
  }

  value = value.toString();

  switch (method) {
    case 'toNp':
      return toNepaliNumber(value);
    case 'toEn':
      return toEnglishNumber(value);
    case 'toNpWord':
      return toNepaliWord(value, currency);
    case 'toEnWord':
      return toEnglishWord(toEnglishNumber(value), currency);
    default:
      throw new Error('Invalid method. Use toNp, toEn, toNpWord, or toEnWord');
  }
}