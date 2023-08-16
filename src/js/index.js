// Primeira coisa a se fazer:
// Acessar o botão no HTML
// Alem de acessar o botão preciso acessar a aba de compartilhamento

const botao = document.querySelector("button");
const compartilhar = document.querySelector(".share");

//Agora criar a função de quando o botão clicado ele irá mudar a classe do botão

function abrirCompartilhar(){

    //Quando clicar no botão ele precisa remover a classe do share e quando clicado novamente ele deve adicionar a classe

    if (compartilhar.classList.contains("hide")) {
        compartilhar.classList.remove("hide");
        botao.classList.add('btn-selected')
        } else {
        compartilhar.classList.add("hide");
        botao.classList.remove('btn-selected')
        }
};


//Após pegar o botão preciso criar o click do botão

botao.addEventListener("click", abrirCompartilhar);

