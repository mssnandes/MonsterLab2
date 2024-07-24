import { findUserByEmail } from "../models/User.js";

export const authPrivate = async (req, res, next) => {
  if (!req.query.email && !req.body.email) {
    res.status(403).json({ notAllowed: true });
    return;
  }

  let email = "";
  if (req.query.email) {
    token = req.query.token;
  }
  if (req.body.email) {
    token = req.body.token;
  }

  if (email == "") {
    res.status(403).json({ notAllowed: true });
    return;
  }

  if (!findUserByEmail(email)) {
    res.json({ notAllowed: true });
    return;
  }

  next();
};