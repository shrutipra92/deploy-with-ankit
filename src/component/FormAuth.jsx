import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth";
import { useState } from "react";
import { app } from "../../firebase";


const FormAuth = () => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleSubmit=()=>{
        console.log("hi")
        const auth = getAuth(app);
        console.log("hifggcv")

        createUserWithEmailAndPassword(auth,email, password)
        .then((res)=>{
            console.log(res)
        })
        .catch((err)=>{
            console.log(err)
        })

        console.log("hirfcvkbl")
      
    }


    const handleSingin=()=>{
console.log("dgdf")
        const auth = getAuth(app);
   signInWithEmailAndPassword(auth, email, password)
   .then((res)=>{
    console.log(res)
   })
   .catch((err)=>{
    console.log(err)
   })

    }


  return (
    <>
    {/* sign up  */}
    <div>
        
            <input type="email" placeholder="email id" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text"  placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSubmit}> submit</button>
        
      
    </div>
    {/* sign in  */}

    <div>
        
            <input type="email" placeholder="email id" onChange={(e)=>setEmail(e.target.value)}/>
            <input type="text"  placeholder="password" onChange={(e)=>setPassword(e.target.value)}/>
            <button onClick={handleSingin}> sign in</button>
        
      
    </div>

    </>


  )
}

export default FormAuth

