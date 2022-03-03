# Use case

## O que é

- Espaço onde são criados os casos de uso da aplicação.
- Os casos de uso são comandos ou processos que podem ser acionados por diversos adapters de left e acionar diversos adapters de right mas devem se manter agnósticos às suas regras.

### Inversão de dependência

- Os use cases são acionados por adapters de left e acionam adapters de right mas, para manter o fluxo das importações, fazemos inversão de dependência e o adapter de left injeta um (ou vários, se for o caso) adapter de right na chamada do use-case. Dessa forma, o use case só fica dependente do port da aplicação que se conecta ao adapter em questão.
