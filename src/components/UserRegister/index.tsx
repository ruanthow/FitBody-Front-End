import { UserRegisterContexts } from '../../contexts/UserRegisterContexts';
import styled from '../../styles/pages/Register.module.css';
import {useContext, useEffect, useState} from 'react';
import { LoadingScreen } from '../LoadingScreen';
import BackArrow from '../BackArrow';

export function UserRegister(){
   
    const {
        name, 
        passwordConfirm, 
        email, password, 
        setName, setEmail, 
        setPassword, 
        setPasswordConfirm, 
        CreateUser,
        iscreateUser,
        Security,
        ValidationAll,
        isNotEmail,
        isNotName,
        isNotPassword,
       
        } = useContext(UserRegisterContexts);


      
    return(
        <div className={styled.userRegisterContainer}>
           { !iscreateUser ?
            (<div className={styled.userRegisterBox}>
               
                <div className={styled.userRegisterContents}>
                <div className="none">
                    <BackArrow href="/"/>
                </div>   
                
                <img src="logo.svg" alt=""/>
                <p>Bem vindo</p>
                <form onSubmit={(e)=>{ 
                    ValidationAll();
                    e.preventDefault()
                    if(iscreateUser == true){
                        
                        console.log("Create success");

                    }
                   
                    //CreateUser();
                }}>
                    <div className={isNotName ? styled.userRegisterInput : styled.userRegisterInputInvalid}>
                        <input
                       
                        type="text"
                        name="name" 
                        placeholder="Digite seu Nome" 
                        required 
                        onChange={
                            (e)=>{
                                setName((e.target.value).replace(/[0-9]/g, ''))
                            }
                        }/>

                        {!isNotName && <span>Use apenas caracteres no minimo 4</span>}
                    </div>
                    <div className={isNotEmail ? styled.userRegisterInput : styled.userRegisterInputInvalid}>
                        <input 
                        
                        name="email" 
                        placeholder="Digite e-mail" 
                        required 
                        title="Exemplo exemplo@exemplo.com"
                        onChange={(e)=>{
                            setEmail(e.target.value)
                        }}/>
                        {!isNotEmail && <span>Ultilize um email valido exemplo@exemplo.com</span>}
                    </div>
                    <div className={isNotPassword ? styled.userRegisterInput : styled.userRegisterInputInvalid}>
                        <input
                        
                        type="password" 
                        name="password" 
                        placeholder="Digite sua senha" 
                        required 
                        title="Minimo 6 digitos" 
                        onChange={(e)=>{
                          setPassword(e.target.value)
                        }}/>
                         {!isNotPassword && <span>No mínimo 6 caracteres</span>}
                    </div>
                    <div className={password != passwordConfirm ? styled.userRegisterInputInvalid : styled.userRegisterInput}>
                        <input
                        
                        type="password" 
                        name="passwordConfirm" 
                        placeholder="Confirmar sua senha" 
                        required 
                        title="Diferente da senha digitada acima" 
                        onChange={(e)=>{
                          setPasswordConfirm(e.target.value)
                        }}/>
                        {password != passwordConfirm && <span>Não condiz com o campo anterior</span>}
                    </div>
                   
                    <button
                    
                    type="submit"
                    onClick={Security}
                    >
                    Continuar
                    </button>

                </form>
                <div className={styled.userRegisterOthersLogins}>
                <img 
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png"
                alt=""/>
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt=""/>
                </div>
                
                </div>
            </div>)
            
            :
            (<div className={styled.loadingRegisterBox}>
               <div className={styled.loadingRegisterContainte}>

                    <div className={styled.svgLoading}>
                        <svg version="1.1" id="L9"  height="350px" width="350px"
                             viewBox="0 0 100 100">
                            <path fill="#ff0707" d="M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50">
                        
                            </path>
                    </svg>   
                    </div> 
                    Cadastrando...
                </div>
            </div>)
            }
            
            
        </div>
    )
}