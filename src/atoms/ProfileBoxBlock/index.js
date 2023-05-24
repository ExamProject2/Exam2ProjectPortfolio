import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import {ReactComponent as TwitterIcon} from '../icons/Icons-twitter.svg'
import {ReactComponent as InstIcon} from '../icons/Icons-instagram.svg'
import {ReactComponent as FacebookIcon} from '../icons/Icons-facebook.svg'
import {ReactComponent as LinkedinIcon} from '../icons/Icons-linkedin.svg'
import {ReactComponent as YoutubeIcon} from '../icons/Icons-twitter.svg'
import {ReactComponent as DribbleIcon} from '../icons/Icons-dribbble.svg'
import ProfilePhoto from '../icons/Profile.png'
import './style.scss';

function ProfileBoxBlock(){
    return(
        <LeftSidebarBlock className='ProfileBoxBlock'>
            <div className='ImgDiv'>
                <img src={ProfilePhoto}/>
            </div>
            <Typography fontWeight='body2' variant='title4' color='black'>Anastasiia Slynko</Typography>
            <Typography variant='title3'>Font-end Developer</Typography>
            <div className='SocialMedias'>
                <div className='SocialMedCircle'><FacebookIcon/></div>
                <div className='SocialMedCircle'><InstIcon/></div>
                <div className='SocialMedCircle'><TwitterIcon/></div>
                <div className='SocialMedCircle'><LinkedinIcon/></div>
                <div className='SocialMedCircle'><YoutubeIcon/></div>
                <div className='SocialMedCircle'><DribbleIcon/></div>
            </div>
        </LeftSidebarBlock>

    )
}

export default ProfileBoxBlock;
