import routerService from "express-promise-router";
export const router = routerService();
import { auth } from "firebase-admin";

// attaches the logged in user to all requests, accessible as req.user
const attachUserDocument = async (req, res, next) => {
  delete req.user;
  const authHeaderArr = req.headers.authorization
    ? req.headers.authorization.split(" ")
    : [];
  if (authHeaderArr.length === 2) {
    // const { uid } = await auth().verifyIdToken(authHeaderArr[1]);
    // const userDoc = await db.collection("users").doc(uid).get();
    // req.user = userDoc.data();
    // req.token = authHeaderArr[1]
  }
  next()
};

// router.use(attachUserDocument);
