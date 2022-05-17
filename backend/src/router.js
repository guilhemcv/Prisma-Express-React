const express = require("express");
/* const { ItemController } = require("./controllers"); */
const user = require("./controllers/auth.controller");
const auth = require("./middlewares/auth");

const router = express.Router();

/* router.get("/items", ItemController.browse);
router.get("/items/:id", ItemController.read);
router.put("/items/:id", ItemController.edit);
router.post("/items", ItemController.add);
router.delete("/items/:id", ItemController.delete);
 */
router.post("/auth", user.register);
// login
router.post("/auth/login", user.login);
// all users
router.get("/all", auth, user.all);

module.exports = router;
