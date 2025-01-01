import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  //
  const [user, setUser] = useState(null);
  const [loader , setLoader] = useState(true)
 console.log(user);
  // google login
  const googleUserSignIn = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
  };

  // create user using email and pass
  const signUpUserUsingEmailPass = (email, password) => {
    return createUserWithEmailAndPassword(auth , email, password);
  };
  // update user name
  const updateUserName  = (name)=>{
    return updateProfile(auth.currentUser,{displayName:name})
  }
  // login user with email and pass
  const loginUserWithEmailPass = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
// sign out
const  userSignOut =()=>{
  return signOut(auth)
}

  const unsubscribe = onAuthStateChanged(auth , async (currentUser) =>{
          
    if(currentUser){
      setUser(currentUser);
      setLoader(false)
    }else{
        setUser('');
        setLoader(true)
    }
    

// 
    return ()=> unsubscribe()


  })



  //
  const authInfo = {
    name: "ridoy",
    googleUserSignIn,
    signUpUserUsingEmailPass,
    loginUserWithEmailPass,
    updateUserName,
    userSignOut,
    loader,
    user
  };
  //
  return (
    <AuthContext.Provider value={authInfo}>
        {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
