import Image from "next/image";
import Container from "./_components/layout/container";
import Cats from "./_components/cats";

export default function Home() {
  return (
    <>
      <Container>
        <main className="">Home</main>
        <Cats />
      </Container>
    </>
  );
}
