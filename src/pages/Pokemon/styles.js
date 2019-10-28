import styled from 'styled-components';
import img from '../../assets/container_bg.png';

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 5px;
    -webkit-font-smoothing: antialiased;
    font-family: 'FlexoW01-Bold', arial, sans-serif;

    .cabecalho {
        display: flex;
        flex-direction: row;
        color: #616161;
        font-size: 200%;
        margin: 20px 10px;

        .name {
            margin-right: 10px;
            color: #212121;
        }
    }

    .info-geral {
        display: flex;
        flex-direction: row;
        align-items: flex-start;

        .info-image {
            width: 300px;
            img {
                width: 300px;
                background: #f2f2f2;
                border-radius: 10px;
            }
        }
        .details {
            margin: 5px 50px;

            .info {
                border-radius: 10px;
                background: #30a7d7;
                display: flex;
                flex-direction: row;

                .info-esquerda {
                    margin: 30px;
                }

                .info-direita {
                    margin: 30px;
                }

                h1 {
                    color: #fff;
                    font-size: 140%;
                    padding: 5px;
                    word-break: break-word;
                }

                p {
                    color: #212121;
                    padding: 5px;
                    font-size: 115%;
                }

                svg {
                    padding: 5px;
                }
            }

            .type {
                padding: 20px 0;

                h1 {
                    padding: 8px 0;
                }

                span {
                    border-radius: 3px;
                    padding: 2px 15px;
                    margin: 0 5px 0 0;
                    font-weight: 200;
                }
            }
        }
    }

    .chart {
        background: #a4a4a424;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 20px;

        h1 {
            padding: 10px;
            margin-left: 60px;
        }
    }

    .evolutions {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        background: #424242 url(${img}) !important;
        border-radius: 20px;
        padding: 10px;
        margin: 50px 30px;

        h1 {
            color: #fff;
            padding: 30px 0px 0px 30px;
        }

        .pokemons {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            font-family: 'FlexoW01-Regular', arial, sans-serif;
            width: 800px;

            .details {
                margin-top: 30px;
                display: flex;
                flex-direction: column;
                align-items: center;

                a {
                    display: contents;
                }

                a > img {
                    background-color: #616161;
                    border: 5px solid #fff;
                    border-radius: 50%;
                    box-shadow: 0 4px 4px 0px #212121;
                    width: 70%;
                }

                .match {
                    display: flex;
                    flex-direction: row;
                    font-size: 20px;
                    margin: 0.75em 0;
                    text-align: center;
                    color: #fff;

                    span {
                        color: #a4acaf;
                        padding: 0px 5px;
                    }
                }
            }
        }
    }
`;
