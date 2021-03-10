import styled from '../../styles/components/CountDown.module.css';
import {useState,useEffect, useContext} from 'react';
import { CountDownContext } from '../../contexts/CountDownContexts';
import {motion} from 'framer-motion';

export default function CountDown() {
    const {minutes, seconds, HasFinished, isActive, StartCountDown, ResetCountDown} = useContext(CountDownContext)
    
    const minuteLeftRight = String(minutes).padStart(2, '0').split('');
    const secondesLeftRight = String(seconds).padStart(2, '0').split('');
    const [minuteLeft, minuteRight] = minuteLeftRight;
    const [secondeLeft, secondeRight] = secondesLeftRight;
    
    
   

    return (
        <motion.div
        initial={{y:-1000}}
        animate={{
            y:0,
            transition: {
                stiffness: 50,
                delay: 1,
                type: "spring",
              }
        }}
        >
            <div className={styled.countdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secondeLeft}</span>
                    <span>{secondeRight}</span>
                </div>
            </div>
            {HasFinished ? 
            ( 
                <button 
                disabled
                className={styled.countdownButton}>
                   Ciclo finalizado
                </button>
            ):
            <>
                {!isActive ? 
            (   
                <button 
                type="button" 
                onClick={StartCountDown} 
                className={styled.countdownButton}>
                    Iniciar ciclo
                </button>
              )
            : ( 
                <button 
                type="button" 
                onClick={ResetCountDown} 
                className={styled.countdownButtonIsActive}
                >
                Abandonar ciclo
                </button>
                )
        }
            </>
            }
            
            
        </motion.div>
    )
}
