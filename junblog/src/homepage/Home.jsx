import "./home.css"
import Header from "../components/header/Header"
import Post from '../components/post/Post';
import Sidebar from '../components/sidebar/Sidebar';

export default function Home(){
    return (
        <>
            <Header/>
            <div className="home">
                <Post/>
                <Sidebar/>
            </div>
        </>
    )
}