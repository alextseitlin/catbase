"use client";
import Container from "@/layout/container";
import Terminal from "@/layout/terminal";
import Cat from "@/components/Cat";
import CatAdd from "@/components/CatAdd";
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
      const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
      const baseUrl =
        environment === "local"
          ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
          : process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;

      const res = await fetch(`${baseUrl}/api/Cats`);
      const data = await res.json();
      setCatsList(data.cats);
    }

    getData();
  }, []);

  return (
    <>
      <Container className="my-10">
        <div className="grid md:grid-cols-2 gap-5">
          <Terminal>
            <CatAdd setCatsList={setCatsList} />
          </Terminal>
          <Terminal label="Sofa">
            <span className="flex flex-wrap gap-3">
              [
              {catsList.map((cat, index) => (
                <Cat name={cat.name} key={index} />
              ))}
              ]
            </span>
          </Terminal>
          {/* <Terminal label="Sleeping">
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
          </Terminal> */}
        </div>
        {/* <Terminal>[Cat list]</Terminal> */}
        {/* JSON.stringify: {JSON.stringify(catsList, null, 2)} */}
      </Container>
    </>
  );
}
