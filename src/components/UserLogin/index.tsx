
import Link from 'next/link';
import { useContext, useState } from 'react';
import { UserLoginContexts } from '../../contexts/UserLoginContexts';
import styled from '../../styles/components/UserLogin.module.css';
import  {LoadingScreen}  from '../LoadingScreen';


export default function UserLogin(){
   
    const {user,password,setUser, setPassword,Logando, DBLOGIN, setIsLoading, isLoading, error } = useContext(UserLoginContexts);

    

    return (
        <div>
            {!isLoading ? (<div className={styled.userLoginContainer}>
            <div className={styled.userLoginBox}>
                <div className={styled.userLoginContents}>
                <img src="logo.svg" alt=""/>
                <p>Fazer Login</p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setIsLoading(true); 
                    DBLOGIN();   
                    
                }}>
                    <div className={styled.userLoginInput}>
                        <input type="text" name="name" placeholder="USUARIO" onChange={(e)=>{
                           setUser(e.target.value);
                        }}/>
                    </div>
                    <div className={styled.userLoginInput}>
                        <input type="password" name="name" placeholder="SENHA" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    <button type="submit" disabled={user === '' || password === ''}>
                        Logar
                    </button>
                </form>
                { error &&
                    <div>
                        <span style={{color:"red"}}>Credencias incorretas ou não existentes</span>
                    </div>
                }
                
                <span>Não possui uma conta sem problemas | <Link href="/register">Cadastre-se!</Link></span>
                <div className={styled.userLoginOthersLogins}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt=""/>
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt=""/>
                </div>
                
                </div>
            </div>
        </div>) 
        
        : <LoadingScreen/>
        
        }
        </div>
    )
}