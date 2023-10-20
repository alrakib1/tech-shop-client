import { createContext, useEffect, useState } from "react";
import app from "../services/firebase.config";
import { getAuth, createUserWithEmailAndPassword, onAuthStateChanged, updateProfile, signInWithEmailAndPassword, signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export const AuthContext = createContext(null);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);


    // register user 

    const registerUser = (email,password)=>{
        setLoading(true);
     return   createUserWithEmailAndPassword(auth,email,password);
    }   
    
    // update name and photo
    
    const updateUser = (name,photo)=>{
        updateProfile(auth.currentUser,{
            displayName : name,
            photoURL: photo
        }).then(()=>{
            console.log('profile updated')
        }).catch(error=>{
            console.log(error)
        })
    }
    
// sign In user


const signInUser = (email,password)=>{
    setLoading(true);
  return  signInWithEmailAndPassword(auth,email,password)
}

 // logout user
 const logOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

// sign in user with google

const signInWithGoogle = ()=>{
    setLoading(true);
    return  signInWithPopup(auth,provider);

}













    //  current user 
        useEffect(() => {
            const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
              setUser(currentUser);
              setLoading(false);
            });
            return () => {
              unSubscribe();
            };
      }, []);



    const authInfo = {
        registerUser,
        loading,
        user,
        updateUser,
        signInUser,
        logOutUser,
        signInWithGoogle
    }
    return (
       <AuthContext.Provider value={authInfo}>
        {children}
       </AuthContext.Provider>
    );
};

export default AuthProvider;