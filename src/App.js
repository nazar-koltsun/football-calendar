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
                <Route path="/" render={() => <div><h1>Matches</h1></div>} />
            </main>
            <Footer />
        </div>
    );
}

export default App;
