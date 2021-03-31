import { useContext, useEffect, useState } from 'react';
import { ChallengeContexts } from '../../contexts/ChallengeContexts';
import { UserLoginContexts } from '../../contexts/UserLoginContexts';
import styled from '../../styles/components/Profile.module.css';
import {motion} from 'framer-motion';
import { EditContexts } from '../../contexts/UserEditContexts';

export default function Profile(){

    

    const {level} = useContext(ChallengeContexts)
    const {setIsEdit} = useContext(EditContexts);
    const {nameUser, setNameUser} = useContext(UserLoginContexts);
    const [className, setClassName] = useState("");
    useEffect(() => {
    
    }, [className]);
   
    
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
        className={styled.profileContainer}
        onHoverStart={()=>{
            
            setClassName("EditProfile")
        }}
        onHoverEnd={()=>{
            setClassName("")
        }}
        >
            
            <img 
           
            src="https://github.com/ruanthow.png" 
            alt="Ruan Mendonça"
            />

            <motion.div
            className={styled.EditProfile}
            whileHover={{scale:1.1}}
            whileTap={{scale:1.2}} 
            onClick={()=>{
                setIsEdit(true)
            }}
            >
                {className == "EditProfile" && <img src="icons/edit.svg"/>}
            </motion.div>
            
            <div>
                <strong>{nameUser}</strong>
                <p>
                    <img src="icons/level.svg" alt=""/>
                    Level {level}
                </p>
            </div>
        </motion.div>
    );
}