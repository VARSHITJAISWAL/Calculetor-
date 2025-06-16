import { useState } from "react";
import style from "./App.module.css"
import ComA from './ComA.jsx'
import ComB from "./ComB.jsx"

function Varshit(){
  const [disVal,setDisVal]=useState("")
  const onClickBtn=(btnText)=>{
   console.log(btnText);
     if(btnText==="AC" || btnText=== "DEC"){
       setDisVal("")
     }else if(btnText==="="){
       const result=eval(disVal);
       setDisVal(result);       
     }else{
       const newBtn= disVal + btnText;
       setDisVal(newBtn);
     }
  }

  return (
   <center>
    <div  className={style.mainBox}>
   
       <ComA disVal={disVal}/>
       <ComB onClickBtn={onClickBtn}/>
      
    </div>
 
   </center>
  )
}
export default Varshit;