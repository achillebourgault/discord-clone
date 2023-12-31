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

    mainWindow.loadURL('http://localhost:3000');

}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) createWindow();
});
