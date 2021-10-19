import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAppAuth from "../Firebase/initializeAppAuth";

initializeAppAuth()
const useFirebase = () => {
    const [user, setUser] = useState({})
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    const [displayName, setDisplayName] = useState("")
    const [password, setPassword] = useState("")
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();
    const auth = getAuth();
    const [service, setService]= useState([])
    const [blog, setBlog]= useState([])
    const [shop, setShop] = useState([])
    const [message, setMessage] = useState("")
    const [isLoding, setIsLoding] = useState(true)


    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
                setDisplayName(user.displayName)
                setError("")
            }
            setIsLoding(false)
        });
    }, [])
    // service data here 
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/developerfarid/data/main/data.json')
            .then(res => res.json())
        .then(data => setService(data))
    }, [])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/developerfarid/data2/main/data2.json')
            .then(res => res.json())
        .then(data => setBlog(data))
    }, [])
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/developerfarid/data2/main/dataShop.json')
            .then(res => res.json())
        .then(data => setShop(data))
    }, [])
    //   main functin for 3rd party login system
    const googleSign = () => {
        setIsLoding(false)
      return  useingApp(auth, googleProvider)
    }
    const githubSign = () => {
        setIsLoding(false)
      return  useingApp(auth, githubProvider)
    }
    const facebookSign = () => {
        setIsLoding(false)
      return  useingApp(auth, facebookProvider)
    }
    const useingApp = (auth, provider) => {
        setIsLoding(true)
       return signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
              
                setUser(user)
                setError("")
            }).catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)

            }).finally(() => {
                setIsLoding(false)
            })

    }
    // here call all 3rd party login syestem like facebbok , google , github
   


    const handleEmail = (e) => {
        setEmail(e.target.value)
     
      }
    const handlePass = (e) => {
          
        // A password contains at least eight characters, including at least one number and includes both lower and uppercase letters and special characters, for example #, ?, !.

        // It cannot be your old password or contain your username, "password", or "websitename"

        // And here is my validation expression which is for eight characters including one uppercase letter, one lowercase letter, and one number or special character.
        // (?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$"
          setPassword(e.target.value)

    }
      const handleName = (e) => {
          setDisplayName(e.target.value)
      
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoding(true)
            signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
              // Signed in 
                const user = userCredential.user;
                setUser(user)
                setError("")
                setMessage("Congratulations you have Successfully Login")
    
              // ...
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
            }).finally(()=> setIsLoding(false))
        
 
    }
    // username email and password register
    const createUser = (e) => {
        setIsLoding(true)
        e.preventDefault()
        if (!/(?=^.{8,}$)/.test(password) ) {
            setError("Password Must Be 8 Digit")
            return
        }
        if (!/((?=.*\d)|(?=.*\W+))/.test(password)) {
            setError("Need One Special characters")
            return
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            setError("Need One UpperCase Letter")
            return
        }
        if (!/(?=.*[a-z])/.test(password)) {
            setError("Need One LowerCase Letter")
            return
        } else {
            
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            sentEmail()
            updateName()
            setUser(user)
            setMessage("congratulations you have successfully registered")
            setError("")
            console.log(user);
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)
        }).finally(()=>setIsLoding(false))
        }
    }
    const updateName = () => {
        updateProfile(auth.currentUser, {
            displayName: displayName,
        }).then(() => {
            setDisplayName(displayName)
            setError("")
        }).catch((error) => {
            setError(error.errorMessage)
        });
    }
    const sentEmail = () => {
        sendEmailVerification(auth.currentUser)
            .then(() => {

            });
    }
    const sentResetPassByEmail = () => {
        sendPasswordResetEmail(auth, email)
            .then(() => {
            setError("")
        })
        .catch((error) => {
          const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage)

        });
}


    //  email and password login
//     const loginWithEmailAndPass = (email,password) => {
//         signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     const user = userCredential.user;
//       setUser(user)
//       setError("")
//   })
//   .catch((error) => {
//       const errorMessage = error.message;
//       setError(errorMessage)
//   });
//     }
    const logOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
            setError("")
          }).catch((error) => {
            setError(error.errorMessage)
          }).finally(()=> setIsLoding(false))
    }
    return {
        googleSign, facebookSign,handleEmail,handlePass, githubSign,createUser,logOut,sentResetPassByEmail,handleName,handleSubmit, user, error,service, blog, setUser,setError,shop,message, isLoding
    }
};

export default useFirebase;