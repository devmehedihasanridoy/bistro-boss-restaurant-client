import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";
import useAxiosPublic from "../components/hooks/useAxiosPublic";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //
  const axiosPublic = useAxiosPublic();
  //
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // google login
  const googleUserSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // create user using email and pass
  const signUpUserUsingEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // update user name
  const updateUser = (name, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photoURL,
    });
  };
  // login user with email and pass
  const loginUserWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  // sign out
  const userSignOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        setLoading(false);
        setUser(currentUser);
        // 
        const userinfo = currentUser?.email;
        const { data } = await axiosPublic.post("/jwt", {userinfo});
        localStorage.setItem("token", data);
      } else {
        setLoading(false);
        setUser("");
        localStorage.removeItem("token");
      }
    });
    //
    return () => unsubscribe();
  }, []);

  //
  const authInfo = {
    googleUserSignIn,
    signUpUserUsingEmailPass,
    loginUserWithEmailPass,
    updateUser,
    userSignOut,
    loading,
    user,
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
