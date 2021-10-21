import { applyMiddleware, combineReducers, createStore } from "redux";
import { pokemonsReducer } from "./pokemons";
import thunk from "redux-thunk";

const reducers = combineReducers({
    pokemons: pokemonsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store