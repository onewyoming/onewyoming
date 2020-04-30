#!/bin/bash
cd ~/src/gitland-client/
while (true)
do
    myrandom=$((1 + RANDOM % 4))
    if [ $myrandom -eq 1 ]
    then
        direction="right"
    elif [ $myrandom -eq 2 ]
    then
        direction="down"
    elif [ $myrandom -eq 3 ]
    then
        direction="left"
    else 
        direction="up"
    fi
    echo $direction;
    echo $direction > act;
    date > timestamp;
    git add .;
    git commit -m "go $direction";
    git pull -r origin master;
    git push origin master;
    sleep 300
done
