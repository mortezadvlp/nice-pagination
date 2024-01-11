import React, { useContext } from 'react';
import styles from '../styles.module.css';
import TypeContext from '../features/type-context';

export default function PageButton({ text, onClick }) {

    const context = useContext(TypeContext);

    return (
        <button type='button' data-testid='pagebutton'
            className={`${context.type==='circle' ? styles.rounded  :
                            context.type==='square' ? styles.squared : ''} border-primary ${context.borderClass} ${context.textClass}`}
            onClick={onClick} >{text}</button>
    );
}
