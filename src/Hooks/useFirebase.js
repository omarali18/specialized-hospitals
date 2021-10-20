import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")
    console.log(error);

    const auth = getAuth();

    // google log in function
    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
        // .then(result => {
        //     setUser(result.user);
        // })
        // .catch((error) => {
        //     setError(error.message);
        // });
    }

    // registation function
    const handleUserRegister = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setError('')
            })
            .catch((error) => {
                // setError(error.message)
                setError("Password should be at least 6 characters")
            });
    }

    // sign in funcrion
    const handleLoginByEmailPass = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
                setError('')
            })
            .catch((error) => {
                setError('Please enter a valid email & password.')
            })
    }

    // log out function
    const handleLogOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user)
            }
        })
    }, [])

    return {
        setError,
        user,
        error,
        handleUserRegister,
        handleGoogleSignIn,
        handleLoginByEmailPass,
        handleLogOut

    }
}

export default useFirebase;