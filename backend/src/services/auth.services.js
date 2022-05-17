/* eslint-disable no-param-reassign */
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();
require("dotenv").config();
const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

const throwError = (message) => {
  const error = new Error(message);
  error.statusCode = 400;
  error.message = message;
  throw error;
};

class AuthService {
  static async register(data) {
    data.password = bcrypt.hashSync(data.password, 8);
    const user = await prisma.user.create({
      data,
    });
    data.accessToken = await jwt.signAccessToken(user);
    return data;
  }

  static async login(data) {
    const { email, password } = data;
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      throwError("User not found");
    }
    const checkPassword = bcrypt.compareSync(password, user.password);
    if (!checkPassword) {
      throwError("Password is incorrect");
    }
    delete user.password;
    const accessToken = await jwt.signAccessToken(user);
    return { ...user, accessToken };
  }

  static async all() {
    const allUsers = await prisma.user.findMany();
    return allUsers;
  }
}

module.exports = AuthService;
