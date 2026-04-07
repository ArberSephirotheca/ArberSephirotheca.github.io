+++
title = "SIMT-Step Execution: A Flexible Operational Semantics For GPU Subgroup Behavior"
slug = "simt-step"
date = 2026-04-07
description = "SIMT-Step develops a formal operational semantics for GPU warp and subgroup execution, modeling divergence, reconvergence, and portability-relevant behavior across architectures."
template = "publication.html"
authors = ["Zheyuan Chen", "Naomi Rehman", "Guido Martínez", "Tyler Sorensen"]

[taxonomies]
categories = ["Conference Papers"]

[extra]
venue = "PLDI"
venue_full = "ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI)"
paper_url = "/files/PLDI-simt-step.pdf"
+++

SIMT-Step introduces a formal and flexible operational semantics for GPU warp and subgroup execution. The work models divergence and reconvergence explicitly, uses TLA+ to validate the semantics, and studies how closely the model matches observed behavior across real GPUs from multiple vendors.
