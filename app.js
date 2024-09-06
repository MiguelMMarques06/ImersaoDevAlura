function pesquisar() {
    // Obtém a seção HTML onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    if(campoPesquisa == ""){
      section.innerHTML = "Nada foi encontrado"
      return
    }

    campoPesquisa = campoPesquisa.toLowerCase()
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo ="";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada dado na lista de resultados
    for (let dado of dados) {
      titulo = dado.titulo.toLowerCase()
      descricao=dado.descricao.toLowerCase( )
      tags = dado.tags.toLowerCase()
      if(titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))[
        // Cria uma nova div para cada resultado, formatando-a como HTML
        resultados += `<div class="item-resultado">
          <h2>
            <a href=${dado.site} target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta">
            ${dado.descricao}
          </p> 
          <a href=${dado.mais_info} target="_blank">Mais informações</a>
        </div>`
      ]
      if(!resultados){
        resultados = "<p>Nada foi encontrado. Você precisa digitar o nome de uma equipe.</p>"
      }
    
    }
  
    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  } 