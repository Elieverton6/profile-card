import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Open-sans, Helvetica, sans-serif;
    }

    body, html {
        height: 100%;
    }
`

export default GlobalStyle;