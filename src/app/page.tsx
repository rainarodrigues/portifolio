import { Main } from "next/document";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title> Sobre Mim | Raina Rodrigues </title>
      </Head>
      <main>
        <h1>hello world!</h1>
        <Link href="/contatos">Ir para páginas contatos</Link>
      </main>
    </>
  );
}
