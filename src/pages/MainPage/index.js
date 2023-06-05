import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import Paper from "../../atoms/Paper";
import RightSidebar from "../../atoms/RightSidebar";
import Button from "../../atoms/button";
import axios from "axios";
import LeftSidebar from "../leftSidebar";
import MainMenu from "../../ molecules/MainMenu";
import ServicesMenuBlock from "../../ molecules/MainPageBlock/ServicesMenuBlock";
import './style.scss';
import PricePlansMenuBlock from "../../ molecules/MainPageBlock/PricePlansMenuBlock";
import RecommendationsMenuBlock from "../../ molecules/MainPageBlock/RecommendationsMenuBlock";

class EventLog {
    constructor(target, eventType) {
        this.target = target;
        this.eventType = eventType;
        this.count = 1;
    }
    countIncrement(){
        this.count++;
    }
    getTarget(){
        return this.target;
    }
}
function MainPage(){


    // let xhr = new XMLHttpRequest();
    // let url = new URL('http://localhost:8001/hw/xhrRequest');
    // url.searchParams.set('withError', '0');
    // xhr.open('GET', url);
    // // http://localhost:8001/hw/xhrRequest?withError=1
    //
    // xhr.onerror=function(error){
    //     console.log('XMLHttpRequest', error);
    // }
    // xhr.send();
    // console.log('render mainPage');

    return(<div className='MainPageDiv'>
        <LeftSidebar/>
        <main>
            <MainMenu />
            <ServicesMenuBlock />
            <PricePlansMenuBlock />
            <RecommendationsMenuBlock />
        </main>
        <RightSidebar/>
        </div>
    )
}

export default MainPage;
