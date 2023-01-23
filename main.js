
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
    alert("deu certo")
}


function RespostaErrada(resposta){
    alert("[ERRO] Digite um nome válido.")
    window.location.reload();
}

// function verificar(){

//     const promessa = axios.get('https://mock-api.driven.com.br/api/v6/uol/participants');
//     promessa.then(processarResposta);
    
// }

// function processarResposta(resposta) {
// 	console.log(resposta.data);
// }

// verificar();