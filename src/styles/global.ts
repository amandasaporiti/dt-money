import { createGlobalStyle } from "styled-components"

export const GlobalSyles = createGlobalStyle`

  :root{
    --gray-100: #E1E1E6;
    --gray-200: #C4C4CC;
    --gray-400: #7C7C8A;
    --gray-600: #323238;
    --gray-700: #29292E;
    --gray-800: #202024;
    --gray-900: #121214;
    --green-300:  #00B37E; 
    --green-500: #00875F;
    --green-700: #015F43;
    --red-300: #F75A68;
    --red-500: #AA2834;
    --red-700: #7A1921;
    --white: #FFFFFF;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    :focus{
      outline: 0;
      box-shadow: 0 0 0 2px var(--green-500);
    }
  }

  body{
    background: var(--gray-800);
    -webkit-font-smoothing: antialiased;
    color: var(--gray-100);
  }

  body, input, textarea, button {
    font: 400 1rem 'Roboto', sans-serif;
  }

  button{
    cursor: pointer;
  }
`
