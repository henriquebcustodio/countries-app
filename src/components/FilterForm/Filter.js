import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { FaChevronDown, FaTimes } from 'react-icons/fa';

const DropDownContainer = styled.div`
    position: relative;
    width: 15%;
    min-width: 12rem;
    font: inherit;
    font-weight: 600;
    font-size: 0.9rem;
    z-index: 2;
    user-select: none;
`;

const DropDownHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 3.5rem;
    margin-bottom: 0.5rem;
    padding: 0 1.4rem;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 10px #F0F0F0;
    background-color: #FFFFFF;
    cursor: pointer;
`;

const DropDownList = styled.ul`
    position: absolute;
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0 1.4rem;
    padding-top: 0.8rem;
    background: #FFFFFF;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 0 0 10px #F0F0F0;
    width: 100%;
`;

const ListItem = styled.li`
    list-style: none;
    margin-bottom: 0.8rem;
    cursor: pointer;
`;

const Filter = props => {
    const [dropdownVisible, setDropdownVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const filterRef = useRef();

    const optionClickHandler = event => {
        const option = event.target.id;
        setSelectedOption(option);
        setDropdownVisible(false);
        props.onOptionChange && props.onOptionChange(option);
    };

    const removeSelectedOptionHandler = () => {
        setSelectedOption('');
        props.onOptionChange && props.onOptionChange('');
    };

    const headerClickHandler = () => {
        dropdownVisible && setDropdownVisible(false);
        !dropdownVisible && setDropdownVisible(true);
    };

    const outsideClickHandler = event => {
        if (filterRef.current && !filterRef.current.contains(event.target)) {
            dropdownVisible && setDropdownVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', outsideClickHandler);
        return () => {
            document.removeEventListener('click', outsideClickHandler, true);
        };
    });

    return (
        <DropDownContainer role="select" ref={filterRef}>
            <DropDownHeader onClick={headerClickHandler}>
                <span>
                    {!selectedOption && props.headerLabel}
                    {selectedOption}
                </span>
                {!selectedOption && <FaChevronDown size={'0.8rem'} />}
                {selectedOption && <FaTimes onClick={removeSelectedOptionHandler} size={'0.8rem'} />}
            </DropDownHeader>
            {
                dropdownVisible &&
                <DropDownList>
                    {props.options.map(option => {
                        return (
                            <ListItem
                                key={option}
                                id={option}
                                onClick={optionClickHandler}
                            >
                                {option}
                            </ListItem>
                        );
                    })}
                </DropDownList>
            }
        </DropDownContainer>
    );
};

export default Filter;
