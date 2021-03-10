import React, { useContext } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import styled from '../../styles/components/ExperienceBar.module.css';


export default function ExperienceBar(){
    const {currentExperience , experienceToNextLevel} = useContext(ChallengeContexts);

    const percentBarProgressive = Math.round(currentExperience * 100) / experienceToNextLevel;
    return(
        <div className={styled.experienceBar}>
            <span>0 exp</span>
            <div>
                <div style={{ width:`${percentBarProgressive}%` ?? 0}}/>{
                    percentBarProgressive > 0 &&
                    <span className={styled.currentExperience} style={{left:`${percentBarProgressive}%`}}> {currentExperience} exp</span>
                }
                
            </div>
            <span >{experienceToNextLevel} exp</span>
        </div>
    );

}