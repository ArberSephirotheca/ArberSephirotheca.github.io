+++
title = "About"
+++

I'm Zheyuan Chen, a Ph.D. student in Computer Science & Engineering at [the University of California, Santa Cruz](https://www.ucsc.edu/about/). I'm advised by [Prof. Tyler Sorensen](https://users.soe.ucsc.edu/~tsorensen/) and work on GPU semantics, formal methods, compilers, and portable ML kernels.

I am particularly interested in GPU semantics and highly efficient portable kernel design. I believe that the lack of precise, formal semantics in current GPU programming models, especially around subgroup execution, synchronization, and memory consistency, limits our ability to reason about correctness and performance portability. My research aims to develop formal foundations and practical tools for rigorous reasoning about GPU behavior, and to leverage these insights to design portable kernels that achieve both correctness and high performance across heterogeneous architectures.

One way to summarize the kind of systems work I like is:

```rust
struct Research {
    focus: [GpuSemantics, FormalVerification, PortableKernels],
}

impl Research {
    fn optimize(&self) -> Goal {
        semantics::model(SubgroupBehavior)
            .verify_with(FormalMethod)
            .compile_to(PortableGpuKernel)
    }
}

const GOAL: &str = "Correct and fast kernels across architectures";
```

The quickest way to navigate this site is through my [publications](@/publications/_index.md), [CV](@/cv.md), and public code on [GitHub](https://github.com/ArberSephirotheca).
