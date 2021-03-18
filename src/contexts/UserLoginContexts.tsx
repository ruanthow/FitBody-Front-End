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
  

    async function DBLOGIN() { 
         
        const body = {
        "email":user,
        "pwd":password,
        
    }   
       
        
        const USER = await fetch("http://fitbodyapi.herokuapp.com/auth", {method:"POST",headers:{'Content-Type': 'application/json'},  body:JSON.stringify(body)})
        const data = await USER.json();
        Logando(USER.status);
        Cookies.set('Token', data);

    }

  
    
    useEffect(() => {
    const data = fetch("http://fitbodyapi.herokuapp.com/users",{method:"GET",headers:{'Content-Type': 'application/json','authorization':`Bearer ${Cookies.get("Token")}`}})
     .then((data)=>{
       if(data.status == 200){
        rest.validationLoginIndex(true);
        console.log(data.json());
        
       }
    }).catch((e)=>{

    })      
    }, []);
    
    function Logando(status:number) {
        
        if(status == 200 ){
        rest.validationLoginIndex(true);
        setIsLoading(false);

        }
        else{
        setIsLoading(false);
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
         
            
            }}
            >

              {children}

        </UserLoginContexts.Provider>       
    )
}
