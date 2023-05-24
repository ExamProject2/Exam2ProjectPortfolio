import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import Paper from "../../atoms/Paper";
import RightSidebar from "../../atoms/rightSidebar";
import Button from "../../atoms/button";
import axios from "axios";
import LeftSidebar from "../leftSidebar";
import MainMenu from "../../ molecules/MainMenu";

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
    const onGetButtonClickHw = () => {
        axios.post('http://localhost:8001/hw/event-log', [
            new EventLog('button', 'click'),
            new EventLog('span', 'click'),
            new EventLog('div', 'click'),
        ])
            .then(function (response) {
                // handle success
                console.log(response);
                alert('Get method');
            })
            .catch(function (error) {
                // handle error
                console.log('Error', error);
            })
            .finally(function () {
                // always executed
            });
    }

    const onPostButtonClickHw = () => {
        axios.post('http://localhost:8001/hw/postRequest')
            .then(function (response) {
                // handle success
                console.log(response.data);
                alert('Post method');
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    const onHeadButtonClickHw = () => {
        axios.head('http://localhost:8001/hw/headRequest')
            .then(function (response){
                console.log(response.data);
                alert('Head method');
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    const onPutButtonClickHw = () => {
        axios.put('http://localhost:8001/hw/putRequest?withError=1', {params : {withError: 1}})
            .then(function (response){
                // response.data.args;
                console.log(response.data);
                alert('Put method');
            })
            .catch(function(error){
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };

    let xhr = new XMLHttpRequest();
    let url = new URL('http://localhost:8001/hw/xhrRequest');
    url.searchParams.set('withError', '0');
    xhr.open('GET', url);
    // http://localhost:8001/hw/xhrRequest?withError=1

    xhr.onerror=function(error){
        console.log('XMLHttpRequest', error);
    }
    xhr.send();
    console.log('render mainPage');

    // const onGetButtonClick = () => {
    //     axios.get('http://localhost:8001/admin/info')
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .finally(function () {
    //             // always executed
    //         });
    // };
    // const onPostButtonClick = () => {
    //     axios.post('http://localhost:8001/admin/info?param1=44', {name:'Kate',
    //         age:34})
    //         .then(function (response) {
    //             // handle success
    //             console.log(response.data);
    //         })
    //         .catch(function (error) {
    //             // handle error
    //             console.log(error);
    //         })
    //         .finally(function () {
    //             // always executed
    //         });
    // };
    const onDeleteButtonClick = () => {
        axios.delete('http://localhost:8001/admin/info')
            .then(function (response) {
                // handle success
                console.log(response.data);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    };
    return(<div className='MainPageDiv'>
        <LeftSidebar/>
        <main>
            <MainMenu></MainMenu>
        </main>
        <RightSidebar/>
        </div>
    )
}

export default MainPage;
