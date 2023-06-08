import auth from "../firebase";
import axios from "axios";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
} from "firebase/auth";

export const registerUserAPI = (register) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        register.email,
        register.password
      );
      // Signed in
      const user = userCredential.user;
      const idToken = await auth.currentUser.getIdToken();
      console.log(user);
      resolve({
        uid: user.uid,
        email: user.email,
        idToken,
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const anonymousRegisterUserAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await signInAnonymously(auth);
      // Signed in
      const user = userCredential.user;
      const idToken = await auth.currentUser.getIdToken();
      console.log(user);
      resolve({
        uid: user.uid,
        idToken,
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const logInUserAPI = (login) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        login.email,
        login.password
      );
      const user = userCredential.user;
      const idToken = await auth.currentUser.getIdToken();
      resolve({
        uid: user.uid,
        email: user.email,
        idToken,
      });
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};

export const authWithGoogleAPI = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      const idToken = await auth.currentUser.getIdToken();
      resolve({ uid: user.uid, email: user.email, idToken });
      // IdP data available using getAdditionalUserInfo(result)
      resolve(user);
    } catch (err) {
      console.log(err);
      reject(err);
    }
  });
};
