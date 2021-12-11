import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Layout/Header';
import CountryIndex from './components/Countries/CountryIndex';
import CountryDetails from './components/Countries/CountryDetails/CountryDetails';
import styled from 'styled-components';
import { ThemeProvider } from 'styled-components';
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
    const [theme, setTheme] = useState(getTheme);

    const themeChangeHandler = () => {
        if (theme === 'light') {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    };

    function getTheme() {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            return localTheme;
        }
        localStorage.setItem('theme', 'light');
        return 'light';
    };

    return (
        <BrowserRouter>
            <ThemeProvider theme={themes[theme]}>
                <Wrapper>
                    <Header onThemeChange={themeChangeHandler} theme={theme} />
                    <Routes>
                        <Route path="/" element={<Navigate to="/countries" />} />
                        <Route path="countries" element={<CountryIndex />} />
                        <Route path='countries/:countryId' element={<CountryDetails />} />
                    </Routes>
                </Wrapper>
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;

