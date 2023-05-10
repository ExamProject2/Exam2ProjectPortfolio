import React, {useState, createContext} from 'react';
import {eventLoggerService} from "../service/logger";
export const AppContext = createContext({

});

function AppContextProvider (props) {
    eventLoggerService();
    return (
        <AppContext.Provider value={{ }}>
            {props.children}
        </AppContext.Provider>
    )
}

//

export default AppContextProvider;
