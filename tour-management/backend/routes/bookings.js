import express from "express";
import { verifyAdmin, verifyToken } from "../utils/verifyToken.js";
import {
  createBooking,
  getAllBooking,
  getBooking,
} from "../controllers/bookingController.js";

const router = express.Router();

router.post("/", verifyToken, createBooking);
router.get("/:id", verifyToken, getBooking);
router.get("/", verifyAdmin, getAllBooking);

export default router;
