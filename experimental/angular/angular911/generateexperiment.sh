#!/bin/bash
for i in {1..400}
do
    echo $i
    ng generate component experiment/experiment$i
done
