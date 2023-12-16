import { createContext, useEffect, useState } from "react";
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
import useAxiosLocal from "../hooks/useAxiosLocal";

export const authContext = createContext(null);

const AuthProvaider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loadding, setLoadding] = useState(true);
  const axiosSecure = useAxiosLocal();

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

      const logginUser = user?.email || currentUser?.email;

      if (user) {
        axiosSecure.post('users', {
          name: user?.displayName || currentUser?.displayName ,
          email: user?.email || currentUser.email || logginUser,
          role: "user",
          image: user?.photoURL || currentUser.photoURL,
        })
        axiosSecure.post(
          `/jwt`,
          { email: logginUser },
          { withCredentials: true }
        );
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
