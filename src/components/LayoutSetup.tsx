"use client";
import { calculateRem } from "@/lib/calculateRem";
import { useEffect } from "react";

export const LayoutSetup = () => {
  useEffect(() => {
    calculateRem();
    const handleResize = () => calculateRem();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <></>;
};
