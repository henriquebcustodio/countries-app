import styled from 'styled-components';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 30vh;
`;
const Loader = styled.div`
    animation: is-rotating 1s infinite;
    border: 6px solid ${props => props.theme.componentColor};
    border-radius: 50%;
    border-top-color: ${props => props.theme.primaryTextColor};
    height: 50px;
    width: 50px;

    @keyframes is-rotating {
        to {
            transform: rotate(1turn);
        }
}
`;

const Loading = () => {
    return (
        <Wrapper>
            <Loader />
        </Wrapper>
    );
};

export default Loading;
