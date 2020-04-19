#!/bin/bash
git remote remove origin 
git remote add origin git@gitlab.com:wyoming/wyoming.gitlab.io.git
git remote set-url --add --push origin git@gitlab.com:wyoming/wyoming.gitlab.io.git
git remote set-url --add --push origin git@github.com:onewyoming/onewyoming.git
git remote show origin
