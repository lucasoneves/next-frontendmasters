"use client";

import { useRouter } from 'next/navigation';

export default function Button() {
  const router = useRouter()
  return (
    <button type="button" onClick={() => router.push("/blog")}>
      Blog
    </button>
  );
}
