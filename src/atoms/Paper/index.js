import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
import SkillBoxBlock from "../SkillBoxBlock/SkillBoxBlock";
function Paper (props){
    const {color} = props;
    return(
        <div className={cn ('PaperDiv', {
            'BackgroundColorWhite': color === 'white',
        } )}></div>
    )
}

Paper.propTypes = {
    color: PropTypes.oneOf(['white']),
}
SkillBoxBlock.defaultProps = {
    color:'white',
}
export default Paper;
