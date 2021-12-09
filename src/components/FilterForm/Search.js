import { useEffect, useState } from "react";
import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.4rem;
    border-radius: 5px;
    height: 3.5rem;
    width: 30%;
    min-width: 20rem;
    background-color: #FFFFFF;
    box-shadow: 0 0 10px #F0F0F0;
    box-sizing: border-box;

    @media screen and (max-width: 769px) {
        margin-bottom: 3rem;
        width: 100%;
        min-width: 0;
    }
`;

const StyledInput = styled.input`
    flex-grow: 1;
    height: 100%;
    margin-left: 1.5em;
    outline: none;
    border: none;
    padding: 0;
    text-decoration: none;
    font: inherit;
    font-size: 0.9rem;
    font-weight: 600;

    &::placeholder {
        color: #808080;
    }
`;

const StyledLabel = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const iconStyles = { color: "#808080" };

export const Search = props => {
    const [query, setQuery] = useState('');

    const queryChangeHandler = event => {
        setQuery(event.target.value);
    };

    useEffect(() => {
        const identifier = setTimeout(() => {
            props.onSearchChange(query);
        }, 350);

        return () => {
            clearTimeout(identifier);
        };
    });

    return (
        <Wrapper>
            <StyledLabel htmlFor="search">
                <FaSearch style={iconStyles} />
            </StyledLabel>
            <StyledInput
                placeholder="Search for a country..."
                spellCheck="false"
                id="search"
                value={query}
                onChange={queryChangeHandler}
            />
        </Wrapper>
    );
};

export default Search;