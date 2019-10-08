import { createGlobalStyle } from 'styled-components';
import img from '../assets/body_bg.png';

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

  .fire {
        background: #fd7d24;
        color: #fff;
    }

    .grass {
        background: #9bcc50;
    }

    .poison {
        background: #b97fc9;
        color: #fff;
    }

    .water {
        background: #b97fc9;
        color: #fff;
    }

    .flying {
        background: linear-gradient(180deg, #3dc7ef 50%, #bdb9b8 50%);
    }

    .bug {
        background: #729f3f;
    }

    .normal {
        background: #a4acaf;
    }

    .electric {
        background: #eed535;
    }

    .ground {
        background: linear-gradient(180deg, #f7de3f 50%, #ab9842 50%);
    }

    .fairy {
        background: #fdb9e9;
    }

    .ghost {
        background: #7b62a3;
        color: #fff;
    }

    .ice {
        background: #51c4e7;
    }

    .rock {
        background: #a38c21;
        color: #fff;
    }

    .psychic {
        background: #f366b9;
        color: #fff;
    }

    .fighting {
        background: #d56723;
        color: #fff;
    }

    .dragon {
        background: linear-gradient(180deg, #53a4cf 50%, #f16e57 50%);
        color: #fff;
    }

    .dark {
        background: #707070;
        color: #fff;
    }

    .steel {
        background: #9eb7b8;
    }
`;
