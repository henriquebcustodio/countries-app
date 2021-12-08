import { Fragment } from 'react';
import FilterForm from './components/FilterForm/FilterForm';
import Header from './components/Layout/Header';

const App = () => {
    return (
        <Fragment>
            <Header />
            <FilterForm />
        </Fragment>
    );
};

export default App;

