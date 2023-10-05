// src/App.js
import React from 'react';
import TitleBar from "./components/TitleBar/TitleBar";

import LeftNavigation from "./components/LeftNavigation/LeftNavigation";
import LeftNavigationExtended from "./components/LeftNavigationExtended/LeftNavigationExtended";

import {useState} from "react";
import './assets/css/index.css';

function App() {
    const [user, setUser] = useState({
        name: 'JohnDoe74',
        avatar: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2022-01/210602-doge-meme-nft-mb-1715-8afb7e.jpg',
        activity: 'online',
        microMuted: false,
        soundMuted: false,
    });

  return (
      <div className="parent">
        <TitleBar />

        <main>
          <LeftNavigation />
          <div className="content">
            <LeftNavigationExtended user={user} />
          </div>
        </main>
      </div>
  );
}

export default App;
