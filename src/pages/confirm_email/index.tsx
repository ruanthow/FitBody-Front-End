import {useRouter} from 'next/router'
import { useEffect } from 'react';
import styled from '../../styles/pages/Confirm_Email.module.css';



export default function ConfirmEmail({teste}){
  const router = useRouter();


  
  useEffect(() => {
      setTimeout(() => {
         router.push('/'); 
      }, 2000);
  }, []);
  
    return(
        <div className={styled.Container}>
          <div className={styled.Contents}>
            <h3>{teste.error}</h3>  
          </div>
        </div>
       
    )
    
}

export async function getServerSideProps(context) {

  
  var token = context.query.token;

     
          
        const body = {

            "access_account": token

        }
       
          const apiVerification = await fetch("http://fitbodyapi.herokuapp.com/verify/", {method:"POST", headers:{'Content-Type' : 'aplication/json'}, body:JSON.stringify(body) } )
          const teste = await apiVerification.json()

        
        
    return { 
     props:{
      teste
    }
  }
}