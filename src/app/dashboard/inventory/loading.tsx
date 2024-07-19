"use client";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";

export default function Loading() {
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setTimeout(() => setProgress(66), 700);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <Label className="text-3xl">Loading</Label>
      <Progress value={progress} className="w-64" />
    </div>
  );
}
