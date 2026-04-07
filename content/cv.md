+++
title = "CV"
template = "cv.html"
aliases = ["/resume", "/resume/"]
+++

## Contact & Downloads

- Email: [zchen406@ucsc.edu](mailto:zchen406@ucsc.edu)
- [Download CV as PDF](/files/Zheyuan_Chen_CV.pdf)
- [Download transcript as PDF](/files/SSR_TSRPT.pdf)

## Education

### University of California, Santa Cruz
Ph.D. in Computer Science and Engineering, September 2024 to present

### University of California, Santa Cruz
M.S. in Computer Science and Engineering, June 2024

### Rensselaer Polytechnic Institute
B.S. in Computer Science, May 2022

## Research & Work Experience

### Microsoft Research, RiSE Group
Research Intern, Redmond, Washington, June 2025 to September 2025

- Developed **SIMT-Step**, a formal operational semantics for GPU warp execution that models divergence, reconvergence, and subgroup behavior across architectures.
- Built a Clang AST-based interpreter and fuzzing framework for High-Level Shading Language (HLSL) to generate warp-execution tests automatically.
- Discovered and reported warp-execution bugs under non-uniform control flow across NVIDIA, Intel, and AMD GPUs.
- Extended the HLSL testing infrastructure with more flexible test definitions, improving coverage and long-term maintainability.

### Mercedes-Benz Research & Development North America
Software Engineering Intern, Sunnyvale, California, June 2024 to December 2024

- Contributed to middleware for automated driving systems, improving communication, data flow, and resource sharing across safety-critical components.
- Developed an automated toolchain to migrate a large Bazel-based CUDA/C++ project to SYCL, reducing manual effort by 90% and improving portability across heterogeneous hardware.

### Languages, Systems, and Data Lab, University of California, Santa Cruz
Research Assistant, January 2023 to present

- Developed a formal operational semantics for GPU warp execution to address the lack of rigorous semantic models in existing GPU programming languages.
- Verified the semantics in TLA+ and used the model to reason about subgroup execution behavior.
- Optimized the portable **FlashAttention** kernel in llama.cpp's **WGSL** backend by applying software pipelining to overlap global memory access with tensor computation, improving performance by 30%.

## Skills

- Languages: Rust, C/C++, Python, Go, HLSL, GLSL, Metal, SPIR-V, TLA+
- Frameworks and systems: CUDA, SYCL, Vulkan, HIP, OpenCL, LLVM, MLIR
