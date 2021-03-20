import styled from '../../styles/components/Back-Arrow.module.css';
import {motion} from 'framer-motion';
import Link from '../Link';


interface BackArrowProps{
    href:string;
}

export default function BackArrow({href}:BackArrowProps){
    return(
        <Link href={href} >
            <div className={styled.Container}>
                <motion.img 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }}
                src="icons/back-arrow.svg" alt=""/>
            </div>
        </Link>
    )
}