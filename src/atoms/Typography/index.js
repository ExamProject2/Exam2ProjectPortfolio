import React from "react";
import PropTypes from "prop-types";
import './style.scss';
import cn from 'classnames';
function Typography (props){
    const {variant, color, filling, textCase} = props;

    return (
        <p className={cn('AppTypography', {
        'SizeTitle1': variant === 'title1',
        'SizeTitle2': variant === 'title2',
        'SizeTitle3': variant === 'title3',
        'FontWeightBody1': variant === 'body1',
        'FontWeightBody2': variant === 'body2',
        'TextColorOrange': color === 'orange',
        'TextColorBlack': color === 'black',
        'TextColorLightGrey': color === 'lightGrey',
        'TextColorDarkGrey': color === 'darkGrey',
        'NoFilling': filling === 'none',
        'FillingOrange': filling === 'orange',
        'FillingGrey': filling === 'grey',
        'FillingBlack': filling === 'black',
        'TextCaseLower': textCase === 'lower',
        'TextCaseNormal': textCase === 'normal',
        'TextCaseUpper': textCase === 'upper',
        })}></p>
    )}

Typography.propTypes = {
    variant: PropTypes.string,
    color: PropTypes.oneOf(['orange', 'black', 'lightGrey', 'darkGrey']),
    filling: PropTypes.oneOf(['none', 'orange', 'grey', 'black']),
    textCase: PropTypes.oneOf(['lower', 'normal', 'upper']),
}

Typography.defaultProps = {
    color:'lightGrey',
    filling:'none',
    textCase:'normal',
}
