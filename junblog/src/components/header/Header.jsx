import "./header.css"

export default function Header(){
    return (
        <div className="header">
            <div className="headerTitle">
                <span className = "headerTitleSm">React & Node</span>
                <span className = "headerTitleLg">Blog</span>
            </div>
            <img className = "headerImg" src="https://i.imgur.com/iI5l5G9.jpeg" alt=""/>
        </div>
    )
}