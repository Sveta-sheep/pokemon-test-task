import axios from "axios"


const instance = axios.create({
    baseURL: 'https://pokeapi.co/'
})

export const pokemonsAPI = {
    getPokemonChunk(limit = 12, offset = 0) {
        return instance.get(`api/v2/pokemon/?limit=${limit}&offset=${offset}`).then(res => res.data.results)
    },

    getPokemonInfo(url) {
        return instance.get(`${url}`).then(res => res.data)
    },

    getPokemonInfoById(id) {
        return instance.get(`api/v2/pokemon/${id}`).then(res => res.data)
    },

    getAllTypes() {
        return instance.get(`api/v2/type?limit=999`).then(res => console.log(res))
    },
}
