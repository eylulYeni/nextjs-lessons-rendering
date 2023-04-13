"use client";

import React, { useEffect } from "react";

function Input({ children }) {
  useEffect(() => {
    console.log("input");
  }, []);

  return <div>Input {children} </div>;
}

export default Input;
