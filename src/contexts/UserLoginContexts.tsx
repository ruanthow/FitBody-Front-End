import { createContext, ReactNode, useEffect, useState } from "react";
import md5 from 'md5';
import Cookies from "js-cookie";
import { GetServerSideProps } from "next";
import { stringify } from "node:querystring";


interface UserLoginData{
  user:string;
  setUser:any;
  password:string;
  setPassword:any;
  Logando:Function;
  DBLOGIN:Function;
  setIsLoading:any;
  isLoading:boolean;
  nameUser:string;
  error:boolean;
  

  

}
interface UserLoginProviderProps{
    children : ReactNode;
    validationLoginIndex:any;
   
    
}

export const UserLoginContexts = createContext({} as UserLoginData);

export  function UserLoginProvider({children, ...rest}: UserLoginProviderProps){

    
    const [user, setUser] = useState();
    const [password, setPassword] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [nameUser, setNameUser] = useState();
    const [error, setError] = useState(false);
    
    

    if(Cookies.get('Token') != undefined){
        rest.validationLoginIndex(true);
    }
    

    async function DBLOGIN() { 
         
        const body = {
        "email":user,
        "pwd":password,      
        }
               
        const USER = await fetch("https://fitbodyapi.herokuapp.com/auth",
        {method:"POST",headers:{'Content-Type': 'application/json'},  body:JSON.stringify(body)})
        Logando(USER.status);
        
        const data = await USER.json();
        Cookies.set('Token', data.token);
        
    }   
      


    useEffect(() => {
    const data = fetch("https://fitbodyapi.herokuapp.com/users",{method:"GET",headers:{'Content-Type': 'application/json','authorization':`Bearer ${Cookies.get("Token")}`}})
     .then((data)=>{
         
       if(data.status == 200){
        rest.validationLoginIndex(true);
       }
       else if(data.status != 200){
        
        rest.validationLoginIndex(false);
       }
    }).catch((e)=>{
       
    })      
    }, []);
    
    function Logando(status:number) {
        
        if(status == 200 ){
         rest.validationLoginIndex(true);
         setIsLoading(false);
         setError(false);

        }
        else if(status != 200){
         setIsLoading(false);
         setError(true);
        }
    }
    
   
          
    
       
    
    return(
        <UserLoginContexts.Provider 
        value={{
            user,
            setUser,
            password,
            setPassword,
            Logando,
            DBLOGIN,
            setIsLoading,
            isLoading,
            nameUser,
            error
         
            
            }}
            >

              {children}

        </UserLoginContexts.Provider>       
    )
}
