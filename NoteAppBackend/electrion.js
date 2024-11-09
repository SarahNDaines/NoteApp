const { app, BrowserWindow } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  });

  win.loadURL('http://localhost:5000'); // URL where .NET backend serves the React app
}

app.whenReady().then(() => {
  // Start the .NET backend
  const backend = spawn('dotnet', ['run', '--project', 'path-to-your-dotnet-project']);

  backend.stdout.on('data', (data) => {
    console.log(`backend: ${data}`);
  });

  backend.stderr.on('data', (data) => {
    console.error(`backend error: ${data}`);
  });

  backend.on('close', (code) => {
    console.log(`backend process exited with code ${code}`);
  });

  createWindow();

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});
