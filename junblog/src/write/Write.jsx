import "./write.css"

export default function Write(){
    return (
        <>
            <div className="write">
                <img className="writeImg" src="https://i.imgur.com/vX7j2Dp.jpg" alt=""></img>
                <form className="writeForm">
                    <div className="writeFormGr">
                        <label htmlFor="fileInput"><i className="writeIcon fa-solid fa-plus"></i></label>
                        <input type="file" id="fileInput" style={{display:"none"}}></input>
                        <input type="text" placeholder="Title" className="writeInput" autoFocus={true}></input>
                    </div>
                    <div className="writeFormGr">
                        <textarea placeholder="Tell your story..." type="text" className="writeInput writeText"></textarea>
                    </div>
                    <button className="writeSubmit">Publish</button>
                </form>
            </div>
        </>
    )
}