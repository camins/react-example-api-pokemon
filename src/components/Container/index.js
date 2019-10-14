import styled from 'styled-components';
import img from '../../assets/container_bg.png';

const Container = styled.div`
    max-width: 1200px;
    background-image: url(${img});
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    clear: both;
    padding: 0px 30px;
    margin: auto;
    display: flex;
    justify-content: center;

    h1 {
        align-items: center;
        svg {
            margin-right: 10px;
        }
    }
`;

export default Container;
