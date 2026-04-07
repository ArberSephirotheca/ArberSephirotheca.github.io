---
permalink: /
title: "About "
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

Hi, I'm a 2nd-year PhD student in Computer Science from [University of California, Santa Cruz](https://www.ucsc.edu/about/). I'm advised by [Prof. Tyler Sorensen](https://users.soe.ucsc.edu/~tsorensen/). My research lies in GPGPU, Programming Language, Compiler and ML Sys!

I am particularly interested in GPU semantics and highly efficient portable kernel design. I believe that the lack of precise, formal semantics in current GPU programming models, especially around subgroup execution, synchronization, and memory consistency, limits our ability to reason about correctness and performance portability. My research aims to develop formal foundations and practical tools for rigorous reasoning about GPU behavior, and to leverage these insights to design portable kernels that achieve both correctness and high performance across heterogeneous architectures.

Research
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>


Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>