import { useState } from "react";
import {useNavigate} from "react-router-dom"
const LogIn=()=>{
    const[userName,setUserName] = useState("");
    const[password,setPassword] = useState("");
    const nav =  useNavigate()
       function getUserName(event){
          setUserName(event.target.value);

       }
       function getPassword(event){
        setPassword(event.target.value);
       }
       function getData(){
        if(userName === "vinay" && password === "vinay@123"){
            nav("/dashboard")
        }else{
            nav("/")
        }
       }
       
      

    return(
        <div>
            <label htmlFor="userName" >UserName</label>
            <input type="text" id="userName" onChange={getUserName}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" onChange={getPassword} />
            <button onClick={getData}>Submit</button>
        </div>
    )
}
export default LogIn;