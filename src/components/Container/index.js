import styled from 'styled-components';

const Container = styled.div`
    max-width: 1200px;
    background-image: url('https://assets.pokemon.com/static2/_ui/img/chrome/container_bg.png');
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    clear: both;
    padding: 0px 30px;
    margin: auto;
    display: flex;
    justify-content: center;

    h1 {
        font-size: 20px;
        align-items: center;
        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;
