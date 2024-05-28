"use client";
import { useRouter } from "next/navigation";
import baseUrl from "@/utils/baseUrl";

import { useState } from "react";
import Button from "@/ui/Button";

type Props = {
  setCatsList: Function;
};

function CatAdd({ setCatsList }: Props) {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    location: "sofa",
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const res = await fetch(`${baseUrl}/api/Cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    setCatsList((preState: { name: string }[]) => [...preState, form]);
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const value = e.target.value;
    const name = e.target.name;

    setForm((preState) => ({
      ...preState,
      [name]: value,
    }));
  }

  return (
    <>
      <form action="" className="gap-3 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={form.name}
          className="text-slate-950 px-3 w-full"
        />
        <Button type="submit">Add Cat</Button>
      </form>
    </>
  );
}
export default CatAdd;
