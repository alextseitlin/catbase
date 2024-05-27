"use client";

import Image from "next/image";
import Container from "@/layout/container";
import Terminal from "@/components/layout/terminal";
import Cats from "./_components/cats";
import Cat from "./_components/cat";
import Button from "@/ui/bottom";
import { useState, useEffect } from "react";

interface CatType {
  id: number;
  name: string;
  // Add other fields if necessary
}

export default function Home() {
  const [catsList, setCatsList] = useState<CatType[]>([]);

  useEffect(() => {
    async function getData() {
      const res = await fetch("https://whereiscat.netlify.app/api/Cats");
      const data = await res.json();
      setCatsList(data.cats);
    }

    getData();
  }, []);

  return (
    <>
      <Container className="my-10">
        <div className="grid grid-cols-2 gap-5">
          <Terminal>
            <Button>Add Cat</Button>
          </Terminal>
          <Terminal label="Sofa">
            [
            {catsList.map((cat, index) => (
              <Cat name={cat.name} key={index} />
            ))}
            ]
          </Terminal>
          <Terminal label="Sleeping">
            [
            {catsList.map((cat, index) => (
              <Cat name={cat.name} key={index} />
            ))}
            ]
          </Terminal>
          <Terminal label="Pooping">
            [
            {catsList.map((cat, index) => (
              <Cat name={cat.name} key={index} />
            ))}
            ]
          </Terminal>
          <Terminal label="Eating">
            [
            {catsList.map((cat, index) => (
              <Cat name={cat.name} key={index} />
            ))}
            ]
          </Terminal>
        </div>
        {/* <Terminal>[Cat list]</Terminal> */}
        {/* JSON.stringify: {JSON.stringify(catsList, null, 2)} */}
      </Container>
    </>
  );
}
