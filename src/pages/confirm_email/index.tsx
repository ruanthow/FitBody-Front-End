import { useRouter } from 'next/router';




export default function ConfirmEmail(){
    return(
       <div>
         
       </div>
    )
}

export async function getServerSideProps(context) {

  const router = useRouter();
  var token = context.query.token;
  const body = {

      "acess_account": token

  }
 
    const apiVerification = await fetch("https://fitbodyapi.herokuapp.com/verify`", {method:"POST", headers:{'Content-Type' : 'aplication/json'}, body:JSON.stringify((body))})
    console.log(await token);
    router.push("/");
    return { 
     props:{
      
    }
  }
}