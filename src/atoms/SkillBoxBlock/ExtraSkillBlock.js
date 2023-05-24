import React from "react";
import PropTypes from "prop-types";
import Typography from "../Typography";
import {ReactComponent as ExtraSkillIcon} from '../icons/Icons.svg'

function ExtraSkillBlock(props){
    const {title} = props;
    return(
        <div className='ExtraSkillBlock'>
            <div className='Icon'>
                <ExtraSkillIcon />
            </div>
            <div className='Title'>
                <Typography>{title}</Typography>
            </div>
        </div>
    );
}

ExtraSkillBlock.propTypes = {
    title: PropTypes.string,
}
export default ExtraSkillBlock;
