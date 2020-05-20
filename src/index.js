import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import CssBaseline from '@material-ui/core/CssBaseline';
import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import grey from '@material-ui/core/colors/grey';
import { AlertBarProvider } from './AlertBarContext';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    secondary: {
      main: grey[600],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AlertBarProvider>
      <App />
    </AlertBarProvider>
  </ThemeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
