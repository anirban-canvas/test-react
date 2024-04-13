import { useState } from "react";
import Child from "./Child";

export default function Parent(){

    const[parentData,setParentData]=useState("")

    let clbck=(data)=>{
        setParentData(data)

    }

    return (
        <>
       I am parent
        </>
    )

}