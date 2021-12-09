import { useState, useEffect, useContext } from 'react';
import CountryGrid from "../Country/CountryGrid";
import api from "../../services/api";
import FilterContext from '../../store/filter-context';

const Main = () => {
    const [countries, setCountries] = useState([]);
    const [filteredCountries, setFilteredCountries] = useState([]);

    const { region, query } = useContext(FilterContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/all?fields=name,population,region,capital,flag");
                setCountries(response.data);
            } catch (err) {
                console.log('An error has occurred!', err);
            }
        }
        fetchData();
    }, []);

    useEffect(() => {
        const newFilteredCountries = () => {
            return countries.filter(country => {
                if (country.region.length || country.name.length) {
                    return country.region.toLowerCase().includes(region) && country.name.toLowerCase().includes(query);
                } else {
                    return true;
                }
            });
        };
        setFilteredCountries(newFilteredCountries);
    }, [region, query, countries]);


    return (
        <CountryGrid countries={filteredCountries} />
    );
};

export default Main;
