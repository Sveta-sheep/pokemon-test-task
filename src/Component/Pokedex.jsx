import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemons } from "../redux/pokemons"

export const Pokedex = (props) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pokemons = useSelector(state => state.pokemons.pokemons)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons(currentPage))
    }, [currentPage])

    return <div className='App'>
        <h1>Pokedex</h1>
        <div>
            {
                pokemons.map(p => <div>{p.name}</div>)
            }
        </div>
        <button onClick={() => setCurrentPage(prev => prev + 1)}>
            Load More
        </button>
    </div>
}