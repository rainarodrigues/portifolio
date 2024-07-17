import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <head>
        <title> Sobre Mim | Raina Rodrigues </title>
      </head>
      <main>
        <h1>hello world!</h1>
        <Link href="/contatos">Ir para páginas contatos</Link>
      </main>
    </>
  );
}
