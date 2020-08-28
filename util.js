const supported = ` etaoinshrdlcumwfgypbvkjxqz,.!'TOISWCBPHFMDERLNAGUKVYJQXZ`.split(
  ""
);

const getIndex = (c) => {
  const res = supported.indexOf(c);
  if (res === -1) {
    throw new Error(`Unsupported character: ${c}`);
  }
  return res;
};

const getPad = (base) => Math.ceil(Math.log(255) / Math.log(base));

const getNum = (base, text) => {
  const res = [];
  for (character of text) {
    const number = getIndex(character);
    res.push(number.toString(base).padStart(getPad(base), "0"));
  }
  return res.join("");
};

const getText = (base, num) => {
  let res = "";
  let cursor = 0;
  while (cursor < num.length) {
    const newCursor = cursor + getPad(base);
    const charString = num.slice(cursor, newCursor);
    const index = parseInt(charString, base);
    const char = supported[index];
    if (typeof char === "undefined") {
      throw new Error(`Byte does not correspond to character: ${charString}`);
    }
    res = res + char;
    cursor = newCursor;
  }
  return res;
};

module.exports = {
  supported,
  getIndex,
  getPad,
  getNum,
  getText,
};
