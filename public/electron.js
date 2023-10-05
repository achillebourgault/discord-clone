const { app, BrowserWindow } = require('electron');

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1122,
        height: 672,
        minWidth: 940,
        minHeight: 498,
        title: "Discord (Clone)",
        frame: false,
        autoHideMenuBar: true,
        webPreferences: { nodeIntegration: true }
    });

    // Check if we are in development mode, if so load the local server
    if (process.env.NODE_ENV === 'development') {
        mainWindow.loadURL('http://localhost:3000');
    } else {
        // If we are not in development mode, load the production build index.html
        mainWindow.loadFile('../build/index.html');
    }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});
