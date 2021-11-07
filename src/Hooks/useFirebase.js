import initializeFirebase from "../Pages/LoginPage/Firebase/firebase.init";
import {
    getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword,
    signInWithEmailAndPassword, signOut, onAuthStateChanged, updateProfile
} from "firebase/auth";
import { useState, useEffect } from "react";

//Initialize firebaseConfig;
initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setAuthError('');
                const newUser = { email, displayName: name }
                setUser(newUser);
                //Send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });
                history.replace('/');
            })
            .catch((error) => {
                setAuthError(error.message);
                // ..
            })
            .finally(() => setIsLoading(false));
    }

    //Sign in using Email-Password
    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                // ...
            })
            .catch((error) => {
                setAuthError(error.message)
            })
            .finally(() => setIsLoading(false));
    }
    // Sign in using Google
    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            }).catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));
    }

    //observer user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [])

    const logout = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }
    return {
        user,
        registerUser,
        loginUser,
        logout,
        signInWithGoogle,
        isLoading,
        authError,
    }
}

export default useFirebase;