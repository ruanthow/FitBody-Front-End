import Link from 'next/link';
import { ReactNode } from 'react';



interface NextLink{
    href:string;
    children: ReactNode;

}


export default function NextLink({href, children, ...props}:NextLink){

    return(
        <Link href={href} passHref >
            <a {...props}>
                {children}
            </a>
        </Link>
    )

}