let usuarioName="";
let elementoMensagens=document.querySelector(".chat");
const usuario =
{
    name:usuarioName
}

loginPrompt();


// function login() {

//     alert("chamou login")
//     usuarioName=document.querySelector(".login input").value;
//     usuario.name=usuarioName;
//     // document.querySelector(".login").classList.remove("invisivel");
//     const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
//     promessa.then(RespostaCerta);
//     promessa.catch(RespostaErrada);

// }


function loginPrompt(){

    usuarioName = prompt("Seja bem-vindo(a) ao BatePapo Uol. Por favor, digite o seu nome")
    usuario.name=usuarioName;
    // document.querySelector(".login").classList.remove("invisivel");
    const promessa = axios.post("https://mock-api.driven.com.br/api/v6/uol/participants", usuario);
    promessa.then(RespostaCerta);
    promessa.catch(RespostaErrada);
}



function RespostaCerta(resposta) {

    setInterval(conexao, 5000);
    setInterval(exibirMensagens, 5000);

    // document.querySelector(".login").classList.add("invisivel");
    // document.querySelector(".login").classList.remove("visivel");
    // document.querySelector(".corpoChat").classList.remove("invisivel");
    // document.querySelector(".corpoChat").classList.add("visivel");
    // setInterval(exibirMensagensOK,3000); Bonus
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

exibirMensagens();

function exibirMensagens(){

    const promise = axios.get("https://mock-api.driven.com.br/api/v6/uol/messages");
    promise.then(exibirMensagensOK);
    promise.catch(exibirMensagensErro);
}

function exibirMensagensOK(resposta){
    console.log(resposta)
    const qntMensagens=resposta.data.length;
    elementoMensagens.innerHTML=``;
    let elementoMensagem;
    for (let i=0;i<qntMensagens;i++){
        if(resposta.data[i].type==="status"){
            elementoMensagens.innerHTML+=
            `<div data-test="message" id="${i}" class="mensagem status">
                <h3><span>(${resposta.data[i].time})</span> <strong>${resposta.data[i].from}</strong> ${resposta.data[i].text}</h3>
            </div>`;
            elementoMensagem=document.getElementById(`${i}`)
            elementoMensagem.scrollIntoView();
        }
        if((resposta.data[i].type==="message")){
            elementoMensagens.innerHTML+=
            `<div data-test="message" id="${i}" class='mensagem'>
                <h3><span>(${resposta.data[i].time})</span> <strong>${resposta.data[i].from}</strong> para<strong> ${resposta.data[i].to}</strong>: ${resposta.data[i].text}</strong></h3>
            </div>`
            elementoMensagem=document.getElementById(`${i}`)
            elementoMensagem.scrollIntoView();
            console.log(resposta)
        }
        
    }

console.log(resposta);
}

function exibirMensagensErro(resposta){

    console.log(resposta);
    }

function enviar(){

    let mensagem = document.querySelector("input").value;
    
    exibirMensagens();

    const modeloMensagem={
    from:usuarioName,
    to: "todos", 
    text: document.getElementById('enviarmsgchat').value,
    type: "message" 
}

    const promessa=axios.post("https://mock-api.driven.com.br/api/v6/uol/messages",modeloMensagem);   
    promessa.then(enviarCerto);
    promessa.catch(enviarErro);
    document.getElementById('enviarmsgchat'
    ).value="";
}


function enviarCerto(resposta){
    
}
function enviarErro(erro){
    if(erro.response.status!==200){
        alert(`Erro ${erro.response.status}`);
        window.location.reload();
    }  
}