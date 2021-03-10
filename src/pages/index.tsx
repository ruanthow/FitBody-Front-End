import Challenges from '../components/Challanges'
import CountDown from '../components/CountDown'
import ExperienceBar from '../components/ExperienceBar'
import Profile from '../components/Profile'
import styled from '../styles/pages/Home.module.css'
import Head from 'next/head';
import ChallangesBox from '../components/ChallangesBox'
import React, { useContext, useState } from 'react'
import UserLogin from '../components/UserLogin'
import {GetServerSideProps} from 'next'
import { ChallengeProvider } from '../contexts/ChallengeContexts'
import { CountDownContextProvider } from '../contexts/CountDownContexts'
import { UserLoginProvider } from '../contexts/UserLoginContexts'
interface HomeProps{
      level:number 
      currentExperience: number
      completeChallenge: number
     
}

export default function Home(props : HomeProps) {
  
  const [validationLogin, setValidationLogin] = useState(true);


  return (
      <> 

        <UserLoginProvider validationLoginIndex={setValidationLogin} >
        
        {!validationLogin ? <UserLogin/> : 
        <ChallengeProvider 
        level={props.level} 
        currentExperience={props.currentExperience} 
        completeChallenge={props.completeChallenge}
        >
        <div className={styled.container}>
        <Head>
          <title>Inicio | Movit</title>
        </Head>
        
        <ExperienceBar />
        <CountDownContextProvider>
        <section>
          <div>
            <Profile/>
            <Challenges/>
            <CountDown />
          </div>
          <div>
            <ChallangesBox/>
          </div>
        </section>
        </CountDownContextProvider>
      </div>
      </ChallengeProvider>}
        
      </UserLoginProvider> 
      </>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExperience, completeChallenge} = ctx.req.cookies
  
  return{
    props:{
      level: Number(level),
      currentExperience:Number(currentExperience),
      completeChallenge:Number(completeChallenge),
    } 
   
  }
    
  

}
