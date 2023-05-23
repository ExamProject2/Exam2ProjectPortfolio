import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import ProfileBoxBlock from "../../atoms/ProfileBoxBlock";
import InfoBoxBlock from "../../atoms/InfoBoxBlock";

function LeftSidebar(){
    return(
        <div className='LeftSidebarDiv'>
           <ProfileBoxBlock/>
            <InfoBoxBlock/>
        </div>

    )
}

export default LeftSidebar;
