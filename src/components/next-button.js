import { useContext } from 'react';
import injectSheet from 'react-jss';
import styles from '../features/styles';
import TypeContext from '../features/type-context';


function NextButton({ classes, onClick }) {

    const type = useContext(TypeContext);

    return (
        <button type='button' data-testid='nextbutton'
            className={type==='circle' ? [classes.rounded, 'border-primary'].join(' ') : 
                        type==='square' ? [classes.squared, 'border-primary'].join(' ') : {}}
            onClick={onClick} >{'>'}</button>
    );
}

export default injectSheet(styles)(NextButton);