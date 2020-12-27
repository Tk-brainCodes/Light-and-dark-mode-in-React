import React, { useContext } from 'react'
import { ThemeContext } from '../themeContext/Context';
import Switch from '@material-ui/core/Switch';
import './Nav.css';

const Navbar = () => {
    //A context type to reacd the current mode. 
    const { darkmode, toggle } = useContext(ThemeContext);
    return (

        <div className="nav__" style={{backgroundColor: darkmode ? "lightgray" : "teal"}}>
            <Switch onChange={toggle} />
        </div>
    )
}

export default Navbar;
