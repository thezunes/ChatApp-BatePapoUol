
let nomeUsuario= prompt("Por favor, digite seu nome");

const usuario = 
{
    name:nomeUsuario
}

login();


function login() {
    
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
    promessa.then(RespostaCerta);
    promessa.catch(RespostaErrada);

}

function RespostaCerta(resposta) {
	console.log(resposta.data);
    alert("deu certo");
    setInterval(conexao, 5000);
}


function RespostaErrada(resposta){
    alert("[ERRO] Digite um nome válido.");
    window.location.reload();
}

function conexao(){

const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/status",usuario)
console.log("Verificando")
promessa.then(statusSucesso);
promessa.catch(statusFalhou);
}

function statusSucesso(){

    console.log(`Foi atualizado o status do usurario ${usuario}`);
}

function statusFalhou(){

    alert("Erro");

}

// function verificar(){

//     const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
//     promessa.then(processarResposta);
    
// }

// function processarResposta(resposta) {
// 	console.log(resposta.data);
// }

// verificar();