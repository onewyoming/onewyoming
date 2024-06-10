# Wyoming

Wyoming is a monorepo. 
This means that everything pertaining to this organization goes into this repository. 
You may create other repositories. 
However, this is the only OFFICIAL repository. 
If it doesn't exist here, it doesn't exist in Wyoming. 

## What is Wyoming?
Wyoming is the tenth largest state by area. It has the least population. 
It comes second in being the most sparsely populated state. 
Only Alaska has a lower population density. 
OK, that is good but my question is about this project, titled Wyoming. 

## What is Wyoming, the project?

This project is a way to learn about monorepos by collaboration. 
We have a throw everything in the sink mantra. 
Ideally, every project shows up in the .gitlab-ci.yml file 
which allows us to demonstrate Gitlab continuous integration and continuous delivery. 

## A new mirror on github 

We have a new mirror on github! 
[https://github.com/onewyoming/onewyoming](OneWyoming/OneWyoming)

Remember, gitlab is STILL our single source of truth. 

to follow along, you can simply 

```sh
git remote set-url --add --push origin git@github.com:onewyoming/onewyoming.git
git remote set-url --add --push origin git@gitlab.com:wyoming/wyoming.gitlab.io.git
``` 

and check your config with git remote --verbose. You should see something like 

```
$ git remote --verbose
origin  git@gitlab.com:wyoming/wyoming.gitlab.io.git (fetch)
origin  git@github.com:onewyoming/onewyoming.git (push)
origin  git@gitlab.com:wyoming/wyoming.gitlab.io.git (push)
```

Now, when you push it will try to push to both remotes. 
Remember, if your push fails, 
it is your responsibility to pull and merge and try pushing again. 
