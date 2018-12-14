# More examples of P-complete problems

An independent set of a graph is a set of vertices such that no two of them are adjacent
An independent set is maximal if no other vertex can be added to it while maintaining the independent set property
Find the lexicographically first maximal independent set with respect to the gien numbering of vertices. 

Decision version: Input also has a vertex v. Decide if v is in the lexicographically first maximal independent set. 

```
I = phi; // The vertices are numbered 1, ..., n 
for j = 1 to n do
    if (j is not adjacent to any vertex in I)
        I = I Union {j};

```

I = phi
I = {1, 3, 5} 

There is an NC circuit to find some maximal independent set if the numbering of the vertices is immaterial. 

Has not shown to be P-complete and highly parallelizable 

General decision: 
Problems that have efficient greedy poly-time algorithms appear to be not in P-complete 

... 

Finals: 

Go over the reductions and proofs 
Should be able to prove at least one direction of equivalence proof of one of these

3 SAT ≤ Vertex cover 
3 SAT ≤ Subset sum 

Go over reductions

3 SAT ≤ Hampath

Space complexity 
Basic time ... 
PSPACE = NPSPACE 
Savitch's Theorem 

L vs NL Definition of L, NL, NL-complete, log space transducer 
NCI NC (proof ideas)

P-completeness and approximation ideas 
    Vertex cover 
    maximum cut 

Proof ideas
