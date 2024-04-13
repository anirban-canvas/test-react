import { Link, Outlet, useLoaderData } from "react-router-dom"

export default function Contact(){

  
    const data=useLoaderData()
   
    return(
        <>
        <ul>
          {data.map((dt)=>{
            return (
                <li> <Link to={'details/'+dt}> {dt} </Link></li>
            )
          })}
           
        </ul>
        <Outlet/>
        </>
    )

}