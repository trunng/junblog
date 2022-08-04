import "./topbar.css"
import {Link} from "react-router-dom";

export default function TopBar(){
    const user = false;
    return (
        <div className="top">
            <div className = "topLeft">
                <i className = "topIcon fa-brands fa-square-facebook"></i>
                <i className = "topIcon fa-brands fa-square-instagram"></i>
                <i className = "topIcon fa-brands fa-square-github"></i>
            </div>
            <div className = "topCenter"></div>
                <ul className = "topList">
                    <li className ="topListItem">
                        <Link className="link" to = "/">HOME</Link>
                    </li>
                    <li className ="topListItem">
                        <Link className="link" to = "/about">ABOUT</Link>
                    </li>
                    <li className ="topListItem">
                        <Link className="link" to = "/contact">CONTACT</Link>
                    </li>
                    <li className ="topListItem">
                        <Link className="link" to = "/write">WRITE</Link>
                    </li>
                    <li className ="topListItem">
                        {user && "LOGOUT"}
                    </li>
                </ul>
            <div className = "topRight">
                {
                    user ? (
                        <img className = "topImg" src = "https://i.imgur.com/rr8bTQr.jpg" alt = "" />
                    )
                    :
                    (
                        <ul className = "topList">
                            <li className = "topListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className = "topListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>
                    )
                }
                <i className = "topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}