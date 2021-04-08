import { useContext, useState } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import { CountDownContext } from '../../contexts/CountDownContexts';
import styled from '../../styles/components/ChallangesBox.module.css';
import { motion } from "framer-motion";

export default function ChallangesBox(){
    
    const {activeChallenge, challengeFail, challengeComplete} = useContext(ChallengeContexts);
    const {StartCountDown, ResetCountDown} = useContext(CountDownContext);
    const [IsCloseBox, setIsCloseBox] = useState(false); 
    var css;

    
    if(activeChallenge){
        css = styled.challangesBoxContainerAPP;
    }
    else{
        css = styled.challangesBoxContainerDisable;
    }
    
    
    function handleCompleteChallenge(){
        
        challengeComplete()
        ResetCountDown();
    }
    function handleFailChallenge(){
        setIsCloseBox(true);
        challengeFail();
        ResetCountDown();
       
        setTimeout(() => {
            setIsCloseBox(false);
        }, 1001);
    }
    
    
    return(

        <motion.div 
        initial={{x:1000}}
        animate={{
            x:0,
            transition: {
                stiffness: 50,
                delay: 1,
                type: "spring",
              }
        }}
        
        className={styled.challangesBoxContainerPC} 
        >
            
            {activeChallenge ? 
            (
                <div className={styled.challangesBoxActive} >
                    <header>Ganhe {activeChallenge.amount} xp</header>
                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>
                    <footer>
                        <button 
                        type="button"
                        className={styled.challengesFailButton}
                        onClick={handleFailChallenge}
                        >
                            Falhei
                        </button>
                        <button 
                        type="button"
                        className={styled.challengesSuccededButton}
                        onClick={handleCompleteChallenge}
                        >
                            Completei
                        </button>
                    </footer>
                </div>

            ) : 
            
            (
                <div className={styled.challangesBoxNotActive}>
                <strong>Finalize um ciclo para receber novos desafios</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level UP"/>
                    Avance de level completando desafios
                </p>
            </div>
                
            )}
        </motion.div>
    )
}