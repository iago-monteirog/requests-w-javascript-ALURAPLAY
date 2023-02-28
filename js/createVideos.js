import { conectaApi } from "./api.js";

const formulario = document.querySelector('[data-formulario]');

async function createVideo(event) {
    event.preventDefault();

    const imagem =  document.querySelector('[data-imagem]').value;
    const url = document.querySelector('[data-url]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
    
        window.location.href = '../pages/envio-concluido.html';
    
    } catch (error) {
        document.body.innerHTML = `
            <h2 class="erro">${error}</h2>
        `
    }
}

formulario.addEventListener('submit', event => createVideo(event));
