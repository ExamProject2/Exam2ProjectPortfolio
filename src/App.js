import React from "react";
import Button from "./atoms/button";
import MainPage from "./pages/MainPage";
import axios from "axios";
import {AppContext} from "./context/app";
import './App.css';

function App() {
    return(
        <AppContext>
            <MainPage/>
        </AppContext>
  );
}

export default App;
