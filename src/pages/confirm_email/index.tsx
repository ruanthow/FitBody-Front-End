import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styled from '../../styles/pages/Confirm_Email.module.css';



export default function ConfirmEmail(){
  const router = useRouter();
  const a = true;
  useEffect(() => {
      setTimeout(() => {
         router.push('/'); 
      }, 1000);
       
    
  }, []);
  
    return(
        <div className={styled.Container}>
          <div className={styled.Contents}>
            <h3>Sua conta foi verificada com Sucesso</h3>
              
          </div>
        </div>
       
    )
    
}

export async function getServerSideProps(context) {

  
  var token = context.query.token;

      async function Teste() {
          
        const body = {

            "acess_account": token

        }
        
          const apiVerification = await fetch("https://fitbodyapi.herokuapp.com/verify", {method:"POST", headers:{'Content-Type' : 'aplication/json'}, body:JSON.stringify((body))})
      }

      Teste();
      
    return { 
     props:{
      
    }
  }
}