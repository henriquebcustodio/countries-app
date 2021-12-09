import styled from 'styled-components';
import { FaRegMoon, FaSun } from 'react-icons/fa';

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
`;

const Label = styled.span`
    margin-left: 0.7em;
    font-weight: bold;
    font-size: 1rem;
    user-select: none;
`;

const ThemeToggle = props => {
    return (
        <Wrapper role="button" onClick={props.onToggle}>
            {props.theme === 'light' && <FaRegMoon />}
            {props.theme === 'dark' && <FaSun />}
            <Label>
                {props.theme === 'light' && 'Dark Mode'}
                {props.theme === 'dark' && 'Light Mode'}
            </Label>
        </Wrapper>
    );
};

export default ThemeToggle;
