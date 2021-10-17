import firebaseConfig from "./firebase.Config";
import { initializeApp } from "firebase/app";

const initializeAppAuth = () => {
    return initializeApp(firebaseConfig);
};

export default initializeAppAuth;