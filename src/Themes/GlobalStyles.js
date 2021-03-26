import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

  /* Import Fonts */
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');


  /* Reset Style */
  *,*::after,*::before{
    padding:0;
    margin:0;
    box-sizing:border-box;
  }

  /* Adding global HTML Styles */
  html{
      font-size:14px;
      font-family: 'Inter', sans-serif;
      scroll-behavior:smooth;
  }

  body{
    background-color:${({ theme }) => theme.background};
    color:${({ theme }) => theme.textPrimary};
    transition:all .4s;
  }

`;

export default GlobalStyle;
