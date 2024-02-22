import React, { createContext } from 'react'
import { getAuth,signOut, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';


export const AuthContext = createContext()
const provider = new FacebookAuthProvider();
// provider.addScope('pages_messaging');
// provider.addScope('pages_show_list')
provider.addScope('business_management')
// provider.addScope('user_birthday')
// provider.addScope('manage_pages')

export const AuthContextProvider = ({children}) => {
   const [authToken, setAuthToken] = React.useState(null)
    // const navigate = useNavigate()
    
   function signOutFacebook(){
    signOut(auth).then(() => {
      setAuthToken(null)
    }).catch((error) => {
      // An error happened.
      console.log(`Signout error: ${error}`)
    });
   }

   function signWithFacebook(){
    signInWithPopup(auth, provider)
    .then((result) => {
       // The signed-in user info.
       const user = result.user;
    
       // This gives you a Facebook Access Token. You can use it to access the Facebook API.
       const credential = FacebookAuthProvider.credentialFromResult(result);
       const accessToken = credential.accessToken;
       console.log(`TOKEN: ${accessToken}`)
       // IdP data available using getAdditionalUserInfo(result)
       // ...
       setAuthToken(accessToken)
    })
    .catch((error) => {
       // Handle Errors here.
       console.log(`FB Login failed: ${error}`)
       const errorCode = error.code;
       const errorMessage = error.message;
       // The email of the user's account used.
       const email = error.customData.email;
       // The AuthCredential type that was used.
       const credential = FacebookAuthProvider.credentialFromError(error);
       // ...
    });
 
 }
 

   const value = {authToken,setAuthToken,signWithFacebook,signOutFacebook}

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
