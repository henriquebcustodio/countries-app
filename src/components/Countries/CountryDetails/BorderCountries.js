import { useState, useEffect, Fragment } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import api from '../../../services/api';
import Loading from '../../UI/Loading';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: max-content;
    margin-bottom: 4rem;
    color: ${props => props.theme.primaryTextColor};

    h3 {
        margin: 0;
        margin-bottom: 1.5rem;
    }
`;

const Borders = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
`;

const Border = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 2rem;
    border-radius: 5px;
    background-color: ${props => props.theme.componentColor};
    box-shadow: 0 0 10px -1px ${props => props.theme.boxShadowColor};
`;

const BorderCountries = props => {
    const [isLoading, setIsLoading] = useState(true);
    const [borderList, setBorderList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            setIsLoading(true);
            try {
                const response = await api.get(`/alpha?codes=${props.borderCodes.toString()}&fields=name,alpha3Code`);
                setBorderList(response.data);
            } catch (err) {
                console.log('An error has occurred', err);
            }
            setIsLoading(false);
        }
        props.borderCodes && fetchData();
    }, [props.borderCodes]);

    return (
        <Fragment>
            <Wrapper>
                {borderList.length > 0 && <h3>Border Countries:</h3>}
                {!isLoading &&
                    <Borders>
                        {borderList.map(border => {
                            return (
                                <Link
                                    to={`../countries/${border.alpha3Code.toLowerCase()}`}
                                    style={{ textDecoration: 'none', color: 'inherit' }}
                                    key={border.alpha3Code}
                                >
                                    <Border>{border.name}</Border>
                                </Link>
                            );
                        })}
                    </Borders>
                }
                {isLoading && <Loading />}
            </Wrapper>
        </Fragment>
    );
};

export default BorderCountries;
