import React from "react";
import Header from "./components/Header/Header";
import MainContent from "./components/MainContent/MainContent";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
    return (
        <div className="app-wrapper">
            <Header />
            <MainContent />
            <Footer />
        </div>
    );
}

export default App;
