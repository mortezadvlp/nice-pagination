import React, { useContext } from 'react'
import styles from '../styles.module.css';
import TypeContext from '../features/type-context';

export default function DotsButton({ onClick }) {

    const context = useContext(TypeContext);

    return (
        <button type='button' data-testid='dotsbutton'
            className={`${styles.dotButton} ${context.textClass}`}
            onClick={onClick} >...</button>
    );
}
