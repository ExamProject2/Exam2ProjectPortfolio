import React from "react";
import Button from "./atoms/button";
import MainPage from "./pages/MainPage";
import axios from "axios";
import AppContextProvider from "./context/app";
import './App.css';

function App() {
    return(
        <AppContextProvider>
            <MainPage/>
        </AppContextProvider>
  );
}

export default App;
