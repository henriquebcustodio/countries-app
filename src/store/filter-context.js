import React from "react";
const FilterContext = React.createContext({
    query: '',
    region: ''
});

export default FilterContext;