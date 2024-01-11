import React, { useContext } from 'react';
import styles from '../styles.module.css';
import TypeContext from '../features/type-context';

export default function SelectedButton({ text }) {

    const context = useContext(TypeContext);

    return (
        <button type='button' data-testid='selectedbutton'
            className={`${context.type==='circle' ? styles.rounded : 
                        context.type==='square' ? styles.squared : ''} ${styles.selected} bg-primary text-secondary border-primary ${context.bgSelectedClass} ${context.textSelectedClass} ${context.borderClass}`}
            >{text}</button>
    );
}
