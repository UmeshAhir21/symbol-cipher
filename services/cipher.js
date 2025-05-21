const symbolMap = {
  A: "α",
  B: "β",
  C: "¢",
  D: "δ",
  E: "ε",
  F: "ϝ",
  G: "ɡ",
  H: "♄",
  I: "ι",
  J: "ʆ",
  K: "κ",
  L: "λ",
  M: "ɱ",
  N: "η",
  O: "☺",
  P: "ρ",
  Q: "φ",
  R: "я",
  S: "ѕ",
  T: "τ",
  U: "υ",
  V: "ν",
  W: "ω",
  X: "х",
  Y: "γ",
  Z: "ζ",
};

const upperMap = Object.fromEntries(
  Object.entries(symbolMap).map(([k, v]) => [
    k.toLowerCase(),
    v.toLowerCase() || v,
  ]),
);

const fullMap = { ...symbolMap, ...upperMap };
const reverseMap = Object.fromEntries(
  Object.entries(fullMap).map(([k, v]) => [v, k]),
);

function hasControlChar(str) {
  return /[\x00-\x1F\x7F]/.test(str.replace(/\n/g, ""));
}

export const encode = (text) => {
  if ([...text].length > 280) throw { code: "INPUT_TOO_LONG" };
  if (hasControlChar(text)) throw { code: "UNSUPPORTED_CONTROL_CHAR" };

  return [...text].map((char) => fullMap[char] || char).join("");
};

export const decode = (encoded) => {
  if ([...encoded].length > 280) throw { code: "INPUT_TOO_LONG" };
  if (hasControlChar(encoded)) throw { code: "UNSUPPORTED_CONTROL_CHAR" };

  return [...encoded]
    .map((char) => {
      if (char in reverseMap) return reverseMap[char];
      if (/[A-Za-z]/.test(char)) return char;
      return char; // emoji, punctuation
    })
    .join("");
};
