import { useContext } from "react";
import styled from "styled-components";
import Search from "./Search";
import Filter from "./Filter";
import FilterContext from "../../store/filter-context";

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 3rem 2rem;
    justify-content: space-between;
    width: 100%;
    box-sizing: border-box;

    @media screen and (min-width: 769px) {
        padding: 3rem 4rem;
        align-items: center;
        flex-direction: row;
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
