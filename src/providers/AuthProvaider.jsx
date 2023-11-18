import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../firebase/firebase.confic";
import axios from "axios";

export const authContext = createContext(null);


const AuthProvaider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);



  const createUser = (email, password) => {
    setLoadding(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const loginUser = (email, password) => {
    setLoadding(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoadding(true);
    return signOut(auth);
  };

  const googleProvider = new GoogleAuthProvider();
  const loginWithGoogle = () => {
    setLoadding(true);
    return signInWithPopup(auth, googleProvider);
  };

  const githubProvider = new GithubAuthProvider();
  const loginWithGithub = () => {
    setLoadding(true);
    return signInWithPopup(auth, githubProvider);
  };


  useEffect(() => {
    const disConnect = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoadding(false);

      const logginUser = user.email || currentUser.email

      if (user) {
        axios
          .post(`https://server-omega-ten-11.vercel.app/jwt`, {email: logginUser}, { withCredentials: true })
          .then((res) => console.log(res))
          .catch((e) => console.log(e));
      }

      return () => {
        disConnect();
      };
    });
  }, [user]);


  const userInfo = {
    user,
    loadding,
    createUser,
    loginUser,
    logOut,
    loginWithGoogle,
    loginWithGithub,
  };

  return (
    <authContext.Provider value={userInfo}>{children}</authContext.Provider>
  );
};

export default AuthProvaider;
