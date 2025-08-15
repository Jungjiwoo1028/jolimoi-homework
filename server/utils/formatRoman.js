export const formatRoman = (num) => {
  // If the num is 0, return empty string
  if (num <= 0) return "";

  // List of numbers and their Roman number
  const list = [
    { number: 100, toRoman: "C" },
    { number: 90, toRoman: "XC" },
    { number: 50, toRoman: "L" },
    { number: 40, toRoman: "XL" },
    { number: 10, toRoman: "X" },
    { number: 9, toRoman: "IX" },
    { number: 5, toRoman: "V" },
    { number: 4, toRoman: "IV" },
    { number: 1, toRoman: "I" },
  ];

  // Loop through the list and format to Roman numeral
  // If the num is bigger or equal, add the Roman numeral
  // and call the function again with the remainder
  for (const { number, toRoman } of list) {
    if (num >= number) {
      return toRoman + formatRoman(num - number);
    }
  }
};
