import styled from '../../styles/pages/Register.module.css';

export function UserRegister(){
    return(
        <div className={styled.userRegisterContainer}>
            <div className={styled.userRegisterBox}>
                <div className={styled.userRegisterContents}>
                <img src="logo.svg" alt=""/>
                <p>Cadastrar</p>
                <form onSubmit={(e)=>{
                    
                }}>
                    <div className={styled.userRegisterInput}>
                        <input type="text" name="name" placeholder="Nome do Usuario" onChange={(e)=>{
                        
                        }}/>
                    </div>
                    <div className={styled.userRegisterInput}>
                        <input type="text" name="name" placeholder="Digite e-mail" onChange={(e)=>{
                        
                        }}/>
                    </div>
                    <div className={styled.userRegisterInput}>
                        <input  name="name" placeholder="Digite sua senha" onChange={(e)=>{
                          
                        }}/>
                    </div>
                    <div className={styled.userRegisterInput}>
                        <input  name="name" placeholder="Confirmar sua senha" onChange={(e)=>{
                          
                        }}/>
                    </div>
                    <button type="submit" disabled>
                        Confirmar
                    </button>
                </form>
                <div className={styled.userRegisterOthersLogins}>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt=""/>
                <img src="https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png" alt=""/>
                <img src="https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/twitter_circle-512.png" alt=""/>
                </div>
                
                </div>
            </div>
        </div>
    )
}