import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import Typography from "../../atoms/Typography";
import Button from "../../atoms/button";
import Paper from "../../atoms/Paper";
import YourPhoto from '../../atoms/icons/Your Image 1.png'
import './style.scss';
import ProfilePhoto from "../../atoms/icons/Profile.png";
import {ReactComponent as ArrowIcon} from '../../atoms/icons/arrow.svg';

function MainMenu(){
    return(//<Paper color='white'>
        <div className='MainMenuDiv'>
            <div className='MainTitleDiv'>
                <Typography variant='title1' fontWeight='body1' color='black'>I’m Rayan Adlrdard</Typography>
                <div className='MainTitleDiv2'>
                    <Typography variant='title1' fontWeight='body1' color='orange'>Front-end</Typography>
                    <Typography variant='title1' fontWeight='body1' color='black'>Developer</Typography>
                </div>
                <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, volutpat feugiat placerat lobortis. Natoque rutrum semper sed suspendisse nunc lectus.</Typography>
                <Button borderRadius='small' border='noBorder' title='Hire me'>
                <ArrowIcon />
                </Button>
            </div>
            <div className='YourPhotoDiv'>
                <img src={YourPhoto}/>
            </div>
        </div>
    //</Paper>
    )
}

export default MainMenu;
