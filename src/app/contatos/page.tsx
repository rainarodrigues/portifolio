import Head from "next/head";
import Link from "next/link";

const Contatos = () => {

    return(
    <>    
        <Head>
            <title>Meus Contatos</title>
        </Head>
        <main>
            <h1>Contatos</h1>
            <Link href="/">Ir para página inicial</Link>
        </main>
    </>
    );
};


export default Contatos;
