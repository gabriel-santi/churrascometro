const btn = document.getElementById('calcular')

function pegaValores() {
    const qtdAdultos = parseInt(document.getElementById('adultos').value)
    const qtdCriancas = parseInt(document.getElementById('criancas').value)
    const horas = parseInt(document.getElementById('horas').value)

    if (isNaN(qtdAdultos) && isNaN(qtdCriancas) && isNaN(horas)) {
        alert('Preencha os campos corretamente!')
    } else {
        calculaComida(qtdAdultos, qtdCriancas, horas)
    }
}

btn.addEventListener('click', pegaValores)

function calculaComida(adultos, criancas, horas) {
    const totalPessoas = adultos + (criancas * 0.5)
    let carne, cerva, refri;

    if (horas < 6) {
        carne = totalPessoas * 400
        cerva = totalPessoas * 1200
        refri = totalPessoas * 1000
    } else {
        carne = totalPessoas * 650
        cerva = totalPessoas * 2000
        refri = totalPessoas * 1500
    }

    const comidas = {
        carne: `${carne}mg de carne`,
        cerva: `${cerva}ml de cerva`,
        refri: `${refri}ml de refrigerante`
    }

    mostraLista(comidas)
}

function mostraLista(ingredientes) {
    const lista = document.getElementById('lista')
    lista.innerHTML = `
    <h2>Ingredientes:</h2>
    <li>${ingredientes.carne}</li>
    <li>${ingredientes.cerva}</li>
    <li>${ingredientes.refri}</li>`
}