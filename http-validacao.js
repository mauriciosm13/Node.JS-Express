const fetch = require('node-fetch');
function manejaErros(erro){
    throw new Error(erro.message);
}

async function checaStatus(arrayUrls){
    try{
        const arrayStatus = await Promise
        .all(arrayUrls
            .map(async url =>{
                const res = await fetch(url)
                return res.status;
        }));
        return arrayStatus;
    }catch(erro){
        manejaErros(erro);
    }
   
}

async function validaUrls(arrayLinks){
    const links = geraArrayUrls(arrayLinks);
    const statusLinks = await checaStatus(links);

    const resultados = arrayLinks.map((objeto, indice) => ({
        ...objeto, status: statusLinks[indice]
    }))
    return resultados;
}

function geraArrayUrls(arrayLinks){
    return arrayLinks
    .map(objetoLink => Object
        .values(objetoLink).join());
}

module.exports = validaUrls;