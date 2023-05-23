import React, {useState, useEffect, createContext} from 'react';
import {eventLoggerService} from "../service/logger";
import axios from "axios";
import EventLog from "../types/EventLog";
export const AppContext = createContext({

});

function AppContextProvider (props) {
    const [eventList, setEventList] = useState([]);
    useEffect(() => {
        document.querySelector('body').addEventListener('click', clickHandler);
        setInterval(() => {
                setEventList((prevEventList) => {
                    axios.post('http://localhost:8001/hw/file/get-as-array', prevEventList)
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
