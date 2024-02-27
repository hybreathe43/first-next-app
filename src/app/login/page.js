"use client";

import { useRouter } from "next/navigation";

export default function Login() {
  const route = useRouter();
  return (
    <>
      <h1>Sahil Login in !</h1>
      <button onClick={() => route.push("/about")}>Click to About</button>
    </>
  );
}
