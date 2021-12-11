import styled from 'styled-components';

const Wrapper = styled.div`
    margin-bottom: 3rem;
    color: ${props => props.theme.primaryTextColor};

    h2 {
        margin: 2.5rem 0;

        @media screen and (min-width: 1100px) {
        flex-direction: row;
        margin: 0;
        margin-bottom: 2.5rem;
    }
    }
`;

const DetailsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 660px) {
        flex-direction: row;
    }
`;

const PrimaryDetails = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;

    li {
        margin-bottom: 0.7rem;
    }
`;

const SecondaryDetails = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    margin-top: 2.5rem;

    li {
        margin-bottom: 0.7rem;
    }

    @media screen and (min-width: 660px) {
        flex-direction: row;
        align-items: top;
        margin: 0;
        margin-left: 7rem;
    }
`;

const Details = props => {
    return (
        <Wrapper>
            <h2>{props.countryDetails.name}</h2>
            <DetailsWrapper>
                <PrimaryDetails>
                    <li>
                        <b>Native Name: </b>
                        {props.countryDetails.nativeName}
                    </li>
                    <li>
                        <b>Population: </b>
                        {props.countryDetails.population.toLocaleString()}
                    </li>
                    <li>
                        <b>Region: </b>
                        {props.countryDetails.region}
                    </li>
                    <li>
                        <b>Sub Region: </b>
                        {props.countryDetails.subregion}
                    </li>
                    <li>
                        <b>Capital: </b>
                        {props.countryDetails.capital}
                    </li>
                </PrimaryDetails>
                <SecondaryDetails>
                    <li>
                        <b>Top Level Domain: </b>
                        {props.countryDetails.topLevelDomain}
                    </li>
                    <li>
                        <b>Currencies: </b>
                        {props.countryDetails.currencies.map(currency => {
                            return currency.name;
                        }).join(', ')}
                    </li>
                    <li>
                        <b>Languages: </b>
                        {props.countryDetails.languages.map(language => {
                            return language.name;
                        }).join(', ')}
                    </li>
                </SecondaryDetails>
            </DetailsWrapper>
        </Wrapper>
    );
};

export default Details;
