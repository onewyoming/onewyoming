#!/bin/bash
for i in {1..25}
do
    echo $i
    ng generate component experiment/experiment$i
done
