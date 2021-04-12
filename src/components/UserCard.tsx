import React from "react"

import { motion } from "framer-motion"

import twitterIcon from "../assets/twitter.svg"
import { User as IUser } from "../types/User"
import sticker from "../assets/sticker.png"

type Props = {
    user: IUser
}

const UserCard: React.FC<Props> = ({ user }) => {
    return (
        <motion.div
            animate={{ boxShadow: "12px 12px 0px 1px white" }}
            transition={{ duration: 0.25, delay: 0.25 }}
            className="App"
        >
            <header className="App-header">
                <a href={user.html_url} target="_blank" rel="noreferrer">
                    <motion.img
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        initial={{ y: -10, opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.25 }}
                        src={sticker}
                        className="App-logo object-cover"
                        alt="logo"
                    />
                </a>
            </header>
            <motion.div animate={{ y: 0 }} transition={{ delay: 0.05 }} initial={{ y: 25 }}>
                <h1 className="text-2xl mt-5 mb-1">{user.login}</h1>
            </motion.div>
            <motion.div animate={{ y: 0 }} transition={{ delay: 0.1 }} initial={{ y: 25 }}>
                <a
                    href={`https://twitter.com/${user.twitter_username}`}
                    target="_blank"
                    rel="noreferrer"
                    className="twitter-name"
                >
                    <img id="twitter-icon" src={twitterIcon} alt="Twitter" title="Twitter" />
                    <p>{user.twitter_username}</p>
                </a>
            </motion.div>
            <motion.div animate={{ y: 0 }} transition={{ delay: 0.15 }} initial={{ y: 25 }}>
                <p>{user.bio}</p>
            </motion.div>
        </motion.div>
    )
}

export default UserCard
