import {UserRegister} from '../../components/UserRegister';
import {UserRegisterProvider } from '../../contexts/UserRegisterContexts';


export function teste(){
    return(
       <UserRegisterProvider>
           <UserRegister/>
       </UserRegisterProvider>
        
    )
}

export default teste;