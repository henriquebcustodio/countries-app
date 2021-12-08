import { useState, useEffect } from 'react';
import CountryGrid from "../Country/CountryGrid";
import api from "../../services/api";

const Main = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await api.get("/all?fields=name,population,region,capital,flag");
                setCountries(response.data);
                console.log(response.data);
            } catch (err) {
                console.log('An error has occurred!', err);
            }
        }
        fetchData();
    }, []);

    return (
        <CountryGrid countries={countries} />
    );
};

export default Main;
