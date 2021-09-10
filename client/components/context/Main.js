import { createContext, useContext } from 'react';
import {  useState } from "react"
const MainContext = createContext();
const API_URL = "http://localhost:3001"

export const MainProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)
    const [posts, setPosts] = useState([])
    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const loadUsers=()=>{
        fetch(`${API_URL}/users`)
        .then((res) => res.json())
        .then((data) => {
          setUsers(data.items);
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
        fetch(`${API_URL}/posts?userId=${user_id}`)
        .then((res) => res.json())
        .then((data) => {
            setPosts(data.items);
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
        fetch(`${API_URL}/comments?postId=${post_id}`)
            .then((res) => res.json())
            .then((data) => {
                setComments(data.items);
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
      comments,
      loadComments
  };
  return <MainContext.Provider value={value}>{children}</MainContext.Provider>;
};

export const useMainContext = () => useContext(MainContext );