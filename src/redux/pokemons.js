import { request } from "../api/api"

const SET_POKEMOMS = 'pokemon-task/pokemons/SET_POKEMONS'

let initialState = {
    pokemons: [],
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMOMS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons]
            }
        default:
            return state
    }
}

export const setPokemons = pokemons => ({type: SET_POKEMOMS, pokemons})

export const getPokemons = (page, count = 12) => async (dispatch) => {
    let data = await request.getPokemonChunk(count, (page - 1) * count)
    dispatch(setPokemons(data))
}