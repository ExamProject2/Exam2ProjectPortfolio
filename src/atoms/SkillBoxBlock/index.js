import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import ProgressBar from '../ProgressBar';
import Button from "../button";

function SkillBoxBlock(props){
    const {title, percent, skillName, filledPercent} = props;
    return(
        <LeftSidebarBlock className={cn('SkillBoxBlock', {
            'TitleLanguage': title === 'Language',
            'TitleSkills': title === 'Skills',
            // 'Percent': percent === ,
            'SkillNameLangUkr': skillName === 'Ukrainian',
            'SkillNameLangEng': skillName === 'English',
            'SkillNameLangSpan': skillName === 'Spanish',
        })}>
            <Typography color='black' variant='title4'>{title}</Typography>
           <div className='SkillDiv'>
            <Typography>{skillName}</Typography>
            <Typography>{percent}</Typography>
           </div>
            <ProgressBar barColor='orange' progress={filledPercent} progressColor='orange' borderColor='orange'></ProgressBar>
           <div className='SkillDiv'>
             <Typography>{skillName}</Typography>
             <Typography>{percent}</Typography>
           </div>
            <ProgressBar barColor='orange' progress={filledPercent} progressColor='orange' borderColor='orange'></ProgressBar>
            <div className='SkillDiv'>
                <Typography>{skillName}</Typography>
                <Typography>{percent}</Typography>
            </div>
            <ProgressBar barColor='orange' progress={filledPercent} progressColor='orange' borderColor='orange'></ProgressBar>
        </LeftSidebarBlock>
    )
}

SkillBoxBlock.propTypes = {
    skillName:PropTypes.string,
    title: PropTypes.oneOf(['Language', 'Skills']),
    percent: PropTypes.string,
    filledPercent: PropTypes.number,
}
SkillBoxBlock.defaultProps = {
    skillName:'Html',
    title:'Language',
    percent: '100%',
    filledPercent: 100,
}
export default SkillBoxBlock;
