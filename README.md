# Pokédex - Aplicação de Pesquisa de Pokémon

![image](https://github.com/user-attachments/assets/67159f53-2847-4a82-9f7f-82be9a62ba83)  

## Tecnologias Utilizadas

| Tecnologia         | Descrição                                                                                       |
|--------------------|-------------------------------------------------------------------------------------------------|
| **React**          | Biblioteca JavaScript para construção de interfaces de usuário reativas e modulares.            |
| **Axios**          | Cliente HTTP que facilita a comunicação com a API, tornando as requisições mais simples.         |
| **CSS Responsivo** | Estilização personalizada que garante uma boa experiência em diferentes tamanhos de tela.        |

## API Utilizada

Este projeto consome a API pública [PokéAPI](https://pokeapi.co/), que fornece dados sobre todos os Pokémon. A aplicação utiliza o endpoint `https://pokeapi.co/api/v2/pokemon/{name_or_id}` para buscar informações como:

- Nome
- Imagem
- Tipos
- Habilidades

Esses dados são usados para exibir um cartão detalhado do Pokémon pesquisado pelo usuário.

## Sobre o Projeto

O projeto "Pokédex" permite que o usuário busque por qualquer Pokémon pelo nome ou número (ID). Ao digitar o nome ou ID de um Pokémon e clicar no botão "Buscar", a aplicação realiza uma requisição à API PokéAPI e exibe as seguintes informações:

- **Número e Nome** do Pokémon
- **Imagem** do Pokémon
- **Tipos** (ex: Grama, Fogo)
- **Habilidades** (ex: Overgrow, Chlorophyll)

Se o Pokémon não for encontrado, uma mensagem de erro personalizada é exibida informando o usuário do erro.

### Funcionalidades Principais:
- **Pesquisa de Pokémon por nome ou número**: O usuário pode digitar o nome ou o número do Pokémon para obter informações detalhadas.
- **Exibição de Cartão Detalhado**: Quando um Pokémon é encontrado, um cartão estilizado exibe as informações coletadas da API.
- **Mensagem de Erro**: Caso um Pokémon não seja encontrado, uma mensagem clara e amigável aparece na tela para informar o erro.
- **Interface Responsiva**: A interface foi projetada para se adaptar a diferentes tamanhos de tela, proporcionando uma experiência agradável tanto em dispositivos móveis quanto em desktop.

### Experiência do Usuário

A aplicação oferece uma interface intuitiva e amigável. Com apenas um campo de pesquisa e um botão de busca, o usuário pode facilmente acessar informações detalhadas sobre qualquer Pokémon. Além disso, mensagens claras de sucesso ou erro são exibidas para melhorar a experiência de uso.

## Link do Site

[Pokédex - Projeto de Pesquisa de Pokémon](https://seulink.com)
