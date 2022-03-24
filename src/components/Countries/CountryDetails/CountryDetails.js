import { useState, useEffect, Fragment } from 'react';
import { useParams } from 'react-router-dom';
import api from "../../../services/api";
import styled from 'styled-components';
import BackButton from './BackButton';
import CountryFlag from './CountryFlag';
import Details from './Details';
import BorderCountries from './BorderCountries';
import Loading from '../../UI/Loading';

const StyledNav = styled.nav`
    display: flex;
    align-items: center;
    margin: 3rem 2rem;

    @media screen and (min-width: 1100px) {
        margin: 3rem 5rem;
    }

`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 2rem;

    @media screen and (min-width: 1100px) {
        flex-direction: row;
        justify-content: space-around;
        margin: 0 5rem;
    }
`;

const FlagWrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    overflow: hidden;
    @media screen and (min-width: 1100px) {
        flex: 1;
        margin-right: 4rem;
    }   
`;

const DetailsWrapper = styled.div`
    width: 100%;
    max-width: 50rem;
    margin: auto;

    @media screen and (min-width: 1100px) {
        flex: 1;
        margin: 0;
        margin-left: 4rem;
    }
`;

const CountryDetails = () => {
    const params = useParams();
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [countryData]);

    useEffect(() => {
        async function fetchData() {
            const fields = ['name', 'nativeName', 'population', 'region', 'subregion', 'capital', 'topLevelDomain', 'currencies', 'languages', 'borders', 'flag'];
            try {
                const response = await api.get(`/alpha/${params.countryId}?fields=${fields.toString()}`);
                setCountryData(response.data);
            } catch (err) {
                console.log('An error has occurred!', err);
            }
        }
        fetchData();
    }, [params.countryId]);

    return (
        <Fragment>
            <StyledNav>
                <BackButton />
            </StyledNav>
            {Object.keys(countryData).length > 0 &&
                <Wrapper>
                    <FlagWrapper>
                        <CountryFlag flagUrl={countryData.flag} />
                    </FlagWrapper>
                    <DetailsWrapper>
                        <Details countryDetails={countryData} />
                        <BorderCountries borderCodes={countryData.borders} />
                    </DetailsWrapper>
                </Wrapper>}
            {Object.keys(countryData).length === 0 &&
                <Loading />
            }
        </Fragment>
    );
};

export default CountryDetails;
