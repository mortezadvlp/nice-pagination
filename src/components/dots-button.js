import React from 'react'
import injectSheet from 'react-jss';
import styles from '../features/styles';

function DotsButton({ classes, onClick }) {

    return (
        <button type='button' data-testid='dotsbutton'
            className={classes.dotButton}
            onClick={onClick} >...</button>
    );
}

export default injectSheet(styles)(DotsButton);