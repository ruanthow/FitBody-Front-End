
import { useContext, useState } from 'react';
import { UserLoginContexts } from '../../contexts/UserLoginContexts';
import styled from '../../styles/components/UserRegister.module.css';
import  {LoadingScreen}  from '../LoadingScreen';

export default function UserRegister(){
   
    const {user,password,setUser, setPassword,Logando, DBLOGIN, setIsLoading,isLoading } = useContext(UserLoginContexts);

    

    return (
        <div>
            {!isLoading ? (<div className={styled.userRegisterContainer}>
            <div className={styled.userRegisterBox}>
                <div className={styled.userRegisterContents}>
                <img src="logo.svg" alt=""/>
                <p>Fazer Login</p>
                <form onSubmit={(e)=>{
                    e.preventDefault();
                    setIsLoading(true); 
                    DBLOGIN();   
                    
                }}>
                    <div className={styled.userRegisterInput}>
                        <input type="text" name="name" placeholder="USUARIO" onChange={(e)=>{
                           setUser(e.target.value)
                        }}/>
                    </div>
                    <div className={styled.userRegisterInput}>
                        <input  name="name" placeholder="SENHA" onChange={(e)=>{
                            setPassword(e.target.value);
                        }}/>
                    </div>
                    <button type="submit" disabled={user === '' || password === ''}>
                        Logar
                    </button>
                </form>
                <div className={styled.userRegisterOthersLogins}>
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