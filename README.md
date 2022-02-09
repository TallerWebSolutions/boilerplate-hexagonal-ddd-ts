# Hexagonal Architecture usando DDD

A Arquitetura Hexagonal é modelo de design de software que busca desacoplamento ao redor da lógica de domínio.

## Por que?

Uma motivação para se usar a Arquitetura Hexagonal é evitar que o domínio do nosso negócio seja influenciado pelo mundo externo, fazendo com que, por exemplo, seja bem mais fácil substituir um fornecedor externo do nosso neǵocio, trazendo logenvidade à nossa aplicação.

### Por que usar com DDD?

O DDD foca no enriquecimento da modelagem de domínio com o comportamento do modelo e isso traz compatibilidade com o hexagonal, delimitando a modelagem externa da interna.

"Em DDD, as regras de validação podem ser consideradas invariáveis. A principal responsabilidade do modelo é impor invariáveis entre as alterações de estado para todas as entidades dentro daquele modelo. Entidades de domínio devem ser sempre entidades válidas."

## Vantagens

- Padrões e conceitos se dão bem com a Arquitetura Hexagonal, por exemplo, é mais tranquilo aplicar S.O.L.I.D ou manipular as dependências de modo que torne manutenível a troca de componentes
- Traz facilidade com testes, como as camadas são bem separadas é possível testar idoladamente

## Desvantagens

- A Arquitetura Hexagonal traz certa complexidade para a aplicação, não sendo interessante para domínios simples como o famoso Software de TODO
- A Arquitetura Hexagonal exige tanto conhecimento técnico sobre o assunto como domínio do negócio, criando certa depedência de um design estratégico

## Mitos
- Não é necessário usar DDD sempre que usar Hexagonal, certamente as duas coisas se dão muito bem mas um não requer o outro
- Seja pragmático, não é necessário seguir as coisas 'by the book', os contextos variam então é interessante analisar os tradeoffs para adotar ou adaptar um padrão
