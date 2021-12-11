import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';

const ButtonWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0.7rem 2rem;
    width: 5rem;
    border-radius: 5px;
    background-color: ${props => props.theme.componentColor};
    box-shadow: 0 0 10px -1px ${props => props.theme.boxShadowColor};
    color: ${props => props.theme.primaryTextColor};
    cursor: pointer;

    span {
        font-weight: 600;
    }
`;

const BackButton = () => {
    const navigate = useNavigate();

    return (
        <ButtonWrapper onClick={() => navigate('../countries')}>
            <FaArrowLeft />
            <span>Back</span>
        </ButtonWrapper>
    );
};

export default BackButton;
