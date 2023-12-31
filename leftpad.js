// lefpad.js
var cache = [
  "",
  " ",
  "  ",
  "   ",
  "    ",
  "     ",
  "      ",
  "       ",
  "        ",
  "         ",
];

const leftpad = (str, length, paddingChar = " ") => {
  length = Math.max(0, length - str.length);
  if (length <= 0) {
    return str;
  }
  if (!paddingChar && paddingChar !== 0) {
    paddingChar = " ";
  }
  paddingChar = paddingChar + "";

  if (paddingChar === " " && length < 10) {
    return cache[length] + str;
  }

  var pad = "";
  while (true) {
    if (length & 1) {
      pad += paddingChar;
    }
    length >>= 1;

    if (length) {
      paddingChar += paddingChar;
    } else break;
  }
  return paddingChar + str;
}

export { leftpad };
