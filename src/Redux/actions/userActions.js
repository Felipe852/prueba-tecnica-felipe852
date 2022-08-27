import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { google, facebook } from "../../Firebase/firebaseConfig";
import { userTypes } from "../Types/userTypes";

export const registerWithEmail = (email, password, name, phoneNumber) => {
    return (dispatch) => {
      const auth = getAuth();
      console.log(auth);
      createUserWithEmailAndPassword(auth, email, password, phoneNumber)
        .then(async () => {
          await updateProfile(auth.currentUser, {
            displayName: name,
          });
          dispatch(
            registerSync({
              email,
              password,
              name,
              phoneNumber,
              uid: auth.currentUser.uid,
            })
          );
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
        });
    };
  };
  
  const registerSync = (user) => {
    return {
      type: userTypes.register,
      payload: user,
    };
  };

  export const loginGoogle = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, google)
        .then(({
            user: {
              displayName,
              email,
              photoURL,
              uid
            }
          }) =>
          dispatch(loginProvider(displayName, email, photoURL, uid))
        )
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
        });
    };
  };
  
  export const loginProvider = (displayName, email, photoURL, uid) => {
    return {
      type: userTypes.login,
      payload: {
        displayName,
        email,
        photoURL,
        uid,
      },
    };
  };

  export const LoginWithEmail = (email, password) => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
        .then(({
            user: {
              displayName,
              email,
              uid
            }
          }) =>
          dispatch(
            loginSync({
              displayName,
              email,
              password,
              uid
            })
          )
        )
        .catch(() => console.log("Usuario o contraseña invalida"));
    };
  };

  const loginSync = (user) => ({
    type: userTypes.login,
    payload: user,
  });

  export const loginFacebook = () => {
    return (dispatch) => {
      const auth = getAuth();
      signInWithPopup(auth, facebook)
        .then(({
            user: {
              displayName,
              email,
              photoURL,
              uid
            }
          }) =>
          dispatch(loginProvider(displayName, email, photoURL, uid))
        )
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.customData.email;
          // The AuthCredential type that was used.
          const credential = FacebookAuthProvider.credentialFromError(error);
  
          // ...
        });
    };
  };