// Copied from HackClub design system. Work in progress.

import React, { Fragment } from 'react';
import { ThemeProvider as Root, createGlobalStyle } from 'styled-components';
// import styledNormalize from 'styled-normalize'
import PropTypes from 'prop-types';
import theme from './theme';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  font-weight: inherit;
  -webkit-appearance: none;
  -moz-appearance: none;
}
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
  color: ${theme.colors.gray[9]};
  font-family: ${theme.font};
  line-height: 1.375;
  font-weight: normal;
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  text-rendering: optimizeLegibility;
}

h1 {
  margin-bottom: 1.45rem;
  font-size: 2.25rem;
}
h2 {
  margin-bottom: 1.45rem;
  font-size: 1.62671rem;
}
h3 {
  margin-bottom: 1.45rem;
  font-size: 1.38316rem;
}
h4 {
  margin-bottom: 1.45rem;
  font-size: 1rem;
}
h5 {
  margin-bottom: 1.45rem;
  font-size: 0.85028rem;
}
h6 {
  margin-bottom: 1.45rem;
  font-size: 0.78405rem;
}

p {
  margin-bottom: 1.45rem;
}

@media only screen and (max-width: 480px) {
  html {
    font-size: 100%;
  }
}

.container {
  margin: '0 auto',
  max-width: 960,
  padding: '1.45rem 1.0875rem',
}

`;

const ThemeProvider = ({ theme, ...props }) => {
  return (
    <Root
      theme={theme}
      {...props}
      children={
        <Fragment>
          <GlobalStyle />
          {props.children}
        </Fragment>
      }
    />
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.object
};

ThemeProvider.defaultProps = {
  theme
};

export default ThemeProvider;
