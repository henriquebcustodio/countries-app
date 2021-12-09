import { Fragment } from 'react';
import FilterForm from './components/FilterForm/FilterForm';
import Header from './components/Layout/Header';
import Main from './components/Layout/Main';
import FilterProvider from './store/FilterProvider';

const App = () => {
    return (
        <Fragment>
            <Header />
            <FilterProvider>
                <FilterForm />
                <Main />
            </FilterProvider>
        </Fragment>
    );
};

export default App;

