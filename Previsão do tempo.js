

const key = "3bf789245695786d1956758c240f8d3d"


function colocarDadosNaTela(dados) {
    console.log(dados)
    document.querySelector(".cidade").innerHTML = " Tempo em " + dados.name //Exibe o nome do local pesquisado na tela

    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    //Exibe a temperatura

    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    //Exibe os dados do clima

    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%"
    //Exibe a humidade

    document.querySelector(".img-previsão").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    //troca o ícone de acordo com a cidade

}


async function buscarCidade(cidade) { //async é usado para identificar o acesso de um servidor

    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(resposta => resposta.json())

    //faz a espera de acesso ao servidor e transcreve a informação em json

    colocarDadosNaTela(dados)
}

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value // isso torna possível a procura da classe de cidade. Quando digitarmos o nome da cidade, ele automaticamente vai fazer o link//
    buscarCidade(cidade) // Exibe o resultado na tela//
}