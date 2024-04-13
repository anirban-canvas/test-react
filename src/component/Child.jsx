import { useState } from "react"

export default function Child({callback,data}){

    const [chdata,setchdata]=useState("childData")

    return (
        <div>
        Hellow I am Child getting data from parent {data}
        <button onClick={()=>{callback("CHILDDATA")}}>Change ParentData</button>
        </div>
    )

}