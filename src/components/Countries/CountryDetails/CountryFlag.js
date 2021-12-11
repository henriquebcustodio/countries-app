import styled from "styled-components";

const Flag = styled.img`
    border-radius: 5px;
    object-fit: cover;
    width: 100%;
    max-width: 100%;
    max-height: 100%;
    vertical-align: top;
    box-shadow: 0px 0px 10px 0px ${props => props.theme.boxShadowColor}};
`;

const CountryFlag = props => {
    return (
        <Flag src={props.flagUrl} />
    );
};


export default CountryFlag;
