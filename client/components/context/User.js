import { JsonWebTokenError } from 'jsonwebtoken';
import { createContext, useContext } from 'react';
import { useState } from "react"
const UserContext = createContext();
const API_URL = "http://localhost:3001"
const localSaveUser=(data)=>{
  localStorage.setItem("user-info",JSON.stringify(data))
}
const localGetUser=()=>{
    if(typeof window ==="undefined"){
        return {
            name:"guest",
            loading:true
        }
    }
    const item=localStorage.getItem("user-info")
    return item? JSON.parse(item):{
        name:"guest",
        loading:false
    }
}
const localRemoveUser=()=>{
    localStorage.removeItem("user-info")
}
export const UserProvider = ({ children }) => {
    const [user,setUser]=useState(localGetUser())
const logout=()=>{
    localRemoveUser()
    setUser({
        name:"guest",
        loading:false
    })
}
    const login=({email, password})=>{
       fetch(`${API_URL}/users/login`, {
           method:"POST",
           headers:{
            "Content-Type":"application/json"
           },
           body: JSON.stringify({email,password})
           
       }).then((res)=>{
           return res.json()
       }).then((data)=>{
           if(data.success){
               localSaveUser({...data, loading:false})
               setUser({...data,loading:false})
           }
       })
        }
    
    const value = {
        user,
        login,
        logout
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);