




export default function ConfirmEmail(){
    return(
       <div>
         
       </div>
    )
}

export async function getServerSideProps(context) {

var token = "teste";
 const body = {

      "acess_account": token

  }
 
  
    const teste = context.resolvedUrl;
    console.log(teste);
    const apiVerification = await fetch("https://fitbodyapi.herokuapp.com/verify", {method:"POST", headers:{'Content-Type' : 'aplication/json'}, body:JSON.stringify((body))})
    console.log(await apiVerification.json());
    return { 
     props:{
      
    }
  }
}