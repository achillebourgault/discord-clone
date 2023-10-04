// src/App.js
import React from 'react';
import TitleBar from "./components/TitleBar/TitleBar";

import './assets/css/index.css';

function App() {
  // Exemple d'interaction avec Electron

  return (
      <div className="parent">
        <TitleBar />

        <main>
          <div className="left-list">
            <div className="list-item private-messages">
              <div className="list-item-icon private-messages-active">
                <img src="./assets/images/icons/discord-logo.png"/>
                <div className="list-item-icon-name">Private Messages</div>
              </div>
            </div>
            <div className="list-item-sep"></div>
          </div>

          <div className="content">
            <div id="left-list-extended">
              <div className="extended-header">
                <div className="search-bar">
                  <input type="text" placeholder="Rechercher/lancer une conversa..."/>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
  );
}

export default App;
