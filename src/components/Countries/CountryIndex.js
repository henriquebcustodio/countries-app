import { Fragment } from 'react';
import FilterForm from '../FilterForm/FilterForm';
import Countries from '../Layout/Countries';
import FilterProvider from '../../store/FilterProvider';

const CountryIndex = () => {
    return (
        <Fragment>
            <FilterProvider>
                <FilterForm />
                <Countries />
            </FilterProvider>
        </Fragment>
    );
};

export default CountryIndex;
