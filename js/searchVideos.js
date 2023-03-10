import { conectaApi } from "./api.js";
import constroiCard from "./showVideos.js";

const botaoDePesquisa = document.querySelector('[data-botao-pesquisa]');


async function buscarVideo(event) {
    event.preventDefault();

    const dadosDePesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosDePesquisa);

    const lista = document.querySelector('[data-lista]');

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(element => lista.appendChild(constroiCard(
        element.titulo,
        element.descricao,
        element.url,
        element.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com este termo!</h2>`
    }

}

botaoDePesquisa.addEventListener('click', event => buscarVideo(event));