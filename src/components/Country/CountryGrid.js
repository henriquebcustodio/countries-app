import styled from "styled-components";
import Country from "../Country/Country";

const StyledGrid = styled.main`
    display: grid;
    grid-gap: 4rem;
    justify-content: center;
    padding: 0 2rem;

    @media screen and (min-width: 680px) {
        grid-template-columns: repeat(2, 17rem);
        padding: 0 4rem;   
    }

    @media screen and (min-width: 1060px) {
        grid-template-columns: repeat(3, 17rem);
    }

    @media screen and (min-width: 1400px) {
        grid-template-columns: repeat(4, 17rem);
        justify-content: space-between;
    }

    @media screen and (min-width: 1800px) {
        grid-template-columns: repeat(5, 17rem);
    }

`;

const CountryGrid = props => {
    return (
        <StyledGrid>
            {props.countries.map(countryDetails => {
                return <Country countryDetails={countryDetails} key={countryDetails.name} />;
            })}
        </StyledGrid>
    );
};

export default CountryGrid;
