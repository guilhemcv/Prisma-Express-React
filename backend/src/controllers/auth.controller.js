/* eslint-disable no-restricted-syntax */

const auth = require("../services/auth.services");

class authController {
  static register = async (req, res, next) => {
    try {
      const user = await auth.register(req.body);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      next(console.log(error));
    }
  };

  static login = async (req, res, next) => {
    try {
      const data = await auth.login(req.body);
      res.status(200).json({
        status: true,
        message: "Account login successful",
        data,
      });
    } catch (error) {
      next(console.log(error));
    }
  };

  static all = async (req, res, next) => {
    try {
      const users = await auth.all();
      res.status(200).json({
        status: true,
        message: "All users",
        data: users,
      });
    } catch (error) {
      next(console.log(error));
    }
  };
}
module.exports = authController;
