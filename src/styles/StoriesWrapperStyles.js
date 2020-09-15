import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
  }
  *, *:before, *:after {
    -webkit-box-sizing: inherit;
            box-sizing: inherit;
  }
  body {
    margin: 0;
    padding: 0;
    line-height: 1;
    color: #333332;
    background-color: #f8f8f8;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 16px;
  }
  ul {
    margin: 0;
    padding: 0;
  }
`;

export const StoriesWrapper = styled.main`
  max-width: 980px;
  padding: 20px 15px;
  margin: auto;
  border:1px solid #dcdcdc;
  box-shadow: 0px 10px 16px 0px rgba(0,0,0,0.75);
`;