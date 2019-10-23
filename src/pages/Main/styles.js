import styled from 'styled-components';

export const PokeInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 150px;
    font-size: 80%;
    justify-content: space-around;
    align-items: flex-start;
    border-radius: 4px;
    padding: 0px 5px;
    margin: 20px 10px;
    font-family: 'FlexoW01-Bold', arial, sans-serif;
    position: relative;

    a > img {
        width: 150px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 1px 1px 10px 0 rgba(0, 0, 0, 0.1);
        :hover {
            box-shadow: 10px 15px 25px 0 rgba(0, 0, 0, 0.2);
            border: 3px solid #616161;
            cursor: pointer;
        }
    }

    p {
        color: #919191;
        line-height: 130%;
        font-size: 95%;
        padding-top: 2px;
        font-weight: 800;
        margin: 0.5em 0;
    }

    div {
        padding-left: 7.2525%;
    }

    h1 {
        margin-bottom: 5px;
    }

    span {
        border-radius: 3px;
        padding: 2px 15px;
        margin: 0 5px 0 0;
        font-weight: 200;
    }
`;

export const PokeFilter = styled.form`
    display: flex;
    flex-direction: row;
    align-items: center;
    background: linear-gradient(180deg, #313131 40%, #31313110);
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
