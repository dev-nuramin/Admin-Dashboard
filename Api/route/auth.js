import express from "express";
import { login, logout, registar } from "../controllers/authController.js";


const router = express.Router();

// create route

router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/registar").post(registar);


// export default router
export default router;
