import Link from "next/link";

const NotFound = () => {

    return (
        <div>
            <h1>404</h1>
            <div>
                <p>Opss, não conseguimos encontrar essa página</p>
                <span>Clique aqui para ser redirecionado à Página Inicial</span>
            </div>
            <Link href="/">Ir para Página Inicial</Link>
        </div>
    );
}

export default NotFound;