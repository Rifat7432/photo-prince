import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  sendPasswordResetEmail,
} from "firebase/auth";
import app from "../firebase/firebase.init";
//this component used to provide all authentication function allover the web sit
//create and export AuthContext
export const AuthContext = createContext({});
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  // create three state
  //setUser use for provide login user info allover the web sit
  //setUser use for provided to show loader conditionally allover the web sit
  //setIsAdded use for provided to load on useEffect data when user edit or delete review or add a new service  allover the web sit
  const [isAdded, setIsAdded] = useState({});
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // create three GoogleProvider
  const GoogleProvider = new GoogleAuthProvider();
  //this useEffect and onAuthStateChanged function use to get login or sign up user info
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  // update function use to set user displayName, photoURL when user sign up by email and password
  const update = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    })
      .then(() => {})
      .catch((error) => {});
  };
  // loginWithGoogle function use to login or sign up by google
  const loginWithGoogle = () => {
    return signInWithPopup(auth, GoogleProvider);
  };
  // loginWithGoogle function use to logout
  const logout = () => {
    return signOut(auth)
      .then(() => {
        localStorage.removeItem("token");
      })
      .catch((error) => {
        // An error happened.
      });
  };
  // loginWithGoogle function use to login by email and password
  const login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // loginWithGoogle function use to sign Up by email and password
  const signUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
const forgetPassword = (email)=>{
  return sendPasswordResetEmail(auth, email)
}

  // set all function and states on this object and provide allover the web sit
  const authData = {
    forgetPassword,
    loginWithGoogle,
    login,
    signUp,
    update,
    user,
    loading,
    setLoading,
    logout,
    setIsAdded,
    isAdded,
  };
  return (
    <div>
      <AuthContext.Provider value={authData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
