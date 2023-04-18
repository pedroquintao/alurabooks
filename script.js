async function buscaEndereco(cep) {
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }

        // console.log('%cscript.js line:9 consultaCEPConvertida', 'color: #007acc;', consultaCEPConvertida);
        return consultaCEPConvertida;
    }

    catch(erro) {
        // console.log('%cscript.js line:8 erro', 'color: #007acc;', erro);
    }

    // console.log('%cscript.js line:3 consultaCEP', 'color: #007acc;', consultaCEPConvertida);
}

let ceps = [38182348, 35900166, 35904010]
let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
console.log('%cscript.js line:22 Antes do Promise', 'color: #007acc;', conjuntoCeps);
Promise.all(conjuntoCeps).then(respostas => console.log('%cscript.js line:23 Depois do Promise:', 'color: #007acc;', respostas));
// buscaEndereco();
// var consultaCEP = fetch('https://viacep.com.br/ws/0100100/json/') //O fetch devolve uma promessa de que algo será retornado, essa promessa é chamada de Promisse. Essa promessa pode tanto ser boa, ter retornado os dados, quanto ter falhado por algum motivo - como no caso da conexão com o servidor cair. 
// .then(resposta => resposta.json())
// .then(r => {
//     if(r.erro) {
//         throw Error('Esse CEP não existe!')
//     }
//     else
//         console.log(r)})
// .catch(erro => console.log(erro))//O catch é atuado quando há alguma falha 
// .finally(mensagem => console.log('O processo foi concluído!')); //Independente da resposta da promessa, o finilly é executado



// console.log('%cscript.js line:5 consultaCEP', 'color: #007acc;', consultaCEP);