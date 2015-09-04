var HtmlReporter = require('protractor-html-screenshot-reporter');

// configuración de reporter para generar screenshots e informes
var reporter = new HtmlReporter({
    baseDirectory: './tests/screenshots',
    //    takeScreenShotsOnlyForFailedSpecs: true,
    docName: 'protractor-report.html'
});

// configuración básica del protractor
exports.config = {

  seleniumServerJar: './node_modules/protractor/selenium/selenium-server-standalone-2.45.0.jar',

  // ruta del web driver
  seleniumAddress: 'http://localhost:4444/wd/hub',
  
// Array de pruebas secuenciales
  specs: ['./tests/login/login.spec.js'],
  
// Agregar el reporte html
  onPrepare: function () {
      jasmine.getEnv().addReporter(reporter);
  }

}