// elementos e variáveis

const dogElement = document.querySelector("#URLDog");
var container = document.getElementById("container");
var Button = document.getElementById("action-btn");
// funções

async function sortearDog() {
  const response = await fetch("https://dog.ceo/api/breeds/image/random");
  const dog = await response.json();

  const URLDog = dog.message; // constante que armazena a url da api do campo "message"
  dogElement.setAttribute("src", URLDog); // insere a url da API no elemento da imagem

  container.classList.remove("hide"); // remove a classe Hide que esconde a div antes de ser utilizada
}

function logar() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;

  if (login == "cachorro" && senha == "cachorro") {
    location.href = "conteudo.html";
  } else {
    alert("Usuário ou Senha incorreta, tente novamente");
  }
}
