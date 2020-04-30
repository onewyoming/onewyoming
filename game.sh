#!/bin/bash
cd ~/src/gitland-client/
while (true)
do
    if [ $((1 + RANDOM % 4)) -eq 1 ]
    then
        echo "right" > act;
        date > timestamp;
        git add .;
        git commit -m "go right";
        git pull -r origin master;
        git push origin master;
    fi
    if [ $((1 + RANDOM % 4)) -eq 2 ]
    then
        echo "down" > act;
        date > timestamp;
        git add .;
        git commit -m "go down";
        git pull -r origin master;
        git push origin master;
    fi
    if [ $((1 + RANDOM % 4)) -eq 3 ]
    then
        echo "left" > act;
        date > timestamp;
        git add .;
        git commit -m "go left";
        git pull -r origin master;
        git push origin master;
    fi
    if [ $((1 + RANDOM % 4)) -eq 4 ]
    then
        echo "up" > act;
        date > timestamp;
        git add .;
        git commit -m "go up";
        git pull -r origin master;
        git push origin master;
    fi
done
