import React from "react";
import Image from "next/image";

export function Graphic() {
  return (
    <Image src="/collage.png" alt="" width={400} height={400} className="transform rotate-3" />
  );
}
