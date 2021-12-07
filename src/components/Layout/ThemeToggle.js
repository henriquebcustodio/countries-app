import styled from 'styled-components';
import { FaRegMoon } from 'react-icons/fa';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-2px);
    }
`;

const Label = styled.span`
    margin-left: 0.7em;
    font-weight: bold;
`;

const ThemeToggle = () => {
    return (
        <Wrapper role="button">
            <FaRegMoon />
            <Label>Dark Mode</Label>
        </Wrapper>
    );
};

export default ThemeToggle;
