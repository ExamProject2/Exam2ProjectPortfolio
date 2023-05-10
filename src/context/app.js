import React, {useState, useEffect, createContext} from 'react';
import {eventLoggerService} from "../service/logger";
import axios from "axios";
import EventLog from "../types/EventLog";
export const AppContext = createContext({

});

function AppContextProvider (props) {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        setInterval(() => {
                setEventList((prevEventList) => {
                    axios.post('http://localhost:8001/hw/event-log', prevEventList)
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

            }, 10000)
    }, []);
    const clickHandler = (event) => {
        setEventList((prevState) =>{
            return [...prevState,  new EventLog('button', 'click')];
        })
        console.log(event);
    }
    document.addEventListener('click', clickHandler);
    return (
        <AppContext.Provider value={{ }}>
            {props.children}
        </AppContext.Provider>
    )
}

//

export default AppContextProvider;
