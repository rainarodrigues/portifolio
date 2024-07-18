import Head from "next/head";
import Link from "next/link";

const NotFound = () => {

    return (
        <>
            <Head>
                 <title> Error 404 </title>
            </Head>
            <main>
                <h1>Opss, não conseguimos encontrar essa página</h1>
                <span>Clique aqui para ser redirecionado à Página Inicial</span>
                <Link href="/">Ir para Página Inicial</Link>
            </main>
        </>
        
    );
};

export default NotFound;



