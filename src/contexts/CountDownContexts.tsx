import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { ChallengeContexts } from "./ChallengeContexts";

interface CountDownData{
    isActive:boolean;
    minutes:number;
    seconds:number;
    HasFinished:boolean;
    StartCountDown: () => void;
    ResetCountDown: () => void;
}

interface CountDownProviderProps{
    
    children:ReactNode;

}

export const CountDownContext = createContext({} as CountDownData)


export  function CountDownContextProvider({children}: CountDownProviderProps){

    const tempo = 0.1 * 60;
    const {startNewChallenge} = useContext(ChallengeContexts)
    
    const [time, setTime] = useState(tempo);
    const [isActive, setIsActive] = useState(false);
    const [HasFinished, setHasFinished] = useState(false);

    let countdownTimeout: NodeJS.Timeout

    const minutes = Math.floor(time/60);
    const seconds = time % 60;


    function StartCountDown(){
        if(!isActive){
            setIsActive(true)
        }
        
    }
    function ResetCountDown(){
        if(isActive || HasFinished){
            clearTimeout(countdownTimeout);
            setIsActive(false);
            setTime(tempo);
            setHasFinished(false);
        }
        
    }

    useEffect(()=>{
        if(isActive && time > 0){
            countdownTimeout = setTimeout(()=>{
                setTime(time - 1);
            },1000)
        }
        else if(isActive && time === 0){
            setIsActive(false);
            setHasFinished(true);
            startNewChallenge();
        }
        
    },[isActive,time])


    return(
        <CountDownContext.Provider 
        value={{
            isActive,
            minutes,
            seconds,
            HasFinished,
            StartCountDown,
            ResetCountDown
            
        }}>
            {children}
        </CountDownContext.Provider>
    )
}