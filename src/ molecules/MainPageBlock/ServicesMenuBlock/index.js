import React from "react";
import PropTypes from "prop-types";
import BaseMainPageBlock from "../BaseMainPageBlock";
import ServicesMenuBoxBlock from "../../ServicesMenuBoxBlock";
import {ReactComponent as CodingComputerIcon} from '../../../atoms/icons/codingComputer.svg'
import {ReactComponent as PaintingComputerIcon} from '../../../atoms/icons/paintingComputerIcon.svg'
import {ReactComponent as GamingComputerIcon} from '../../../atoms/icons/game-development.svg'
import {ReactComponent as MicrophoneIcon} from '../../../atoms/icons/Microphone.svg'
import {ReactComponent as PhotographerIcon} from '../../../atoms/icons/Photographer.svg'
import Button from "../../../atoms/button";
import './style.scss';

function ServicesMenuBlock(){
    return(
        <BaseMainPageBlock title='My Services' text='Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. lorem ipsum'>
            {<>
                <div className='ServicesMenuBlockDiv'>
                    <ServicesMenuBoxBlock boxTitle='Web Development' boxText='Blog, E-Commerce' icon={<CodingComputerIcon/>}></ServicesMenuBoxBlock>
                    <ServicesMenuBoxBlock boxTitle='UI/UX Design' boxText='Mobile App, Website Design' icon={<PaintingComputerIcon/>}></ServicesMenuBoxBlock>
                    <ServicesMenuBoxBlock boxTitle='Sound Design' boxText='Voice Over, Beat Making' icon={<MicrophoneIcon/>}></ServicesMenuBoxBlock>
                </div>
                <div className='ServicesMenuBlockDiv'>
                    <ServicesMenuBoxBlock boxTitle='Game Design' boxText='Character Design, Props & Objects' icon={<GamingComputerIcon/>}></ServicesMenuBoxBlock>
                    <ServicesMenuBoxBlock boxTitle='Photography' boxText='Portrait, Product Photography' icon={<PhotographerIcon/>}></ServicesMenuBoxBlock>
                    <ServicesMenuBoxBlock boxTitle='Advertising' boxText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae nulla diam in ac dictum a urna viverra morbi. '><Button title='ORDER NOW' border='noBorder' backgrndColor='none' textColor='orange' size='small'></Button></ServicesMenuBoxBlock>
                </div>
            </>
            }
        </BaseMainPageBlock>
    )
}

ServicesMenuBlock.propTypes = {
    title: PropTypes.string,
    skills:PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string,
        percent: PropTypes.number
    })),
}
ServicesMenuBlock.defaultProps = {
    skills:[],
}
export default ServicesMenuBlock;
