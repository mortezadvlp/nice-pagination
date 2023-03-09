

const styles = {
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      width: 'fit-content',
    },
    subcontainer: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dotButton: {
        border: '0px',
        backgroundColor: 'transparent',
        cursor: 'pointer',
    },
    rounded: {
        borderRadius: '50%',
        width: '35px',
        height: '35px',
        //paddingTop: '0.35rem',
        marginLeft: '0.125rem', 
        marginRight: '0.125rem', 
        border: '1px solid',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    squared: {
        width: '35px',
        height: '35px',
        //paddingTop: '0.35rem',
        backgroundColor: 'transparent',
        border: '1px solid',
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selected: {
      cursor: 'default',
    }

}

export default styles;
