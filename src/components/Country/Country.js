import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    box-shadow: 0 0 7px -1px ${props => props.theme.boxShadowColor};
    background-color: ${props => props.theme.componentColor};
    color: ${props => props.theme.primaryTextColor};
    height: 22rem;
    width: 17rem;
    overflow: hidden;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-0.5rem);
    }
`;

const Flag = styled.div`
    height: 45%;
    width: 100%;
    background-image: url(${props => props.flag});
    background-position: center;
    background-size: cover;
`;
const Details = styled.section`
    padding: 0 1.5rem;
    padding-top: 1.5rem;
    
    h3 {
        margin: 0;
    }

    ul {
        list-style: none;
        padding: 0;
    }

    li {
        margin-bottom: 0.3rem;
    }
`;

const Country = props => {
    return (
        <Wrapper>
            <Flag flag={props.countryDetails.flag} />
            <Details>
                <h3>{props.countryDetails.name}</h3>
                <ul>
                    <li><b>Population: </b>{props.countryDetails.population.toLocaleString()}</li>
                    <li><b>Region: </b>{props.countryDetails.region}</li>
                    <li><b>Capital: </b>{props.countryDetails.capital}</li>
                </ul>
            </Details>
        </Wrapper>
    );
};


export default Country;
