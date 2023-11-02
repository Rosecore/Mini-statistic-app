import { useContext } from "react"
import React from 'react';
import ContextAuth from "../provider/contextProvider";

const AuthHook = () => {
  return (
    useContext(ContextAuth)
  );
};

export default AuthHook;