const urlBackend = "http://localhost:3000"

const parametros = new URLSearchParams(window.location.search)

const id = parametros.get("id")

const inputTitulo = document.getElementById("titulo")
const inputArtista = document.getElementById("artista")
const inputGenero = document.getElementById("genero")
const inputAno = document.getElementById("ano")
const inputDuracao = document.getElementById("duracao")

const botaoSalvar = document.getElementById("botaoSalvar")

async function buscarMusica() {
    const resposta = await fetch(`${urlBackend}/musica/${id}`)

    const musica = await resposta.json()

    inputTitulo.value = musica.titulo
    inputArtista.value = musica.artista
    inputGenero.value = musica.genero
    inputAno.value = musica.ano
    inputDuracao.value = musica.duracao
}
botaoSalvar.addEventListener("click", salvarAlteracoes)
buscarMusica()