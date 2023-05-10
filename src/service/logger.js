import axios from "axios";
import EventLog from "../types/EventLog";

export function eventLoggerService(){
    setInterval(() => {
        axios.post('http://localhost:8001/hw/event-log', [
            new EventLog('button', 'click'),
            new EventLog('span', 'click'),
            new EventLog('div', 'click'),
        ])
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
            });
    }, 10000)
}
