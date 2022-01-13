const form = document.querySelector('form');

form.addEventListener('submit', function (e) {

  // Para que sirve 'preventDefault'? Intenta averiguarlo
  e.preventDefault();


  let weight = document.querySelector("#weight").value;
  let height = document.querySelector("#height").value;
  let imc = calculaICM(height, weight);
  imc = imc.toFixed(2);

  console.log(height, weight, imc)

  
  let resultado = document.querySelector("#results");
  resultado.innerHTML  = `<strong>${imc}</strong>`;

  let parrafosGuia = document.querySelectorAll("#weight-guide p");

  if(imc<16.6){
    parrafosGuia[0].classList.add("selecionado")
  } else if(imc<24.9){
    parrafosGuia[1].classList.add("selecionado")
  } else {
    parrafosGuia[2].classList.add("selecionado")
  }
  console.log(parrafosGuia, parrafosGuia[1])
});

function calculaICM(altura, peso){
  let imc = peso / ((altura*altura)  / 10000);
  return imc;
}