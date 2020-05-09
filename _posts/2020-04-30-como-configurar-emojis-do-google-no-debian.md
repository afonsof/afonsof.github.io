---
layout: post
title: Como configurar os emojis do Google como padrão no Debian 10
date: 2020-04-30 18:02:35.000000000 -03:00
type: article
published: true
status: publish
tag: tech
image_url: /assets/images/posts/emoji-debian-thumb.jpg
---

Estou usando o Debian como meu sistema principal há 2 meses e estou 
bem satisfeito. Porém, uma coisa que me incomodava demais eram os 
emojis feios e monocromáticos do sistema:

{% include figure.html
     url="/assets/images/posts/1_K5v0n-xo11JGy1CozLuorQ.png"
     description="Emojis feitos por um designer que tinha muitas outras coisas pra fazer"
%}

O que mais me incomodava é que muitos dos emojis não apareciam, 
eram exibidos apenas um quadrado. Daí depois de alguns minutos
de busca, achei uma solução excelente. Usar os emojis do Google
como fonte padrão de emoji no Debian. Segue abaixo o
procedimento:

## Primeiro passo: Instalar a fonte Noto Color Emoji no sistema
A primeira coisa a fazer é baixar uma versão das fontes nesse 
link: https://github.com/googlefonts/noto-emoji/releases.
Eu escolhi a mais nova pois queria ter o máximo de emojis novos.
Daí é só clicar no botão Source code (tar.gz):

{% include figure.html 
    url="/assets/images/posts/1_WS6bAaZihVbIpxDDoYWMeA.png"
    description=""
%}

Em seguida abra o Terminal do Debian, vá até a pasta onde você
baixou o arquivo e descompacte-o.

{% highlight shell %}
cd ~/Downloads #ou qualquer outra pasta que vc tenha baixado o pacote
tar -xzvf <nome-do-seu-pacote>
sudo mkdir -p /usr/share/fonts/opentype/noto
sudo cp <nome-da-pasta-gerada-pela-extração>/fonts/ *.ttf /usr/share/fonts/opentype/noto
sudo fc-cache -f -v
{% endhighlight %}

Feito isso a fonte estará instalada e pronta para ser usada em softwares
de edição de texto. Porém ainda não é a fonte padrão para emoji do
sistema.

## Segundo passo: Definir a fonte Noto Color Emoji como padrão para emojis em todo o sistema

Nesse passo a gente vai criar um arquivo de configuração para definir a nova fonte

{% highlight shell %}
mkdir -p ~/.config/fontconfig/
touch ~/.config/fontconfig/fonts.conf
{% endhighlight %}

Depois abra o arquivo fonts.conf criado e popule-o com o seguinte
conteúdo:

{% highlight xml %}
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE fontconfig SYSTEM "fonts.dtd">

<fontconfig>
  <match>
    <test name="family"><string>sans-serif</string></test>
    <edit name="family" mode="prepend" binding="strong">
      <string>Noto Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>serif</string></test>
    <edit name="family" mode="prepend" binding="strong">
      <string>Noto Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>monospace</string></test>
    <edit name="family" mode="prepend" binding="strong">
      <string>Noto Emoji</string>
    </edit>
  </match>
  <match>
    <test name="family"><string>Apple Color Emoji</string></test>
    <edit name="family" mode="prepend" binding="strong">
      <string>Noto Emoji</string>
    </edit>
  </match>
</fontconfig>
{% endhighlight %}

Então, rode esse comando novamente:

{% highlight shell %}
sudo fc-cache -f -v
{% endhighlight %}

Pronto! Após essa configuração feche e abra todos os seus aplicativos
que eles vão mostrar os emojis de forma diferente. Mais ou menos
assim:

{% include figure.html 
    url="/assets/images/posts/1_CxrG-XYB7XdQ3yhgAZMBgg.png"
    description="Não faço ideia do porquê de uma carinha ter continuado com a font antiga!"
%}