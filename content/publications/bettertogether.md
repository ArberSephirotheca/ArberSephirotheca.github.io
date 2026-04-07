+++
title = "BetterTogether: An Interference-Aware Framework for Fine-grained Software Pipelining on Heterogeneous SoCs."
slug = "bettertogether"
date = 2025-10-12
description = "BetterTogether enables fine-grained software pipelining on heterogeneous edge SoCs using a profile-guided performance model that captures intra-application interference across CPUs and GPUs."
template = "publication.html"
aliases = ["/publications/2025-10-21-bettertogether/"]
authors = ["Yanwen Xu", "Rithik Sharma", "Zheyuan Chen", "Shaan Mistry", "Tyler Sorensen"]

[taxonomies]
categories = ["Conference Papers"]

[extra]
venue = "IISWC 2025"
venue_full = "IEEE International Symposium on Workload Characterization (IISWC)"
paper_url = "/files/pdf-iiswc.pdf"
slides_url = "/files/pdf-iiswc-slides.pdf"
code_url = "https://github.com/ucsc-redwood/better-together"
doi_url = "https://ieeexplore.ieee.org/document/11242071"
award = "Best Paper Award"
+++

Data processing on the edge offers advantages over cloud-based solutions, including reduced latency and lower energy consumption. However, to fully utilize edge SoCs, applications must be efficiently mapped onto these devices' constituent heterogeneous processing units. This mapping is challenging, as modern SoCs incorporate diverse compute units, such as big.LITTLE architectures and GPUs with distinct performance characteristics. Furthermore, due to edge SoCs' integration and resource constraints, execution on one processing unit can interfere with the runtime of others, complicating the construction of modular and composable performance models.

To address these challenges, we present BetterTogether, a flexible scheduling framework that enables fine-grained software pipelining on heterogeneous SoCs. Applications are provided as a sequence of stages, each with a CPU and GPU implementation. These stages can then be pipelined across the various processing units on the SoC. The novel component of BetterTogether is its ability to generate accurate and efficient pipeline schedules using a profile-guided performance model that captures execution time under representative intra-application interference.

We demonstrate the portability of BetterTogether by evaluating it on three SoCs with GPUs from different vendors (NVIDIA, Arm, and Qualcomm) and using three computer vision edge workloads with different computational characteristics. Our performance model yields predictions that correlate strongly with measured results. Using these models, we construct efficient pipeline schedules specialized to each workload-platform combination, outperforming homogeneous GPU baselines in nearly all cases, with a geomean speedup of 2.72x and a maximum of 8.4x.
