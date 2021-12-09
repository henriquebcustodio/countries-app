import { useState } from "react";
import FilterContext from "./filter-context";

const FilterProvider = props => {
    const [query, setQuery] = useState('');
    const [region, setRegion] = useState('');

    const updateQueryHandler = updatedQuery => {
        setQuery(updatedQuery.toLowerCase());
    };

    const updateRegionHandler = updatedRegion => {
        setRegion(updatedRegion.toLowerCase());
    };

    const filterContext = {
        query: query,
        region: region,
        updateQuery: updateQueryHandler,
        updateRegion: updateRegionHandler,
    };

    return (
        <FilterContext.Provider value={filterContext}>
            {props.children}
        </FilterContext.Provider>
    );
};

export default FilterProvider;
