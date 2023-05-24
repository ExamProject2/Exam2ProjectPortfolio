import React from "react";
import PropTypes from "prop-types";
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import './style.scss';

function BaseSkillBoxBlock(props){
    const {title, children} = props;
    return(
        <LeftSidebarBlock>
            <div className='BaseSkillBoxBlock'>
                <Typography color='black' variant='title4'>{title}</Typography>
                <div className='SkillList'>
                    {children}
                </div>
            </div>
        </LeftSidebarBlock>
    )
}

BaseSkillBoxBlock.propTypes = {
    title: PropTypes.string,
}
export default BaseSkillBoxBlock;
