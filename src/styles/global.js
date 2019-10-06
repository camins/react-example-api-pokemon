import { createGlobalStyle } from 'styled-components';

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
    background: #424242 url('https://assets.pokemon.com/static2/_ui/img/chrome/body_bg.png');
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
