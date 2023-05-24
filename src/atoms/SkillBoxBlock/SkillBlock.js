import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import ProgressBar from '../ProgressBar';
import Button from "../button";

function SkillBlock(props){
    const {title, percent} = props;
    return(
        <div className='SkillBlock'>
            <div className='Title'>
                <Typography>{title}</Typography>
                <Typography>{percent}%</Typography>
            </div>
            <ProgressBar barColor='orange' progress={percent} progressColor='orange' borderColor='orange'></ProgressBar>
        </div>
    );
}

SkillBlock.propTypes = {
    title: PropTypes.string,
    percent: PropTypes.number
}
SkillBlock.defaultProps = {
    percent: 0,
    filledPercent: 100,
}
export default SkillBlock;
