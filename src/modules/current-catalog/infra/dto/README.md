# DTO

## O que é

- Tradução entre contextos;
- Anti-corruption Layer;
- São os tipos com os formatos que esperamos nos adapters de left e right e a aplicação das regras para converter esses formatos nos formatos do domínio e vice-versa .
- Colocamos perto do adapter ou o service do adapter que estiver aplicando ele para facilitar a manutenção. Geralmente utilizamos 1 dto para cada adapter, mesmo se houver 2 adapters para o mesmo port. Isso porque dificilmente teremos a mesma estrutura pra dois adapters diferentes. Mas se houver alguma situação em que o DTO possa ser completamente reaproveitado por outro adapter esse pode ser elegível para um diretório dto infra/right, infra/left ou até mesmo infra.
