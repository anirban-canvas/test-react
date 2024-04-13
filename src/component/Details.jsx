import { useLoaderData } from "react-router-dom"

export default function Details(){

    let data=useLoaderData();

    return (
        <>
        <div>Name {data.name}</div>
        <div>Description {data.description}</div>
        </>
    )


}