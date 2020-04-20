#!/bin/bash
for i in {1..1000}
do
    echo $i
    ng generate component experiment/experiment$i
done
