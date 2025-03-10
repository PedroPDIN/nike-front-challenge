# Desafio Front-End


Este desafio é uma aplicação de e-commerce construída com React, inspirada na página oficial da Nike. A aplicação permite a navegação por diferentes produtos, com filtros para tamanho de roupa e calçado (em breve novas funcionalidade de filtro).

## ❗ Observações Importantes

* Essa aplicação é dependente totalmente do back-end, ou seja, é necessário instalar o projeto `nike-back-challenge`, que por sua vez é o back-end do desafio. No README no projeto `nike-back-challenge` estará as instruções necessárias para a instalação do back-end, link para acessar o repositório (back-end) [aqui](https://github.com/PedroPDIN/nike-back-challenge).


## Tecnologias Utilizadas
* [ReactJS](https://pt-br.react.dev/)
* [Tailwindcss v3.4.17](https://v3.tailwindcss.com/)

## Funcionalidades

1. Renderização dos produtos com nome, preço e imagem.
2. Ao interagir com o produto é renderizado um modal com os detalhes do produto
3. Implementação de filtragem por tamanho de roupa e calçado.


## Instalação

1. Clone o repositório:
~~~
git clone git@github.com:PedroPDIN/nike-front-challenge.git
~~~

2. Após executar o comando do git clone, acesse o diretório criado através desse comando:

~~~
cd nike-front-challenge
~~~

3. Instale as Dependências:

~~~
npm install
~~~

4. Por fim, para rodar a aplicação:

~~~
npm start
~~~

## Estrutura do projeto

* `src/`: Contém todos os arquivos fonte da aplicação.

  * `components/`: Componentes React reutilizáveis.
  * `services/`: Funções de chamada para as APIs.
  * `assets/:` Imagens e ícones utilizados na aplicação.
  * `interfaces/:` Contrato de tipagens para aplicação.
  * `types/:` Tipos personalizados para dados da aplicação.
  * `enums/:` Conjuntos de constantes nomeadas.
  * `utils/:` Funções complementares e reutilizáveis.


---