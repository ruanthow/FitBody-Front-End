import { useContext } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import styled from '../../styles/components/Challenges.module.css';
import {motion} from 'framer-motion';



export default function Challenges(){

    const {completeChallenge} = useContext(ChallengeContexts);
    return(
        <motion.div 
        initial={{x:-1000}}
        animate={{
            x:0,
            transition: {
                stiffness: 50,
                delay: 1,
                type: "spring",
              }
        }}
        className={styled.challengesContainer}>
            <span>Desafios Completos</span>
            <span>{completeChallenge}</span>
        </motion.div>
    )
}