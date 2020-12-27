import React, {createContext, useState} from 'react'


//1.Destructure createContext and useState out of react

//2. Create a react Context
export const ThemeContext = createContext();

const PageContextProvider = (props) => {
    //3.Create a state to determine if its darkmode to true
    const [darkmode, setState] = useState({darkmode: true});

    const toggle = () => {
         setState(!darkmode)
      console.log(darkmode);
    }


    return (
        //4. Create a theme provider
        <ThemeContext.Provider value={{...darkmode, toggle: toggle}}>
          {props.children}
        </ThemeContext.Provider>
    )
}


export default PageContextProvider;
