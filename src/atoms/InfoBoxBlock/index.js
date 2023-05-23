import React from "react";
import PropTypes from "prop-types";
import cn from 'classnames';
import LeftSidebarBlock from "../leftSidebarBlock";
import Typography from "../Typography";
import './style.scss';

function InfoBoxBlock(){

    return(
        <LeftSidebarBlock className='InfoBoxBlockDiv'>
            <div>
                <Typography filling='orange' color='black' variant='title3'>Age:</Typography>
                <Typography filling='orange' color='black' variant='title3'>Residence:</Typography>
                <Typography filling='orange' color='black' variant='title3'>Freelance:</Typography>
                <Typography filling='orange' color='black' variant='title3'>Address:</Typography>
            </div>
            <div>
                <Typography variant='title3' color='black'>17</Typography>
                <Typography variant='title3' color='black'>BD</Typography>
                <Typography variant='title3' color='black'>Available</Typography>
                <Typography variant='title3' color='black'>Kyiv, Ukraine</Typography>
            </div>
        </LeftSidebarBlock>
    )
}

export default InfoBoxBlock;
