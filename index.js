const {app, BrowserWindow} = require('electron');
var path = require('path');

app.on('ready', () => {
  var mainWindow = new BrowserWindow({
    webPreferences: {
      nodeIntegration: true,
      webSecurity: true,
      preload: path.resolve(path.join(__dirname, 'preload.js'))
    },
    width: 800,
    height: 600,
    icon: path.resolve(path.join(__dirname, 'trello-icon.png'))
  });
  mainWindow.loadURL('https://trello.com');
});
