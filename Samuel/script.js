//const url = "https://viacep.com.br/ws/06401145/json/"

const inputCep = document.getElementById("cep");
const botaoPesquisa = document.getElementById("btnPesquisar")
botaoPesquisa.addEventListener( "click", getCEP);

function getCEP() {

    /*
    Precisamos remover o - e . do cep para fazer a chamada corretamente.
    */
    var cep = inputCep.value;
  //  var cep = cep.replace(/[-.]/g, '')

  if (cep === "" || cep.length < 8) {
    
    alert("Você precisa digitar o cep corretamente!")
    return
  }

    console.log(cep)
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url).then(
       resposta => {

        return resposta.json();
       }
    ).then( data => {
        console.log(data.bairro)
    }).catch(error => console.log(error))
}



/*


Comando fetch --> Javascript
Objetos


*/