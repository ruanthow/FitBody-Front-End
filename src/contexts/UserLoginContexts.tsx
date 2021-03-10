import { createContext, ReactNode, useEffect, useState } from "react";
import md5 from 'md5';
import { getJSON } from "js-cookie";

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
        "senha":password,
        
    }

        const USER = await fetch("http://18.231.147.2:3350/login", {method:"POST",headers:{'Content-Type': 'application/json'},  body:JSON.stringify(body)})
        const data = await USER.json();
        setNameUser(data.name)
        Logando(USER.status);
         console.log(USER);
    }
   
    
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
            nameUser
            
            }}
            >

              {children}

        </UserLoginContexts.Provider>       
    )
}