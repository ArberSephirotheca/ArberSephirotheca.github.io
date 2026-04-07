+++
title = "sqlelf: a SQL-centric Approach to ELF Analysis"
slug = "sqlelf"
date = 2024-05-06
description = "sqlelf models ELF objects as relational databases, enabling expressive SQL queries, aggregation, and cross-object analysis for more accessible and efficient ELF exploration."
template = "publication.html"
aliases = ["/publications/2024-05-06-sqlelf/"]
authors = ["Farid Zakaria", "Zheyuan Chen", "Andrew Quinn", "Thomas R. W. Scogland"]

[taxonomies]
categories = ["arXiv"]

[extra]
venue = "arXiv"
paper_url = "/files/sqlelf.pdf"
external_url = "https://arxiv.org/abs/2405.03883"
citation = "arXiv:2405.03883"
+++

The exploration and understanding of Executable and Linkable Format (ELF) objects underpin various critical activities in computer systems, from debugging to reverse engineering. Traditional UNIX tooling like readelf, nm, and objdump have served the community reliably over the years. However, as the complexity and scale of software projects has grown, there arises a need for more intuitive, flexible, and powerful methods to investigate ELF objects. In this paper, we introduce sqlelf, an innovative tool that empowers users to probe ELF objects through the expressive power of SQL. By modeling ELF objects as relational databases, sqlelf offers the following advantages over conventional methods.
Our evaluations demonstrate that sqlelf not only provides more nuanced and comprehensive insights into ELF objects but also significantly reduces the effort and time traditionally required for ELF exploration tasks
