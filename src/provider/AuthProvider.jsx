/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/firebase.config";

export const AuthContext = useContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [ user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            setLoading(false);
        });

        return()=>{
            unsubscribe();
        }

    },[])

    const authInfo={
        user,
        loading,
        createUser,
        signInUser,
        logOut
    }

    return (
        <AuthContext.provider value={authInfo}>
            {children}
        </AuthContext.provider>
    );
};

export default AuthProvider;