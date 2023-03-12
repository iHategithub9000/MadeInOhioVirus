const { app, BrowserWindow } = require('electron')

function createWindow() {
  const win = new BrowserWindow({
    width: 400,
    height: 100,
    webPreferences: {
      nodeIntegration: true
    }
  })
  win.setMenuBarVisibility(false)
  // Generate a random x and y coordinate for the window
  const { screen } = require('electron')
  const { width, height } = screen.getPrimaryDisplay().workAreaSize
  const x = Math.floor(Math.random() * (width - 400))
  const y = Math.floor(Math.random() * (height - 100))

  win.setPosition(x, y) // Set the position of the window
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  // Create multiple windows
  for (let i = 0; i < 50; i++) {
    createWindow()
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
