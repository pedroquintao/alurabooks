async function buscaEndereco(cep) {
    var cepErro = document.getElementById('cepErro');
    try{
        var consultaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
        var consultaCEPConvertida = await consultaCEP.json();
        if(consultaCEPConvertida.erro) {
            throw Error('CEP não existente!');
        }

        var endereco = document.getElementById('endereco');
        endereco.value = consultaCEPConvertida.logradouro;

        var bairro = document.getElementById('bairro');
        bairro.value = consultaCEPConvertida.bairro;

        var cidade = document.getElementById('cidade');
        cidade.value = consultaCEPConvertida.localidade;

        var uf = document.getElementById('estado');
        uf.value = consultaCEPConvertida.uf;

        return consultaCEPConvertida;
    }

    catch(erro) {
        cepErro.innerHTML = `<p>O CEP informado não é válido!</p>`
        // console.log('%cscript.js line:8 erro', 'color: #007acc;', erro);
    }
}

// let ceps = [38182348, 35900166, 35904010]
// let conjuntoCeps = ceps.map(valores => buscaEndereco(valores));
// // console.log('%cscript.js line:22 Antes do Promise', 'color: #007acc;', conjuntoCeps);

// Promise.all(conjuntoCeps).then(respostas => console.log('%cscript.js line:23 Depois do Promise:', 'color: #007acc;', respostas));

var inputCep = document.getElementById('cep');
inputCep.addEventListener('focusout', () => buscaEndereco(inputCep.value))


// console.log('%cscript.js line:24 inputCep', 'color: #007acc;', inputCep);