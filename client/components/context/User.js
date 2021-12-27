
import { createContext, useContext } from 'react';
import { useState } from "react"
const UserContext = createContext();
const API_URL = "http://localhost:3001"
const localSaveUser = (data) => {
    localStorage.setItem("user-info", JSON.stringify(data))
}
const localGetUser = () => {
    if (typeof window === "undefined") {
        return {
            name: "guest",
            loading: true
        }
    }
    const item = localStorage.getItem("user-info")
    return item ? JSON.parse(item) : {
        name: "guest",
        loading: false
    }
}
const localRemoveUser = () => {
    localStorage.removeItem("user-info")
}
export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(localGetUser())
    const logout = () => {
        localRemoveUser()
        setUser({
            name: "guest",
            loading: false
        })
    }
    const login = ({ email, password }) => {
        fetch(`${API_URL}/users/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })

        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.success) {
                localSaveUser({ ...data, loading: false })
                setUser({ ...data, loading: false })
            }
        })
    }

    const updateUser = ({ name,lastname,username }) => {
        fetch(`${API_URL}/users/${user.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${user.token}`
            },
            body: JSON.stringify({ name,lastname,username })

        }).then((res) => {
            return res.json()
        }).then((data) => {
            if (data.item) {
                const{name,lastname,username}=data.item
                localSaveUser({ ...user, name,lastname,username  })
                setUser({ ...user, name,lastname,username })
            }
        })
    }

    const value = {
        user,
        login,
        logout,
        updateUser
    }
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

export const useUserContext = () => useContext(UserContext);