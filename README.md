<h1 align="center">DH SESSION E COOKIES </h1>


## Prática integradora - Session e Cookies 
### Objetivo 
<div>
Nesta prática veremos como podemos usar o Express Validator e também
continuaremos aprendendo sobre cookies e session, super necessários para nossas
aplicações.
<br>
Bom trabalho!
</div>

### Micro desafio - Passo 1 

- Criar um pequeno projeto do Express e implementar uma view que mostra ao visitante
um formulário fácil que contenha:
> - [ ] Um label que diz: "Digite seu nome", com uma entrada para receber este valor
(obrigatório).
> - [ ] Uma lista suspensa de opções, que deve ter várias opções com nomes de cores,
das quais o visitante escolherá uma delas (obrigatório).
> - [ ] Um label que diz: "Digite seu e-mail", com uma entrada para receber este valor
(obrigatório).
> - [ ] Um label que diz: "Digite sua idade", com uma entrada para receber este valor
(não obrigatório).
> - [ ] Um botão de enviar.


- Depois de inserir os dados e clicar no botão enviar, devemos redirecionar o usuário para
a mesma página e exibir um texto que diga:
> - [ ] Olá nomeUsuário, você escolheu a cor: corSelecionada, seu e-mail é:
e-mailUsuário e sua idade é: idadeUsuário.

- Com Express Validator, devemos validar:

> - [ ] Os campos que são obrigatórios: caso não sejam preenchidos, devemos exibir
uma mensagem de erro indicando que eles devem ser preenchidos.
> - [ ] Caso a idade seja inserida, devemos validar que seja um número; caso contrário,
mostrar o erro.

<hr>

### Micro desafio - Passo 2 

- Quando o formulário é enviado, devemos mudar a cor de fundo no body para a cor que o
usuário selecionou no formulário e, além disso, queremos que você crie outra view que
aplique ao body a cor escolhida pelo usuário na view do formulário e mostre a
mensagem:
> - [ ] nomeUsuario, agradecemos a visita.


### Micro desafio - Passo 3 

- Modificar o formulário para que:
> - [ ] Tenha uma checkbox que diga "Lembrar a cor": se o visitante da aplicação
marcar esta check box, a cor escolhida persistirá ao fechar e reabrir o navegador.
> - [ ] Tenha um botão que implemente a funcionalidade "Esquecer a cor" que deve
retornar tudo ao seu estado inicial.


### Conclusão 

<div>
Usando tanto cookies e Session em nossas aplicações podemos oferecer ao usuário uma
melhor experiência e também, se implementamos Express Validator, podemos validar os
dados inseridos antes de processá-los e assim evitarmos grandes dores de cabeça se não
o fizermos.
<br>
Até a próxima!
</div>
