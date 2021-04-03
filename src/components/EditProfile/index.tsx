import styled from '../../styles/components/EditProfile.module.css'
import { motion } from 'framer-motion';
import { useContext, useEffect, useState } from 'react';
import { EditContexts } from '../../contexts/UserEditContexts';
import Cookies from 'js-cookie';



export default function EditProfile() {

    const { setIsEdit, isEdit, uploadPhoto, setUploadPhoto, setSendPhoto, sendPhoto, ChangeImage } = useContext(EditContexts);
    const [preview, setPreview] = useState(null);
    const [isNotPhoto, setIsNotPhoto] = useState(false);
    const [chooseImage, setChooseimage] = useState(false);


    async function CheckImage(photo) {

        if (photo == "application/x-msdownload") {
            setIsNotPhoto(true);
        }
        else {
            setIsNotPhoto(false);
            setSendPhoto(photo);
        }
    }
    useEffect(() => {
        console.log(sendPhoto)
    }, [sendPhoto]);


    return (
        <div className={styled.Overlay}>
            <motion.div
                className={styled.Container}
                initial={{ x: -1500 }}
                animate={{
                    x: 0,
                    transition: {
                        stiffness: 50,
                        delay: 0.7,
                        type: "spring",
                        bounce: 3000
                    }
                }}

            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 1.3 }}
                    className={styled.ExitButton}
                    onClick={() => {
                        if (isEdit) {
                            setIsEdit(false);
                            setUploadPhoto(false)
                        }
                    }}
                >
                    <img src="icons/cross.svg" alt="" />
                </motion.div>
            {chooseImage &&
                <div className={styled.Preview}>
                    <div className={styled.ChooseImage}>
                        <label htmlFor="arquivo">
                            <input accept="image/*" type="file" id="arquivo" onChange={(e) => {
                                CheckImage(e.target.files.item(0).type);
                                setPreview(URL.createObjectURL(e.target.files[0]))
                                // setSendPhoto(e.target.files);
                                // console.log(e.target.files[0].type);         
                               
                            }}
                            />
                            Choose image
                        </label>
                        
                    </div>
                    
                    <div className={styled.PreviewPhoto}>
                        {!isNotPhoto && <img src={`${preview == null ? "icons/user.svg" : preview} `} alt=""/> || isNotPhoto && 
                        <div className={styled.ErrorFormatPhoto}>
                            <span>*Formato não compativel</span>
                        </div>}
                    </div>

                    <div className={styled.ButtonArea}>
                        <motion.div
                        whileTap={{scale:1.2}}
                        >
                            Alterar
                        </motion.div>
                        <motion.div
                        whileTap={{scale:1.2}}
                        onClick={()=>{
                            setChooseimage(false);
                        }}
                        >
                            Cancela
                        </motion.div>
                    </div>
                    
                </div>
                }
                
                <div className={styled.Header}>
                    <div className={styled.Profile}>
                        <div className={styled.Photo}>
                            <div className={styled.clickedArea} onClick={()=>{
                                setChooseimage(true)
                            }}>
                                <img src="https://github.com/ruanthow.png" />
                                <div className={styled.overlayPhoto}>
                                    <img src="icons/camera.svg" alt="" />
                                </div>
                            </div>
                        </div>

                    </div>

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
                            <div style={{ margin: "2rem" }}></div>
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
                    <div className={styled.ExitApp}>
                        <motion.div
                            whileTap={{ scale: 1.1 }}
                            className={styled.ButtonExit}
                            onClick={() => {

                                Cookies.remove("Token");
                                Cookies.remove("currentExperience");
                                Cookies.remove("completeChallenge");
                                Cookies.remove("level");
                                window.location.reload();
                            }}
                        >
                            Sair
                            </motion.div>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}