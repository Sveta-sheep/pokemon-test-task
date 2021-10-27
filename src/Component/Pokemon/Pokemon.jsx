import React, { useCallback, useEffect, useMemo } from 'react'
import { useDispatch } from 'react-redux'
import { getPokemonInfo } from '../../redux/pokemons';
import { getWordWithFirstCapitalLetter } from '../../utils/getWordWithFirstCapitalLetter';
import Preloader from '../Preloader/Preloader';
import s from './Pokemon.module.css';

const pokemonTypeColors = {
    grass: '#90EE90',
    poison: '#7B68EE',
    fire: 'rgb(254 80 80)',
    electric: '#FFFF00',
    water: '#4682B4',
    ground: '#A0522D',
    flying: '#87CEEB',
    normal: '#C0C0C0',
    fairy: '#E9967A',
    bug: '#DAA520',
    fighting: '#FFB6C1'
}

const Pokemon = ({ pokemon, onPokemonClick }) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPokemonInfo(pokemon.url))
    }, [])

    const pokemonTypes = useMemo(() => {
        return pokemon?.types?.map(t => {
            return <div key={t.id} className={s.pokemonType} style={{ backgroundColor: pokemonTypeColors[t.type.name] }}>
                {getWordWithFirstCapitalLetter(t.type.name)}
            </div>
        }) 
    }, [pokemon?.types]);

    const handleClick = useCallback(() => {
        if (onPokemonClick && pokemon?.id) onPokemonClick(pokemon.id);
    }, [pokemon?.id, onPokemonClick]);

    return (
        <div className={s.pokemonCard} onClick={handleClick}>
            {
                pokemon?.hasInfo ?
                    <>
                        <img src={pokemon.sprites.front_default} alt='pokemon image' />
                        <div className={s.pokemonName}>
                            {getWordWithFirstCapitalLetter(pokemon.name)}
                        </div>
                        <div className={s.typesWrapper}>
                            {pokemonTypes}
                        </div>
                    </>
                    :
                    <Preloader />
            }
        </div>
    )
}

export default Pokemon;