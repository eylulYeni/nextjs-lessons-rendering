"use client";

import { Inter } from "next/font/google";
import React, { useEffect, useState } from "react";
import Button from "./button";
/* import Buttons from "@/components/button"; */

const inter = Inter({ subsets: ["latin"] });

function HomePage() {
  const [message, setMessage] = useState("initial");

  useEffect(() => {
    setMessage("use effectin use state i manipulesi");
    console.log("useEffect denemesi");
  }, []);

  return (
    <div>
      HomePage <Button />
      {message}
      {/*       <Buttons /> */}
    </div>
  );
}
export default HomePage;
