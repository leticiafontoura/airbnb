function loadDoc() {
  var xhttp = new XMLHttpRequest(); // criando objeto que faz chamadas http
  xhttp.onreadystatechange = function() { // verificada se houve mudança de estado na chamada
    if (this.readyState == 4 && this.status == 200) { //verifica se a chamada retornou sucesso
      let response = JSON.parse(this.response); // converte string para Objeto
      let cards = "";
      for (let i = 0; i < response.length; i++) {
        if (response[i].name !== "") {
        cards += `<div class="cardzinho">
                     <img src="${response[i].photo}"</img>
                     <p> ${response[i].city} ${response[i].state}</p>
                     <p> ${response[i].price}</p>
                  </div>
        `
        }
      }
      console.log(response[0].name) 



      console.log(this.response);
      document.getElementById("card").innerHTML = cards // setando resposta da chamada para o elemento do html
    }
  };

  xhttp.open("GET", "http://airbnb.douglasmaia.com/api/properties");
  xhttp.send();
}