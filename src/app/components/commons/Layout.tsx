import Link from "next/link"
import { ReactNode } from "react";

interface LayoutPropris {
    children: ReactNode;
}

export const Layout = ({children} : LayoutPropris) => {
    return(
        <>
            <header>
                <Link href="/">
                    <img src="src/app/favicon.svg" alt="Icone da letra H" />
                </Link>
                <nav>
                    <Link href="/">Sobre mim</Link>
                    {/* <Link href="/portifolio">Portifolio</Link> */}
                    <Link href="/conattos">Entre em conato</Link>
                </nav>
            </header>
            {children}

        </>
    );
};