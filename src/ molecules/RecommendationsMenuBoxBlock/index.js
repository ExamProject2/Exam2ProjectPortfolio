import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import {ReactComponent as StarIcon} from '../../atoms/icons/Star.svg';
import Typography from "../../atoms/Typography";


function RecommendationsMenuBoxBlock (props){
    const {title, text, photo, name, profession} = props;
    return(
        <div className='RecommendationsMenuBoxBlock'>
            <div className='StarsDiv'>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
                <StarIcon/>
            </div>
            <div className='CaptionDiv'>
                <Typography variant='title4' color='black' fontWeight='body2'>{title}</Typography>
                <Typography variant='title3'>{text}</Typography>
            </div>
            <div className='PersonalInfoDiv'>
                <img src={photo}/>
                <div className='InfoDiv'>
                    <Typography variant='title4' color='black' fontWeight='body2'>{name}</Typography>
                    <Typography variant='title3'>{profession}</Typography>
                </div>
            </div>
        </div>
    )
}

RecommendationsMenuBoxBlock.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    name: PropTypes.string,
    profession: PropTypes.string,
}
export default RecommendationsMenuBoxBlock;
