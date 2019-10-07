import styled from 'styled-components';

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 4px;
    padding: 0px 5px;
    margin: 20px 10px;
    font-family: 'Flexo-Bold', arial, sans-serif;

    img {
        width: 150px;
        background: #f0f8ff;
        border-radius: 4px;
    }

    p {
        color: #919191;
        line-height: 130%;
        font-size: 80%;
        padding-top: 2px;
        font-weight: 800;
        margin: 0.5em 0;
    }

    div {
        padding-left: 7.2525%;
    }
`;

export const PokeFilter = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
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
    color: #fff;
    font-size: 15px;
    border: 0;
    padding: 0 15px;
    margin-left: 10px;
    border-radius: 4px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const PokedexResults = styled.div`
    background-color: #bbbbbb96;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    width: 800px;
    top: 0;
    padding: 30px 20px;
    justify-content: center;
`;
