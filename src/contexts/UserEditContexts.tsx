import { createContext, ReactNode, useState } from "react";
import EditProfile from "../components/EditProfile";

interface EditContextsData{
//Boolean//
    isEdit: boolean;
//////

 //Hooks//   
    setIsEdit:any
/////

}


interface UserProviderProps{
    
    children: ReactNode;

}


export const EditContexts = createContext({}as EditContextsData);


export default function UserEditProvider({children, ...rest}:UserProviderProps){

    const [isEdit, setIsEdit] = useState(false);
    const [uploadPhoto, setUploadPhoto] = useState('');

    


    return(
        <EditContexts.Provider 
        value={{
        isEdit,
        setIsEdit    
        }}> 
        
       
            {children}
            {isEdit && <EditProfile/>}
        </EditContexts.Provider>
    )

}