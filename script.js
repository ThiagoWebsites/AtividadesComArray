import { profissao } from "./dados.js";

const body = document.querySelector("body")

let contador = 0

while(contador < profissao.length) {
    body.innerHTML += `
       <div>
             <h1>${profissao[contador].nome}</h1>
             <p><strong>Salário:</strong> ${profissao[contador].salario}</p>
             <p><strong>Expediente:</strong> ${profissao[contador].expediente}</p>
             <p><strong>Anos de Faculdade:</strong> ${profissao[contador].anosFaculdade}</p>
             <p><strong>Função:</strong> ${profissao[contador].Função}</p>
       </div>
    `

    contador++
}