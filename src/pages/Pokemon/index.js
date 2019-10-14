import React, { Component } from 'react';
import Container from '../../components/Container';
import Loading from '../../components/Loading';
import PokedexResults from '../../components/PokedexResult';
import { FaSpinner } from 'react-icons/fa';
import api from '../../services/api';
import Header from '../Header';
import { PokeInfo } from './styles';

export default class Pokemon extends Component {
    state = {
        pokemon: {},
        loading: true,
    };

    async componentDidMount() {
        const { match } = this.props;
        const pokemon = await api.get(`/pokemon/${match.params.pokemon}`);

        this.setState({
            pokemon: pokemon.data,
            loading: false,
        });
    }

    render() {
        const { pokemon, loading } = this.state;

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
                                <h1>Nº {pokemon.id}</h1>
                            </div>
                            <div className="info-geral">
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt="pokemon"
                                />
                                <div className="info">
                                    <div className="info-esquerda">
                                        <h1>Heigth</h1>
                                        <span>{pokemon.height} m</span>
                                        <h1>Weight</h1>
                                        <span>{pokemon.weight} kg</span>
                                    </div>
                                    <div>
                                        <h1>Gender</h1>
                                        <span>Macho</span>
                                        {pokemon.sprites.front_female && (
                                            <span>Fêmea</span>
                                        )}
                                        <h1>Abilities</h1>
                                        {pokemon.abilities.map(ability => (
                                            <span key={ability.name}>
                                                {ability.ability.name}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </PokeInfo>
                    </PokedexResults>
                </Container>
            </>
        );
    }
}
