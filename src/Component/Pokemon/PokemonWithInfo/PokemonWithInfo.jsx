import React from 'react'
import { getNewId } from '../../../utils/getNewId'
import { getWordWithFirstCapitalLetter } from '../../../utils/getWordWithFirstCapitalLetter'
import Preloader from '../../Preloader/Preloader'
import s from './PokemonWithInfo.module.css'


const getInfoForTable = (pokemonWithInfo, statName) => {
    return pokemonWithInfo?.stats?.find(info => info.stat.name === statName)?.base_stat;
}

const PokemonWithInfo = ({ pokemon }) => {
    const pokemonData = pokemon.hasInfo ? [
        { title: 'Type', data: pokemon.types.map(t => <div>{getWordWithFirstCapitalLetter(t.type.name)}</div>) },
        { title: 'Attack', data: getInfoForTable(pokemon, 'attack') },
        { title: 'Defense', data: getInfoForTable(pokemon, 'defense') },
        { title: 'HP', data: getInfoForTable(pokemon, 'hp') },
        { title: 'SP Attack', data: getInfoForTable(pokemon, 'special-attack') },
        { title: 'SP Defense', data: getInfoForTable(pokemon, 'special-defense') },
        { title: 'Speed', data: getInfoForTable(pokemon, 'speed') },
        { title: 'Weight', data: pokemon.weight },
        { title: 'Total moves', data: pokemon.moves.length },
    ] : [];

    return (
        <div className={s.PokemonWithInfo}>
            {pokemon.hasInfo ?
                <>
                    <div className={s.avatar}>
                        <img className={s.avatarImg} src={pokemon.sprites.front_default} alt='pokemon image' />
                    </div>
                    <div className={s.header}>
                        <p>{getWordWithFirstCapitalLetter(pokemon.name)}</p>
                        <p>{getNewId(pokemon.id)}</p>
                    </div>
                    <table>
                        {
                            pokemonData.map(d => <tbody>
                                <tr key={d.title}>
                                    <td className={s.tdTitle}>{d.title}</td>
                                    <td className={s.tdData}>{d.data}</td>
                                </tr>
                            </tbody>)
                        }
                    </table>
                </>
                :
                <Preloader />
            }
        </div>
    )
}

export default PokemonWithInfo;
