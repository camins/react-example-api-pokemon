import styled from 'styled-components';

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    padding: 0px 5px;
    -webkit-font-smoothing: antialiased;

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

    img {
        background: #fff;
        border-radius: 20px;
        width: 300px;
    }

    .info-geral {
        display: flex;
        flex-direction: row;
        align-items: center;

        .info {
            margin: 5px 50px;
            border-radius: 5px;
            background: #4dad5b;
            display: flex;
            padding: 30px;
            flex-direction: row;

            .info-esquerda {
                margin-right: 30px;
            }
        }

        h1 {
            color: #fff;
            font-size: 120%;
        }

        span {
            color: #212121;
            font-size: 125%;
        }
    }
`;
