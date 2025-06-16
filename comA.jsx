import style from "./ComA.module.css"
function ComA({disVal}){
  return (
    <div className={style.innerBox}>
     <input className={style.inputBox} type="text" placeholder="Calculator" value={disVal} readOnly />
    
    </div>
  )
}
export default ComA;