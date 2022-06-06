import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {auth,setauth} = useContext(AuthContext)
  return (
    <div>
      <input data-cy="login-email" /><br />
      <input data-cy="login-password" /><br />
      <button data-cy="login-submit">Login</button>
    </div>
  );
};

export default Login;
