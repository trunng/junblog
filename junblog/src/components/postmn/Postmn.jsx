import "./postmn.css"

export default function Postmn(){
    return (
        <div className="postmn">
            <img className = "postImg" src="https://i.imgur.com/trWBZLg.jpg" alt=""></img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">I learned a lot of React concepts.</span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDe">
                Great video, I learned a lot of React concepts for the first time, however, maybe is it worth showing that in the design phase the websites should also be prepared for mobile and tablet users. Great video, I learned a lot of React concepts for the first time, however, maybe is it worth showing that in the design phase the websites should also be prepared for mobile and tablet users.
            </p>
        </div>
    )
}