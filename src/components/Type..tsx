"use client";

import { Typewriter } from "react-simple-typewriter";

export default function Typed() {
  return (
    <div className="flex text-4xl font-bold">
      <Typewriter
        words={["Hello", "World!"]}
        typeSpeed={150}
        cursor={true}
        deleteSpeed={100}
        loop={false}
      />
    </div>
  );
}
