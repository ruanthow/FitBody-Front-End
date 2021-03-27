import styled from '../../styles/components/EditProfile.module.css'
import {motion} from 'framer-motion';
import { useContext } from 'react';
import { EditContexts } from '../../contexts/UserEditContexts';



export default function EditProfile() {

    const {setIsEdit, isEdit} = useContext(EditContexts);
    

    return (
        <div className={styled.Overlay}>
            <div className={styled.Container}>
                <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1.3 }} 
                className={styled.ExitButton}
                onClick={()=>{
                    if(isEdit){
                        setIsEdit(false);
                    }
                }}
                >
                        <img src="icons/cross.svg" alt=""/>
                    </motion.div>
                <div className={styled.Header}>
                    
                    
                    <div className={styled.Profile}>
                        <img src="https://github.com/ruanthow.png" />

                    </div>
                    <motion.img 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.3 }} 
                    src="icons/camera.svg" alt="" 
                    onClick={()=>{

                    }}
                    />
                </div>
                <div className={styled.UploadPhoto}>
                    
                    <input type="file" className={styled.InputUpload} onChange={(e)=>{
                        console.log(e);
                    }}/>
                </div>
                <div className={styled.UserName}>
                    <h2>The Winchester</h2>
                </div>
                    

                <div className={styled.spanLine}>
                    <span></span>
                </div>
                <div className={styled.Forms}>

                    <div className={styled.BoxInput}>
                        <div className={styled.Input}>
                            <h3>Email:</h3>
                            <p>ruan@hotmail.com</p>
                            <div style={{margin:"2rem"}}></div>
                        </div>
                    </div>

                    <div className={styled.BoxInput}>
                        <div className={styled.Input}>
                            <h3>Name:</h3>
                            <p>The Whinchester</p>
                            <motion.div
                            whileTap={{ scale: 1.1 }}  
                            className={styled.Button}
                            >
                            Editar
                            </motion.div>
                        </div>
                    </div>

                    <div className={styled.ChangePassword}>
                        <div className={styled.Contents}>
                            <p>*Para modificar sua senha fique atento vamos pedir dados anteriores</p>
                            <motion.div 
                             whileTap={{ scale: 1.1 }}  
                            className={styled.InputPassword}
                            >
                            Mudar Senha
                            </motion.div>
                        </div>
                    </div>                 
                </div>
            </div>
        </div>
    )
}