import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";

const StyledForm = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 3rem 4rem;
    box-sizing: border-box;

    @media screen and (max-width: 769px) {
        flex-direction: column;
        align-items: flex-start;
        padding: 3rem 2rem;
    }
`;

const FilterForm = () => {
    const filterOptions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    return (
        <StyledForm>
            <Search />
            <Filter options={filterOptions} headerLabel="Filter by Region"></Filter>
        </StyledForm>
    );
};

export default FilterForm;
