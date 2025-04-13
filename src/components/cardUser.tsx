import React from "react";
import { IUser } from "../types/IUser";
import './cardUser.scss'

const CardUser: React.FC<IUser> = ({name, avatar_url, description, profile_url}) =>{
    return(
        <div className="card-container">
            {avatar_url && <img src={avatar_url} alt={name} />}
            <div className="user-info">
                {name && <h1 className="user-name">{name}</h1>}
                {description && <p className="user-description">{description}</p>}
                {profile_url && <a href={profile_url} className="user-link" target="_blank">Ir para o perfil</a>}
            </div>
        </div>
    )
}

export default CardUser;