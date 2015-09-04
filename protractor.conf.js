var HtmlReporter = require('protractor-html-screenshot-reporter');

// configuración de reporter para generar screenshots e informes
var reporter = new HtmlReporter({
    baseDirectory: './tests/screenshots',
    //    takeScreenShotsOnlyForFailedSpecs: true,
    docName: 'protractor-report.html'
});

// configuración básica del protractor
exports.config = {

  directConnect: true,

  capabilities: {
    browserName: "chrome",
    chromeOptions: {
      binary: './dist/gp-zboxapp-darwin-x64/gp-zboxapp.app/Contents/MacOS/Electron'
    },  
  },
  
// Array de pruebas secuenciales
  specs: ['./tests/e2e/dashboard/dashboard.spec.js'],
  
// Agregar el reporte html
  onPrepare: function () {
      jasmine.getEnv().addReporter(reporter);
  }

}