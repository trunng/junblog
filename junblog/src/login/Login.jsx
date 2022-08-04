import "./login.css";
import {Link} from "react-router-dom";

export default function Login(){
    return (
        <>
            <div className="login">
                <pan className="loginTitle">Login</pan>
                <form className="loginForm">
                    <label>Email</label>
                    <input type="text" className="loginInput" placeholder="Enter your email..." ></input>
                    <label>Password</label>
                    <input type="password" className="loginInput" placeholder="Enter your password..." ></input>
                    <button className="loginBtn">Login</button>
                </form>
                <button className="RegisterBtn">
                    <Link className="link" to="/register">Register</Link>
                </button>
            </div>
        </>
    )
}