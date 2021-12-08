import { Fragment } from 'react';
import FilterForm from './components/FilterForm/FilterForm';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';

const App = () => {
    return (
        <Fragment>
            <Header />
            <FilterForm />
            <Main />
        </Fragment>
    );
};

export default App;

