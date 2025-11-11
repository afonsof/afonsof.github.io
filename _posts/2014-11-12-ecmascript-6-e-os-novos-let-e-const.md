---
layout: post
title: ECMAScript 6 e os novos let e const
date: 2014-11-12 18:02:35.000000000 -02:00
type: article
published: true
status: publish
tag: tech

---

O ECMAScript 6 vem chegando e existem diversas novas modificações que tornarão a linguagem Javascript mais robusta
e mais preparada para o nosso tempo. Duas das novas funcionalidades são as palavras-chave `let` e `const`.
<!--more-->

### let

Até o ECMAScript 5, no JavaScript existiam apenas dois tipos de escopo, o escopo da função e o escopo global. Isto
causava muita frustração e comportamentos inesperados para pessoas que utilizavam anteriormente outras linguagens, como
C, C++, C# e Java.

O motivo é que o JavaScript até então não tinha um escopo de bloco e com ele espera-se que uma variável deva existir e
ser acessível apenas dentro do bloco que ela for definida. Um bloco é tudo que está envolvido dentro das chaves em
JavaScript. No exemplo abaixo podemos ter uma ideia do que o escopo de bloco significaria:

{% highlight javascript %}
...
if (true) {
var value = "ok";
console.log(value); // imprime ok
}
console.log(value); // imprime ok mas não deveria
...
{% endhighlight %}

Na saída da execução deste código teríamos:

{% highlight bash %}
ok
ok
{% endhighlight %}

Se pensássemos de forma "não-javascript" esperaríamos que fora do bloco `if` não se possa acessar a variável
`value`. Por exemplo, executando um código equivalente a esse em C# ele nem compilaria, pois o
compilador avisaria que o código estava tentando utilizar uma variável fora do seu escopo. Mas no JavaScript isto é
possível e o comportamento é estranho.

Com o ECMAScript 6 finalmente teremos os escopo de bloco. O pessoal da organização ECMA sabiam que eles não seria
possível mudar o comportamento da palavra `var` por questões de compatibilidade retroativa. Então
eles decidiram criar uma nova chamada `let`. Ela poderá ser usada para definir variáveis de escopo para
serem usadas apenas dentro do bloco que elas foram declaradas.

Para explicar por que você deve aguardar ansiosamente pelo `let`vamos entender um exemplo. Imagine que você precise
fazer um código que te retorne um array de 10 funções. Cada uma das funções deve lhe retornar o seu número de ordem.
Por exemplo a 1ª função do array deve retornar `1` enquanto a nª função deve retornar `n`. Geralmente tendemos
a fazer isto:

{% highlight javascript %}
var arr = [];
for (var i = 0; i < 10; i++) {
arr.push(function(){ return i });
}
{% endhighlight %}

Então podemos reconhecer claramente o problema de escopo. No exemplo acima a variável `i` assume o escopo
global. Logo todas as funções do array retornarão `10`.

Ruim né? Mas o `let` pode resolver este problema!

{% highlight javascript %}
var arr = [];
for (var i = 0; i < 10; i++) {
let j = i;
arr.push(function(){ return j });
}
{% endhighlight %}

Muito bom! Problema resolvido!

E quando podemos começar a usar esta funcionalidade? Infelizmente ainda não existe nenhum browser do mercado que
a implemente, mas existem alguns compiladores de JavaScript como o compilador de templates
[EJS](https://github.com/tj/ejs) que já implementa completamente o `let`. A partir do Chrome 38 você pode
utilizar a palavra-chave parcialmente através da ativação da flag "Funcionalidades Experimentais de JavaScript".

### const

Já a palavra-chave `const` terá um funcionamento similar à mesma nas outras linguagens, ou seja, a associação de
um valor a um nome e este valor jamais poderá ser alterado.

Esta abordagem é bastante válida se considerarmos a criação de constantes matemáticas como a definição do
valor de pi, a constante de gravidade ou outra coisa do tipo.

As constantes funcionam como o `let`, isto quer dizer que dentro do mesmo escopo de bloco também não podem ser
redeclaradas e não tem validade fora dele.

Por enquanto o único browser que implementa completamente a palavra-chave `const` é o IE11, porém isto não quer
dizer que não funciona em alguns outros browsers. No Chrome por exemplo ainda falta eles implementarem o tratamento
para redefinição de uma constante e o escopo por bloco, mas já é possível fazer alguns testes.

Para maiores informações de como está a compatibilidade dos browsers para estas novas funcionalidades visite
[https://kangax.github.io/compat-table/es6](https://kangax.github.io/compat-table/es6)