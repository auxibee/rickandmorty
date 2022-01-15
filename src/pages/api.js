import axios from 'axios'

const baseURL = "https://rickandmortyapi.com/api/"

export const fetchAxios = axios.create({baseURL})

export const getCharacter = async () => {
    await fetchAxios.get("character")
}

export const getEpisodes = async () => {
    return await fetchAxios.get("episode")
}

export const getLocation = async () => {
     
     return await fetchAxios.get("location")
     
}