import { useState } from 'react';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
import FilterForm from './components/FilterForm/FilterForm';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import FilterProvider from './store/FilterProvider';
import lightTheme from './themes/light-theme';
import darkTheme from './themes/dark-theme';

const themes = {
    light: lightTheme,
    dark: darkTheme,
};

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: ${props => props.theme.pageBackgroundColor};
`;

const App = () => {
    const [theme, setTheme] = useState('light');

    const themeChangeHandler = () => {
        theme === 'light' && setTheme('dark');
        theme === 'dark' && setTheme('light');
    };

    return (
        <ThemeProvider theme={themes[theme]}>
            <Wrapper>
                <Header onThemeChange={themeChangeHandler} theme={theme} />
                <ThemeProvider theme={themes[theme]}>
                    <FilterProvider>
                        <FilterForm />
                        <Main />
                    </FilterProvider>
                </ThemeProvider>
            </Wrapper>
        </ThemeProvider>
    );
};

export default App;

