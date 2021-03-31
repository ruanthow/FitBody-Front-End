import { createContext, ReactNode, useEffect, useState } from "react";
import EditProfile from "../components/EditProfile";

interface EditContextsData{
//Boolean//
    isEdit: boolean;
    uploadPhoto:boolean;
    sendPhoto:File;
    
//////

 //Hooks//   
    setIsEdit:any;
    setUploadPhoto:any;
    setSendPhoto:any;
/////

/////Functions//
    ChangeImage:Function;
//////

}


interface UserProviderProps{
    
    children: ReactNode;

}


export const EditContexts = createContext({}as EditContextsData);


export default function UserEditProvider({children, ...rest}:UserProviderProps){

    const [isEdit, setIsEdit] = useState(false);
    const [uploadPhoto, setUploadPhoto] = useState(false);
    const [sendPhoto, setSendPhoto] = useState();

   async function ChangeImage(){
        const data = new FormData();
        data.append('file',sendPhoto)
        const api = await fetch("https://fitbodyapi.herokuapp.com/users/profileimage",{method:"PATCH", body:data})

        const json = api.json();
        console.log(json);

   }
    


    return(
        <EditContexts.Provider 
        value={{
        isEdit,
        setIsEdit,
        uploadPhoto,
        setUploadPhoto,
        setSendPhoto,
        sendPhoto,
        ChangeImage
           
        }}> 
        
       
            {children}
            {isEdit && <EditProfile/>}
        </EditContexts.Provider>
    )

}