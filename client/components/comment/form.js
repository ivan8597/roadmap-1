import Link from "next/link";
import { useState } from "react";
import { useMainContext } from "../context/Main";
import { useUserContext } from "../context/User";
const CommentForm = ({postId}) => {
    const {user}=useUserContext()
    const[name,setName]=useState('')
    const[body,setBody]=useState('')
    const[email,setEmail]=useState(user.email || "")
    const{addComment}=useMainContext()
    return (
        <form  onSubmit={(e)=>{
            e.preventDefault()
            addComment({email,name,body,postId})
            setName('')
            setBody('')
        }}className="formpage">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Email address
                </label>
                <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    placeholder="name@example.com"
                    onChange={(e)=>{
                     setEmail(e.target.value)
                    }}
                    value={email}
                />
            </div>
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
                        setName(e.target.value)
                       }}
                       value={name}
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
            <button className="w-100 mb-4 btn btn-lg btn-primary" type="submit">
           Add Comment
            </button>
           
        </form>

    )
}

export default CommentForm;