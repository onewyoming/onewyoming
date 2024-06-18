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

```powershell
PowerShell 7.4.2
PS C:\Users\kushal> cd "C:\src\"; date; git clone git@gitlab.com:wyoming/wyoming.gitlab.io.git; date;

Monday, June 17, 2024 8:24:13 PM
Cloning into 'wyoming.gitlab.io'...
remote: Enumerating objects: 14013, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 14013 (delta 0), reused 0 (delta 0), pack-reused 14010 (from 1)
Receiving objects: 100% (14013/14013), 41.57 MiB | 10.74 MiB/s, done.
Resolving deltas: 100% (7512/7512), done.
Monday, June 17, 2024 8:24:18 PM

PS C:\src> cd "C:\src\"; date; git clone git@gitlab.com:wyoming/wyoming.gitlab.io.git wyoming; date;

Monday, June 17, 2024 8:24:43 PM
Cloning into 'wyoming'...
remote: Enumerating objects: 14013, done.
remote: Counting objects: 100% (3/3), done.
remote: Compressing objects: 100% (3/3), done.
remote: Total 14013 (delta 0), reused 0 (delta 0), pack-reused 14010 (from 1)
Receiving objects: 100% (14013/14013), 41.57 MiB | 10.53 MiB/s, done.
Resolving deltas: 100% (7512/7512), done.
Monday, June 17, 2024 8:24:48 PM

PS C:\src> cd "C:\src\wyoming\";
PS C:\src\wyoming> git remote set-url --add --push origin git@github.com:onewyoming/onewyoming.git
PS C:\src\wyoming> git remote set-url --add --push origin git@gitlab.com:wyoming/wyoming.gitlab.io.git
PS C:\src\wyoming> git remote --verbose
origin  git@gitlab.com:wyoming/wyoming.gitlab.io.git (fetch)
origin  git@github.com:onewyoming/onewyoming.git (push)
origin  git@gitlab.com:wyoming/wyoming.gitlab.io.git (push)
PS C:\src\wyoming> code .
PS C:\src\wyoming> cd "C:\src\wyoming\"; date; git fetch origin master; date;

Monday, June 17, 2024 8:26:05 PM
From gitlab.com:wyoming/wyoming.gitlab.io
 * branch            master     -> FETCH_HEAD
Monday, June 17, 2024 8:26:06 PM

PS C:\src\wyoming> cd "C:\src\wyoming\"; date; git fetch origin master; date;
```