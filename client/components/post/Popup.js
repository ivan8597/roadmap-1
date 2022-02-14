import { useState } from "react"
import { useMainContext } from "../context/Main"
import FilesGrid from "../files/Grid"

const PostPopup = ({ close ,post}) => {
    const [title, setTitle] = useState(post?.title || "")
    const [body, setBody] = useState(post?.body ||"")
    const [fileId, setFileId] = useState(post?.fileId ||"")
    const { addPost,editPost } = useMainContext()
    return (
        <div className="overlay">
            <div className="popup">
                <div onClick={close} className="close-btn">x</div>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    if(post){
                      editPost(post._id,{title,body,fileId})
                    }else{
                        addPost({ title, body,fileId })
                    }
                    close()
                    setTitle('')
                    setBody('')
                }} className="formpage">
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlInput2" className="form-label">
                            Title
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="exampleFormControlInput2"
                            placeholder=""
                            onChange={(e) => {
                                setTitle(e.target.value)
                            }}
                            value={title}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">
                            Example textarea
                        </label>
                        <textarea
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows={3}
                            defaultValue={""}
                            onChange={(e) => {
                                setBody(e.target.value)
                            }}
                            value={body}

                        />
                    </div>
                    <div className="mb-3">
                        <FilesGrid  handleClick={(fileId)=>{
                        setFileId(fileId)
                        }} isActive={(imageId)=>{
                          return imageId===fileId
                        }}/>
                        </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">
                        Save
                    </button>

                </form>
            </div>
        </div>
    )
}

export default PostPopup;