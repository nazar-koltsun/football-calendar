import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './components/Redux/redux-store';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MatchesContainer from './components/Matches/MatchesContainer';
import Home from './components/Home/Home';

import './App.css';

function App() {
    return (
        <div className='app-wrapper'>
            <Header />
            <main className='app-content'>
                <h1 className='app-title'>Football calendar</h1>
                <Route exact path='/' render={() => <Home />} />
                <Route path='/matches' render={() => <MatchesContainer />} />
            </main>
            <Footer />
        </div>
    );
}

const FootballCalendarApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>
    );
};

export default FootballCalendarApp;
