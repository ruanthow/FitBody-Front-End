import { createContext, ReactNode, useState } from "react";



interface UserRegisterData{
    name:string;
    email:string;
    password:string;
    passwordConfirm:string
    
    isNotEmail:Boolean;
    isNotName:Boolean
    isNotPassword:Boolean;
    iscreateUser:Boolean;
    //Hooks React///
    setName:any;
    setEmail:any;
    setPassword:any;
    setPasswordConfirm:any;
    ///          ////

    CreateUser:Function;
    Security:()=> void;
    ValidationAll:any;
           
}   


interface UserRegisterProvider {
    children: ReactNode;
}


export const UserRegisterContexts = createContext({} as UserRegisterData);

export function UserRegisterProvider({children, ...rest}: UserRegisterProvider){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");


    const [isNotEmail, setIsNotEmail] = useState(true)
    const [isNotName, setIsNotName] = useState(true);
    const [isNotPassword, setIsNotPassword] = useState(true);
    const [iscreateUser, setIsCreateUser] = useState(false);
    

    const regex1 = /^[a-z0-9.]+@[a-z]+\.([a-z]{2,3})$/;
    const regex2 = /^([a-zA-Z\u00C0-\u00FF]([ ])?){4,32}/;
    const regex3 = /[a-zA-z0-9]{6,15}/g;
    
    

   async function Security(){
        let testandoEmail;
        let testandoName;
        let testandoPassword;
        testandoEmail = email;
        testandoName = name;
        testandoPassword = password;


        if(regex1.test(testandoEmail) && regex2.test(testandoName) && regex3.test(testandoPassword) && password == passwordConfirm){
            
            setIsCreateUser(true);

        }
        else{
            setIsCreateUser(false);
        }
       
    }

    function ValidationAll(){
        ValidationName(name); 
        ValidationEmail(email);      
        ValidationPassword(password);
    }
    
    function ValidationEmail(validEmail:string){
        if(!regex1.test(validEmail)){
            setIsNotEmail(false);
            
        }
        else if(regex1.test(validEmail)){
            setIsNotEmail(true);   
        }
    }
    function ValidationName(validName:string){
        if(!regex2.test(validName)){
            setIsNotName(false);
            
        }
        else if(regex2.test(validName)){
            setIsNotName(true);   
        }
    }
    function ValidationPassword(validPassword:string){
        if(!regex3.test(validPassword)){
            setIsNotPassword(false);
            
        }
        else if(regex3.test(validPassword)){
            setIsNotPassword(true);   
        }
    }



    
    async function CreateUser(){

        const body ={
            "name":name,
            "email": email,
            "senha": password
        }

        const create = await fetch("http://18.231.147.2:3350/user",{method:"POST",headers:{'Content-Type': 'application/json'}, body:JSON.stringify(body)})
        const data = await create.json();
        console.log(create);
        console.log(data);

    }


    return(
       <UserRegisterContexts.Provider
       value={{
           name,
           email,
           password,
           passwordConfirm,

           iscreateUser,
           isNotEmail,
           isNotName,
           isNotPassword,

           setName,
           setEmail,
           setPassword,
           setPasswordConfirm,


           CreateUser,  
           Security,
           ValidationAll,
       }}
       >
           {children}
       </UserRegisterContexts.Provider>
    )
}