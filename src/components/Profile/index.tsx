import { useContext } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import { UserLoginContexts } from '../../contexts/UserLoginContexts';
import styled from '../../styles/components/Profile.module.css';
import {motion} from 'framer-motion';

export default function Profile(){

    

    var nome = "Ruan Mendonça";
    const {level} = useContext(ChallengeContexts)
    const {nameUser} = useContext(UserLoginContexts);
    
    if(nome.length > 20){
        nome = nome.substring(0,20)

    }

    
    return(
        <motion.div
        initial={{x:-1000}}
        animate={{
            x:0,
            transition: {
                stiffness: 50,
                delay: 1.5,
                type: "spring",
              }
        }}
        className={styled.profileContainer}>
            <img src="https://github.com/ruanthow.png" alt="Ruan Mendonça"/>
            <div>
                <strong>{nome}</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </motion.div>
    );
}