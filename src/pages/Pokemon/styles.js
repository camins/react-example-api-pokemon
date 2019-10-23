import styled from 'styled-components';

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
        svg {
            background: #a4a4a424;
        }
    }
`;
