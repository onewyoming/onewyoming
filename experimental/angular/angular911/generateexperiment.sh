#!/bin/bash
for i in {26..2000}
do
    echo $i
    ng generate component experiment/experiment$i
done
