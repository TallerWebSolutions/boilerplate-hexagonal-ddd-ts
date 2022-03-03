# Ports

## O que é

- São portas da aplicação que são "utilizadas" pelos adapters mas que se mantém agnóstica as regras que o compõe.
- Na prática, são interfaces que determinam qual o tipo de serviço será conectado(persistência, filas, storage etc) e que são implementadas no adapter (em infra) onde é mais específico o serviço (mysql, aws sqs, aws s3, etc);
