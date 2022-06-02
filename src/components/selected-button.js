import { useContext } from 'react';
import injectSheet from 'react-jss';
import styles from '../features/styles';
import TypeContext from '../features/type-context';

function SelectedButton({ classes, text }) {

    const type = useContext(TypeContext);

    return (
        <button type='button' data-testid='selectedbutton'
            className={type==='circle' ? [classes.rounded, classes.selected, 'bg-primary text-secondary border-primary'].join(' ') : 
                        type==='square' ? [classes.squared, classes.selected, 'bg-primary text-secondary border-primary'].join(' ') : classes.selected}
            >{text}</button>
    );
}

export default injectSheet(styles)(SelectedButton);