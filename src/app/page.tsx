"use client";
import Container from "@/layout/container";
import Terminal from "@/layout/terminal";
import Cat from "@/components/cat";
import CatAdd from "@/components/CatAdd";
import { useState, useEffect } from "react";
import baseUrl from "@/utils/baseUrl";

interface CatType {
  id: number;
  name: string;
  location: string;
  // Add other fields if necessary
}

const catLocation = [
  { name: "sofa", note: "Drag and drop cats to any location" },
  { name: "sleeping" },
  { name: "pooping" },
  { name: "eating" },
  { name: "playing" },
  { name: "scratching" },
];

export default function Home() {
  const [catsList, setCatsList] = useState<CatType[]>([]);

  useEffect(() => {
    async function getData() {
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

          {catLocation.map((location, index) => (
            <Terminal key={index} label={location.name} note={location.note}>
              <span className="flex flex-wrap gap-3">
                [
                {catsList
                  .filter((cat) => cat.location === location.name)
                  .map((cat, index) => (
                    <Cat name={cat.name} key={index} />
                  ))}
                ]
              </span>
            </Terminal>
          ))}
        </div>
      </Container>
    </>
  );
}
