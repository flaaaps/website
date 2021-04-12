import React, { useState, useEffect } from "react"

import "../App.css"

import axios from "axios"
import { User as IUser } from "../types/User"

import UserCard from "./UserCard"
import Loader from "./Loader"

const App: React.FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        axios.get("https://api.github.com/users/flaaaps").then(res => {
            setUser(res.data)
            console.log(res.data, "USER")
            setTimeout(() => {
                setLoading(false)
            }, 650)
        })
    }, [])
    if (user && !loading) {
        return <UserCard user={user} />
    } else {
        return <Loader />
    }
}

export default App
