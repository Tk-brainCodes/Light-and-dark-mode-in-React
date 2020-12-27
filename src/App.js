import React from 'react';
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar'
import PageContextProvider from './themeContext/Context';
import PageContent from './pageContent';

//destructure themeProvider from  themeContext
function App() {
  return (
    <div className="App__">
      <PageContextProvider>
          <PageContent>
            <Navbar />
            <Home />
          </PageContent>
      </PageContextProvider>
    </div>
  );
}

export default App;
