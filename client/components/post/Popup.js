import { useState } from "react"
import { useMainContext } from "../context/Main"

const PostPopup = ({close}) => {
    const[title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const{addPost}=useMainContext ()
  return (
    <div className="overlay">
        <div className="popup">
            <div onClick={close} className="close-btn">x</div>
            <form  onSubmit={(e)=>{
            e.preventDefault()
            addPost({title,body})
            close()
            setTitle('')
            setBody('')
        }}className="formpage">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput2" className="form-label">
                    Title
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput2"
                    placeholder=""
                    onChange={(e)=>{
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
                    onChange={(e)=>{
                        setBody(e.target.value)
                       }}
                       value={body}
                       
                />
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