import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakponits'

export const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
    :focus {
      outline: 0;
      box-sizing: 0 0 0 2px ${(props) => props.theme['gray-400']};
    }
    :root {
      font-size: 16px;

      @media (max-width: ${DEVICE_BREAKPOINTS.MD}){
        font-size: 12px;
      }
    }

    body{
      background-color: ${(props) => props.theme['gray-900']};
      -webkit-font-smoothing: antialiased;
      color: ${(props) => props.theme.white};
    }
    body, input, textarea, button{
      font: 400 1rem 'Roboto','Oswald', sans-serif
    }
    ::-webkit-scrollbar {
      width: 12px;
    }
    ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.rosa};
    border-radius: 6px;
    }
    ::-webkit-scrollbar-track {
      background-color: ${(props) => props.theme.claro};
    }
    * {
    scrollbar-width: thin;
    scrollbar-color: ${(props) => props.theme.rosa} #eee;
    }
    *::-webkit-scrollbar-thumb {
      background-color: ${(props) => props.theme.rosa};
    }

  
`
