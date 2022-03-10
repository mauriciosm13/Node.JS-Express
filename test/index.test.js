const pegarArquivo = require('../index');

 test('deve ser uma function', () => {
     expect(typeof pegarArquivo).toBe('function');
 });