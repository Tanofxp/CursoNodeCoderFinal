import { Router } from "express";
import passport from "passport";
import viewsController from "../controllers/views.controller.js";

const router = Router();

router.get("/home", viewsController.home);

router.get("/", viewsController.login);

router.get("/realtimeproducts", viewsController.realTimeProducts);

router.get("/chat", viewsController.chat);

router.get(
  "/products",
  passport.authenticate("jwt", { session: false }),
  viewsController.products
);
router.get(
  "/profile",
  passport.authenticate("jwt", { session: false }),
  viewsController.profile
);

router.get("/cart/:cid", viewsController.cart);

router.get("/login", viewsController.login);

router.get("/register", viewsController.register);

router.get(
  "/resetPassword",
  passport.authenticate("jwtRequestPassword", {
    session: false,
    failureRedirect: "requestResetPassword",
  }),
  viewsController.resetPassword
);

router.get("/requestResetPassword", viewsController.requestResetPassword);

export default router;
