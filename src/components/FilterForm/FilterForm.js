import { useContext } from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
import FilterContext from "../../store/filter-context";

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
    const { updateQuery, updateRegion } = useContext(FilterContext);

    const filterOptions = ['Africa', 'America', 'Asia', 'Europe', 'Oceania'];

    const regionChangeHandler = newRegion => {
        updateRegion(newRegion);
    };

    const searchChangeHandler = newQuery => {
        updateQuery(newQuery);
    };

    return (
        <StyledForm>
            <Search onSearchChange={searchChangeHandler} />
            <Filter
                options={filterOptions}
                headerLabel="Filter by Region"
                onOptionChange={regionChangeHandler}>
            </Filter>
        </StyledForm>
    );
};

export default FilterForm;
