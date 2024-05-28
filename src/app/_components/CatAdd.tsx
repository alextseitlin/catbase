"use client";
import { useRouter } from "next/navigation";

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
    const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;
    const baseUrl =
      environment === "local"
        ? process.env.NEXT_PUBLIC_BASE_URL_LOCAL
        : process.env.NEXT_PUBLIC_BASE_URL_PRODUCTION;

    const res = await fetch(`${baseUrl}/api/Cats`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: form.name }),
    });

    setCatsList((preState: { name: string }[]) => [
      ...preState,
      { name: form.name },
    ]);

    // if (!res.ok) {
    //   throw new Error("Failed to create ticket");
    // }
    // router.refresh();
    // router.push("/");
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
