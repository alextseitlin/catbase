"use client";
import Container from "@/layout/container";
import Terminal from "@/layout/terminal";
import Cat from "@/components/cat";
import Cats from "@/components/cats";
import CatAdd from "@/components/CatAdd";
import { useState, useEffect } from "react";
import baseUrl from "@/utils/baseUrl";
import { emit } from "process";

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

  function onDrop(e, location) {
    e.preventDefault();
    e.stopPropagation();
    console.log("onDrop", "location", location);
  }

  function onDragOver(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function onDragStart(e) {
    e.dataTransfer.effectAllowed = "move";
    console.log("onDragStart");
  }

  return (
    <>
      <Container className="my-10">
        <div className="grid md:grid-cols-2 gap-5">
          <Terminal>
            <CatAdd setCatsList={setCatsList} />
          </Terminal>
          <Cats
            catData={catLocation}
            catsList={catsList}
            onDrop={onDrop}
            onDragOver={onDragOver}
            onDragStart={(e) => onDragStart(e)}
          />
        </div>
      </Container>
    </>
  );
}
