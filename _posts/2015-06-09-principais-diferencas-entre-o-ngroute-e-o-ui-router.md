---
layout: post
title: Principais diferenças entre o ngRoute e o ui-router
date: 2015-06-09 00:39:46.000000000 -03:00
type: article
published: true
status: publish
tag: tech
---
Este fim de semana estava criando um MVP com Ionic Framework e me deparei novamente com o `ui-router`. Das outras vezes
que o vi não dei muita atenção pois o `ngRoute` estava me suprindo, porém quando vi que o `ui-router` é o padrão do
Ionic resolvi estudar quais são as diferenças entre eles.
<!--more-->

Para começar é importante dizer que a rota numa aplicação SPA (Single Page Application) é uma funcionalidade muito
importante, pois além de prover uma navegação fluida através dos mecanismos padrão (botão voltar e avançar), permite
que se utilize templates parciais com o Angular. Isto quer dizer basicamente que é possível carregar pedaços de HTML
dentro de uma página principal e ir alternando entre eles de acordo com a rota navegada.

## Vamos às diferenças

#### 1\. Desenvolvedores

**ngRoute:** É desenvolvido pela equipe do AngularJs.  
**ui-router:** É um módulo de terceiros e mantido pela equipe do angular-ui.

#### 2\. Escopo das Views

**ngRoute:** Permite apenas uma view e não pode estar encadeada.  
**ui-router:** Permite múltiplas views e elas podem estar encadeadas.

#### 3\. Links

**ngRoute:** Os links para a rota são baseados na url. Caso precise alterar o endereço da url é necessário atualizar
todo o código que a menciona.  
**ui-router:** Os links para a rota são baseados no nome do estado. Se a url precisar ser alterada. Todos os links que
referenciam aquela rota serão alterados. Para isto basta usar o ui-sref.

#### 4\. Rotas estáticas vs dinâmicas

**ngRoute:** As rotas são estáticas e devem ser definidas no início da aplicação.  
**ui-router:** Implementa o conceito de decorator que pode ser usado para permitir que as rotas sejam dinamicamente
criadas baseadas na url que está sendo acessada.

#### 5\. Compartilhamento de dados

**ngRoute:** Não é trivial transitar informações entre as rotas.  
**ui-router:** Permite compartilhar informações entre os estados via `$stateParams`.

#### 6\. Visibilidade da rota

**ngRoute:** Não é trivial saber em que rota se está.  
**ui-router:** É possível determinar se você está num estado ou num estado pai para ajustar algum componente da
interface gráfica, como por exemplo destacar um item de menu ativo. Para isso basta expor a variável `$state` para o
`$rootScope` ao configurar a aplicação.

## Conclusão

Sempre senti que faltava algo no `ngRoute`. Várias vezes tentei contornar as limitações dele usando $rootScope e
outros workarounds. Logo, minha conclusão foi a mesma de todo mundo: Use o `ngRoute` em aplicações pequenas e simples.
Se perceber que o cenário pode vir a ficar mais complexo, não pense duas vezes em trocar para o `ui-router`.

## Links

[https://docs.angularjs.org/api/ngRoute](https://docs.angularjs.org/api/ngRoute)  
[https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)  
[http://www.amasik.com/angularjs-ngroute-vs-ui-router/](http://www.amasik.com/angularjs-ngroute-vs-ui-router/)  
[http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router](http://stackoverflow.com/questions/21023763/difference-between-angular-route-and-angular-ui-router)
