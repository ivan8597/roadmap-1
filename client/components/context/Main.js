import { createContext, useContext } from 'react';
import {  useState } from "react"
import {useUserContext} from "../context/User"
const MainContext = createContext();
const API_URL = "http://localhost:3001"

export const MainProvider = ({ children }) => {
    const {user:authUser}=useUserContext()
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [files, setFiles] = useState([])
    const [activeUserPage, setActiveUserPage] = useState(1)
    const [userPages, setUserPages] = useState(1)
    const [activePostPage, setActivePostPage] = useState(1)
    const [postPages, setPostPages] = useState(1)
    const [activeCommentsPage,setActiveCommentsPage]=useState(1)
    const [commentsPages,setCommentsPages]=useState(1)

    const loadUsers=()=>{
        const limit=4
        const skip=(activeUserPage-1)*limit
        fetch(`${API_URL}/users?limit=${limit}&skip=${skip}`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.items);
          setUserPages(Math.ceil(data.count/limit))
        });
    }
    const loadUser=(user_id)=>{
        fetch(`${API_URL}/users/${user_id}`)
        .then((res) => res.json())
        .then((data) => {
            setUser(data.item);
        });
    }
    const loadPosts=(user_id)=>{
        const limit=7
        const skip=(activePostPage-1)*limit
        fetch(`${API_URL}/posts?userId=${user_id}&skip=${skip}&limit=${limit}`)
        .then((res) => res.json())
        .then((data) => {
            setPosts(data.items);
            setPostPages(Math.ceil(data.count/limit))
        });
    }
    const addPost=({body,title})=>{
        fetch(`${API_URL}/posts`, {
            method:"POST",
            headers:{
             "Content-Type":"application/json",
             "Authorization": `Bearer ${authUser.token}`

            },
            body: JSON.stringify({body,title})
            
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.item){
                loadPosts(authUser.id)
            }
            // setPost(data.item);
        });
    }
    const loadPost=(post_id)=>{
        fetch(`${API_URL}/posts/${post_id}`)
        .then((res) => res.json())
        .then((data) => {
            setPost(data.item);
        });
    }
    const loadComments=(post_id)=>{
        const limit=4
        const skip=(activeCommentsPage-1)*limit
        fetch(`${API_URL}/comments?postId=${post_id}&skip=${skip}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data.items);
                setCommentsPages(Math.ceil(data.count/limit))
            });
    }

    const addComment=({email,name,body,postId})=>{
        fetch(`${API_URL}/comments`, {
            method:"POST",
            headers:{
             "Content-Type":"application/json"
            },
            body: JSON.stringify({email,name,body,postId})
            
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.item){
                loadComments(postId)
            }
            // setPost(data.item);
        });
    }
    const loadFiles=()=>{
        fetch(`${API_URL}/files`, {
            headers:{
             "Content-Type":"application/json",
             "Authorization": `Bearer ${authUser.token}`,
            },
         
            
        })
        .then((res) => res.json())
        .then((data) => {
            if(data.items){
                setFiles(data.items)
            }

        });
    }
  const value = {
      users,
      loadUsers,
      user,
      loadUser,
      posts,
      loadPosts,
      post,
      loadPost,
      addPost,
      comments,
      loadComments,
       addComment,
      activeUserPage,
      setActiveUserPage,
      userPages,
      activePostPage,
      setActivePostPage,
      postPages,
      activeCommentsPage,
      setActiveCommentsPage,
      commentsPages,
      files,
      loadFiles
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext );