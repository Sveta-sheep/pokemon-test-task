import axios from "axios"
import { pokemonsAPI } from "../api/api"

const SET_POKEMONS = 'pokemon-task/pokemons/SET_POKEMONS'
const SET_POKEMON_INFO = 'pokemon-task/pokemons/SET_POKEMON_INFO'

let initialState = {
    pokemons: []
}

export const pokemonsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                pokemons: [...state.pokemons, ...action.pokemons]
            }
        case SET_POKEMON_INFO:
            const index = state.pokemons.findIndex(p => p.name === action.pokemonInfo.name);
            if (index !== -1) {
                state.pokemons.splice(index, 1, {
                    ...state.pokemons[index],
                    ...action.pokemonInfo,
                    hasInfo: true
                })
            }

            return {
                ...state,
                pokemons: [...state.pokemons]
            }
        default:
            return state
    }
}

export const setPokemons = pokemons => ({ type: SET_POKEMONS, pokemons })
export const setPokemonInfo = pokemonInfo => ({ type: SET_POKEMON_INFO, pokemonInfo })

export const getPokemons = (page, count = 12) => async (dispatch) => {
    let data = await pokemonsAPI.getPokemonChunk(count, (page - 1) * count)
    dispatch(setPokemons(data))
}

export const getPokemonInfo = (url) => async (dispatch) => {
    let data = await pokemonsAPI.getPokemonInfo(url)
    dispatch(setPokemonInfo(data))
}