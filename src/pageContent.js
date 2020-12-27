import React, { useContext } from 'react';
import { ThemeContext } from './themeContext/Context';


const PageContent = (props) => {

    const { darkmode } = useContext(ThemeContext);
    const styles = {
        backgroundColor: darkmode ? 'black' : 'white',
        height: '100vh',
        width: '100vw'
    }
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}

export default PageContent;
