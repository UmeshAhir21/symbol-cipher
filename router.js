import {
  encodeController,
  decodeController,
} from "./controller/cipher.controller.js";
import express from "express";
const router = express.Router();

router.post("/encode", encodeController);
router.post("/decode", decodeController);

export default router;
