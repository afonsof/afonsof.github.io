---
layout: post
title: Integrando aplicações OAuth com Webhook
date: 2016-01-30 00:00:00.000000000 -03:00
type: post
published: true
status: publish
img: como-aprendi-ingles.png
categories:
- blog
---

Você provavelmente já entrou em algum site que fazia autenticação com o Google ou Facebook e com certeza já recebeu uma notificação no celular quando recebe uma mensagem numa rede social. Neste post vou descrever o conceito de webhook, com usá-los e como criar aplicações que conversam com outras.
<!--more-->

*Obs.: Os exemplos estão em Python, mas podem ser replicados utilizando qualquer linguagem de programação moderna.*

### Autenticando em sites de terceiros com OAuth
O protocolo OAuth é um padrão de autorização aberto que em sua essência permite que tokens de acesso sejam criados por por terceiros usando um servidor de autorização com a aprovação do usuário dono do recurso. O terceiro então usa o token de acesso para accessar dados protegidos como e-mail e dados pessoais no servidor da provedora do serviço.

Um exemplo prático: Vamos disponibilizar um botão de autenticação com Twitter. O usuário clicará no botão e autorizará o nosso site a receber suas informações pessoais. Então nosso site recebe um token de acesso e o usa para consultar estes dados do usuário e realizar o seu cadastro.



