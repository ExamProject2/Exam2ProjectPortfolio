import React, {useState, useEffect, createContext} from 'react';
import {eventLoggerService} from "../service/logger";
import axios from "axios";
import EventLog from "../types/EventLog";
import {STATISTIC_SERVICE} from "../constants/config";
export const AppContext = createContext({

});

function AppContextProvider (props) {
    const [eventList, setEventList] = useState([]);
    const interval = () => {

        setEventList((prevEventList) => {
            console.log('prevEventList', prevEventList)
            if(prevEventList.length === 0){
                return prevEventList;
            }
            axios.post( `${STATISTIC_SERVICE}/event`, prevEventList)
                .then(function (response) {
                    // handle success
                    console.log(response);
                })
                .catch(function (error) {
                    // handle error
                    console.log('Error', error);
                })
                .finally(function () {
                    // always executed
                })
            return [];
        })

    }
    useEffect(() => {
        document.querySelector('body').addEventListener('click', clickHandler);
        setInterval(interval, 10000)
    }, []);
    const clickHandler = (event) => {
        setEventList((prevState) =>{
            console.log('prevState', prevState);
            return [...prevState,  new EventLog(`${event.target.localName}.${[...event.target.classList].join('.')}`, 'click')];
        })
        console.log('event', event);
    }

    return (
        <AppContext.Provider value={{ }}>
            {props.children}
        </AppContext.Provider>
    )
}

//

export default AppContextProvider;
