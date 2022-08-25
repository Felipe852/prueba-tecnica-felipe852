import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";


function AppRoutes(){

    const [auth, setAuth] = useState(false);
    useEffect(() => {
    const auth2 = getAuth();
    onAuthStateChanged(auth2, (user) => {
      if (user?.uid) {
        // console.log(user);
        // Posibilidad de recuperar la info luego de que se recargue la web
        setAuth(true);
      } else {
        setAuth(false);
      }
    });
  }, [auth]);

    return(
        <BrowserRouter>
            <ContextProvider>
                <Routes>
                    <Route path="/" element={
                        <PublicRouter isAutentication={auth}>
                            <Login />
                        </PublicRouter>} 
                    />
                    <Route path="/register" element={
                        <PublicRouter isAutentication={auth}>
                            <Register />
                        </PublicRouter>} 
                    />
                    <Route path="/home" element={
                        <PrivateRouter isAutentication={auth}>
                            <Home />
                        </PrivateRouter>} 
                    />
                </Routes>
            </ContextProvider> 
        </BrowserRouter>
    )
}

export default AppRoutes;