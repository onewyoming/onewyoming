#!/bin/bash
for i in {1..1000}
do
    cd ~/src/my-workspace/projects/experimental-application$i 
    time ng generate module experimental
    for j in {1..400}
    do
        time ng generate component experimental/experimental$j
    done
done
