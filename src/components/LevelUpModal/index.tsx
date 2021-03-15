import { useContext } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import styled from '../../styles/components/LevelUpModal.module.css';


export function LevelUpModal(){
    const {level , handleCloseModal} = useContext(ChallengeContexts);
    return(
        <div className={styled.overlay}>
            <div className={styled.levelupContainer}>
                <header>{level}</header>
                <strong>Parabéns</strong>
                <p>Você alcançou um novo nível</p>
                

                <button type="button" onClick={handleCloseModal}>
                    <img src="icons/close.svg" alt="close"/>
                </button>
            </div>
        </div>
        
    )
}