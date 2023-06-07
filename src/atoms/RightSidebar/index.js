import React, {useContext} from "react";
import {AppContext} from "../../context/app";
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
import {ReactComponent as StatisticIcon} from '../../atoms/icons/Statistic.svg';
import Button from "../button";

function RightSidebar(){
    const {getStatistic} = useContext(AppContext);
    const {statistic} = useContext(AppContext);

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
                <div className='StatisticBtnDiv'>
                    <Button
                        border='noBorder'
                        borderRadius='big'
                        backgrndColor='orange'
                        onClick={getStatistic}
                        stat = {statistic.has('download_btn') ? statistic.get('download_btn') : undefined}>
                        <StatisticIcon/>
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default RightSidebar;
