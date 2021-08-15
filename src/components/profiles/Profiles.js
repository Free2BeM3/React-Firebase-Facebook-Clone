import React from 'react'
import "./Profiles.css";
import Header from "../../components/header/Header";
import { useStateValue } from "../../StateProvider";
import UserOptions from "./UserOptions"
import ProfileHeader from "./ProfileHeader"




function Profiles() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="profile">
            <Header />
            <ProfileHeader />
           <UserOptions />
        </div>
    )
}

export default Profiles