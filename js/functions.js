let lineLength = (string, length) => {
  return string.length <= length
};

let palindrome = (string) => {
  let convertedStr = string.replaceAll(' ', '').toLowerCase();
  for (let i = 0; i < convertedStr.length / 2; i++) {
    if (convertedStr[i] != convertedStr[convertedStr.length - 1 - i]) {
      return false
    }
  }
  return true
};

lineLength('слово', 10);
palindrome('лопот');