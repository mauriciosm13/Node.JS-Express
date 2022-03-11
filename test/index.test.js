const pegarArquivo = require('../index');

const arrayResultado = [{
    FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'  
}]

describe('pegarArquivo::',() => {
    it('Deve ser uma função', () =>{
        expect(typeof pegarArquivo).toBe('function');
    })
    it('deve retornar array com resultados', async () => {
        const resultado = await pegarArquivo('/Users/Engloba Sistemas/Documents/GitHub/Node.JS-Express/test/arquivos/texto1.md')
        expect(resultado).toEqual(arrayResultado)
    })
    it('deve retornar mensagem "não há links"', async () => {
        const resultado = await pegarArquivo('/Users/Engloba Sistemas/Documents/GitHub/Node.JS-Express/test/arquivos/texto1_semlinks.md')
        expect(resultado).toBe('Não há links')
    })
})
 
