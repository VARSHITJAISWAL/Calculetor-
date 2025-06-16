import style from "./ComB.module.css"
function ComB({onClickBtn}) {
    let value=[1,2,3,"/",4,5,6,"*",7,8,9,"-", 0,".","00","+","DEC","/100","AC","=" ]
    return (



        <div className={style.grid}>
            {
                value.map((item)=><button  key={item} onClick={()=>onClickBtn(item)} className={style.btn}>{item}</button>

                )
            }
            
        </div>
    )
}
export default ComB;