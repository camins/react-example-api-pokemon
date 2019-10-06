import styled from 'styled-components';

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    background: #f0f8ff;
    border-radius: 4px;
    padding: 0px 5px;
    margin: 10px 10px;

    img {
        width: 150px;
    }

    p {
        color: red;
    }
`;

export const PokeFilter = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background: #313131;
    color: white;
    font-size: 20px;
    padding: 5px;
    width: 100%;
    height: 170px;
    -webkit-font-smoothing: antialiased;

    h2 {
        font-size: 15px;
        background: #4dad5b;
        border-radius: 5px;
        padding: 20px;
        margin: 2px 100px;
        width: 400px;
    }

    .search {
        margin-top: 2px;
        margin-left: 250px;
        width: 450px;

        input {
            color: #313131;
            width: 100%;
            border: 3px solid #616161;
            font-size: 20px;
            border-radius: 5px;
            padding: 5px 0;
            line-height: 1.5;
            text-indent: 7px;
        }

        p {
            font-size: 15px;
            margin-top: 5px;
        }
    }

    .search-submit {
        display: flex;
        flex-direction: row;
    }
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
}))`
    background: #ee6b2f;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokedexResults = styled.div`
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 800px;
    top: 0;
    justify-content: center;
`;
