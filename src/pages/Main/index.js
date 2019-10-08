import React, { Component } from 'react';

import { FaSearch } from 'react-icons/fa';
import Container from '../../components/Container';
import Header from '../Header';
import api from '../../services/api';
import { PokeInfo, PokeFilter, SubmitButton, PokedexResults } from './styles';

export default class Main extends Component {
    state = {
        pokemons: [],
        loading: false,
        search: '',
        offset: 0,
        limit: 12,
    };

    async componentDidMount() {
        await this.loadPokemons();
    }

    loadPokemons = async () => {
        const { search, offset, limit, pokemons } = this.state;

        const param = search
            ? 'pokemon/' + search
            : 'pokemon/?limit=' + limit + '&offset=' + offset;
        const result = await api.get(param);

        let pokes = [];

        if (result.data.results) {
            const poke = await Promise.all(
                result.data.results.map(async result => {
                    result = await api.get(result.url);
                    return result.data;
                })
            );

            pokes.push(...pokemons, ...poke);
        } else {
            pokes.push(result.data);
        }
        console.log(pokes);
        this.setState({
            pokemons: pokes,
            search: '',
        });
    };

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        await this.setState({ pokemons: [] });
        await this.loadPokemons();
    };

    render() {
        const { search, pokemons } = this.state;

        if (!pokemons) {
            return <div> Pokemon não encontrado </div>;
        }

        return (
            <>
                <Header />
                <PokeFilter onSubmit={this.handleSubmit}>
                    <div className="search">
                        <h1>Nome ou Número</h1>
                        <div className="search-submit">
                            <input
                                type="input"
                                value={search}
                                onChange={this.handleChange}
                            />
                            <SubmitButton>
                                <FaSearch></FaSearch>
                            </SubmitButton>
                        </div>
                        <p>
                            Use a pesquisa avançada para explorar Pokémon por
                            tipo, fraqueza, habilidade e mais!
                        </p>
                    </div>
                    <h2>
                        Realize a busca por Pokémon pelo nome ou usando o número
                        do Pokédex Nacional.
                    </h2>
                </PokeFilter>
                <Container>
                    <PokedexResults>
                        {pokemons.map(pokemon => (
                            <PokeInfo key={pokemon.id}>
                                <img
                                    src={pokemon.sprites.front_default}
                                    alt=""
                                />
                                <div>
                                    <p>Nº {pokemon.id}</p>
                                    <h1>{pokemon.name}</h1>
                                    {pokemon.types.map(type => (
                                        <span
                                            key={type.type.name}
                                            className={type.type.name}
                                        >
                                            {type.type.name}
                                        </span>
                                    ))}
                                </div>
                            </PokeInfo>
                        ))}
                    </PokedexResults>
                </Container>
            </>
        );
    }
}
