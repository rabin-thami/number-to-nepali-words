declare module "nepali-num-to-words" {
  type ConversionMethod = "toNp" | "toEn" | "toNpWord" | "toEnWord";
  type CurrencyType = "currency" | undefined;

  /**
   * Converts numbers between English and Nepali formats
   * @param value - The number to convert (string or number)
   * @param method - The conversion method ('toNp' | 'toEn' | 'toNpWord' | 'toEnWord')
   * @param currency - Optional. Use 'currency' to format as currency with रुपैया and पैसा
   * @returns The converted number/word string
   * @example
   * convert('1245.98', 'toNpWord', 'currency') // एक हजार दुई सय पैंतालिस रुपैया अन्ठान्नब्बे पैसा
   * convert('1245', 'toNpWord', 'currency') // एक हजार दुई सय पैंतालिस रुपैया
   */
  function convert(
    value: string | number,
    method: ConversionMethod,
    currency?: CurrencyType
  ): string;

  export default convert;
}
