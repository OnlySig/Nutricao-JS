const pacientes = document.querySelectorAll(".paciente");

pacientes.forEach( (event) => {
    const controle = event.children[0].parentNode.querySelector('.info-imc')
    const peso = event.children[1].textContent
    const altura = event.children[2].textContent
    calcularImc(peso, altura)
    controle.innerHTML = calcularImc(peso, altura)
});

<<<<<<< HEAD
function calcularImc(peso, altura) {
    const calculaImc = peso / (altura * altura)
    return calculaImc.toFixed(2)
}
=======
botaoAdd.addEventListener("click", (event) => {
    event.preventDefault()
    const nome = event.target.form[0].value
    const peso = event.target.form[1].value
    const altura = event.target.form[2].value
    const gordura = event.target.form[3].value
    console.log(event.children)
    criaPaciente(nome, peso, altura, gordura)
})

function criaPaciente(nome, peso, altura, gordura) {
    if( peso >= 200 || peso <= 0 || altura >= 3 || altura <= 0 ) {
        alert("ERRO")
    } else {
        const novoPaciente = document.createElement('tr')
        novoPaciente.classList.add('paciente')

        const nomePaciente = document.createElement('td')
        nomePaciente.classList.add('info-nome')
        nomePaciente.innerHTML = nome
        novoPaciente.appendChild(nomePaciente)

        const pesoPaciente = document.createElement('td')
        pesoPaciente.classList.add('info-peso')
        pesoPaciente.innerHTML = peso
        novoPaciente.appendChild(pesoPaciente)

        const alturaPaciente = document.createElement('td')
        alturaPaciente.classList.add('info-altura')
        alturaPaciente.innerHTML = altura
        novoPaciente.appendChild(alturaPaciente)

        const gorduraPaciente = document.createElement('td')
        gorduraPaciente.classList.add('info-gordura')
        gorduraPaciente.innerHTML = gordura
        novoPaciente.appendChild(gorduraPaciente)
        
        const imcPaciente = document.createElement('td')
        imcPaciente.classList.add('info-imc')
        const somaIMC = peso / (altura * altura)
        imcPaciente.innerHTML = somaIMC.toFixed(2)
        novoPaciente.appendChild(imcPaciente)

        tabela.appendChild(novoPaciente)
    }
}

function calcularImc(peso, altura, controle, alturaControle) {
    const controlador = controle.querySelector(".info-imc")
    const somaIMC = peso / (altura * altura)

    if(peso >= 200 || peso <= 0 || altura >= 3 || altura <= 0 || alturaControle > 4 ) {
        controle.classList.add('campo-invalido')
        controlador.innerHTML = 'dados inválidos'
    } else {
        controlador.innerHTML = somaIMC.toFixed(2)
    }
    
}
>>>>>>> a6d951583c36ed77854e888995e64c5d792dc166
