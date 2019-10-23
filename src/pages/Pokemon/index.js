import React, { Component } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import PokedexResults from '../../components/PokedexResult';
import { FaSpinner } from 'react-icons/fa';
import { IoMdFemale, IoMdMale } from 'react-icons/io';
import api from '../../services/api';
import Header from '../Header';
import { PokeInfo } from './styles';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';

export default class Pokemon extends Component {
    state = {
        pokemon: {},
        pokemonSpecie: {},
        evolution: {},
        loading: true,
        data: [],
    };

    async componentDidMount() {
        const { match } = this.props;
        const [pokemon, pokemonSpecie] = await Promise.all([
            api.get(`/pokemon/${match.params.pokemon}`),
            api.get(`/pokemon-species/${match.params.pokemon}`),
        ]);

        const data = pokemon.data.stats.map(stat => {
            return {
                stat: stat.stat.name
                    .replace('-', ' ')
                    .replace(/(?:^|\s)\S/g, function(a) {
                        return a.toUpperCase();
                    }),
                base_stat: stat.base_stat,
            };
        });

        const evolution = await api.get(pokemonSpecie.data.evolution_chain.url);

        this.setState({
            pokemon: pokemon.data,
            pokemonSpecie: pokemonSpecie.data,
            evolution: evolution.data.chain,
            loading: false,
            data,
        });
    }

    render() {
        const { pokemon, pokemonSpecie, loading, data, evolution } = this.state;

        if (loading) {
            return (
                <Container>
                    <PokedexResults>
                        <Loading>
                            <FaSpinner color="#696969" size={20} />
                        </Loading>
                    </PokedexResults>
                </Container>
            );
        }

        return (
            <>
                <Header />
                <Container>
                    <PokedexResults>
                        <PokeInfo>
                            <div className="cabecalho">
                                <h1 className="name">
                                    {pokemon.name.replace(
                                        /(?:^|\s)\S/g,
                                        function(a) {
                                            return a.toUpperCase();
                                        }
                                    )}
                                </h1>
                                <h1>
                                    Nº{' '}
                                    {pokemon.id
                                        .toString()
                                        .replace(/\d+/g, function(x) {
                                            if (x.length === 1) return '00' + x;
                                            else if (x.length === 2)
                                                return '0' + x;
                                            else return x;
                                        })}
                                </h1>
                            </div>
                            <div className="info-geral">
                                <div className="info-image">
                                    <img
                                        src={`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${pokemon.id
                                            .toString()
                                            .replace(/\d+/g, function(x) {
                                                if (x.length === 1)
                                                    return '00' + x;
                                                else if (x.length === 2)
                                                    return '0' + x;
                                                else return x;
                                            })}.png`}
                                        alt="pokemon"
                                    />
                                </div>
                                <div className="details">
                                    <div className="info">
                                        <div className="info-esquerda">
                                            <h1>Heigth</h1>
                                            <p>{pokemon.height / 10} m</p>
                                            <h1>Weight</h1>
                                            <p>{pokemon.weight / 10} kg</p>
                                        </div>
                                        <div className="info-direita">
                                            <h1>Gender</h1>
                                            <IoMdMale
                                                color="#212121"
                                                size={27}
                                            />
                                            {pokemonSpecie.has_gender_differences && (
                                                <IoMdFemale
                                                    color="#212121"
                                                    size={27}
                                                />
                                            )}
                                            <h1>Abilities</h1>
                                            {pokemon.abilities.map(ability => (
                                                <p key={ability.name}>
                                                    {ability.ability.name.replace(
                                                        /(?:^|\s)\S/g,
                                                        function(a) {
                                                            return a.toUpperCase();
                                                        }
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="type">
                                        <h1>Type:</h1>
                                        {pokemon.types.map(type => (
                                            <span
                                                key={type.type.name}
                                                className={type.type.name}
                                            >
                                                {type.type.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="chart">
                                <BarChart
                                    width={800}
                                    height={300}
                                    data={data}
                                    margin={{
                                        top: 5,
                                        right: 30,
                                        left: 20,
                                        bottom: 5,
                                    }}
                                >
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="stat" />
                                    <YAxis />
                                    <Bar
                                        dataKey="base_stat"
                                        barSize={30}
                                        fill="#30a7d7"
                                    />
                                </BarChart>
                            </div>

                            <div className="evolutions"></div>
                        </PokeInfo>
                    </PokedexResults>
                </Container>
            </>
        );
    }
}
