# Aggregates

## O que é

- Grupo de entidades e objetos de valor que serão instanciados na mesma transação;
- As entidades e objetos de valores dentro de um aggregate geralmente tem um relacionamento de composição;
- Seu nome geralmente leva o nome da entidade raiz do agregado.
- É uma maquina de estado.
- Executa comportamentos garantindo consistência transacional entre todas as entidades contida nele para que o estado final seja válido conforme as regras de negócio.

### Raiz do agregado

## O que é

- É o ponto de entrada do aggragate;
- Onde se inicia a transação;
- A entidade que tem que existir primeiro.

Por se tratar de uma transação é sempre interessante revisar e manter o aggregate conciso.

# Entidades e Objetos de valor

## O que é

- Estão agrupados em um aggregate.
- Todo substantivo utilizado para para explicar um subdomínio em um contexto, é uma entidade ou objeto de valor.

### Entidades :

- São conjuntos de atributos identificadas por um id
- Podem ter seu conteúdo modificado sem mudar sua referência.

### Objetos de valor :

- São conjuntos de atributos sem identificação por id
- Não podem ser alterados já que sua referencia é todo seu conteúdo.
