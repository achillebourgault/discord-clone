// src/App.js
import React from 'react';
import TitleBar from "./components/TitleBar/TitleBar";

import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import LeftNavigationExtended from "./components/LeftNavigationExtended/LeftNavigationExtended";

import './assets/css/index.css';

function App() {

  return (
      <div className="parent">
        <TitleBar />

        <main>
          <LeftNavigation />
          <div className="content">
            <LeftNavigationExtended />
          </div>
        </main>
      </div>
  );
}

export default App;
