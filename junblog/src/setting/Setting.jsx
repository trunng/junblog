import "./setting.css"
import Sidebar from "../components/sidebar/Sidebar"

export default function Setting(){
    return (
        <>
            <div className="setting">
                <div className="settingWrapper">
                    <div className="settingTitle">
                        <span className="settingUpdateTitle">Update Your Account</span>
                        <span className="settingDeleteTitle">Delete Your Account</span>
                    </div>
                    <form className="settingForm">
                        <label>Profile Picture</label>
                        <div className="settingImg">
                            <img src="https://i.imgur.com/vX7j2Dp.jpg" alt="" className ="ImgMain"></img>
                            <label htmlFor="fileInput"><i className="settingImgIcon fa-solid fa-circle-user"></i></label>
                            <input type="file" id="fileInput" className="" style={{display:"none"}}/>
                        </div>
                        <label>Username</label>
                        <input type="text" placeholder="Jun Wanja"></input>
                        <label>Email</label>
                        <input type="email" placeholder="nttrung01072002@gmail.com"></input>
                        <label>Password</label>
                        <input type="password"></input>
                        <button className="settingSubmit">Update</button>
                    </form>
                </div>       
                <Sidebar/>
            </div>
        </>
    )
}