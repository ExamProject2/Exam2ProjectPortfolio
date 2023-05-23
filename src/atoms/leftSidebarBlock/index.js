import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import './style.scss';


function LeftSidebarBlock(props){
    const {className = '', children = null} = props;
    return(
        <div className={cn('LeftSidebarBlockDiv', className)}>
            {children}
        </div>
    )
}

export default LeftSidebarBlock;
