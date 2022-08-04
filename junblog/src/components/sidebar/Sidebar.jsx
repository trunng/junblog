import "./sidebar.css"

export default function Sidebar(){
    return (
        <div className="sidebar">
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className="sidebarImg" src="https://i.imgur.com/TikIzRR.jpeg" alt=""/>
                <p className="sidebarP">
                I really like how you go through everything instead of copying and pasting. Tutorials become longer that way but it is still better in that way. Copying and pasting can used from time to time but not as general method in my view.
                </p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Music</li>
                    <li className="sidebarListItem">Style</li>
                    <li className="sidebarListItem">Sport</li>
                    <li className="sidebarListItem">Tech</li>
                    <li className="sidebarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sidebarItem">
                    <span className="sidebarTitle">FOLLOW ME</span>
                    <div className="sidebarSocial">
                    <i className = "sidebarIcon fa-brands fa-square-facebook"></i>
                    <i className = "sidebarIcon fa-brands fa-square-instagram"></i>
                    <i className = "sidebarIcon fa-brands fa-square-github"></i>
                    </div>
            </div>
        </div>
    )
}