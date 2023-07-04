const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( (event) => {
    const controle = event.children[0].parentNode.querySelector('.info-imc')
    const peso = event.children[1].textContent
    const altura = event.children[2].textContent
    calcularImc(peso, altura)
    controle.innerHTML = calcularImc(peso, altura)
});

function calcularImc(peso, altura) {
    const calculaImc = peso / (altura * altura)
    return calculaImc.toFixed(2)
}