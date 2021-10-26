import React from 'react'
import { getNewId } from '../../../utils/getNewId'
import { setFirstLetterToUpperCase } from '../../../utils/setFirstLetterToUpperCase'
import s from './PokemonWithInfo.module.css'


const getInfoForTable = (pokemonWithInfo,statName) => {
    for (let i = 0; i < pokemonWithInfo.stats.length; i++) {
        if (pokemonWithInfo?.stats[i].stat.name === statName) {
            return pokemonWithInfo?.stats[i].base_stat
        }
    }
}

const PokemonWithInfo = ({ pokemon }) => {
    console.log(pokemon);
    return (
        <div className={s.PokemonWithInfo}>
            {pokemon.hasInfo ?
                <>
                    <img src={pokemon.sprites.front_default} alt='pokemon image' />
                    <div className={s.header}>
                        <p>{setFirstLetterToUpperCase(pokemon.name)}</p>
                        <p>{getNewId(pokemon.id)}</p>
                    </div>
                    <table>
                        <tr>
                            <td>Type</td>
                            <td>{pokemon.types.map(t => <p>{setFirstLetterToUpperCase(t.type.name)}</p>)}</td>
                        </tr>
                        <tr>
                            <td>Attack</td>
                            <td>{getInfoForTable(pokemon, 'attack')}</td>
                        </tr>
                        <tr>
                            <td>Defense</td>
                            <td>{getInfoForTable(pokemon, 'defense')}</td>
                        </tr>
                        <tr>
                            <td>HP</td>
                            <td>{getInfoForTable(pokemon, 'hp')}</td>
                        </tr>
                        <tr>
                            <td>SP Attack</td>
                            <td>{getInfoForTable(pokemon, 'special-attack')}</td>
                        </tr>
                        <tr>
                            <td>SP Defense</td>
                            <td>{getInfoForTable(pokemon, 'special-defense')}</td>
                        </tr>
                        <tr>
                            <td>Speed</td>
                            <td>{getInfoForTable(pokemon, 'speed')}</td>
                        </tr>
                        <tr>
                            <td>Weight</td>
                            <td>{pokemon.weight}</td>
                        </tr>
                        <tr>
                            <td>Total moves</td>
                            <td>{pokemon.moves.length}</td>
                        </tr>
                    </table>
                </>
                :
                'Loading...'
            }
        </div>
    )
}

export default PokemonWithInfo;
