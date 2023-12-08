import { jsx } from 'react/jsx-runtime';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme.js';

function MainThemeProvider(props) {
    return jsx(ThemeProvider, { theme: theme, children: props.children });
}

export { MainThemeProvider };
