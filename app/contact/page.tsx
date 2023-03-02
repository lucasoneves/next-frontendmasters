"use client";
import React from "react";
import { useRouter } from "next/navigation";

export default function Contact() {
  const router = useRouter();
  return (
    <div>
      <h2>Contact me</h2>
      <button type="button" onClick={() => router.push("/blog")}>
        Blog
      </button>
    </div>
  );
}
