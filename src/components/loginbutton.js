import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import controller from "../controller/controller";



const LoginButton = () => {
  const { loginWithPopup, isLoading, getIdTokenClaims } = useAuth0();
  return <button onClick={async () => loginWithPopup().then(()=> {
    while(isLoading);
    getIdTokenClaims().then(token=>controller.init(token));
    
  })}>Log In</button>;
};

export default LoginButton;