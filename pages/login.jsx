import React from "react";
import { useState } from "react";
import { useAuth } from "../context/authcontext";

const login = () => {
  const { onLogin } = useAuth();
  return (
    <div>
      <input type="text" />
      <input type="text" />
      <button>login</button>
    </div>
  );
};

export default login;
