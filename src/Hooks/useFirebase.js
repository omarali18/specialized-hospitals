import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/firebaseInit";

initializeAuthentication()
const googleProvider = new GoogleAuthProvider()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const [error, setError] = useState("")

    const auth = getAuth();

    // google log in function
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user);
            })
            .catch((error) => {
                setError(error.message);
            });
    }

    // registation function
    // const handleRegistation = (email, password) => {
    //     createUserWithEmailAndPassword(auth, email, password)
    //         .then((result) => {
    //             setUser(result.user);
    //             setError("")
    //         })
    //         .catch((error) => {
    //             setError(error.message);
    //         });
    // }
    const handleUserRegister = (email, password) => {
        console.log(email, password);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                console.log(result.user, "ppppppppppppppppppp");
            })
            .catch((error) => {
                const errorMessage = error.message;
            });
    }

    // sign in funcrion
    const handleLoginByEmailPass = (email, password) => {

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user)
            })
            .catch((error) => {
                setError(error.message);
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
        user,
        error,
        // handleRegistation,
        handleUserRegister,
        handleGoogleSignIn,
        handleLoginByEmailPass,
        handleLogOut

    }
}

export default useFirebase;