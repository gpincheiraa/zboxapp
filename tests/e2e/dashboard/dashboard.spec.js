// host que vamos a probar
var host = 'http://localhost:3000/#/app/dashboard';
  // Cada describe es un grupo de pruebas
describe('index elements', function () {

  // cada it es una prueba
  it('should have a title', function () {
    // se pide y espera por una página
    browser.get(host);
    // condición que se prueba
    var theTitle = browser.getTitle();
    expect(theTitle).toEqual('Zbox App');
  });

});