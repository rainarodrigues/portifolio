import Head from "next/head";
import Link from "next/link";

const Contatos = () => {

    return(
        <>    
        <head>
        <title> Meus Contatos </title>
        </head>
        <main>
            <div>
                <h1>Contatos</h1>
                <Link href="/">Ir para página inicial</Link>
            </div>
        </main>
        </>
    );
}


export default Contatos;
