+++
title = "SIMT-Step Execution: A Flexible Operational Semantics For GPU Subgroup Behavior"
slug = "simt-step"
date = 2026-04-07
description = "SIMT-Step provides a formal and flexible operational semantics for GPU subgroup execution, using dynamic basic blocks and TLA+ validation to reason about converged, synchronous, and independent behaviors across devices."
template = "publication.html"
authors = ["Zheyuan Chen", "Naomi Rehman", "Guido Martínez", "Tyler Sorensen"]

[taxonomies]
categories = ["Conference Papers"]

[extra]
venue = "PLDI"
venue_full = "ACM SIGPLAN Conference on Programming Language Design and Implementation (PLDI)"
paper_url = "/files/PLDI-simt-step.pdf"
+++

GPU hardware implements a SIMT execution model, where small groups of threads, called subgroups (or warps in CUDA), execute synchronously. Languages expose this through high-performance subgroup-level APIs. However, providing precise subgroup semantics in languages is challenging, as compilers may transform the program, potentially disrupting source-level synchronous behavior even if the hardware is synchronous. As a result, no GPU programming language provides rigorous semantics for subgroup execution.

In this work, we present SIMT-Step, a formal and flexible operational semantics for subgroup execution. At its core is a new semantic object, dynamic basic blocks, which enables precise specification of converged subgroup execution. SIMT-Step then provides flexibility for the execution of instructions, which can be collective, synchronous, or independent. We propose several candidate instantiations of SIMT-Step and design a suite of idiomatic tests to distinguish them, highlighting counter-intuitive behavior that arises under relaxed variants. We implement SIMT-Step in TLA+ and validate the behavior of the tests. To investigate how closely SIMT-Step models real-world GPU behavior, we conduct a fuzzing campaign, spanning ten GPUs and eight vendors.

Our empirical study shows that non-synchronous behaviors are rare and appear on only a small number of devices; however, detailed investigation into these behaviors was inconclusive as to whether they are intentional or not.
Combined, these contributions provide both a theoretical foundation and practical tools for reasoning about subgroup semantics in GPU programming languages.
