const { getNum, getText } = require("./util");

const textToBinary = (text) => getNum(2, text);
const textToOctal = (text) => getNum(8, text);
const textToHex = (text) => getNum(16, text);
const binaryToText = (num) => getText(2, num);
const octalToText = (num) => getText(8, num);
const hexToText = (num) => getText(16, num);

module.exports = {
  textToBinary,
  textToOctal,
  textToHex,
  binaryToText,
  octalToText,
  hexToText,
};
