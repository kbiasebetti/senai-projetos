let vetor1 = [0, 0, 0, 0, 0, 0, 0];
let i = 0;
let soma = 0;

function inserir() {
  let valor = Number(document.getElementById("valor").value);

  vetortela.innerHTML = `Valores: ${vetor1[0]}, ${vetor1[1]}, ${vetor1[2]}, ${vetor1[3]}, ${vetor1[4]}, ${vetor1[5]}, ${vetor1[6]}.`;

  if (i < 7) {
    vetor1[i] = valor;
    i++;
  }
}

function calcular(){ 
    for (let indice = 0; indice < 7; indice++) {
     soma += vetor1[indice];
    }

  res.innerHTML = `A soma dos valores internos é de: ${soma}`;
}

