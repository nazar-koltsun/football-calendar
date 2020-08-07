import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import MatchesContainer from "./components/Matches/MatchesContainer"
import "./App.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="app-content">
                <h1 className="app-title">Football calendar</h1>
                <Route path="/" render={() => <MatchesContainer />} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
