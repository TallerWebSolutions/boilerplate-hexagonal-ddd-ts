# Aggregates

## O que é

- Grupo de entidades e objetos de valor que serão instanciados na mesma transação;
- Geralmente tem um relacionamento de composição;
- Seu nome geralmente leva o nome da entidade raiz do agregado.

### Raiz do agregado

- É o ponto de entrada do aggragate;
- Onde se inicia a transação;
- A entidade que tem que existir primeiro.

Por se tratar de uma transação é sempre interessante revisar e manter o aggregate conciso.
