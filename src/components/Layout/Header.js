import styled from "styled-components";
import ThemeToggle from "./ThemeToggle";

const StyledHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5rem 4rem;
    background-color: #FFFFFF;
    box-shadow: 0 4px 3px #F0F0F0;

    h1 {
        margin: 0;
        font-size: 1.5em; 
    }
`;

const Header = () => {
    return (
        <StyledHeader>
            <h1>Where in the world?</h1>
            <ThemeToggle />
        </StyledHeader>
    );
};

export default Header;
