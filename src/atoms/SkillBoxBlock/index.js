import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import ProgressBar from '../ProgressBar';

function SkillBoxBlock(props){
    const {title, percent, skillName, filledPercent} = props;
    return(
        <LeftSidebarBlock className='SkillBoxBlockDiv'>
            <Typography color='black' variant='title4'>{title}</Typography>
            <Typography>{skillName}</Typography>
            <ProgressBar></ProgressBar>

        </LeftSidebarBlock>
    )
}

export default SkillBoxBlock;
