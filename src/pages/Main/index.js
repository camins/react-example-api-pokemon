import React, { Component } from 'react';

import { FaSearch } from 'react-icons/fa';
import Container from '../../components/Container';
import Header from '../Header';
import api from '../../services/api';
import { PokeInfo, PokeFilter, SubmitButton, PokedexResults } from './styles';

export default class Main extends Component {
    state = {
        pokemons: [],
        newPoke: '',
        loading: false,
        search: '',
        offset: 0,
        limit: 12,
    };

    async componentDidMount() {
        await this.loadPokemons();
    }

    loadPokemons = async () => {
        const { search, offset, limit } = this.state;

        const param = search
            ? 'pokemon/' + search
            : 'pokemon/?limit=' + limit + '&offset=' + offset;
        const result = await api.get(param);

        if (result.data.results && result.data.results.length > 1) {
            const promises = result.data.results.map(async result => {
                result = await api.get(result.url);
                return result;
            });
            const pokes = await Promise.all(promises);
            console.log(pokes);

            this.setState({
                pokemons: pokes,
                search: '',
            });
        } else {
            this.setState({
                pokemons: result.data,
                search: '',
            });
        }
    };

    render() {
        const { newPoke, pokemons } = this.state;

        return (
            <>
                <Header />
                <PokeFilter>
                    <div className="search">
                        <h1>Nome ou Número</h1>
                        <div className="search-submit">
                            <input type="input" value={newPoke} />
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
                            <PokeInfo key={pokemon.data.id}>
                                <img src={pokemon.data.sprites.front_default} />
                                <div>
                                    <p>Nº {pokemon.data.id}</p>
                                    <h1>{pokemon.data.name}</h1>
                                </div>
                            </PokeInfo>
                        ))}
                    </PokedexResults>
                </Container>
            </>
        );
    }
}
