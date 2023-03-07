import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rickandmortyapi.com/api',
});

export const getCharacters = async () => {
    const { data } = await instance.get('/character');  
    return data;
}

export const getCharacterDetails = async id => {
    const { data } = await instance.get(`/character/${id}`);  
    return data;
}