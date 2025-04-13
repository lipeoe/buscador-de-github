import React, {useState} from "react";
import CardUser from "../components/cardUser";
import { IUser } from "../types/IUser";
import SearchIcon from "../assets/svg/searchIcon.svg"
import GitHubIcon from "../assets/svg/githubIcon.svg"
import GitHubLogo from "../assets/svg/GiHubLogo.svg"
import './UserPage.scss'

const UserPage: React.FC = () =>{
    const [userName, setUserName] = useState<String>("")
    const [userProfile, setUserProfile] = useState<IUser | null>(null)  
    const [userProfileURL, setUserProfileURL] = useState<String>("")


    return(
        <div className="content-container">
            <div className="header-container">
                <img className="header-icon-git" src={GitHubIcon} alt="GitHub Icon" />
                <h1 className="title">Perfil</h1>
                <img className="header-logo-git" src={GitHubLogo} alt="GitHub Logo" />
            </div>
            <div className="input-container">
                <input className="input-search" placeholder="Digite um nome de usuário"/>
                <button className="search-btn" type="submit"><img src={SearchIcon} alt="" /></button>
            </div>
        </div>
    )
}

export default UserPage
