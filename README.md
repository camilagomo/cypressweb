# Projeto: Validação de Tela de Login

Este projeto tem como objetivo a validação da tela de login de um site utilizando o Cypress para automação de testes. O objetivo é garantir que os elementos da tela de login estejam funcionando corretamente e que o comportamento da página esteja conforme o esperado.

## Tecnologias Utilizadas:
- **Cypress**: Framework para automação de testes.
- **JavaScript**: Linguagem de programação para escrever os testes.
- **HTML/CSS**: Estrutura e estilo da página de login.
- **FakeJs**: Biblioteca para gerar massa de dados Nome e Email
  
## Funcionalidades Testadas:

1. **Validação do Campo de E-mail**:
    - Verificação se o campo de e-mail está vazio.
    - Validação de e-mail inválido (e-mail sem o formato correto).
    - Preenchimento correto do campo de e-mail.

2. **Validação do Campo de Senha**:
    - Verificação se o campo de senha está vazio.
    - Validação de senha incorreta.
    - Preenchimento correto do campo de senha.

3. **Validação do Botão de Login**:
    - Verificação se o botão de login está habilitado/desabilitado.
    - Ação de clicar no botão de login.
    - Verificação de redirecionamento ou exibição de mensagens de erro.

4. **Validação de Mensagens de Erro**:
    - Verificação de mensagens de erro quando o e-mail ou senha são inválidos.
    - Validação de mensagem de sucesso ao fazer login corretamente.

5. **Validação do Redirecionamento após Login**:
    - Verificação se, ao realizar o login com credenciais válidas, o usuário é redirecionado para a página correta.

## Passos para Execução:

1. **Configuração do Ambiente**:
   - Instale o Cypress utilizando o comando `npm install cypress`.
   - Configure os testes no diretório `cypress/integration/` com o arquivo de testes desejado.

2. **Execução dos Testes**:
   - Execute os testes com o comando `npx cypress open` para abrir a interface do Cypress.
   - Selecione o teste desejado para execução.
   - Analise os resultados no painel do Cypress.

