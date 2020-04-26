#!/bin/bash
cd ~/src/gitland-client/
while (true)
do
    right="0"
    while [ $right -lt 24 ]
    do
        echo "right" > act;
        date > timestamp;
        git add .;
        git commit -m "go right";
        git pull -r origin master;
        git push origin master;
        right=$[$right+1]
    done
    down="0"
    while [ $down -lt 24 ]
    do
        echo "down" > act;
        date > timestamp;
        git add .;
        git commit -m "go down";
        git pull -r origin master;
        git push origin master;
        down=$[$down+1]
    done
    left="0"
    while [ $left -lt 24 ]
    do
        echo "left" > act;
        date > timestamp;
        git add .;
        git commit -m "go left";
        git pull -r origin master;
        git push origin master;
        left=$[$left+1]
    done
    up="0"
    while [ $up -lt 24 ]
    do
        echo "up" > act;
        date > timestamp;
        git add .;
        git commit -m "go up";
        git pull -r origin master;
        git push origin master;
        up=$[$up+1]
    done
done
