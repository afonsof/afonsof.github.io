---
layout: post
title: jenkins-material-theme — Beautify your Jenkins with the Material Design theme!
date: 2016-02-10 00:00:00.000000000 -03:00
type: article
published: true
status: publish
tag: tech
---

Some months ago I started to use Jenkins with a real project for the first time. In all the previous projects I participated the team had always decided for using a proprietary solution like pmease QuickBuild or Jetbrains TeamCity.
<!--more-->

My first impression using Jenkins was: "Ouch it's so ugly!". So I decided to improve it creating an open source theme. I've always enjoyed the new Google UI style thus I got the [Material Design Principles](https://www.google.com/design/) and applied to a fresh [new theme](https://github.com/afonsof/jenkins-material-theme). The result was:

![Jenkins Main Screen](https://cdn-images-1.medium.com/max/1600/1*sbGNpYfGwBS6mUzuiUYfgQ.png)

At first I took some decisions in order to reduce problems with plugins because Jenkins is extensible consequently if I change it to much, probably I'll break something. I also wanted to make the theme easy to install and to use. Here are my principles
* Do not make it heavy: Using SVG images avoid the necessity of multi-size images. As a result the theme has only 35KB.
* Do not use external resources: All images were embedded to the css file (planning to do the same with Roboto font)
* Do not change Jenkins structure: It might affect a plugin behavior
* Do not use Javascript: I don’t want to make it complex or slow. Only one css can be used in a sort of ways. Simple Theme Plugin, Self hosted, Stylish etc.
* Use the power of community: There are lots of Jenkins plugins and I know that I wont be able to make it works with all of them. But we can try to adapt to the most popular ones. We are receiving some pull requests and issues with plugin incompatibilities fixes.

If you want to install, it's very simple. click to [this link](https://github.com/afonsof/jenkins-material-theme) and check it out :D
