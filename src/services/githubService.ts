import { IUser } from "../types/IUser";

const API_URL = "https://api.github.com"

export async function fetchUser(username: string): Promise<IUser>{
    try{
        const response = await fetch(`${API_URL}/users/${username}`)

        if(!response.ok){
            throw new Error("Erro ao buscar usuário.")
        }
        return await response.json()

    }catch(error){
        console.error("Erro: ", error)
        throw error
    }

}

