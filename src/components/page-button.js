import { useContext } from 'react';
import injectSheet from 'react-jss';
import styles from '../features/styles';
import TypeContext from '../features/type-context';

function PageButton({ classes, text, onClick }) {

    const type = useContext(TypeContext);

    return (
        <button type='button' data-testid='pagebutton'
            className={type==='circle' ? [classes.rounded, 'border-primary'].join(' ') :
                        type==='square' ? [classes.squared, 'border-primary'].join(' ') : {}}
            onClick={onClick} >{text}</button>
    );
}

export default injectSheet(styles)(PageButton);