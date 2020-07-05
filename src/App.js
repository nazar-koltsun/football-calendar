import React from "react";
import {Route} from 'react-router-dom';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <main className="app-content">
                <h1 className="app-title">Football calendar</h1>
                <Route path="/" render={() => <div><h2>Matches</h2></div>} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
