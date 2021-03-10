import {createContext, useState, ReactNode, useContext, useEffect} from 'react';
import Cookies from 'js-cookie';
import challengeBase from '../../challenge.json';
import { LevelUpModal } from '../components/LevelUpModal';

interface ChallengeProps{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengeData{
    level: number;
    levelUp : () => void;
    currentExperience: number;
    completeChallenge : number;
    startNewChallenge: () => void;
    activeChallenge:ChallengeProps;
    challengeFail:() => void;  
    challengeComplete:() => void;
    handleCloseModal:() => void;
    experienceToNextLevel: number;
   
}

interface ChallengeProviderProps{
    
    children:ReactNode;
    level:number 
    currentExperience: number
    completeChallenge: number

}


export const ChallengeContexts = createContext({} as ChallengeData);

export function ChallengeProvider({children, ...rest}:ChallengeProviderProps){

    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExperience, setCurrenteExperience] = useState(rest.currentExperience ?? 0);
    const [completeChallenge, setCompleteChallenge] = useState(rest.completeChallenge ?? 0);
    const [isLevelUpModal, setIsLevelUpModal] = useState(false);


    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2);


    useEffect(()=>{
        Notification.requestPermission();
    },[])

    useEffect(()=>{
        Cookies.set('level', String(level));
        Cookies.set('completeChallenge', String(completeChallenge));
        Cookies.set('currentExperience', String(currentExperience));

    },[level, completeChallenge, currentExperience])

    

    function levelUp(){
        setLevel(level + 1);
        setIsLevelUpModal(true);
    }

    function handleCloseModal(){
        setIsLevelUpModal(false);
    }

    function startNewChallenge(){

        const randomChallengeIndex = Math.floor(Math.random() * challengeBase.length);
        const startChallenge = challengeBase[randomChallengeIndex];
        
        setActiveChallenge(startChallenge);

        new Audio('/notification.mp3').play()

        if(Notification.permission === "granted"){
            new Notification('Novo desafio',{
                body: `Valendo ${startChallenge.amount}xp!`
            })
        }
        
    }

    function challengeFail(){
        setActiveChallenge(null);      
    }

    function challengeComplete(){
        if(!activeChallenge){
            return;
        }
        new Audio('/complete.mp3').play();
        const { amount } = activeChallenge;

        let newExp = currentExperience + amount;

        if(newExp > experienceToNextLevel)
        {       
            setCurrenteExperience(newExp - experienceToNextLevel);
            levelUp()
        }
        else if(newExp < experienceToNextLevel)
        {
            setCurrenteExperience(newExp);
        }

        setActiveChallenge(null);
        setCompleteChallenge(completeChallenge + 1);
        
    }



    return(
        <ChallengeContexts.Provider 
        value={{
            level, 
            levelUp, 
            currentExperience, 
            completeChallenge, 
            startNewChallenge,
            activeChallenge,
            challengeFail,
            experienceToNextLevel,
            challengeComplete,
            handleCloseModal,
           
        }}
            >
            {children}
           {isLevelUpModal && <LevelUpModal/>}
        </ChallengeContexts.Provider>
    )
}