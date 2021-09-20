/*                               tipos de variaveis JS
"var" ---> variável de escopo global - pode ser acessada em todo o código mesmo que fora do escopo onde foi declarada
"let" ---> variável de escopo local
"const" ---> variavel constante de escopo global

**JS é Case sensitive = reconhece letras maiusculas e minusculas
** JS é uma linguagem orientada a funções 

Formas de acessar o DOM:
- por Tag: getElementByTagName()
- por Id: getElementById()
- por Nome: getElementByName()
- por Classe: getElementByClassName()
- por Seletor: querySelector() --------> melhor prática pra acessar o DOM no JS
*/

// validação dos campos nome, email e assunto
let nome = window.document.getElementById('nome')       //esse método não pede seletor
let email = document.querySelector('#email')        //seletor do id é a "#"", se fosse classe "."
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

//selecionando os campos e não o que está escrito dentro do campo
nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    
    if(nome.value.length < 3){
        txtNome.innerHTML = 'Nome Inválido'
        txtNome.style.color = 'red'
    }else{
        txtNome.innerHTML = 'Nome Válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    }else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100){
        txtAssunto.innerHTML = 'Texto muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.backgroundColor = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulário enviado com sucesso !')
    }else{
        alert ('Preencha o formulário corretamente antes de enviar')
    }
}

function mapaZoom(){
    mapa.style.width = "850px"
    mapa.style.height = "575px"
}
function mapaNormal(){
    mapa.style.width = "400px"
    mapa.style.height = "250px"
}