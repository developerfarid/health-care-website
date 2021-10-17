import initializeAppAuth from "../Firebase/initializeAppAuth";
import { GoogleAuthProvider,getAuth,signInWithPopup } from "firebase/auth";
import { useState } from "react";

initializeAppAuth()
const useFirebase = () => {
    const [user , setUser]= useState({})
    const [email , setEmail]= useState("")
    const [error , setError]= useState("")
    const [password , setPassword]= useState("")
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();
    const googleSign = () => {
        useingApp(useingApp,googleProvider)
    }

    const useingApp = (auth,provider) => {
        signInWithPopup(auth, provider)
  .then((result) => {
      const user = result.user;
      setUser(user)
      setError("")
    // ...
  }).catch((error) => {
      const errorMessage = error.message;
      setError(errorMessage)

  });

    }

    return {
        googleSign
    }
};

export default useFirebase;