---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in University of California, Santa Cruz, 2029 (expected)
* M.S. in University of California, Santa Cruz, 2024
* B.S. in Rensselaer Polytechnic Institute, 2022

CV
======
[Download](https://arbersephirotheca.github.io/files/Zheyuan_Chen_CV.pdf)

Transcript
======
[Download](https://arbersephirotheca.github.io/files/SSR_TSRPT.pdf)

Work & Research experience
======
* Summer 2025: Research Intern
  * Applied SIMT-Step semantics to shader development, focusing on warp execution correctness in HLSL.
  * Built a Clang-AST–based interpreter and fuzzing framework for HLSL to automatically generate warp execution tests.
  * Implemented a reducer to minimize failing tests into conformance test suites, enabling systematic validation across GPU vendors.
  * Identified and reported warp execution bugs under non-uniform control flow across NVIDIA, Intel, and AMD GPUs.
* Winter 2024: Research Assistant
  * University of California, Santa Cruz
  * Duties included: Developed a formal specification framework using TLA+, under the supervision of Professor Tyler Sorensen, to verify and analyze various GPU forward progress models.
  * Supervisor: Tyler Sorensen

* Fall 2024: Software Engineer Intern
  * Mercedes-Benz Research & Development North America
  * Duties includes: Autonomous Driving - Middleware
  <!-- * Supervisor: The Users -->

* Summer 2024: Software Engineer Intern
  * Mercedes-Benz Research & Development North America
  * Duties included: Autonomous Driving - Middleware
  <!-- * Supervisor: Professor Hub -->

* Spring 2024: Research Assistant
  * University of California, Santa Cruz
  * Duties included: Developed a formal specification framework using TLA+, under the supervision of Professor Tyler Sorensen, to verify and analyze various GPU forward progress models.
  * Supervisor: Tyler Sorensen
  
Skills
======
* Rust
* C++
* Go
* Python
* GPU Programming
  * CUDA
  * Vulkan
  * SYCL

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
<!-- Talks
======
  <ul>{% for post in site.talks reversed %}
    {% include archive-single-talk-cv.html  %}
  {% endfor %}</ul> -->
  
Teaching
======
  <ul>{% for post in site.teaching reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>
  
Service and leadership
======
<!-- * Currently signed in to 43 different slack teams -->
