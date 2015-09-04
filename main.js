var app             = require('app'),
    BrowserWindow   = require('browser-window'),
    readTwitter         = require("./read-twitter");

require('crash-reporter').start();

var mainWindow = null;



app.on('window-all-closed', function() {
  
  if(process.platform != 'darwin') {
    app.quit();
  }

});

app.on('ready', function() {
  
  mainWindow = new BrowserWindow({ width: 800, height: 600 });
  mainWindow.loadUrl('file://' + __dirname + '/client/index.html');
  mainWindow.maximize()

  mainWindow.on('closed', function() {
    
  });

  //mainWindow.openDevTools();

  //Leer los tweets del home y los propios del usuario, también leer la info del usuario
  readTwitter.readHome(mainWindow);

  readTwitter.getUser(mainWindow);
});