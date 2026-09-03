# O que o código tenta fazer

Receber uma requisição e criar um usuário a partir do e-mail enviado.

# Riscos e falhas

Há operação assíncrona não aguardada, interpolação insegura na consulta e ausência de validação de entrada.

# Hipóteses assumidas

Supõe que o corpo possui e-mail válido e que a consulta sempre funciona.

# Como testar

Testar corpo válido, JSON inválido, e-mail inválido, falha do banco e caracteres de injeção.

# Alterações recomendadas

Aguardar o JSON, validar a entrada, usar parâmetros na consulta e retornar status adequado.
