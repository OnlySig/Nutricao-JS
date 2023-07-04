const botaoAdd = document.querySelector("#adicionar-paciente");
const tabela = document.querySelector("#tabela-pacientes")

botaoAdd.addEventListener("click", event => {
    event.preventDefault()
    criaPaciente(capturaInfosPaciente(event))
    event.target.form.reset()
})

function criaTr(paciente) {
    const novoPaciente = document.createElement('tr')
        novoPaciente.classList.add('paciente')

        novoPaciente.appendChild(montaTd(paciente.nome, 'nome'))
        novoPaciente.appendChild(montaTd(paciente.peso, 'peso'))
        novoPaciente.appendChild(montaTd(paciente.altura, 'altura'))
        novoPaciente.appendChild(montaTd(paciente.gordura, 'gordura'))
        
        const imcPaciente = montaTd(null, 'peso')
        imcPaciente.innerHTML = calcularImc(paciente.peso, paciente.altura)
        novoPaciente.appendChild(imcPaciente)

        return novoPaciente
}

function montaTd(dado, classe) {
    const novaLinha = document.createElement('td');
    novaLinha.innerHTML = dado
    novaLinha.classList.add(`info-${classe}`)

    return novaLinha
}

function criaPaciente(event) {
    if (event.nome === '' || event.peso === '' || event.altura === '' || event.gordura === '') {
        alert('pare de usar alert')
    } else if( event.peso >= 200 || event.peso <= 0 || event.peso != Number(event.peso)) {
        event.controlePeso.classList.add('campo-invalido')
    } else if( event.altura >= 3 || event.altura <= 0 || event.qtdNumAltura > 4) {
        event.controleAltura.classList.add('campo-invalido')
    } else {
        event.controleAltura.classList.remove('campo-invalido')
        event.controlePeso.classList.remove('campo-invalido')

        const novoPaciente = criaTr(event)
        tabela.appendChild(novoPaciente)

    }

}

function capturaInfosPaciente(event) {
    const paciente = {
        nome: event.target.form['nome'].value,
        peso: Number(event.target.form['peso'].value),
        altura: event.target.form['altura'].value,
        gordura: event.target.form['gordura'].value,
        controlePeso: event.target.form['peso'],
        controleAltura: event.target.form['altura'],
        qtdNumAltura: event.target.form['altura'].selectionStart
    }
    return paciente
}