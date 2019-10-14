import React, { Component } from 'react';

import { FaSearch, FaSpinner } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../../components/Container';
import PokedexResults from '../../components/PokedexResult';
import Loading from '../../components/Loading';
import Header from '../Header';
import api from '../../services/api';
import InfiniteScroll from 'react-infinite-scroller';
import { PokeInfo, PokeFilter, SubmitButton } from './styles';

export default class Main extends Component {
    state = {
        pokemons: [],
        search_flag: false,
        loading: false,
        search: '',
        offset: 0,
        limit: 12,
        hasMoreItems: true,
    };

    async componentDidMount() {
        await this.loadPokemons();
    }

    loadPokemons = async () => {
        const { search, pokemons, offset, limit } = this.state;

        const param = search
            ? `pokemon/${search}`
            : `pokemon/?limit=${limit}&offset= ${offset}`;
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

        const newOffset = search ? 0 : offset + limit;
        const moreItems = newOffset >= 807 ? false : true;

        this.setState({
            pokemons: pokes,
            search: '',
            offset: newOffset,
            search_flag: search ? true : false,
            loading: false,
            hasMoreItems: moreItems,
        });
    };

    handleChange = event => {
        this.setState({ search: event.target.value });
    };

    handleSubmit = async event => {
        event.preventDefault();

        await this.setState({
            pokemons: [],
            loading: true,
        });
        await this.loadPokemons();
    };

    render() {
        const {
            search,
            pokemons,
            search_flag,
            loading,
            hasMoreItems,
        } = this.state;
        const loader = (
            <PokedexResults>
                <Loading>
                    <FaSpinner color="#696969" size={30} />
                </Loading>
            </PokedexResults>
        );

        var items = [];
        pokemons.map(pokemon => {
            items.push(
                <PokeInfo key={pokemon.id}>
                    <Link to={`/pokemon/${encodeURIComponent(pokemon.name)}`}>
                        <img
                            src={pokemon.sprites.front_default}
                            alt="pokemon"
                        />
                    </Link>
                    <div>
                        <p>Nº {pokemon.id}</p>
                        <h1>
                            {pokemon.name.replace(/(?:^|\s)\S/g, function(a) {
                                return a.toUpperCase();
                            })}
                        </h1>
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
            );
        });

        const isLoading = loading ? (
            loader
        ) : (
            <PokedexResults> {items} </PokedexResults>
        );

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
                    {search_flag ? (
                        isLoading
                    ) : (
                        <InfiniteScroll
                            pageStart={0}
                            loadMore={this.loadPokemons.bind(this)}
                            hasMore={hasMoreItems}
                            loader={loader}
                        >
                            <PokedexResults>{items}</PokedexResults>
                        </InfiniteScroll>
                    )}
                </Container>
            </>
        );
    }
}
