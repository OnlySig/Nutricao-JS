const pacientes = document.querySelectorAll(".paciente")

pacientes.forEach(event => {
    calcularImc(event.children[1].textContent, event.children[2].textContent, event.children[4].parentNode)
    console.log(event.children[4].parentNode)
    
})

function calcularImc(peso, altura, controle) {
    const controlador = controle.querySelector('.info-imc')
    const imc = peso / (altura * altura)

    if(altura >= 2.5 || altura <= 0 || peso >= 200 || peso <= 0) {
        controle.classList.add('campo-invalido')
    } else {
        controlador.innerHTML = imc.toFixed(2)
    }

}