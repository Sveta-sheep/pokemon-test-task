import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPokemonInfoById, getPokemons } from "../../redux/pokemons"
import Pokemon from "../Pokemon/Pokemon"
import PokemonWithInfo from "../Pokemon/PokemonWithInfo/PokemonWithInfo";
import s from './Pokedex.module.css';

export const Pokedex = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const { pokemons } = useSelector(state => state.pokemons)
    const [selectedPokemon, setSelectedPokemon] = useState(null)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemons(currentPage))
    }, [currentPage])

    const handlePokemonClick = (id) => {
        setSelectedPokemon(pokemons?.find(pokemon => pokemon?.id === id));
    }

    const pokemonsJSX = useMemo(() => {
        return pokemons.map(p => <Pokemon onPokemonClick={handlePokemonClick} pokemon={p} key={p.name} />);
    }, [pokemons])

    return <div className={s.appWrapper}>
        <h1 className={s.headerPokedex}>Pokedex</h1>
        <div className={s.pokemonsCardsWrapper}>
            <div className={s.grid}>
                <div className={s.pokemonCards}>
                    {pokemonsJSX}
                </div>
                <button onClick={() => setCurrentPage(prev => prev + 1)}>
                    Load More
                </button>
            </div>
            {selectedPokemon && <PokemonWithInfo pokemon={selectedPokemon} />}
        </div>
    </div>
}