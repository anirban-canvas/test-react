import { Link, Outlet } from "react-router-dom";




export default function Main(){


    return(
        <>
        <div className="menu-wrapper">
        <div className="Menu">
            <Link to="/home">Home </Link></div>
        <div className="Menu">
        <Link to="/aboutus">About Us </Link></div>
        <div className="Menu">
        <Link to="/contactus">Contact </Link></div>
        </div>
        <div>
            <Outlet/>
        </div>
        </>
    )


}