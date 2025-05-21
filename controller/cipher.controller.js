import { encode, decode } from "./../services/cipher.js";

export const encodeController = (req, res) => {
  try {
    const result = encode(req.body.text || "");
    return res.json({ encoded: result });
  } catch (err) {
    return res.status(400).json({ code: err.code || "UNKNOWN_ERROR" });
  }
};

export const decodeController = (req, res) => {
  try {
    const result = decode(req.body.encoded || "");
    return res.json({ text: result });
  } catch (err) {
    return res.status(400).json({ code: err.code || "UNKNOWN_ERROR" });
  }
};
