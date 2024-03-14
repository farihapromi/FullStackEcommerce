import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController,
  updateProfileController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

//router object
const router = express.Router();

//routing
//register""POST"
router.post("/register", registerController);
//login
router.post("/login", loginController);
//test
router.get("/test", requireSignIn, isAdmin, testController);
//protected route for user auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//protected Admin route auth
//route a isAdmin chilo
router.get("/admin-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});
//fogot password
router.post("/forgot-password", forgotPasswordController);
//update profile
router.put("/profile", requireSignIn, updateProfileController);
//orders
router.get("/orders", requireSignIn, getOrdersController);
//all orders for admin,isAdmin o hobe route a
router.get(
  "/all-orders",
  requireSignIn,
  // isAdmin,
  getAllOrdersController
);
//order status update
router.purge(
  "/order-status/:orderId",
  requireSignIn,
  // isAdmin,
  orderStatusController
);

export default router;
