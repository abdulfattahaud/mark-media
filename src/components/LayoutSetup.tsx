"use client";
import { calculateRem } from "@/lib/calculateRem";
import { useEffect } from "react";

export default function LayoutSetup() {
  useEffect(() => {
    calculateRem();
    const handleResize = () => calculateRem();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <></>;
}
