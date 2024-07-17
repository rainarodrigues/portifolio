import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>hello world!</h1>
      <Link href="/contatos">Ir para páginas contatos</Link>
    </main>
  );
}
