"use client";
import { useState } from "react";
import Button from "@/ui/Bottom";

type Props = {
  name: string;
};

function CatAdd({ name }: Props) {
  const [form, setForm] = useState({
    name: "fds",
  });

  async function handleSubmit(e: React.ChangeEvent<HTMLInputElement>) {
    e.preventDefault();
    console.log("handleSubmit");
  }
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      name: e.value,
    });
  }

  return (
    <>
      <form action="" className="gap-3 flex" onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={handleChange}
          value={form.name}
          className="text-slate-950 px-3"
        />
        <Button type="submit">Add Cat</Button>
      </form>
    </>
  );
}
export default CatAdd;
