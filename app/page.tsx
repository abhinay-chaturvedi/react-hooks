"use client"
import Image from "next/image";
import OuterComponent from "./OuterComponent";
import InnerComponent from "./InnerComponent";
import { useState } from "react";

export default function Home() {
  const [id, setId] = useState<string>("");
  // const id: string = ""
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <button onClick={() => setId("random")}>Change id</button>
        <OuterComponent id={id}/>
      </div>
    </main>
  );
}
