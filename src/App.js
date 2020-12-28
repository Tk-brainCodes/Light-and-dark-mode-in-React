import React from 'react';
import './App.css';
import Home from './component/Home';
import PageContextProvider from './themeContext/Context';
import PageContent from './pageContent';

//destructure themeProvider from  themeContext
function App() {
  return (
    <div className="App__">
      <PageContextProvider>
          <PageContent>
            <Home />
          </PageContent>
      </PageContextProvider>
    </div>
  );
}

export default App;
