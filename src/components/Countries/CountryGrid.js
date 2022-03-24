import { Fragment } from "react";
import styled from "styled-components";
import Loading from "../UI/Loading";
import Country from "./Country";

const StyledGrid = styled.main`
    display: grid;
    grid-gap: 4rem;
    justify-content: center;
    margin: 0 2rem;
    margin-bottom: 4rem;

    @media screen and (min-width: 680px) {
        grid-template-columns: repeat(2, 17rem);
        margin: 0 4rem;   
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

const LoadingWrapper = styled.div`
    margin: auto;
`;

const CountryGrid = props => {
    return (
        <Fragment>
            {props.countries.length > 0 &&
                <StyledGrid>
                    {props.countries.map(countryDetails => {
                        return <Country countryDetails={countryDetails} key={countryDetails.alpha3Code} />;
                    })}
                </StyledGrid>
            }
            {props.countries.length === 0 &&
                <LoadingWrapper>
                    <Loading />
                </LoadingWrapper>
            }
        </Fragment>
    );
};

export default CountryGrid;
