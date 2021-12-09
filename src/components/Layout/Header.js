import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background-color: ${props => props.theme.componentColor};
    color: ${props => props.theme.primaryTextColor};
    box-shadow: 0 2px 10px -1px ${props => props.theme.boxShadowColor};
    box-sizing: border-box;
    height: 5rem;

    @media screen and (max-width: 480px) {
        padding: 1.5rem 5%;
    }

    h1 {
        margin: 0;
        font-size: 1.5rem;

        @media screen and (max-width: 480px) {
            font-size: 1rem;
        }
    }
`;

const Header = props => {
    return (
        <StyledHeader>
            <h1>Where in the world?</h1>
            <ThemeToggle onToggle={props.onThemeChange} theme={props.theme} />
        </StyledHeader>
    );
};

export default Header;
