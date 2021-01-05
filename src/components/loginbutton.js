import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import controller from "../controller/controller";



const LoginButton = () => {
  const { getAccessTokenSilently, loginWithPopup, isLoading } = useAuth0();
  return <button onClick={async () => loginWithPopup().then(()=> {
    while(isLoading);
    getAccessTokenSilently().then(token=>controller.init(token));
    
  })}>Log In</button>;
};

export default LoginButton;