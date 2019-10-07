import { createGlobalStyle } from 'styled-components';
import img from '../assets/body_bg.png'

export default createGlobalStyle`
  *{
    margin:0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root{
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    background: #424242 url(${img}) !important;
  }

  body, input, button {
    color: #222;
    font-size: 14px;
    font-family: "Flexo-Regular",arial,sans-serif;
  }

  button {
    cursor: pointer;
  }
`;
