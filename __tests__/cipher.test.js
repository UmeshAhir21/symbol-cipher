import { decode, encode } from "../services/cipher.js";

describe("Symbol Cipher Tool", () => {
  test("should encode and decode alphabet with emoji correctly", () => {
    const input = "Hello World! 🙂";
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(decoded).toBe(input);
  });

  test("should encode and decode basic string", () => {
    const input = "abcXYZ";
    const encoded = encode(input);
    const decoded = decode(encoded);
    expect(decoded).toBe(input);
  });

  test("should throw error for input > 280 characters", () => {
    const longInput = "a".repeat(281);
    expect(() => encode(longInput)).toThrow(
      expect.objectContaining({ code: "INPUT_TOO_LONG" }),
    );
  });

  test("should throw error for control characters", () => {
    const badInput = "Hello\u0001World";
    expect(() => encode(badInput)).toThrow(
      expect.objectContaining({ code: "UNSUPPORTED_CONTROL_CHAR" }),
    );
  });
});
