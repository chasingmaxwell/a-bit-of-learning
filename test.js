const {
  textToBinary,
  textToOctal,
  textToHex,
  binaryToText,
  octalToText,
  hexToText,
} = require("./index");

/**
 * Test binary.
 */
const textToBinaryScenarios = [
  ["a", "00000011"],
  ["b", "00010100"],
  ["z", "00011010"],
  [" ", "00000000"],
  [
    "hello world",
    "0000100000000001000010110000101100000100000000000000111100000100000010010000101100001010",
  ],
  [
    "Hello World!",
    "001001110000000100001011000010110000010000000000001000110000010000001001000010110000101000011101",
  ],
];

for ([input, expected] of textToBinaryScenarios) {
  const output = textToBinary(input);
  console.log(`textToBinary("${input}") => "${output}"`);
  if (output !== expected) {
    throw new Error(
      `Input text of "${input}" did not generate the expected binary output "${expected}". Received "${output}"`
    );
  }
  const reverseOutput = binaryToText(expected);
  console.log(`binaryToText("${expected}") => "${reverseOutput}"`);
  if (reverseOutput !== input) {
    throw new Error(
      `Input binary of "${expected}" did not generate the expected text output "${input}". Received "${reverseOutput}"`
    );
  }
}

/**
 * Test octal.
 */
const textToOctalScenarios = [
  ["a", "003"],
  ["b", "024"],
  ["z", "032"],
  [" ", "000"],
  ["hello world", "010001013013004000017004011013012"],
  ["Hello World!", "047001013013004000043004011013012035"],
];

for ([input, expected] of textToOctalScenarios) {
  const output = textToOctal(input);
  console.log(`textToOctal("${input}") => "${output}"`);
  if (output !== expected) {
    throw new Error(
      `Input text of "${input}" did not generate the expected octal output "${expected}". Received "${output}"`
    );
  }
  const reverseOutput = octalToText(expected);
  console.log(`octalToText("${expected}") => "${reverseOutput}"`);
  if (reverseOutput !== input) {
    throw new Error(
      `Input octal of "${expected}" did not generate the expected text output "${input}". Received "${reverseOutput}"`
    );
  }
}

/**
 * Test hex.
 */
const textToHexScenarios = [
  ["a", "03"],
  ["b", "14"],
  ["z", "1a"],
  [" ", "00"],
  ["hello world", "08010b0b04000f04090b0a"],
  ["Hello World!", "27010b0b04002304090b0a1d"],
];

for ([input, expected] of textToHexScenarios) {
  const output = textToHex(input);
  console.log(`textToHex("${input}") => "${output}"`);
  if (output !== expected) {
    throw new Error(
      `Input text of "${input}" did not generate the expected hex output "${expected}". Received "${output}"`
    );
  }
  const reverseOutput = hexToText(expected);
  console.log(`hexToText("${expected}") => "${reverseOutput}"`);
  if (reverseOutput !== input) {
    throw new Error(
      `Input hex of "${expected}" did not generate the expected text output "${input}". Received "${reverseOutput}"`
    );
  }
}
