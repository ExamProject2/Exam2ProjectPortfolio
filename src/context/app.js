import React, {useState, useEffect, createContext} from 'react';
import {eventLoggerService} from "../service/logger";
import axios from "axios";
import EventLog from "../types/EventLog";
import {STATISTIC_SERVICE} from "../constants/config";
export const AppContext = createContext({
    getStatistic: () => {},
    statistic: new Map()
});

function AppContextProvider (props) {
    const [eventList, setEventList] = useState([]);
    const [statistic, setStatistic] = useState(new Map());
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
        const statTargetList = document.querySelectorAll('button.AppButton');

        for(const target of statTargetList){
            target.addEventListener('click', clickHandler);
        }

        setInterval(interval, 10000)
    }, []);
    const clickHandler = (event) => {
        setEventList((prevState) =>{
            if(event.target.id){
                return [...prevState,  new EventLog(event.target.id, 'click')];
            }

            console.log('prevState', prevState);
            console.log('event', event);
            return prevState;
        })
    }

    const getStatistic = () => {
        axios.get( `${STATISTIC_SERVICE}/statistic`)
            .then(function (response) {
                // handle success
                const targetList = new Map();
                for(const target of response.data){
                    targetList.set(target.target, target)
                }
                setStatistic(targetList);
            })
            .catch(function (error) {
                // handle error
                console.log('Error', error);
            });
        return [];
    };


    return (
        <AppContext.Provider value={{getStatistic, statistic}}>
            {props.children}
        </AppContext.Provider>
    )
}

//

export default AppContextProvider;
