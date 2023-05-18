import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import {ReactComponent as HomeIcon} from '../../atoms/icons/Home.svg';
import {ReactComponent as BlogIcon} from '../../atoms/icons/Blog.svg';
import {ReactComponent as ContactIcon} from '../../atoms/icons/Contact.svg';
import {ReactComponent as CvIcon} from '../../atoms/icons/cv.svg';
import {ReactComponent as PortfolioIcon} from '../../atoms/icons/Portfolio.svg';
import {ReactComponent as FileCodeIcon} from '../../atoms/icons/file-code.svg';
import {ReactComponent as ContrastIcon} from '../../atoms/icons/Contrast.svg';

function RightSidebar(){
    const onMouseOver = (event) => {
        if(event.target.classList.contains('Circle')){
            event.target.classList.add('highlight')
        }
        console.log('classes', )};
    const onMouseOut = (event) => {
        if(event.target.classList.contains('Circle')){
            event.target.classList.remove('highlight')
        }}
    return(
        <div className='RightSidebarDiv'>
            <div className='HighMenu'>
                <div className='Circle' ><ContrastIcon/></div>
            </div>
            <div className='CenterMenu'>
                <div className='Circle'><HomeIcon/></div>
                <div className='Circle'><FileCodeIcon/></div>
                <div className='Circle'><CvIcon/></div>
                <div className='Circle'><PortfolioIcon/></div>
                <div className='Circle'><BlogIcon/></div>
                <div className='Circle'><ContactIcon/></div>
            </div>
        </div>

    )
}

export default RightSidebar;
