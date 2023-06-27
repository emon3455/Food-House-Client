/* eslint-disable no-unused-vars */
import { createContext, useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";
import axios from "axios";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const goggleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const signInWithGoggle = () => {
        setLoading(true);
        return signInWithPopup(auth, goggleProvider)
    }

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            
            if (currentUser) {
                axios.post("https://food-house-server-rose.vercel.app/jwt", { email: currentUser.email })
                    .then(data => {
                        localStorage.setItem("access-token", data.data.token); 
                    })
            }
            else {
                localStorage.removeItem('access-token');
            }

            setLoading(false);
        });

        return () => {
            unsubscribe();
        }

    }, [])
    

    const authInfo = {
        user,
        loading,
        createUser,
        signInWithGoggle,
        signInUser,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;