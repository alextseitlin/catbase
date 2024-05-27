"use client";

import Image from "next/image";
import Container from "./_components/layout/container";
import Terminal from "@/components/layout/terminal";
import Cats from "./_components/cats";
import Button from "@/ui/bottom";
import { useState } from "react";

export default function Home() {
  const [catsList, setCatsList] = useState([
    { name: "fluffy" },
    { name: "Bubbles" },
  ]);
  return (
    <>
      <Container>
        <Terminal>
          <Button>Add Cat</Button>
        </Terminal>
        <Terminal>[{catsList.map((cat) => cat.name)}]</Terminal>
      </Container>
    </>
  );
}
