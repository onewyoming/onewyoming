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
        deleted:    experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.html
        deleted:    experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.sass
        deleted:    experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.spec.ts
        deleted:    experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.ts
        deleted:    experimental/angular/angular911/src/app/item.service.spec.ts
        deleted:    experimental/angular/angular911/src/app/item.service.ts
        deleted:    experimental/angular/angular911/src/app/item.spec.ts
        deleted:    experimental/angular/angular911/src/app/item.ts
        deleted:    experimental/angular/angular911/src/app/material/material.module.ts
        deleted:    experimental/angular/angular911/src/assets/.gitkeep
        deleted:    experimental/angular/angular911/src/assets/generate-component.txt
        deleted:    experimental/angular/angular911/src/assets/json/item/1.json
        deleted:    experimental/angular/angular911/src/assets/json/item/2.json
        deleted:    experimental/angular/angular911/src/assets/json/item/3.json
        deleted:    experimental/angular/angular911/src/assets/json/item/4.json
        deleted:    experimental/angular/angular911/src/assets/json/item/5.json
        deleted:    experimental/angular/angular911/src/assets/json/items.json
        deleted:    experimental/angular/angular911/src/custom-theme.scss
        deleted:    experimental/angular/angular911/src/environments/environment.prod.ts
        deleted:    experimental/angular/angular911/src/environments/environment.ts
        deleted:    experimental/angular/angular911/src/favicon.ico
        deleted:    experimental/angular/angular911/src/index.html
        deleted:    experimental/angular/angular911/src/main.ts
        deleted:    experimental/angular/angular911/src/polyfills.ts
        deleted:    experimental/angular/angular911/src/styles.sass
        deleted:    experimental/angular/angular911/src/test.ts
        deleted:    experimental/angular/angular911/tsconfig.app.json
        deleted:    experimental/angular/angular911/tsconfig.json
        deleted:    experimental/angular/angular911/tsconfig.spec.json
        deleted:    experimental/angular/angular911/tslint.json
        deleted:    experimental/angular/angular911/yarn.lock
        deleted:    experimental/cpp17/.gitignore
        deleted:    experimental/cpp17/CMakeLists.txt
        deleted:    experimental/cpp17/main.cpp
        deleted:    experimental/dotnet/Amarillo/Amarillo.sln
        deleted:    experimental/dotnet/Buffy/Buffy.sln
        deleted:    experimental/dotnet/Buffy/BuffySpa/.gitignore
        deleted:    experimental/dotnet/Buffy/BuffySpa/BuffySpa.csproj
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/.editorconfig
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/.gitignore
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/README.md
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/angular.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/protractor.conf.js
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/src/app.po.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/tsconfig.e2e.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/package-lock.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/package.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.component.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.component.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.module.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.server.module.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.spec.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/fetch-data/fetch-data.component.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/fetch-data/fetch-data.component.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/home/home.component.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/home/home.component.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.css
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/assets/.gitkeep
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/browserslist
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/environments/environment.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/index.html
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/karma.conf.js
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/main.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/polyfills.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/styles.css
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/test.ts
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.app.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.server.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.spec.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tslint.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/tsconfig.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/ClientApp/tslint.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/Controllers/WeatherForecastController.cs
        deleted:    experimental/dotnet/Buffy/BuffySpa/Pages/Error.cshtml
        deleted:    experimental/dotnet/Buffy/BuffySpa/Pages/Error.cshtml.cs
        deleted:    experimental/dotnet/Buffy/BuffySpa/Pages/_ViewImports.cshtml
        deleted:    experimental/dotnet/Buffy/BuffySpa/Program.cs
        deleted:    experimental/dotnet/Buffy/BuffySpa/Properties/launchSettings.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/Startup.cs
        deleted:    experimental/dotnet/Buffy/BuffySpa/WeatherForecast.cs
        deleted:    experimental/dotnet/Buffy/BuffySpa/appsettings.Development.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/appsettings.json
        deleted:    experimental/dotnet/Buffy/BuffySpa/wwwroot/favicon.ico
        deleted:    experimental/dotnet/ConsoleApp1/ConsoleApp1.sln
        deleted:    experimental/dotnet/ConsoleApp1/ConsoleApp1/ConsoleApp1.csproj
        deleted:    experimental/dotnet/ConsoleApp1/ConsoleApp1/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/Database1/Database1.sqlproj
        deleted:    experimental/dotnet/ConsoleApp1/Database1/Person.sql
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/Controllers/ValuesController.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/Properties/launchSettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/Startup.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/WebApplication1.csproj
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/appsettings.Development.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication1/appsettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Controllers/HomeController.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Models/Book.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Models/ErrorViewModel.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Models/Publisher.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Properties/launchSettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Startup.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Home/Index.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Home/Privacy.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/Error.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_CookieConsentPartial.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_Layout.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_ValidationScriptsPartial.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/_ViewImports.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/Views/_ViewStart.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/WebApplication2.csproj
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/appsettings.Development.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/appsettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/css/site.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/favicon.ico
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/js/site.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/LICENSE
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.min.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.min.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.min.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.min.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.min.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.min.css.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.js.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.js.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.min.js.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/LICENSE.txt
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/LICENSE.md
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/additional-methods.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/additional-methods.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/jquery.validate.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/jquery.validate.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/LICENSE.txt
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.min.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.min.map
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/.gitignore
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/.editorconfig
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/.gitignore
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/README.md
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/angular.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/protractor.conf.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/src/app.po.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/tsconfig.e2e.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/package-lock.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/package.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.module.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.server.module.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.spec.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/fetch-data/fetch-data.component.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/fetch-data/fetch-data.component.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/home/home.component.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/home/home.component.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/assets/.gitkeep
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/browserslist
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/environments/environment.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/index.html
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/karma.conf.js
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/main.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/polyfills.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/styles.css
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/test.ts
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.app.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.server.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.spec.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tslint.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/tsconfig.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/tslint.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Controllers/SampleDataController.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Pages/Error.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Pages/Error.cshtml.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Pages/_ViewImports.cshtml
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Properties/launchSettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/Startup.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/WebApplication3.csproj
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/appsettings.Development.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/appsettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication3/wwwroot/favicon.ico
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/Controllers/ValuesController.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/Models/MyContact.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/Properties/launchSettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/README.md
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/Startup.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/WebApplication4.csproj
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/appsettings.Development.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication4/appsettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/Controllers/ValuesController.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/Program.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/Properties/launchSettings.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/Startup.cs
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/WebApplication5.csproj
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/appsettings.Development.json
        deleted:    experimental/dotnet/ConsoleApp1/WebApplication5/appsettings.json
        deleted:    experimental/dotnet/Daegu/.gitignore
        deleted:    experimental/dotnet/Daegu/.vscode/launch.json
        deleted:    experimental/dotnet/Daegu/.vscode/tasks.json
        deleted:    experimental/dotnet/Daegu/Daegu.sln
        deleted:    experimental/dotnet/Daegu/Daegu/Daegu.csproj
        deleted:    experimental/dotnet/Daegu/Daegu/DiverseString.cs
        deleted:    experimental/dotnet/Daegu/Daegu/MinimumCoin.cs
        deleted:    experimental/dotnet/Daegu/Daegu/Program.cs
        deleted:    experimental/dotnet/Daegu/DaeguTests/DaeguTests.csproj
        deleted:    experimental/dotnet/Daegu/DaeguTests/DiverseStringTests.cs
        deleted:    experimental/dotnet/Daegu/DaeguTests/MinimumCoinTests.cs
        deleted:    experimental/dotnet/Daegu/buildlog.txt
        deleted:    experimental/dotnet/Daejeon/.vscode/launch.json
        deleted:    experimental/dotnet/Daejeon/Daejeon.sln
        deleted:    experimental/dotnet/Daejeon/DapperConsole/DapperConsole.csproj
        deleted:    experimental/dotnet/Daejeon/DapperConsole/Program.cs
        deleted:    experimental/dotnet/Danube/ConsoleApp1/ConsoleApp1.csproj
        deleted:    experimental/dotnet/Danube/ConsoleApp1/Program.cs
        deleted:    experimental/dotnet/Danube/Danube.sln
        deleted:    experimental/dotnet/Noir/.vscode/launch.json
        deleted:    experimental/dotnet/Noir/API/API.csproj
        deleted:    experimental/dotnet/Noir/API/Controllers/BlogsController.cs
        deleted:    experimental/dotnet/Noir/API/Controllers/ValuesController.cs
        deleted:    experimental/dotnet/Noir/API/Migrations/20190802044053_InitialCreate.Designer.cs
        deleted:    experimental/dotnet/Noir/API/Migrations/20190802044053_InitialCreate.cs
        deleted:    experimental/dotnet/Noir/API/Migrations/BloggingContextModelSnapshot.cs
        deleted:    experimental/dotnet/Noir/API/Models/Model.cs
        deleted:    experimental/dotnet/Noir/API/Models/User.cs
        deleted:    experimental/dotnet/Noir/API/Program.cs
        deleted:    experimental/dotnet/Noir/API/Properties/launchSettings.json
        deleted:    experimental/dotnet/Noir/API/Startup.cs
        deleted:    experimental/dotnet/Noir/API/Views/Blogs/Create.cshtml
        deleted:    experimental/dotnet/Noir/API/Views/Blogs/Delete.cshtml
        deleted:    experimental/dotnet/Noir/API/Views/Blogs/Details.cshtml
        deleted:    experimental/dotnet/Noir/API/Views/Blogs/Edit.cshtml
        deleted:    experimental/dotnet/Noir/API/Views/Blogs/Index.cshtml
        deleted:    experimental/dotnet/Noir/API/Views/Shared/_ValidationScriptsPartial.cshtml
        deleted:    experimental/dotnet/Noir/API/appsettings.Development.json
        deleted:    experimental/dotnet/Noir/API/appsettings.json
        deleted:    experimental/dotnet/Noir/API/blogging.db
        deleted:    experimental/dotnet/Noir/Noir.sln
        deleted:    experimental/dotnet/Noir/UI/.editorconfig
        deleted:    experimental/dotnet/Noir/UI/.gitignore
        deleted:    experimental/dotnet/Noir/UI/README.md
        deleted:    experimental/dotnet/Noir/UI/angular.json
        deleted:    experimental/dotnet/Noir/UI/browserslist
        deleted:    experimental/dotnet/Noir/UI/e2e/protractor.conf.js
        deleted:    experimental/dotnet/Noir/UI/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/Noir/UI/e2e/src/app.po.ts
        deleted:    experimental/dotnet/Noir/UI/e2e/tsconfig.json
        deleted:    experimental/dotnet/Noir/UI/karma.conf.js
        deleted:    experimental/dotnet/Noir/UI/package.json
        deleted:    experimental/dotnet/Noir/UI/src/app/app-routing.module.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/app.component.html
        deleted:    experimental/dotnet/Noir/UI/src/app/app.component.sass
        deleted:    experimental/dotnet/Noir/UI/src/app/app.component.spec.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/app.component.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/app.module.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/user.service.spec.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/user.service.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/user.spec.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/user.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/username/username.component.html
        deleted:    experimental/dotnet/Noir/UI/src/app/username/username.component.sass
        deleted:    experimental/dotnet/Noir/UI/src/app/username/username.component.spec.ts
        deleted:    experimental/dotnet/Noir/UI/src/app/username/username.component.ts
        deleted:    experimental/dotnet/Noir/UI/src/assets/.gitkeep
        deleted:    experimental/dotnet/Noir/UI/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/Noir/UI/src/environments/environment.ts
        deleted:    experimental/dotnet/Noir/UI/src/favicon.ico
        deleted:    experimental/dotnet/Noir/UI/src/index.html
        deleted:    experimental/dotnet/Noir/UI/src/main.ts
        deleted:    experimental/dotnet/Noir/UI/src/polyfills.ts
        deleted:    experimental/dotnet/Noir/UI/src/styles.sass
        deleted:    experimental/dotnet/Noir/UI/src/test.ts
        deleted:    experimental/dotnet/Noir/UI/tsconfig.app.json
        deleted:    experimental/dotnet/Noir/UI/tsconfig.json
        deleted:    experimental/dotnet/Noir/UI/tsconfig.spec.json
        deleted:    experimental/dotnet/Noir/UI/tslint.json
        deleted:    experimental/dotnet/Noir/UI/yarn.lock
        deleted:    experimental/dotnet/Openroom/Openroom.Console/Openroom.Console.sln
        deleted:    experimental/dotnet/Openroom/Openroom.Console/Openroom.Console/Openroom.Console.csproj
        deleted:    experimental/dotnet/Openroom/Openroom.Console/Openroom.Console/Program.cs
        deleted:    experimental/dotnet/Seongnam/.gitignore
        deleted:    experimental/dotnet/Seongnam/Seongnam.sln
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/Controllers/WeatherForecastController.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/Program.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/Properties/launchSettings.json
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/SeongnamAPI.csproj
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/Startup.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/WeatherForecast.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/appsettings.Development.json
        deleted:    experimental/dotnet/Seongnam/SeongnamAPI/appsettings.json
        deleted:    experimental/dotnet/Seongnam/SeongnamBL/Class1.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamBL/SeongnamBL.csproj
        deleted:    experimental/dotnet/Seongnam/SeongnamConsole/Program.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamConsole/SeongnamConsole.csproj
        deleted:    experimental/dotnet/Seongnam/SeongnamDAL/Class1.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamDAL/SeongnamDAL.csproj
        deleted:    experimental/dotnet/Seongnam/SeongnamTest/SeongnamTest.csproj
        deleted:    experimental/dotnet/Seongnam/SeongnamTest/UnitTest1.cs
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/.editorconfig
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/.gitignore
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/README.md
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/angular.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/browserslist
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/e2e/protractor.conf.js
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/e2e/src/app.po.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/e2e/tsconfig.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/karma.conf.js
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/package.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app-routing.module.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.html
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.sass
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.spec.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/app/app.module.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/assets/.gitkeep
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/environments/environment.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/favicon.ico
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/index.html
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/main.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/polyfills.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/styles.sass
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/src/test.ts
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/tsconfig.app.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/tsconfig.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/tsconfig.spec.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/tslint.json
        deleted:    experimental/dotnet/Seongnam/SeongnamUI/yarn.lock
        deleted:    experimental/dotnet/Seoul/.gitignore
        deleted:    experimental/dotnet/Seoul/.vscode/launch.json
        deleted:    experimental/dotnet/Seoul/.vscode/tasks.json
        deleted:    experimental/dotnet/Seoul/ClientApp/.editorconfig
        deleted:    experimental/dotnet/Seoul/ClientApp/.gitignore
        deleted:    experimental/dotnet/Seoul/ClientApp/README.md
        deleted:    experimental/dotnet/Seoul/ClientApp/angular.json
        deleted:    experimental/dotnet/Seoul/ClientApp/browserslist
        deleted:    experimental/dotnet/Seoul/ClientApp/e2e/protractor.conf.js
        deleted:    experimental/dotnet/Seoul/ClientApp/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/e2e/src/app.po.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/e2e/tsconfig.e2e.json
        deleted:    experimental/dotnet/Seoul/ClientApp/package-lock.json
        deleted:    experimental/dotnet/Seoul/ClientApp/package.json
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/app.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/app.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/app.module.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/app.server.module.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.spec.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.css
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.spec.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-data/fetch-data.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/fetch-data/fetch-data.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/filter-unique.pipe.spec.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/filter-unique.pipe.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/home/home.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/home/home.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.css
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/assets/.gitkeep
        deleted:    experimental/dotnet/Seoul/ClientApp/src/assets/clientdata.json
        deleted:    experimental/dotnet/Seoul/ClientApp/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/environments/environment.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/index.html
        deleted:    experimental/dotnet/Seoul/ClientApp/src/karma.conf.js
        deleted:    experimental/dotnet/Seoul/ClientApp/src/main.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/polyfills.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/styles.css
        deleted:    experimental/dotnet/Seoul/ClientApp/src/test.ts
        deleted:    experimental/dotnet/Seoul/ClientApp/src/tsconfig.app.json
        deleted:    experimental/dotnet/Seoul/ClientApp/src/tsconfig.server.json
        deleted:    experimental/dotnet/Seoul/ClientApp/src/tsconfig.spec.json
        deleted:    experimental/dotnet/Seoul/ClientApp/src/tslint.json
        deleted:    experimental/dotnet/Seoul/ClientApp/tsconfig.json
        deleted:    experimental/dotnet/Seoul/ClientApp/tslint.json
        deleted:    experimental/dotnet/Seoul/ClientDetail.cs
        deleted:    experimental/dotnet/Seoul/Controllers/ClientDetailController.cs
        deleted:    experimental/dotnet/Seoul/Controllers/WeatherForecastController.cs
        deleted:    experimental/dotnet/Seoul/Pages/Error.cshtml
        deleted:    experimental/dotnet/Seoul/Pages/Error.cshtml.cs
        deleted:    experimental/dotnet/Seoul/Pages/_ViewImports.cshtml
        deleted:    experimental/dotnet/Seoul/Program.cs
        deleted:    experimental/dotnet/Seoul/Properties/launchSettings.json
        deleted:    experimental/dotnet/Seoul/Seoul.csproj
        deleted:    experimental/dotnet/Seoul/Seoul.sln
        deleted:    experimental/dotnet/Seoul/Startup.cs
        deleted:    experimental/dotnet/Seoul/WeatherForecast.cs
        deleted:    experimental/dotnet/Seoul/appsettings.Development.json
        deleted:    experimental/dotnet/Seoul/appsettings.json
        deleted:    experimental/dotnet/Seoul/wwwroot/favicon.ico
        deleted:    experimental/dotnet/Sokcho/.vscode/launch.json
        deleted:    experimental/dotnet/Sokcho/.vscode/tasks.json
        deleted:    experimental/dotnet/Sokcho/README.md
        deleted:    experimental/dotnet/Sokcho/Sokcho.sln
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/App.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/Counter.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/FetchData.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/Index.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Program.cs
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/MainLayout.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/NavMenu.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/SurveyPrompt.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/SokchoBlazorWasm.csproj
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/Startup.cs
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/_Imports.razor
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/bootstrap/bootstrap.min.css
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/bootstrap/bootstrap.min.css.map
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/FONT-LICENSE
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/ICON-LICENSE
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/README.md
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/css/open-iconic-bootstrap.min.css
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.eot
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.otf
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.svg
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.ttf
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.woff
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/site.css
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/index.html
        deleted:    experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/sample-data/weather.json
        deleted:    experimental/dotnet/Sokcho/buildlog.txt
        deleted:    experimental/dotnet/Sokcho/runlog.txt
        deleted:    experimental/dotnet/elitehacker/Program.cs
        deleted:    experimental/dotnet/elitehacker/elitehacker.csproj
        deleted:    experimental/dotnet/hubcap/hubcap-console/Program.cs
        deleted:    experimental/dotnet/hubcap/hubcap-console/hubcap-console.csproj
        deleted:    experimental/dotnet/hubcap/hubcap.sln
        deleted:    experimental/dotnet/pyeongtaek/.gitignore
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaek.sln
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaekclasslib/Class1.cs
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaekclasslib/pyeongtaekclasslib.csproj
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaekconsole/Program.cs
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaekconsole/pyeongtaekconsole.csproj
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaektests/UnitTest1.cs
        deleted:    experimental/dotnet/pyeongtaek/pyeongtaektests/pyeongtaektests.csproj
        deleted:    experimental/dotnet/wonju/.gitignore
        deleted:    experimental/dotnet/wonju/.vscode/launch.json
        deleted:    experimental/dotnet/wonju/.vscode/tasks.json
        deleted:    experimental/dotnet/wonju/WonjuAPI/Controllers/WeatherForecastController.cs
        deleted:    experimental/dotnet/wonju/WonjuAPI/Program.cs
        deleted:    experimental/dotnet/wonju/WonjuAPI/Properties/launchSettings.json
        deleted:    experimental/dotnet/wonju/WonjuAPI/Startup.cs
        deleted:    experimental/dotnet/wonju/WonjuAPI/WeatherForecast.cs
        deleted:    experimental/dotnet/wonju/WonjuAPI/WonjuAPI.csproj
        deleted:    experimental/dotnet/wonju/WonjuAPI/appsettings.Development.json
        deleted:    experimental/dotnet/wonju/WonjuAPI/appsettings.json
        deleted:    experimental/dotnet/wonju/WonjuBL/Class1.cs
        deleted:    experimental/dotnet/wonju/WonjuBL/IName.cs
        deleted:    experimental/dotnet/wonju/WonjuBL/Person.cs
        deleted:    experimental/dotnet/wonju/WonjuBL/WonjuBL.csproj
        deleted:    experimental/dotnet/wonju/WonjuDAL/Class1.cs
        deleted:    experimental/dotnet/wonju/WonjuDAL/WonjuDAL.csproj
        deleted:    experimental/dotnet/wonju/WonjuDB/WonjuDB/CreateTables.sql
        deleted:    experimental/dotnet/wonju/WonjuDB/WonjuDB/InsertIntoTables.sql
        deleted:    experimental/dotnet/wonju/WonjuDB/WonjuDB/WonjuDB.ssmssln
        deleted:    experimental/dotnet/wonju/WonjuDB/WonjuDB/WonjuDB.ssmssqlproj
        deleted:    experimental/dotnet/wonju/WonjuTest/PersonTests.cs
        deleted:    experimental/dotnet/wonju/WonjuTest/UnitTest1.cs
        deleted:    experimental/dotnet/wonju/WonjuTest/WonjuTest.csproj
        deleted:    experimental/dotnet/wonju/WonjuUI/.editorconfig
        deleted:    experimental/dotnet/wonju/WonjuUI/.gitignore
        deleted:    experimental/dotnet/wonju/WonjuUI/README.md
        deleted:    experimental/dotnet/wonju/WonjuUI/angular.json
        deleted:    experimental/dotnet/wonju/WonjuUI/browserslist
        deleted:    experimental/dotnet/wonju/WonjuUI/e2e/protractor-ci.conf.js
        deleted:    experimental/dotnet/wonju/WonjuUI/e2e/protractor.conf.js
        deleted:    experimental/dotnet/wonju/WonjuUI/e2e/src/app.e2e-spec.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/e2e/src/app.po.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/e2e/tsconfig.json
        deleted:    experimental/dotnet/wonju/WonjuUI/karma.conf.js
        deleted:    experimental/dotnet/wonju/WonjuUI/package.json
        deleted:    experimental/dotnet/wonju/WonjuUI/src/_redirects
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app-routing.module.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app.component.html
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app.component.sass
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app.component.spec.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app.component.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/app/app.module.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/assets/.gitkeep
        deleted:    experimental/dotnet/wonju/WonjuUI/src/environments/environment.prod.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/environments/environment.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/favicon.ico
        deleted:    experimental/dotnet/wonju/WonjuUI/src/index.html
        deleted:    experimental/dotnet/wonju/WonjuUI/src/main.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/polyfills.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/src/styles.sass
        deleted:    experimental/dotnet/wonju/WonjuUI/src/test.ts
        deleted:    experimental/dotnet/wonju/WonjuUI/tsconfig.app.json
        deleted:    experimental/dotnet/wonju/WonjuUI/tsconfig.json
        deleted:    experimental/dotnet/wonju/WonjuUI/tsconfig.spec.json
        deleted:    experimental/dotnet/wonju/WonjuUI/tslint.json
        deleted:    experimental/dotnet/wonju/WonjuUI/yarn.lock
        deleted:    experimental/dotnet/wonju/wonju.sln
        deleted:    experimental/flutter/lusk/.gitignore
        deleted:    experimental/flutter/lusk/.metadata
        deleted:    experimental/flutter/lusk/README.md
        deleted:    experimental/flutter/lusk/android/app/build.gradle
        deleted:    experimental/flutter/lusk/android/app/src/main/AndroidManifest.xml
        deleted:    experimental/flutter/lusk/android/app/src/main/kotlin/io/gitlab/wyoming/lusk/MainActivity.kt
        deleted:    experimental/flutter/lusk/android/app/src/main/res/drawable/launch_background.xml
        deleted:    experimental/flutter/lusk/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
        deleted:    experimental/flutter/lusk/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
        deleted:    experimental/flutter/lusk/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
        deleted:    experimental/flutter/lusk/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
        deleted:    experimental/flutter/lusk/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
        deleted:    experimental/flutter/lusk/android/app/src/main/res/values/styles.xml
        deleted:    experimental/flutter/lusk/android/build.gradle
        deleted:    experimental/flutter/lusk/android/gradle.properties
        deleted:    experimental/flutter/lusk/android/gradle/wrapper/gradle-wrapper.properties
        deleted:    experimental/flutter/lusk/android/settings.gradle
        deleted:    experimental/flutter/lusk/ios/Flutter/AppFrameworkInfo.plist
        deleted:    experimental/flutter/lusk/ios/Flutter/Debug.xcconfig
        deleted:    experimental/flutter/lusk/ios/Flutter/Release.xcconfig
        deleted:    experimental/flutter/lusk/ios/Runner.xcodeproj/project.pbxproj
        deleted:    experimental/flutter/lusk/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata
        deleted:    experimental/flutter/lusk/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme
        deleted:    experimental/flutter/lusk/ios/Runner.xcworkspace/contents.xcworkspacedata
        deleted:    experimental/flutter/lusk/ios/Runner/AppDelegate.swift
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png
        deleted:    experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md
        deleted:    experimental/flutter/lusk/ios/Runner/Base.lproj/LaunchScreen.storyboard
        deleted:    experimental/flutter/lusk/ios/Runner/Base.lproj/Main.storyboard
        deleted:    experimental/flutter/lusk/ios/Runner/Info.plist
        deleted:    experimental/flutter/lusk/ios/Runner/Runner-Bridging-Header.h
        deleted:    experimental/flutter/lusk/lib/main.dart
        deleted:    experimental/flutter/lusk/pubspec.yaml
        deleted:    experimental/flutter/lusk/test/widget_test.dart
        deleted:    experimental/golang/micronesia/README.md
        deleted:    experimental/golang/micronesia/hello.go
        deleted:    experimental/golang/micronesia/hello_test.go
        deleted:    experimental/golang/micronesia/user/user_registration.go
        deleted:    experimental/golang/micronesia/user/user_registration_test.go
        deleted:    experimental/html/tildeinstitute/.htaccess
        deleted:    experimental/html/tildeinstitute/404.html
        deleted:    experimental/html/tildeinstitute/bct
        deleted:    experimental/html/tildeinstitute/blog.html
        deleted:    experimental/html/tildeinstitute/contact.html
        deleted:    experimental/html/tildeinstitute/css/style.css
        deleted:    experimental/html/tildeinstitute/fallback.html
        deleted:    experimental/html/tildeinstitute/images/IMG_20181225_163825-EFFECTS.jpg
        deleted:    experimental/html/tildeinstitute/images/IMG_20190101_140108-EFFECTS.jpg
        deleted:    experimental/html/tildeinstitute/images/IMG_20190101_140253-ANIMATION.gif
        deleted:    experimental/html/tildeinstitute/images/IMG_20190101_140257-COLLAGE.jpg
        deleted:    experimental/html/tildeinstitute/images/IMG_20190101_140418-ANIMATION.gif
        deleted:    experimental/html/tildeinstitute/images/IMG_20190101_140426-EFFECTS.jpg
        deleted:    experimental/html/tildeinstitute/index.html
        deleted:    experimental/html/tildeinstitute/info.php
        deleted:    experimental/html/tildeinstitute/kus.appcache
        deleted:    experimental/html/tildeinstitute/kus.png
        deleted:    experimental/html/tildeinstitute/posts/20181228-welcome.html
        deleted:    experimental/html/tildeinstitute/posts/20181229-happybirthdaysana.html
        deleted:    experimental/html/tildeinstitute/posts/20190102-dog.html
        deleted:    experimental/html/tildeinstitute/posts/20190103-serviceworker.html
        deleted:    experimental/php/noframework/barebear/Tests/MoneyTest.php
        deleted:    experimental/php/noframework/barebear/composer.json
        deleted:    experimental/php/noframework/barebear/composer.lock
        deleted:    experimental/php/noframework/barebear/hello.php
        deleted:    experimental/php/noframework/barebear/includes/classes/Money.php
        deleted:    experimental/php/noframework/barebear/includes/pdo_connect.php
        deleted:    experimental/php/noframework/barebear/phpunit.xml
        deleted:    experimental/php/symfony/openroomsymfony/.env
        deleted:    experimental/php/symfony/openroomsymfony/.env.test
        deleted:    experimental/php/symfony/openroomsymfony/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/.htaccess
        deleted:    experimental/php/symfony/openroomsymfony/composer.json
        deleted:    experimental/php/symfony/openroomsymfony/composer.lock
        deleted:    experimental/php/symfony/openroomsymfony/config/bootstrap.php
        deleted:    experimental/php/symfony/openroomsymfony/config/bundles.php
        deleted:    experimental/php/symfony/openroomsymfony/config/routes.yaml
        deleted:    experimental/php/symfony/openroomsymfony/config/routes/annotations.yaml
        deleted:    experimental/php/symfony/openroomsymfony/config/routes/dev/twig.yaml
        deleted:    experimental/php/symfony/openroomsymfony/config/routes/dev/web_profiler.yaml
        deleted:    experimental/php/symfony/openroomsymfony/config/services.yaml
        deleted:    experimental/php/symfony/openroomsymfony/phpunit.xml.dist
        deleted:    experimental/php/symfony/openroomsymfony/public/index.php
        deleted:    experimental/php/symfony/openroomsymfony/src/Controller/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/src/Controller/LuckyController.php
        deleted:    experimental/php/symfony/openroomsymfony/src/Entity/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/src/Kernel.php
        deleted:    experimental/php/symfony/openroomsymfony/src/Migrations/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/src/Repository/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/symfony.lock
        deleted:    experimental/php/symfony/openroomsymfony/templates/base.html.twig
        deleted:    experimental/php/symfony/openroomsymfony/tests/.gitignore
        deleted:    experimental/php/symfony/openroomsymfony/translations/.gitignore
        deleted:    experimental/python/buford/.gitignore
        deleted:    experimental/python/buford/Dockerfile
        deleted:    experimental/python/buford/Pipfile
        deleted:    experimental/python/buford/Pipfile.lock
        deleted:    experimental/python/buford/README.md
        deleted:    experimental/python/buford/app.py
        deleted:    experimental/python/buford/config.py
        deleted:    experimental/python/buford/db/create_tables.sql
        deleted:    experimental/python/buford/db/drop_tables.sql
        deleted:    experimental/python/buford/db/insert_data.sql
        deleted:    experimental/python/buford/db/query_data.sql
        deleted:    experimental/python/buford/docker-compose.yml
        deleted:    experimental/python/buford/env.example
        deleted:    experimental/python/buford/model/__init__.py
        deleted:    experimental/python/buford/model/applicant.py
        deleted:    experimental/python/buford/model/referral.py
        deleted:    experimental/python/buford/model/visitor.py
        deleted:    experimental/python/buford/requirements.txt
        deleted:    experimental/python/buford/static/cta4096x800.png
        deleted:    experimental/python/buford/static/img/README.md
        deleted:    experimental/python/buford/static/img/android-chrome-192x192.png
        deleted:    experimental/python/buford/static/img/android-chrome-512x512.png
        deleted:    experimental/python/buford/static/img/apple-touch-icon.png
        deleted:    experimental/python/buford/static/img/browserconfig.xml
        deleted:    experimental/python/buford/static/img/favicon-16x16.png
        deleted:    experimental/python/buford/static/img/favicon-32x32.png
        deleted:    experimental/python/buford/static/img/favicon.ico
        deleted:    experimental/python/buford/static/img/html_code.html
        deleted:    experimental/python/buford/static/img/mstile-150x150.png
        deleted:    experimental/python/buford/static/img/safari-pinned-tab.svg
        deleted:    experimental/python/buford/static/img/site.webmanifest
        deleted:    experimental/python/buford/static/img/successCloudNew.svg
        deleted:    experimental/python/buford/static/img/tweetThis.svg
        deleted:    experimental/python/buford/static/img/twitch-no.svg
        deleted:    experimental/python/buford/static/logo240x100.png
        deleted:    experimental/python/buford/static/logo4096x1600.png
        deleted:    experimental/python/buford/static/styles.css
        deleted:    experimental/python/buford/templates/base.html
        deleted:    experimental/python/buford/templates/sitemap.xml
        deleted:    experimental/python/buford/templates/subscribe.html
        deleted:    experimental/python/buford/templates/success.html
        deleted:    experimental/python/buford/templates/welcome.html
        deleted:    experimental/python/buford/tests/__init__.py
        deleted:    experimental/python/buford/tests/test_freebie.py
        deleted:    experimental/python/buford/volumes/nginx-websites/conf.d/sample-website.conf
        deleted:    experimental/python/buford/volumes/proxy/certs/.gitkeep
        deleted:    experimental/python/buford/volumes/proxy/templates/nginx.tmpl
        deleted:    experimental/python/evanston/Pipfile
        deleted:    experimental/python/evanston/Pipfile.lock
        deleted:    experimental/python/evanston/tests/test_person.py
        deleted:    experimental/python/goshen/Pipfile
        deleted:    experimental/python/goshen/Pipfile.lock
        deleted:    experimental/python/goshen/README.md
        deleted:    experimental/python/goshen/counting_valleys.py
        deleted:    experimental/python/goshen/lijie_0.py
        deleted:    experimental/python/goshen/sock_merchant.py
        deleted:    experimental/python/goshen/tests/test_counting_valleys.py
        deleted:    experimental/python/goshen/tests/test_lijie_0.py
        deleted:    experimental/python/goshen/tests/test_sock_merchant.py
        deleted:    experimental/python/hoback/.gitignore
        deleted:    experimental/python/hoback/Pipfile
        deleted:    experimental/python/hoback/Pipfile.lock
        deleted:    experimental/python/hoback/README.md
        deleted:    experimental/python/hoback/apns.py
        deleted:    experimental/python/hoback/env.example
        deleted:    experimental/python/hoback/model/__init__.py
        deleted:    experimental/python/hoback/model/email_address.py
        deleted:    experimental/python/hoback/model/person.py
        deleted:    experimental/python/hoback/model/staff.py
        deleted:    experimental/python/hoback/phone.py
        deleted:    experimental/python/hoback/pinpoint.py
        deleted:    experimental/python/hoback/settings.py
        deleted:    experimental/python/hoback/tests/__init__.py
        deleted:    experimental/python/hoback/tests/test_email_address.py
        deleted:    experimental/python/hoback/tests/test_person.py
        deleted:    experimental/python/hoback/tests/test_staff.py
        deleted:    experimental/python/laramie/Pipfile.lock
        deleted:    experimental/python/rawlins/.gitignore
        deleted:    experimental/python/rawlins/Pipfile
        deleted:    experimental/python/rawlins/Pipfile.lock
        deleted:    experimental/python/rawlins/app.py
        deleted:    experimental/python/rawlins/config.py
        deleted:    experimental/python/rawlins/db/create_tables.sql
        deleted:    experimental/python/rawlins/db/insert_data.sql
        deleted:    experimental/python/rawlins/db/query_data.sql
        deleted:    experimental/python/rawlins/env.example
        deleted:    experimental/python/rawlins/model/User.py
        deleted:    experimental/python/rawlins/model/__init__.py
        deleted:    experimental/python/rawlins/static/style.css
        deleted:    experimental/python/rawlins/templates/base.html
        deleted:    experimental/python/rawlins/templates/index.html
        deleted:    experimental/python/rawlins/test/__init__.py
        deleted:    experimental/python/rawlins/test/test_user.py
        deleted:    experimental/react/hello-types/.gitignore
        deleted:    experimental/react/hello-types/README.md
        deleted:    experimental/react/hello-types/package.json
        deleted:    experimental/react/hello-types/public/favicon.ico
        deleted:    experimental/react/hello-types/public/index.html
        deleted:    experimental/react/hello-types/public/manifest.json
        deleted:    experimental/react/hello-types/src/App.css
        deleted:    experimental/react/hello-types/src/App.test.tsx
        deleted:    experimental/react/hello-types/src/App.tsx
        deleted:    experimental/react/hello-types/src/index.css
        deleted:    experimental/react/hello-types/src/index.tsx
        deleted:    experimental/react/hello-types/src/logo.svg
        deleted:    experimental/react/hello-types/src/react-app-env.d.ts
        deleted:    experimental/react/hello-types/src/serviceWorker.ts
        deleted:    experimental/react/hello-types/tsconfig.json
        deleted:    experimental/react/hello-types/yarn.lock
        deleted:    experimental/react/hiraimomo/.gitignore
        deleted:    experimental/react/hiraimomo/README.md
        deleted:    experimental/react/hiraimomo/package.json
        deleted:    experimental/react/hiraimomo/public/favicon.ico
        deleted:    experimental/react/hiraimomo/public/index.html
        deleted:    experimental/react/hiraimomo/public/logo192.png
        deleted:    experimental/react/hiraimomo/public/logo512.png
        deleted:    experimental/react/hiraimomo/public/manifest.json
        deleted:    experimental/react/hiraimomo/public/robots.txt
        deleted:    experimental/react/hiraimomo/src/App.css
        deleted:    experimental/react/hiraimomo/src/App.test.tsx
        deleted:    experimental/react/hiraimomo/src/App.tsx
        deleted:    experimental/react/hiraimomo/src/index.css
        deleted:    experimental/react/hiraimomo/src/index.tsx
        deleted:    experimental/react/hiraimomo/src/logo.svg
        deleted:    experimental/react/hiraimomo/src/react-app-env.d.ts
        deleted:    experimental/react/hiraimomo/src/serviceWorker.ts
        deleted:    experimental/react/hiraimomo/tsconfig.json
        deleted:    experimental/react/hiraimomo/yarn.lock
        deleted:    experimental/rust/hello/main.rs
        deleted:    experimental/rust/hello_world/.gitignore
        deleted:    experimental/rust/hello_world/Cargo.lock
        deleted:    experimental/rust/hello_world/Cargo.toml
        deleted:    experimental/rust/hello_world/src/main.rs
        deleted:    experimental/sqlserver/Jeju/Jeju.ssmssln
        deleted:    experimental/sqlserver/Jeju/JejuScript/JejuScript.ssmssln
        deleted:    experimental/sqlserver/Jeju/JejuScript/JejuScript/JejuScript.ssmssqlproj
        deleted:    experimental/sqlserver/Jeju/JejuScript/JejuScript/create_tables.sql
        deleted:    experimental/typescript/jonah/.gitignore
        deleted:    experimental/typescript/jonah/hackerrank.ts
        deleted:    experimental/typescript/jonah/index.ts
        deleted:    experimental/typescript/jonah/package.json
        deleted:    experimental/typescript/jonah/tsconfig.json
        deleted:    experimental/typescript/jonah/yarn.lock
        deleted:    game.sh
        deleted:    pcomplete.md
        deleted:    public-backend/.gitignore
        deleted:    public-backend/Dockerfile
        deleted:    public-backend/Pipfile
        deleted:    public-backend/Pipfile.lock
        deleted:    public-backend/app.py
        deleted:    public-backend/requirements.txt
        deleted:    public-databases/create_tables.sql
        deleted:    public-databases/insert_data.sql
        deleted:    public-databases/query_data.sql
        deleted:    public-website/.editorconfig
        deleted:    public-website/.gitignore
        deleted:    public-website/README.md
        deleted:    public-website/angular.json
        deleted:    public-website/browserslist
        deleted:    public-website/e2e/protractor.conf.js
        deleted:    public-website/e2e/src/app.e2e-spec.ts
        deleted:    public-website/e2e/src/app.po.ts
        deleted:    public-website/e2e/tsconfig.json
        deleted:    public-website/karma.conf.js
        deleted:    public-website/ngsw-config.json
        deleted:    public-website/package.json
        deleted:    public-website/src/app/app-routing.module.ts
        deleted:    public-website/src/app/app.component.html
        deleted:    public-website/src/app/app.component.sass
        deleted:    public-website/src/app/app.component.spec.ts
        deleted:    public-website/src/app/app.component.ts
        deleted:    public-website/src/app/app.module.ts
        deleted:    public-website/src/app/mock-owner.spec.ts
        deleted:    public-website/src/app/mock-owner.ts
        deleted:    public-website/src/app/mock-tier-category.spec.ts
        deleted:    public-website/src/app/mock-tier-category.ts
        deleted:    public-website/src/app/mock-tier.spec.ts
        deleted:    public-website/src/app/mock-tier.ts
        deleted:    public-website/src/app/mock-type.spec.ts
        deleted:    public-website/src/app/mock-type.ts
        deleted:    public-website/src/app/model-owner.spec.ts
        deleted:    public-website/src/app/model-owner.ts
        deleted:    public-website/src/app/model-tier-category.spec.ts
        deleted:    public-website/src/app/model-tier-category.ts
        deleted:    public-website/src/app/model-tier.spec.ts
        deleted:    public-website/src/app/model-tier.ts
        deleted:    public-website/src/app/model-type.spec.ts
        deleted:    public-website/src/app/model-type.ts
        deleted:    public-website/src/app/navbar/navbar.component.html
        deleted:    public-website/src/app/navbar/navbar.component.sass
        deleted:    public-website/src/app/navbar/navbar.component.spec.ts
        deleted:    public-website/src/app/navbar/navbar.component.ts
        deleted:    public-website/src/app/search-form/search-form.component.html
        deleted:    public-website/src/app/search-form/search-form.component.sass
        deleted:    public-website/src/app/search-form/search-form.component.spec.ts
        deleted:    public-website/src/app/search-form/search-form.component.ts
        deleted:    public-website/src/app/search/search.component.html
        deleted:    public-website/src/app/search/search.component.sass
        deleted:    public-website/src/app/search/search.component.spec.ts
        deleted:    public-website/src/app/search/search.component.ts
        deleted:    public-website/src/assets/.gitkeep
        deleted:    public-website/src/assets/icons/icon-128x128.png
        deleted:    public-website/src/assets/icons/icon-144x144.png
        deleted:    public-website/src/assets/icons/icon-152x152.png
        deleted:    public-website/src/assets/icons/icon-192x192.png
        deleted:    public-website/src/assets/icons/icon-384x384.png
        deleted:    public-website/src/assets/icons/icon-512x512.png
        deleted:    public-website/src/assets/icons/icon-72x72.png
        deleted:    public-website/src/assets/icons/icon-96x96.png
        deleted:    public-website/src/assets/json/book.json
        deleted:    public-website/src/assets/json/nested.json
        deleted:    public-website/src/custom-theme.scss
        deleted:    public-website/src/environments/environment.prod.ts
        deleted:    public-website/src/environments/environment.ts
        deleted:    public-website/src/favicon.ico
        deleted:    public-website/src/index.html
        deleted:    public-website/src/main.ts
        deleted:    public-website/src/manifest.webmanifest
        deleted:    public-website/src/polyfills.ts
        deleted:    public-website/src/styles.sass
        deleted:    public-website/src/test.ts
        deleted:    public-website/tsconfig.app.json
        deleted:    public-website/tsconfig.json
        deleted:    public-website/tsconfig.spec.json
        deleted:    public-website/tslint.json
        deleted:    public-website/yarn.lock
        deleted:    volumes/config/website/config.js
        deleted:    volumes/nginx-website/conf.d/sample-website.conf
        deleted:    volumes/proxy/templates/nginx.tmpl

no changes added to commit (use "git add" and/or "git commit -a")
Monday, June 10, 2024 2:09:18 PM
* remote origin
  Fetch URL: git@gitlab.com:wyoming/wyoming.gitlab.io.git
  Push  URL: git@github.com:onewyoming/onewyoming.git
  Push  URL: git@gitlab.com:wyoming/wyoming.gitlab.io.git
  HEAD branch: master
  Remote branch:
    master tracked
  Local branch configured for 'git pull':
    master merges with remote master
  Local ref configured for 'git push':
    master pushes to master (up to date)
Monday, June 10, 2024 2:09:19 PM
[master d0b0dc3] delete everything
 5226 files changed, 335860 deletions(-)
 delete mode 100644 .gitlab-ci.yml
 delete mode 100644 MildMarshmallow/.gitignore
 delete mode 100644 MildMarshmallow/app/.gitignore
 delete mode 100644 MildMarshmallow/app/build.gradle
 delete mode 100644 MildMarshmallow/app/proguard-rules.pro
 delete mode 100644 MildMarshmallow/app/src/androidTest/java/io/gitlab/wyoming/mildmarshmallow/ExampleInstrumentedTest.kt
 delete mode 100644 MildMarshmallow/app/src/main/AndroidManifest.xml
 delete mode 100644 MildMarshmallow/app/src/main/java/io/gitlab/wyoming/mildmarshmallow/MainActivity.kt
 delete mode 100644 MildMarshmallow/app/src/main/java/io/gitlab/wyoming/mildmarshmallow/ui/main/MainFragment.kt
 delete mode 100644 MildMarshmallow/app/src/main/java/io/gitlab/wyoming/mildmarshmallow/ui/main/MainViewModel.kt
 delete mode 100644 MildMarshmallow/app/src/main/res/drawable-v24/ic_launcher_foreground.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/drawable/ic_launcher_background.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/layout/main_activity.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/layout/main_fragment.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-hdpi/ic_launcher.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-mdpi/ic_launcher.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xhdpi/ic_launcher.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
 delete mode 100644 MildMarshmallow/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
 delete mode 100644 MildMarshmallow/app/src/main/res/values/colors.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/values/strings.xml
 delete mode 100644 MildMarshmallow/app/src/main/res/values/styles.xml
 delete mode 100644 MildMarshmallow/app/src/test/java/io/gitlab/wyoming/mildmarshmallow/ExampleUnitTest.kt
 delete mode 100644 MildMarshmallow/build.gradle
 delete mode 100644 MildMarshmallow/gradle.properties
 delete mode 100644 MildMarshmallow/gradle/wrapper/gradle-wrapper.jar
 delete mode 100644 MildMarshmallow/gradle/wrapper/gradle-wrapper.properties
 delete mode 100755 MildMarshmallow/gradlew
 delete mode 100644 MildMarshmallow/gradlew.bat
 delete mode 100644 MildMarshmallow/settings.gradle
 delete mode 100644 PublicAndroidApp/.gitignore
 delete mode 100644 PublicAndroidApp/app/.gitignore
 delete mode 100644 PublicAndroidApp/app/build.gradle
 delete mode 100644 PublicAndroidApp/app/proguard-rules.pro
 delete mode 100644 PublicAndroidApp/app/src/androidTest/java/io/gitlab/wyoming/publicandroidapp/ExampleInstrumentedTest.kt
 delete mode 100644 PublicAndroidApp/app/src/main/AndroidManifest.xml
 delete mode 100644 PublicAndroidApp/app/src/main/java/io/gitlab/wyoming/publicandroidapp/MainActivity.kt
 delete mode 100644 PublicAndroidApp/app/src/main/java/io/gitlab/wyoming/publicandroidapp/ui/main/MainFragment.kt
 delete mode 100644 PublicAndroidApp/app/src/main/java/io/gitlab/wyoming/publicandroidapp/ui/main/MainViewModel.kt
 delete mode 100644 PublicAndroidApp/app/src/main/res/drawable-v24/ic_launcher_foreground.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/drawable/ic_launcher_background.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/layout/main_activity.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/layout/main_fragment.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-hdpi/ic_launcher.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-mdpi/ic_launcher.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xhdpi/ic_launcher.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
 delete mode 100644 PublicAndroidApp/app/src/main/res/values/colors.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/values/strings.xml
 delete mode 100644 PublicAndroidApp/app/src/main/res/values/styles.xml
 delete mode 100644 PublicAndroidApp/app/src/test/java/io/gitlab/wyoming/publicandroidapp/ExampleUnitTest.kt
 delete mode 100644 PublicAndroidApp/build.gradle
 delete mode 100644 PublicAndroidApp/gradle.properties
 delete mode 100644 PublicAndroidApp/gradle/wrapper/gradle-wrapper.jar
 delete mode 100644 PublicAndroidApp/gradle/wrapper/gradle-wrapper.properties
 delete mode 100755 PublicAndroidApp/gradlew
 delete mode 100644 PublicAndroidApp/gradlew.bat
 delete mode 100644 PublicAndroidApp/settings.gradle
 delete mode 100644 Windows/ClassLibrary1/Class1.cs
 delete mode 100644 Windows/ClassLibrary1/ClassLibrary1.csproj
 delete mode 100644 Windows/ClassLibrary1/Person.cs
 delete mode 100644 Windows/WebApplication1/.gitignore
 delete mode 100644 Windows/WebApplication1/ClientApp/.angular-cli.json
 delete mode 100644 Windows/WebApplication1/ClientApp/.editorconfig
 delete mode 100644 Windows/WebApplication1/ClientApp/.gitignore
 delete mode 100644 Windows/WebApplication1/ClientApp/README.md
 delete mode 100644 Windows/WebApplication1/ClientApp/e2e/app.e2e-spec.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/e2e/app.po.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/e2e/tsconfig.e2e.json
 delete mode 100644 Windows/WebApplication1/ClientApp/karma.conf.js
 delete mode 100644 Windows/WebApplication1/ClientApp/package-lock.json
 delete mode 100644 Windows/WebApplication1/ClientApp/package.json
 delete mode 100644 Windows/WebApplication1/ClientApp/protractor.conf.js
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/app.component.css
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/app.component.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/app.component.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/app.module.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/counter/counter.component.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/counter/counter.component.spec.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/counter/counter.component.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/fetch-data/fetch-data.component.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/fetch-data/fetch-data.component.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/home/home.component.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/home/home.component.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/nav-menu/nav-menu.component.css
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/nav-menu/nav-menu.component.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/app/nav-menu/nav-menu.component.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/assets/.gitkeep
 delete mode 100644 Windows/WebApplication1/ClientApp/src/environments/environment.prod.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/environments/environment.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/index.html
 delete mode 100644 Windows/WebApplication1/ClientApp/src/main.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/polyfills.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/styles.css
 delete mode 100644 Windows/WebApplication1/ClientApp/src/test.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/src/tsconfig.app.json
 delete mode 100644 Windows/WebApplication1/ClientApp/src/tsconfig.spec.json
 delete mode 100644 Windows/WebApplication1/ClientApp/src/typings.d.ts
 delete mode 100644 Windows/WebApplication1/ClientApp/tsconfig.json
 delete mode 100644 Windows/WebApplication1/ClientApp/tslint.json
 delete mode 100644 Windows/WebApplication1/Controllers/SampleDataController.cs
 delete mode 100644 Windows/WebApplication1/Pages/Error.cshtml
 delete mode 100644 Windows/WebApplication1/Pages/Error.cshtml.cs
 delete mode 100644 Windows/WebApplication1/Pages/_ViewImports.cshtml
 delete mode 100644 Windows/WebApplication1/Program.cs
 delete mode 100644 Windows/WebApplication1/Startup.cs
 delete mode 100644 Windows/WebApplication1/WebApplication1.csproj
 delete mode 100644 Windows/WebApplication1/appsettings.Development.json
 delete mode 100644 Windows/WebApplication1/appsettings.json
 delete mode 100644 Windows/WebApplication1/wwwroot/favicon.ico
 delete mode 100644 Windows/Windows.sln
 delete mode 100644 Windows/Windows/App.xaml
 delete mode 100644 Windows/Windows/App.xaml.cs
 delete mode 100644 Windows/Windows/Assets/LockScreenLogo.scale-200.png
 delete mode 100644 Windows/Windows/Assets/SplashScreen.scale-200.png
 delete mode 100644 Windows/Windows/Assets/Square150x150Logo.scale-200.png
 delete mode 100644 Windows/Windows/Assets/Square44x44Logo.scale-200.png
 delete mode 100644 Windows/Windows/Assets/Square44x44Logo.targetsize-24_altform-unplated.png
 delete mode 100644 Windows/Windows/Assets/StoreLogo.png
 delete mode 100644 Windows/Windows/Assets/Wide310x150Logo.scale-200.png
 delete mode 100644 Windows/Windows/MainPage.xaml
 delete mode 100644 Windows/Windows/MainPage.xaml.cs
 delete mode 100644 Windows/Windows/Package.appxmanifest
 delete mode 100644 Windows/Windows/Properties/AssemblyInfo.cs
 delete mode 100644 Windows/Windows/Properties/Default.rd.xml
 delete mode 100644 Windows/Windows/Windows.csproj
 delete mode 100644 Windows/WpfApp1/App.config
 delete mode 100644 Windows/WpfApp1/App.xaml
 delete mode 100644 Windows/WpfApp1/App.xaml.cs
 delete mode 100644 Windows/WpfApp1/MainWindow.xaml
 delete mode 100644 Windows/WpfApp1/MainWindow.xaml.cs
 delete mode 100644 Windows/WpfApp1/Properties/AssemblyInfo.cs
 delete mode 100644 Windows/WpfApp1/Properties/Resources.Designer.cs
 delete mode 100644 Windows/WpfApp1/Properties/Resources.resx
 delete mode 100644 Windows/WpfApp1/Properties/Settings.Designer.cs
 delete mode 100644 Windows/WpfApp1/Properties/Settings.settings
 delete mode 100644 Windows/WpfApp1/WpfApp1.csproj
 delete mode 100644 Windows/XUnitTestProject1/PersonTests.cs
 delete mode 100644 Windows/XUnitTestProject1/UnitTest1.cs
 delete mode 100644 Windows/XUnitTestProject1/XUnitTestProject1.csproj
 delete mode 100644 built-website/.gitkeep
 delete mode 100644 built-website/Dockerfile
 delete mode 100644 development.sh
 delete mode 100755 docker-compose.yml
 delete mode 100644 experimental/android/.gitignore
 delete mode 100644 experimental/android/app/.gitignore
 delete mode 100644 experimental/android/app/build.gradle
 delete mode 100644 experimental/android/app/proguard-rules.pro
 delete mode 100644 experimental/android/app/src/androidTest/java/com/example/testacularandroid/ExampleInstrumentedTest.kt
 delete mode 100644 experimental/android/app/src/main/AndroidManifest.xml
 delete mode 100644 experimental/android/app/src/main/java/com/example/testacularandroid/MainActivity.kt
 delete mode 100644 experimental/android/app/src/main/res/drawable-v24/ic_launcher_foreground.xml
 delete mode 100644 experimental/android/app/src/main/res/drawable/ic_launcher_background.xml
 delete mode 100644 experimental/android/app/src/main/res/layout/activity_main.xml
 delete mode 100644 experimental/android/app/src/main/res/layout/content_main.xml
 delete mode 100644 experimental/android/app/src/main/res/menu/menu_main.xml
 delete mode 100644 experimental/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher.xml
 delete mode 100644 experimental/android/app/src/main/res/mipmap-anydpi-v26/ic_launcher_round.xml
 delete mode 100644 experimental/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-hdpi/ic_launcher_round.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-mdpi/ic_launcher_round.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xhdpi/ic_launcher_round.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xxhdpi/ic_launcher_round.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
 delete mode 100644 experimental/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher_round.png
 delete mode 100644 experimental/android/app/src/main/res/values/colors.xml
 delete mode 100644 experimental/android/app/src/main/res/values/dimens.xml
 delete mode 100644 experimental/android/app/src/main/res/values/strings.xml
 delete mode 100644 experimental/android/app/src/main/res/values/styles.xml
 delete mode 100644 experimental/android/app/src/test/java/com/example/testacularandroid/ExampleUnitTest.kt
 delete mode 100644 experimental/android/build.gradle
 delete mode 100644 experimental/android/gradle.properties
 delete mode 100644 experimental/android/gradle/wrapper/gradle-wrapper.jar
 delete mode 100644 experimental/android/gradle/wrapper/gradle-wrapper.properties
 delete mode 100755 experimental/android/gradlew
 delete mode 100644 experimental/android/gradlew.bat
 delete mode 100644 experimental/android/settings.gradle
 delete mode 100644 experimental/angular/Angular8312/.editorconfig
 delete mode 100644 experimental/angular/Angular8312/.gitignore
 delete mode 100644 experimental/angular/Angular8312/README.md
 delete mode 100644 experimental/angular/Angular8312/angular.json
 delete mode 100644 experimental/angular/Angular8312/browserslist
 delete mode 100644 experimental/angular/Angular8312/e2e/protractor.conf.js
 delete mode 100644 experimental/angular/Angular8312/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/angular/Angular8312/e2e/src/app.po.ts
 delete mode 100644 experimental/angular/Angular8312/e2e/tsconfig.json
 delete mode 100644 experimental/angular/Angular8312/karma.conf.js
 delete mode 100644 experimental/angular/Angular8312/package.json
 delete mode 100644 experimental/angular/Angular8312/src/app/app-routing.module.ts
 delete mode 100644 experimental/angular/Angular8312/src/app/app.component.html
 delete mode 100644 experimental/angular/Angular8312/src/app/app.component.sass
 delete mode 100644 experimental/angular/Angular8312/src/app/app.component.spec.ts
 delete mode 100644 experimental/angular/Angular8312/src/app/app.component.ts
 delete mode 100644 experimental/angular/Angular8312/src/app/app.module.ts
 delete mode 100644 experimental/angular/Angular8312/src/app/name-editor/name-editor.component.html
 delete mode 100644 experimental/angular/Angular8312/src/app/name-editor/name-editor.component.sass
 delete mode 100644 experimental/angular/Angular8312/src/app/name-editor/name-editor.component.spec.ts
 delete mode 100644 experimental/angular/Angular8312/src/app/name-editor/name-editor.component.ts
 delete mode 100644 experimental/angular/Angular8312/src/assets/.gitkeep
 delete mode 100644 experimental/angular/Angular8312/src/environments/environment.prod.ts
 delete mode 100644 experimental/angular/Angular8312/src/environments/environment.ts
 delete mode 100644 experimental/angular/Angular8312/src/favicon.ico
 delete mode 100644 experimental/angular/Angular8312/src/index.html
 delete mode 100644 experimental/angular/Angular8312/src/main.ts
 delete mode 100644 experimental/angular/Angular8312/src/polyfills.ts
 delete mode 100644 experimental/angular/Angular8312/src/styles.sass
 delete mode 100644 experimental/angular/Angular8312/src/test.ts
 delete mode 100644 experimental/angular/Angular8312/tsconfig.app.json
 delete mode 100644 experimental/angular/Angular8312/tsconfig.json
 delete mode 100644 experimental/angular/Angular8312/tsconfig.spec.json
 delete mode 100644 experimental/angular/Angular8312/tslint.json
 delete mode 100644 experimental/angular/Angular8312/yarn.lock
 delete mode 100644 experimental/angular/IvyLeague/.editorconfig
 delete mode 100644 experimental/angular/IvyLeague/.gitignore
 delete mode 100644 experimental/angular/IvyLeague/README.md
 delete mode 100644 experimental/angular/IvyLeague/angular.json
 delete mode 100644 experimental/angular/IvyLeague/browserslist
 delete mode 100644 experimental/angular/IvyLeague/e2e/protractor.conf.js
 delete mode 100644 experimental/angular/IvyLeague/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/angular/IvyLeague/e2e/src/app.po.ts
 delete mode 100644 experimental/angular/IvyLeague/e2e/tsconfig.json
 delete mode 100644 experimental/angular/IvyLeague/karma.conf.js
 delete mode 100644 experimental/angular/IvyLeague/package.json
 delete mode 100644 experimental/angular/IvyLeague/src/app/app-routing.module.ts
 delete mode 100644 experimental/angular/IvyLeague/src/app/app.component.html
 delete mode 100644 experimental/angular/IvyLeague/src/app/app.component.sass
 delete mode 100644 experimental/angular/IvyLeague/src/app/app.component.spec.ts
 delete mode 100644 experimental/angular/IvyLeague/src/app/app.component.ts
 delete mode 100644 experimental/angular/IvyLeague/src/app/app.module.ts
 delete mode 100644 experimental/angular/IvyLeague/src/assets/.gitkeep
 delete mode 100644 experimental/angular/IvyLeague/src/environments/environment.prod.ts
 delete mode 100644 experimental/angular/IvyLeague/src/environments/environment.ts
 delete mode 100644 experimental/angular/IvyLeague/src/favicon.ico
 delete mode 100644 experimental/angular/IvyLeague/src/index.html
 delete mode 100644 experimental/angular/IvyLeague/src/main.ts
 delete mode 100644 experimental/angular/IvyLeague/src/polyfills.ts
 delete mode 100644 experimental/angular/IvyLeague/src/styles.sass
 delete mode 100644 experimental/angular/IvyLeague/src/test.ts
 delete mode 100644 experimental/angular/IvyLeague/tsconfig.app.json
 delete mode 100644 experimental/angular/IvyLeague/tsconfig.json
 delete mode 100644 experimental/angular/IvyLeague/tsconfig.spec.json
 delete mode 100644 experimental/angular/IvyLeague/tslint.json
 delete mode 100644 experimental/angular/IvyLeague/yarn.lock
 delete mode 100644 experimental/angular/ReactiveForms/.editorconfig
 delete mode 100644 experimental/angular/ReactiveForms/.gitignore
 delete mode 100644 experimental/angular/ReactiveForms/.vscode/launch.json
 delete mode 100644 experimental/angular/ReactiveForms/.vscode/tasks.json
 delete mode 100644 experimental/angular/ReactiveForms/README.md
 delete mode 100644 experimental/angular/ReactiveForms/angular.json
 delete mode 100644 experimental/angular/ReactiveForms/browserslist
 delete mode 100644 experimental/angular/ReactiveForms/e2e/protractor-ci.conf.js
 delete mode 100644 experimental/angular/ReactiveForms/e2e/protractor.conf.js
 delete mode 100644 experimental/angular/ReactiveForms/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/angular/ReactiveForms/e2e/src/app.po.ts
 delete mode 100644 experimental/angular/ReactiveForms/e2e/tsconfig.json
 delete mode 100644 experimental/angular/ReactiveForms/karma.conf.js
 delete mode 100644 experimental/angular/ReactiveForms/ngsw-config.json
 delete mode 100644 experimental/angular/ReactiveForms/package.json
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app-routing.module.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app.component.html
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app.component.sass
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app.component.spec.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app.component.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/app.module.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/material/material.module.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/name-editor/name-editor.component.html
 delete mode 100644 experimental/angular/ReactiveForms/src/app/name-editor/name-editor.component.sass
 delete mode 100644 experimental/angular/ReactiveForms/src/app/name-editor/name-editor.component.spec.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/app/name-editor/name-editor.component.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/.gitkeep
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-128x128.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-144x144.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-152x152.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-192x192.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-384x384.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-512x512.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-72x72.png
 delete mode 100644 experimental/angular/ReactiveForms/src/assets/icons/icon-96x96.png
 delete mode 100644 experimental/angular/ReactiveForms/src/custom-theme.scss
 delete mode 100644 experimental/angular/ReactiveForms/src/environments/environment.prod.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/environments/environment.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/favicon.ico
 delete mode 100644 experimental/angular/ReactiveForms/src/index.html
 delete mode 100644 experimental/angular/ReactiveForms/src/main.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/manifest.webmanifest
 delete mode 100644 experimental/angular/ReactiveForms/src/polyfills.ts
 delete mode 100644 experimental/angular/ReactiveForms/src/styles.sass
 delete mode 100644 experimental/angular/ReactiveForms/src/test.ts
 delete mode 100644 experimental/angular/ReactiveForms/tsconfig.app.json
 delete mode 100644 experimental/angular/ReactiveForms/tsconfig.json
 delete mode 100644 experimental/angular/ReactiveForms/tsconfig.spec.json
 delete mode 100644 experimental/angular/ReactiveForms/tslint.json
 delete mode 100644 experimental/angular/ReactiveForms/yarn.lock
 delete mode 100644 experimental/angular/angular906/.editorconfig
 delete mode 100644 experimental/angular/angular906/.gitignore
 delete mode 100644 experimental/angular/angular906/README.md
 delete mode 100644 experimental/angular/angular906/angular.json
 delete mode 100644 experimental/angular/angular906/browserslist
 delete mode 100644 experimental/angular/angular906/e2e/protractor.conf.js
 delete mode 100644 experimental/angular/angular906/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/angular/angular906/e2e/src/app.po.ts
 delete mode 100644 experimental/angular/angular906/e2e/tsconfig.json
 delete mode 100644 experimental/angular/angular906/karma.conf.js
 delete mode 100644 experimental/angular/angular906/package.json
 delete mode 100644 experimental/angular/angular906/src/app/app-routing.module.ts
 delete mode 100644 experimental/angular/angular906/src/app/app.component.html
 delete mode 100644 experimental/angular/angular906/src/app/app.component.sass
 delete mode 100644 experimental/angular/angular906/src/app/app.component.spec.ts
 delete mode 100644 experimental/angular/angular906/src/app/app.component.ts
 delete mode 100644 experimental/angular/angular906/src/app/app.module.ts
 delete mode 100644 experimental/angular/angular906/src/assets/.gitkeep
 delete mode 100644 experimental/angular/angular906/src/environments/environment.prod.ts
 delete mode 100644 experimental/angular/angular906/src/environments/environment.ts
 delete mode 100644 experimental/angular/angular906/src/favicon.ico
 delete mode 100644 experimental/angular/angular906/src/index.html
 delete mode 100644 experimental/angular/angular906/src/main.ts
 delete mode 100644 experimental/angular/angular906/src/polyfills.ts
 delete mode 100644 experimental/angular/angular906/src/styles.sass
 delete mode 100644 experimental/angular/angular906/src/test.ts
 delete mode 100644 experimental/angular/angular906/tsconfig.app.json
 delete mode 100644 experimental/angular/angular906/tsconfig.json
 delete mode 100644 experimental/angular/angular906/tsconfig.spec.json
 delete mode 100644 experimental/angular/angular906/tslint.json
 delete mode 100644 experimental/angular/angular906/yarn.lock
 delete mode 100644 experimental/angular/angular911/.editorconfig
 delete mode 100644 experimental/angular/angular911/.gitignore
 delete mode 100644 experimental/angular/angular911/.gitlab-ci.yml
 delete mode 100644 experimental/angular/angular911/.vscode/launch.json
 delete mode 100644 experimental/angular/angular911/.vscode/tasks.json
 delete mode 100644 experimental/angular/angular911/README.md
 delete mode 100644 experimental/angular/angular911/angular.json
 delete mode 100644 experimental/angular/angular911/browserslist
 delete mode 100644 experimental/angular/angular911/e2e/protractor.conf.js
 delete mode 100644 experimental/angular/angular911/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/angular/angular911/e2e/src/app.po.ts
 delete mode 100644 experimental/angular/angular911/e2e/tsconfig.json
 delete mode 100644 experimental/angular/angular911/generateexperiment.sh
 delete mode 100644 experimental/angular/angular911/karma.conf.js
 delete mode 100644 experimental/angular/angular911/package.json
 delete mode 100644 experimental/angular/angular911/src/app/app-routing.module.ts
 delete mode 100644 experimental/angular/angular911/src/app/app.component.html
 delete mode 100644 experimental/angular/angular911/src/app/app.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/app.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/app.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/app.module.ts
 delete mode 100644 experimental/angular/angular911/src/app/child.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/child.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment.module.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1/experiment1.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1/experiment1.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1/experiment1.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1/experiment1.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment10/experiment10.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment10/experiment10.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment10/experiment10.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment10/experiment10.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment100/experiment100.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment100/experiment100.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment100/experiment100.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment100/experiment100.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1000/experiment1000.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1000/experiment1000.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1000/experiment1000.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment1000/experiment1000.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment101/experiment101.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment101/experiment101.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment101/experiment101.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment101/experiment101.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment102/experiment102.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment102/experiment102.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment102/experiment102.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment102/experiment102.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment103/experiment103.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment103/experiment103.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment103/experiment103.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment103/experiment103.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment104/experiment104.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment104/experiment104.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment104/experiment104.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment104/experiment104.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment105/experiment105.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment105/experiment105.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment105/experiment105.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment105/experiment105.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment106/experiment106.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment106/experiment106.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment106/experiment106.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment106/experiment106.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment107/experiment107.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment107/experiment107.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment107/experiment107.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment107/experiment107.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment108/experiment108.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment108/experiment108.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment108/experiment108.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment108/experiment108.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment109/experiment109.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment109/experiment109.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment109/experiment109.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment109/experiment109.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment11/experiment11.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment11/experiment11.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment11/experiment11.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment11/experiment11.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment110/experiment110.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment110/experiment110.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment110/experiment110.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment110/experiment110.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment111/experiment111.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment111/experiment111.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment111/experiment111.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment111/experiment111.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment112/experiment112.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment112/experiment112.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment112/experiment112.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment112/experiment112.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment113/experiment113.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment113/experiment113.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment113/experiment113.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment113/experiment113.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment114/experiment114.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment114/experiment114.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment114/experiment114.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment114/experiment114.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment115/experiment115.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment115/experiment115.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment115/experiment115.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment115/experiment115.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment116/experiment116.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment116/experiment116.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment116/experiment116.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment116/experiment116.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment117/experiment117.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment117/experiment117.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment117/experiment117.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment117/experiment117.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment118/experiment118.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment118/experiment118.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment118/experiment118.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment118/experiment118.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment119/experiment119.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment119/experiment119.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment119/experiment119.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment119/experiment119.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment12/experiment12.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment12/experiment12.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment12/experiment12.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment12/experiment12.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment120/experiment120.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment120/experiment120.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment120/experiment120.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment120/experiment120.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment121/experiment121.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment121/experiment121.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment121/experiment121.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment121/experiment121.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment122/experiment122.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment122/experiment122.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment122/experiment122.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment122/experiment122.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment123/experiment123.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment123/experiment123.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment123/experiment123.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment123/experiment123.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment124/experiment124.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment124/experiment124.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment124/experiment124.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment124/experiment124.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment125/experiment125.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment125/experiment125.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment125/experiment125.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment125/experiment125.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment126/experiment126.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment126/experiment126.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment126/experiment126.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment126/experiment126.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment127/experiment127.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment127/experiment127.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment127/experiment127.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment127/experiment127.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment128/experiment128.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment128/experiment128.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment128/experiment128.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment128/experiment128.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment129/experiment129.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment129/experiment129.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment129/experiment129.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment129/experiment129.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment13/experiment13.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment13/experiment13.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment13/experiment13.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment13/experiment13.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment130/experiment130.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment130/experiment130.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment130/experiment130.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment130/experiment130.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment131/experiment131.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment131/experiment131.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment131/experiment131.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment131/experiment131.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment132/experiment132.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment132/experiment132.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment132/experiment132.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment132/experiment132.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment133/experiment133.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment133/experiment133.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment133/experiment133.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment133/experiment133.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment134/experiment134.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment134/experiment134.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment134/experiment134.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment134/experiment134.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment135/experiment135.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment135/experiment135.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment135/experiment135.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment135/experiment135.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment136/experiment136.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment136/experiment136.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment136/experiment136.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment136/experiment136.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment137/experiment137.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment137/experiment137.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment137/experiment137.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment137/experiment137.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment138/experiment138.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment138/experiment138.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment138/experiment138.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment138/experiment138.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment139/experiment139.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment139/experiment139.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment139/experiment139.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment139/experiment139.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment14/experiment14.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment14/experiment14.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment14/experiment14.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment14/experiment14.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment140/experiment140.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment140/experiment140.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment140/experiment140.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment140/experiment140.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment141/experiment141.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment141/experiment141.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment141/experiment141.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment141/experiment141.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment142/experiment142.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment142/experiment142.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment142/experiment142.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment142/experiment142.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment143/experiment143.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment143/experiment143.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment143/experiment143.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment143/experiment143.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment144/experiment144.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment144/experiment144.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment144/experiment144.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment144/experiment144.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment145/experiment145.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment145/experiment145.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment145/experiment145.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment145/experiment145.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment146/experiment146.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment146/experiment146.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment146/experiment146.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment146/experiment146.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment147/experiment147.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment147/experiment147.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment147/experiment147.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment147/experiment147.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment148/experiment148.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment148/experiment148.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment148/experiment148.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment148/experiment148.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment149/experiment149.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment149/experiment149.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment149/experiment149.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment149/experiment149.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment15/experiment15.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment15/experiment15.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment15/experiment15.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment15/experiment15.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment150/experiment150.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment150/experiment150.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment150/experiment150.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment150/experiment150.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment151/experiment151.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment151/experiment151.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment151/experiment151.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment151/experiment151.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment152/experiment152.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment152/experiment152.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment152/experiment152.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment152/experiment152.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment153/experiment153.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment153/experiment153.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment153/experiment153.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment153/experiment153.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment154/experiment154.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment154/experiment154.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment154/experiment154.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment154/experiment154.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment155/experiment155.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment155/experiment155.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment155/experiment155.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment155/experiment155.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment156/experiment156.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment156/experiment156.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment156/experiment156.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment156/experiment156.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment157/experiment157.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment157/experiment157.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment157/experiment157.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment157/experiment157.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment158/experiment158.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment158/experiment158.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment158/experiment158.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment158/experiment158.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment159/experiment159.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment159/experiment159.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment159/experiment159.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment159/experiment159.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment16/experiment16.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment16/experiment16.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment16/experiment16.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment16/experiment16.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment160/experiment160.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment160/experiment160.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment160/experiment160.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment160/experiment160.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment161/experiment161.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment161/experiment161.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment161/experiment161.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment161/experiment161.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment162/experiment162.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment162/experiment162.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment162/experiment162.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment162/experiment162.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment163/experiment163.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment163/experiment163.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment163/experiment163.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment163/experiment163.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment164/experiment164.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment164/experiment164.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment164/experiment164.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment164/experiment164.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment165/experiment165.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment165/experiment165.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment165/experiment165.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment165/experiment165.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment166/experiment166.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment166/experiment166.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment166/experiment166.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment166/experiment166.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment167/experiment167.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment167/experiment167.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment167/experiment167.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment167/experiment167.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment168/experiment168.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment168/experiment168.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment168/experiment168.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment168/experiment168.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment169/experiment169.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment169/experiment169.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment169/experiment169.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment169/experiment169.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment17/experiment17.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment17/experiment17.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment17/experiment17.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment17/experiment17.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment170/experiment170.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment170/experiment170.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment170/experiment170.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment170/experiment170.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment171/experiment171.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment171/experiment171.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment171/experiment171.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment171/experiment171.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment172/experiment172.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment172/experiment172.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment172/experiment172.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment172/experiment172.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment173/experiment173.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment173/experiment173.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment173/experiment173.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment173/experiment173.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment174/experiment174.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment174/experiment174.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment174/experiment174.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment174/experiment174.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment175/experiment175.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment175/experiment175.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment175/experiment175.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment175/experiment175.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment176/experiment176.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment176/experiment176.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment176/experiment176.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment176/experiment176.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment177/experiment177.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment177/experiment177.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment177/experiment177.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment177/experiment177.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment178/experiment178.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment178/experiment178.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment178/experiment178.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment178/experiment178.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment179/experiment179.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment179/experiment179.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment179/experiment179.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment179/experiment179.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment18/experiment18.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment18/experiment18.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment18/experiment18.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment18/experiment18.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment180/experiment180.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment180/experiment180.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment180/experiment180.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment180/experiment180.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment181/experiment181.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment181/experiment181.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment181/experiment181.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment181/experiment181.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment182/experiment182.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment182/experiment182.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment182/experiment182.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment182/experiment182.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment183/experiment183.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment183/experiment183.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment183/experiment183.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment183/experiment183.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment184/experiment184.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment184/experiment184.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment184/experiment184.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment184/experiment184.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment185/experiment185.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment185/experiment185.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment185/experiment185.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment185/experiment185.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment186/experiment186.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment186/experiment186.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment186/experiment186.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment186/experiment186.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment187/experiment187.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment187/experiment187.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment187/experiment187.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment187/experiment187.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment188/experiment188.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment188/experiment188.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment188/experiment188.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment188/experiment188.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment189/experiment189.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment189/experiment189.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment189/experiment189.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment189/experiment189.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment19/experiment19.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment19/experiment19.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment19/experiment19.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment19/experiment19.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment190/experiment190.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment190/experiment190.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment190/experiment190.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment190/experiment190.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment191/experiment191.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment191/experiment191.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment191/experiment191.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment191/experiment191.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment192/experiment192.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment192/experiment192.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment192/experiment192.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment192/experiment192.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment193/experiment193.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment193/experiment193.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment193/experiment193.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment193/experiment193.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment194/experiment194.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment194/experiment194.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment194/experiment194.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment194/experiment194.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment195/experiment195.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment195/experiment195.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment195/experiment195.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment195/experiment195.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment196/experiment196.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment196/experiment196.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment196/experiment196.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment196/experiment196.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment197/experiment197.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment197/experiment197.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment197/experiment197.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment197/experiment197.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment198/experiment198.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment198/experiment198.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment198/experiment198.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment198/experiment198.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment199/experiment199.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment199/experiment199.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment199/experiment199.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment199/experiment199.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment2/experiment2.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment2/experiment2.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment2/experiment2.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment2/experiment2.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment20/experiment20.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment20/experiment20.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment20/experiment20.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment20/experiment20.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment200/experiment200.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment200/experiment200.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment200/experiment200.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment200/experiment200.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment201/experiment201.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment201/experiment201.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment201/experiment201.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment201/experiment201.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment202/experiment202.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment202/experiment202.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment202/experiment202.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment202/experiment202.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment203/experiment203.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment203/experiment203.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment203/experiment203.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment203/experiment203.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment204/experiment204.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment204/experiment204.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment204/experiment204.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment204/experiment204.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment205/experiment205.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment205/experiment205.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment205/experiment205.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment205/experiment205.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment206/experiment206.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment206/experiment206.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment206/experiment206.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment206/experiment206.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment207/experiment207.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment207/experiment207.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment207/experiment207.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment207/experiment207.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment208/experiment208.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment208/experiment208.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment208/experiment208.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment208/experiment208.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment209/experiment209.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment209/experiment209.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment209/experiment209.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment209/experiment209.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment21/experiment21.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment21/experiment21.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment21/experiment21.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment21/experiment21.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment210/experiment210.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment210/experiment210.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment210/experiment210.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment210/experiment210.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment211/experiment211.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment211/experiment211.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment211/experiment211.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment211/experiment211.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment212/experiment212.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment212/experiment212.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment212/experiment212.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment212/experiment212.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment213/experiment213.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment213/experiment213.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment213/experiment213.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment213/experiment213.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment214/experiment214.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment214/experiment214.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment214/experiment214.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment214/experiment214.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment215/experiment215.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment215/experiment215.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment215/experiment215.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment215/experiment215.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment216/experiment216.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment216/experiment216.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment216/experiment216.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment216/experiment216.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment217/experiment217.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment217/experiment217.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment217/experiment217.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment217/experiment217.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment218/experiment218.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment218/experiment218.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment218/experiment218.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment218/experiment218.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment219/experiment219.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment219/experiment219.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment219/experiment219.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment219/experiment219.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment22/experiment22.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment22/experiment22.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment22/experiment22.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment22/experiment22.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment220/experiment220.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment220/experiment220.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment220/experiment220.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment220/experiment220.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment221/experiment221.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment221/experiment221.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment221/experiment221.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment221/experiment221.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment222/experiment222.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment222/experiment222.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment222/experiment222.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment222/experiment222.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment223/experiment223.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment223/experiment223.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment223/experiment223.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment223/experiment223.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment224/experiment224.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment224/experiment224.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment224/experiment224.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment224/experiment224.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment225/experiment225.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment225/experiment225.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment225/experiment225.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment225/experiment225.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment226/experiment226.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment226/experiment226.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment226/experiment226.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment226/experiment226.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment227/experiment227.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment227/experiment227.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment227/experiment227.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment227/experiment227.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment228/experiment228.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment228/experiment228.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment228/experiment228.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment228/experiment228.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment229/experiment229.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment229/experiment229.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment229/experiment229.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment229/experiment229.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment23/experiment23.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment23/experiment23.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment23/experiment23.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment23/experiment23.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment230/experiment230.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment230/experiment230.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment230/experiment230.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment230/experiment230.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment231/experiment231.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment231/experiment231.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment231/experiment231.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment231/experiment231.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment232/experiment232.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment232/experiment232.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment232/experiment232.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment232/experiment232.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment233/experiment233.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment233/experiment233.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment233/experiment233.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment233/experiment233.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment234/experiment234.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment234/experiment234.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment234/experiment234.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment234/experiment234.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment235/experiment235.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment235/experiment235.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment235/experiment235.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment235/experiment235.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment236/experiment236.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment236/experiment236.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment236/experiment236.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment236/experiment236.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment237/experiment237.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment237/experiment237.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment237/experiment237.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment237/experiment237.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment238/experiment238.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment238/experiment238.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment238/experiment238.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment238/experiment238.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment239/experiment239.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment239/experiment239.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment239/experiment239.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment239/experiment239.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment24/experiment24.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment24/experiment24.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment24/experiment24.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment24/experiment24.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment240/experiment240.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment240/experiment240.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment240/experiment240.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment240/experiment240.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment241/experiment241.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment241/experiment241.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment241/experiment241.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment241/experiment241.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment242/experiment242.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment242/experiment242.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment242/experiment242.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment242/experiment242.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment243/experiment243.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment243/experiment243.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment243/experiment243.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment243/experiment243.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment244/experiment244.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment244/experiment244.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment244/experiment244.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment244/experiment244.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment245/experiment245.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment245/experiment245.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment245/experiment245.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment245/experiment245.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment246/experiment246.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment246/experiment246.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment246/experiment246.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment246/experiment246.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment247/experiment247.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment247/experiment247.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment247/experiment247.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment247/experiment247.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment248/experiment248.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment248/experiment248.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment248/experiment248.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment248/experiment248.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment249/experiment249.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment249/experiment249.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment249/experiment249.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment249/experiment249.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment25/experiment25.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment25/experiment25.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment25/experiment25.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment25/experiment25.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment250/experiment250.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment250/experiment250.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment250/experiment250.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment250/experiment250.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment251/experiment251.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment251/experiment251.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment251/experiment251.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment251/experiment251.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment252/experiment252.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment252/experiment252.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment252/experiment252.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment252/experiment252.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment253/experiment253.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment253/experiment253.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment253/experiment253.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment253/experiment253.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment254/experiment254.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment254/experiment254.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment254/experiment254.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment254/experiment254.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment255/experiment255.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment255/experiment255.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment255/experiment255.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment255/experiment255.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment256/experiment256.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment256/experiment256.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment256/experiment256.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment256/experiment256.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment257/experiment257.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment257/experiment257.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment257/experiment257.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment257/experiment257.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment258/experiment258.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment258/experiment258.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment258/experiment258.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment258/experiment258.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment259/experiment259.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment259/experiment259.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment259/experiment259.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment259/experiment259.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment26/experiment26.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment26/experiment26.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment26/experiment26.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment26/experiment26.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment260/experiment260.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment260/experiment260.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment260/experiment260.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment260/experiment260.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment261/experiment261.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment261/experiment261.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment261/experiment261.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment261/experiment261.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment262/experiment262.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment262/experiment262.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment262/experiment262.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment262/experiment262.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment263/experiment263.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment263/experiment263.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment263/experiment263.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment263/experiment263.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment264/experiment264.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment264/experiment264.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment264/experiment264.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment264/experiment264.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment265/experiment265.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment265/experiment265.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment265/experiment265.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment265/experiment265.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment266/experiment266.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment266/experiment266.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment266/experiment266.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment266/experiment266.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment267/experiment267.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment267/experiment267.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment267/experiment267.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment267/experiment267.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment268/experiment268.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment268/experiment268.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment268/experiment268.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment268/experiment268.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment269/experiment269.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment269/experiment269.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment269/experiment269.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment269/experiment269.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment27/experiment27.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment27/experiment27.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment27/experiment27.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment27/experiment27.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment270/experiment270.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment270/experiment270.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment270/experiment270.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment270/experiment270.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment271/experiment271.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment271/experiment271.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment271/experiment271.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment271/experiment271.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment272/experiment272.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment272/experiment272.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment272/experiment272.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment272/experiment272.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment273/experiment273.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment273/experiment273.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment273/experiment273.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment273/experiment273.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment274/experiment274.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment274/experiment274.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment274/experiment274.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment274/experiment274.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment275/experiment275.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment275/experiment275.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment275/experiment275.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment275/experiment275.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment276/experiment276.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment276/experiment276.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment276/experiment276.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment276/experiment276.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment277/experiment277.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment277/experiment277.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment277/experiment277.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment277/experiment277.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment278/experiment278.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment278/experiment278.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment278/experiment278.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment278/experiment278.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment279/experiment279.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment279/experiment279.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment279/experiment279.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment279/experiment279.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment28/experiment28.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment28/experiment28.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment28/experiment28.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment28/experiment28.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment280/experiment280.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment280/experiment280.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment280/experiment280.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment280/experiment280.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment281/experiment281.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment281/experiment281.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment281/experiment281.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment281/experiment281.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment282/experiment282.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment282/experiment282.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment282/experiment282.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment282/experiment282.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment283/experiment283.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment283/experiment283.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment283/experiment283.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment283/experiment283.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment284/experiment284.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment284/experiment284.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment284/experiment284.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment284/experiment284.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment285/experiment285.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment285/experiment285.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment285/experiment285.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment285/experiment285.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment286/experiment286.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment286/experiment286.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment286/experiment286.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment286/experiment286.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment287/experiment287.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment287/experiment287.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment287/experiment287.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment287/experiment287.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment288/experiment288.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment288/experiment288.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment288/experiment288.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment288/experiment288.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment289/experiment289.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment289/experiment289.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment289/experiment289.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment289/experiment289.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment29/experiment29.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment29/experiment29.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment29/experiment29.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment29/experiment29.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment290/experiment290.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment290/experiment290.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment290/experiment290.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment290/experiment290.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment291/experiment291.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment291/experiment291.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment291/experiment291.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment291/experiment291.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment292/experiment292.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment292/experiment292.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment292/experiment292.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment292/experiment292.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment293/experiment293.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment293/experiment293.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment293/experiment293.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment293/experiment293.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment294/experiment294.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment294/experiment294.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment294/experiment294.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment294/experiment294.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment295/experiment295.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment295/experiment295.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment295/experiment295.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment295/experiment295.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment296/experiment296.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment296/experiment296.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment296/experiment296.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment296/experiment296.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment297/experiment297.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment297/experiment297.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment297/experiment297.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment297/experiment297.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment298/experiment298.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment298/experiment298.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment298/experiment298.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment298/experiment298.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment299/experiment299.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment299/experiment299.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment299/experiment299.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment299/experiment299.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment3/experiment3.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment3/experiment3.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment3/experiment3.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment3/experiment3.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment30/experiment30.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment30/experiment30.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment30/experiment30.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment30/experiment30.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment300/experiment300.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment300/experiment300.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment300/experiment300.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment300/experiment300.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment301/experiment301.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment301/experiment301.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment301/experiment301.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment301/experiment301.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment302/experiment302.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment302/experiment302.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment302/experiment302.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment302/experiment302.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment303/experiment303.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment303/experiment303.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment303/experiment303.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment303/experiment303.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment304/experiment304.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment304/experiment304.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment304/experiment304.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment304/experiment304.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment305/experiment305.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment305/experiment305.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment305/experiment305.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment305/experiment305.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment306/experiment306.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment306/experiment306.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment306/experiment306.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment306/experiment306.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment307/experiment307.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment307/experiment307.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment307/experiment307.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment307/experiment307.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment308/experiment308.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment308/experiment308.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment308/experiment308.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment308/experiment308.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment309/experiment309.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment309/experiment309.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment309/experiment309.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment309/experiment309.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment31/experiment31.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment31/experiment31.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment31/experiment31.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment31/experiment31.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment310/experiment310.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment310/experiment310.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment310/experiment310.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment310/experiment310.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment311/experiment311.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment311/experiment311.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment311/experiment311.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment311/experiment311.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment312/experiment312.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment312/experiment312.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment312/experiment312.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment312/experiment312.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment313/experiment313.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment313/experiment313.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment313/experiment313.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment313/experiment313.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment314/experiment314.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment314/experiment314.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment314/experiment314.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment314/experiment314.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment315/experiment315.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment315/experiment315.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment315/experiment315.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment315/experiment315.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment316/experiment316.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment316/experiment316.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment316/experiment316.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment316/experiment316.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment317/experiment317.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment317/experiment317.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment317/experiment317.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment317/experiment317.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment318/experiment318.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment318/experiment318.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment318/experiment318.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment318/experiment318.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment319/experiment319.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment319/experiment319.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment319/experiment319.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment319/experiment319.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment32/experiment32.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment32/experiment32.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment32/experiment32.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment32/experiment32.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment320/experiment320.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment320/experiment320.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment320/experiment320.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment320/experiment320.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment321/experiment321.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment321/experiment321.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment321/experiment321.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment321/experiment321.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment322/experiment322.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment322/experiment322.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment322/experiment322.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment322/experiment322.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment323/experiment323.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment323/experiment323.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment323/experiment323.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment323/experiment323.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment324/experiment324.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment324/experiment324.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment324/experiment324.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment324/experiment324.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment325/experiment325.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment325/experiment325.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment325/experiment325.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment325/experiment325.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment326/experiment326.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment326/experiment326.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment326/experiment326.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment326/experiment326.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment327/experiment327.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment327/experiment327.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment327/experiment327.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment327/experiment327.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment328/experiment328.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment328/experiment328.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment328/experiment328.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment328/experiment328.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment329/experiment329.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment329/experiment329.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment329/experiment329.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment329/experiment329.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment33/experiment33.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment33/experiment33.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment33/experiment33.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment33/experiment33.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment330/experiment330.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment330/experiment330.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment330/experiment330.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment330/experiment330.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment331/experiment331.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment331/experiment331.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment331/experiment331.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment331/experiment331.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment332/experiment332.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment332/experiment332.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment332/experiment332.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment332/experiment332.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment333/experiment333.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment333/experiment333.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment333/experiment333.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment333/experiment333.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment334/experiment334.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment334/experiment334.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment334/experiment334.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment334/experiment334.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment335/experiment335.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment335/experiment335.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment335/experiment335.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment335/experiment335.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment336/experiment336.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment337/experiment337.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment338/experiment338.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment339/experiment339.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment34/experiment34.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment340/experiment340.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment341/experiment341.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment342/experiment342.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment343/experiment343.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment344/experiment344.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment345/experiment345.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment346/experiment346.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment347/experiment347.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment348/experiment348.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment349/experiment349.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment35/experiment35.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment350/experiment350.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment351/experiment351.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment352/experiment352.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment353/experiment353.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment354/experiment354.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment355/experiment355.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment356/experiment356.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment357/experiment357.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment358/experiment358.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment359/experiment359.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment36/experiment36.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment360/experiment360.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment361/experiment361.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment362/experiment362.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment363/experiment363.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment364/experiment364.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment365/experiment365.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment366/experiment366.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment367/experiment367.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment368/experiment368.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment369/experiment369.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment37/experiment37.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment370/experiment370.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment371/experiment371.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment372/experiment372.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment373/experiment373.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment374/experiment374.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment375/experiment375.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment376/experiment376.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment377/experiment377.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment378/experiment378.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment379/experiment379.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment38/experiment38.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment380/experiment380.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment381/experiment381.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment382/experiment382.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment383/experiment383.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment384/experiment384.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment385/experiment385.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment386/experiment386.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment387/experiment387.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment388/experiment388.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment389/experiment389.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment39/experiment39.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment390/experiment390.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment391/experiment391.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment392/experiment392.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment393/experiment393.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment394/experiment394.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment395/experiment395.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment396/experiment396.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment397/experiment397.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment398/experiment398.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment399/experiment399.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment4/experiment4.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment40/experiment40.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment400/experiment400.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment401/experiment401.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment402/experiment402.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment403/experiment403.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment404/experiment404.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment405/experiment405.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment406/experiment406.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment407/experiment407.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment408/experiment408.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment409/experiment409.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment41/experiment41.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment410/experiment410.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment411/experiment411.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment412/experiment412.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment413/experiment413.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment414/experiment414.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment415/experiment415.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment416/experiment416.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment417/experiment417.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment418/experiment418.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment419/experiment419.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment42/experiment42.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment420/experiment420.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment421/experiment421.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment422/experiment422.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment423/experiment423.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment424/experiment424.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment425/experiment425.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment426/experiment426.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment427/experiment427.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment428/experiment428.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment429/experiment429.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment43/experiment43.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment430/experiment430.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment431/experiment431.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment432/experiment432.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment433/experiment433.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment434/experiment434.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment435/experiment435.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment436/experiment436.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment437/experiment437.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment438/experiment438.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment439/experiment439.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment44/experiment44.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment440/experiment440.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment441/experiment441.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment442/experiment442.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment443/experiment443.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment444/experiment444.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment445/experiment445.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment446/experiment446.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment447/experiment447.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment448/experiment448.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment449/experiment449.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment45/experiment45.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment450/experiment450.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment451/experiment451.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment452/experiment452.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment453/experiment453.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment454/experiment454.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment455/experiment455.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment456/experiment456.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment457/experiment457.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment458/experiment458.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment459/experiment459.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment46/experiment46.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment460/experiment460.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment461/experiment461.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment462/experiment462.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment463/experiment463.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment464/experiment464.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment465/experiment465.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment466/experiment466.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment467/experiment467.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment468/experiment468.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment469/experiment469.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment47/experiment47.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment470/experiment470.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment471/experiment471.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment472/experiment472.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment473/experiment473.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment474/experiment474.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment475/experiment475.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment476/experiment476.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment477/experiment477.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment478/experiment478.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment479/experiment479.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment48/experiment48.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment480/experiment480.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment481/experiment481.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment482/experiment482.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment483/experiment483.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment484/experiment484.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment485/experiment485.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment486/experiment486.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment487/experiment487.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment488/experiment488.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment489/experiment489.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment49/experiment49.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment490/experiment490.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment491/experiment491.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment492/experiment492.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment493/experiment493.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment494/experiment494.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment495/experiment495.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment496/experiment496.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment497/experiment497.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment498/experiment498.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment499/experiment499.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment5/experiment5.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment50/experiment50.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment500/experiment500.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment501/experiment501.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment502/experiment502.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment503/experiment503.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment504/experiment504.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment505/experiment505.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment506/experiment506.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment507/experiment507.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment508/experiment508.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment509/experiment509.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment51/experiment51.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment510/experiment510.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment511/experiment511.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment512/experiment512.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment513/experiment513.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment514/experiment514.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment515/experiment515.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment516/experiment516.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment517/experiment517.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment518/experiment518.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment519/experiment519.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment52/experiment52.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment520/experiment520.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment521/experiment521.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment522/experiment522.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment523/experiment523.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment524/experiment524.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment525/experiment525.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment526/experiment526.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment527/experiment527.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment528/experiment528.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment529/experiment529.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment53/experiment53.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment530/experiment530.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment531/experiment531.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment532/experiment532.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment533/experiment533.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment534/experiment534.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment535/experiment535.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment536/experiment536.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment537/experiment537.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment538/experiment538.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment539/experiment539.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment54/experiment54.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment540/experiment540.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment541/experiment541.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment542/experiment542.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment543/experiment543.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment544/experiment544.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment545/experiment545.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment546/experiment546.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment547/experiment547.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment548/experiment548.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment549/experiment549.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment55/experiment55.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment550/experiment550.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment551/experiment551.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment552/experiment552.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment553/experiment553.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment554/experiment554.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment555/experiment555.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment556/experiment556.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment557/experiment557.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment558/experiment558.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment559/experiment559.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment56/experiment56.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment560/experiment560.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment561/experiment561.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment562/experiment562.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment563/experiment563.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment564/experiment564.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment565/experiment565.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment566/experiment566.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment567/experiment567.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment568/experiment568.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment569/experiment569.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment57/experiment57.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment570/experiment570.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment571/experiment571.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment572/experiment572.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment573/experiment573.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment574/experiment574.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment575/experiment575.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment576/experiment576.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment577/experiment577.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment578/experiment578.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment579/experiment579.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment58/experiment58.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment580/experiment580.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment581/experiment581.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment582/experiment582.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment583/experiment583.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment584/experiment584.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment585/experiment585.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment586/experiment586.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment587/experiment587.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment588/experiment588.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment589/experiment589.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment59/experiment59.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment590/experiment590.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment591/experiment591.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment592/experiment592.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment593/experiment593.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment594/experiment594.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment595/experiment595.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment596/experiment596.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment597/experiment597.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment598/experiment598.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment599/experiment599.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment6/experiment6.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment60/experiment60.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment600/experiment600.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment601/experiment601.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment602/experiment602.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment603/experiment603.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment604/experiment604.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment605/experiment605.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment606/experiment606.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment607/experiment607.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment608/experiment608.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment609/experiment609.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment61/experiment61.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment610/experiment610.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment611/experiment611.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment612/experiment612.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment613/experiment613.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment614/experiment614.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment615/experiment615.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment616/experiment616.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment617/experiment617.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment618/experiment618.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment619/experiment619.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment62/experiment62.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment620/experiment620.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment621/experiment621.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment622/experiment622.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment623/experiment623.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment624/experiment624.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment625/experiment625.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment626/experiment626.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment627/experiment627.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment628/experiment628.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment629/experiment629.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment63/experiment63.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment630/experiment630.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment631/experiment631.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment632/experiment632.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment633/experiment633.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment634/experiment634.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment635/experiment635.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment636/experiment636.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment637/experiment637.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment638/experiment638.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment639/experiment639.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment64/experiment64.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment640/experiment640.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment641/experiment641.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment642/experiment642.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment643/experiment643.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment644/experiment644.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment645/experiment645.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment646/experiment646.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment647/experiment647.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment648/experiment648.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment649/experiment649.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment65/experiment65.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment650/experiment650.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment651/experiment651.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment652/experiment652.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment653/experiment653.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment654/experiment654.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment655/experiment655.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment656/experiment656.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment657/experiment657.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment658/experiment658.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment659/experiment659.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment66/experiment66.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment660/experiment660.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment661/experiment661.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment662/experiment662.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment663/experiment663.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment664/experiment664.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment665/experiment665.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment666/experiment666.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment667/experiment667.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment668/experiment668.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment669/experiment669.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment67/experiment67.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment670/experiment670.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment671/experiment671.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment672/experiment672.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment673/experiment673.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment674/experiment674.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment675/experiment675.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment676/experiment676.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment677/experiment677.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment678/experiment678.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment679/experiment679.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment68/experiment68.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment680/experiment680.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment681/experiment681.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment682/experiment682.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment683/experiment683.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment684/experiment684.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment685/experiment685.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment686/experiment686.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment687/experiment687.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment688/experiment688.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment689/experiment689.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment69/experiment69.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment690/experiment690.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment691/experiment691.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment692/experiment692.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment693/experiment693.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment694/experiment694.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment695/experiment695.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment696/experiment696.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment697/experiment697.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment698/experiment698.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment699/experiment699.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment7/experiment7.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment70/experiment70.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment700/experiment700.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment701/experiment701.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment702/experiment702.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment703/experiment703.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment704/experiment704.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment705/experiment705.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment706/experiment706.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment707/experiment707.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment708/experiment708.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment709/experiment709.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment71/experiment71.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment710/experiment710.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment711/experiment711.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment712/experiment712.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment713/experiment713.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment714/experiment714.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment715/experiment715.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment716/experiment716.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment717/experiment717.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment718/experiment718.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment719/experiment719.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment72/experiment72.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment720/experiment720.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment721/experiment721.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment722/experiment722.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment723/experiment723.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment724/experiment724.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment725/experiment725.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment726/experiment726.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment727/experiment727.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment728/experiment728.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment729/experiment729.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment73/experiment73.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment730/experiment730.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment731/experiment731.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment732/experiment732.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment733/experiment733.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment734/experiment734.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment735/experiment735.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment736/experiment736.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment737/experiment737.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment738/experiment738.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment739/experiment739.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment74/experiment74.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment740/experiment740.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment741/experiment741.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment742/experiment742.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment743/experiment743.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment744/experiment744.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment745/experiment745.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment746/experiment746.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment747/experiment747.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment748/experiment748.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment749/experiment749.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment75/experiment75.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment750/experiment750.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment751/experiment751.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment752/experiment752.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment753/experiment753.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment754/experiment754.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment755/experiment755.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment756/experiment756.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment757/experiment757.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment758/experiment758.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment759/experiment759.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment76/experiment76.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment760/experiment760.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment761/experiment761.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment762/experiment762.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment763/experiment763.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment764/experiment764.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment765/experiment765.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment766/experiment766.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment767/experiment767.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment768/experiment768.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment769/experiment769.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment77/experiment77.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment770/experiment770.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment771/experiment771.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment772/experiment772.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment773/experiment773.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment774/experiment774.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment775/experiment775.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment776/experiment776.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment777/experiment777.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment778/experiment778.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment779/experiment779.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment78/experiment78.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment780/experiment780.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment781/experiment781.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment782/experiment782.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment783/experiment783.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment784/experiment784.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment785/experiment785.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment786/experiment786.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment787/experiment787.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment788/experiment788.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment789/experiment789.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment79/experiment79.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment790/experiment790.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment791/experiment791.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment792/experiment792.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment793/experiment793.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment794/experiment794.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment795/experiment795.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment796/experiment796.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment797/experiment797.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment798/experiment798.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment799/experiment799.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment8/experiment8.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment80/experiment80.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment800/experiment800.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment801/experiment801.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment802/experiment802.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment803/experiment803.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment804/experiment804.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment805/experiment805.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment806/experiment806.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment807/experiment807.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment808/experiment808.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment809/experiment809.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment81/experiment81.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment810/experiment810.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment811/experiment811.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment812/experiment812.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment813/experiment813.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment814/experiment814.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment815/experiment815.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment816/experiment816.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment817/experiment817.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment818/experiment818.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment819/experiment819.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment82/experiment82.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment820/experiment820.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment821/experiment821.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment822/experiment822.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment823/experiment823.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment824/experiment824.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment825/experiment825.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment826/experiment826.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment827/experiment827.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment828/experiment828.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment829/experiment829.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment83/experiment83.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment830/experiment830.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment831/experiment831.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment832/experiment832.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment833/experiment833.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment834/experiment834.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment835/experiment835.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment836/experiment836.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment837/experiment837.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment838/experiment838.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment839/experiment839.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment84/experiment84.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment840/experiment840.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment841/experiment841.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment842/experiment842.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment843/experiment843.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment844/experiment844.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment845/experiment845.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment846/experiment846.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment847/experiment847.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment848/experiment848.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment849/experiment849.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment85/experiment85.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment850/experiment850.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment851/experiment851.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment852/experiment852.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment853/experiment853.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment854/experiment854.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment855/experiment855.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment856/experiment856.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment857/experiment857.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment858/experiment858.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment859/experiment859.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment86/experiment86.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment860/experiment860.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment861/experiment861.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment862/experiment862.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment863/experiment863.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment864/experiment864.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment865/experiment865.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment866/experiment866.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment867/experiment867.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment868/experiment868.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment869/experiment869.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment87/experiment87.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment870/experiment870.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment871/experiment871.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment872/experiment872.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment873/experiment873.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment874/experiment874.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment875/experiment875.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment876/experiment876.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment877/experiment877.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment878/experiment878.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment879/experiment879.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment88/experiment88.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment880/experiment880.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment881/experiment881.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment882/experiment882.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment883/experiment883.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment884/experiment884.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment885/experiment885.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment886/experiment886.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment887/experiment887.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment888/experiment888.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment889/experiment889.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment89/experiment89.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment890/experiment890.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment891/experiment891.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment892/experiment892.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment893/experiment893.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment894/experiment894.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment895/experiment895.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment896/experiment896.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment897/experiment897.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment898/experiment898.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment899/experiment899.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment9/experiment9.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment90/experiment90.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment900/experiment900.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment901/experiment901.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment902/experiment902.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment903/experiment903.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment904/experiment904.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment905/experiment905.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment906/experiment906.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment907/experiment907.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment908/experiment908.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment909/experiment909.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment91/experiment91.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment910/experiment910.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment911/experiment911.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment912/experiment912.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment913/experiment913.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment914/experiment914.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment915/experiment915.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment916/experiment916.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment917/experiment917.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment918/experiment918.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment919/experiment919.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment92/experiment92.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment920/experiment920.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment921/experiment921.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment922/experiment922.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment923/experiment923.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment924/experiment924.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment925/experiment925.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment926/experiment926.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment927/experiment927.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment928/experiment928.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment929/experiment929.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment93/experiment93.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment930/experiment930.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment931/experiment931.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment932/experiment932.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment933/experiment933.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment934/experiment934.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment935/experiment935.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment936/experiment936.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment937/experiment937.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment938/experiment938.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment939/experiment939.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment94/experiment94.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment940/experiment940.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment941/experiment941.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment942/experiment942.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment943/experiment943.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment944/experiment944.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment945/experiment945.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment946/experiment946.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment947/experiment947.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment948/experiment948.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment949/experiment949.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment95/experiment95.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment950/experiment950.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment951/experiment951.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment952/experiment952.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment953/experiment953.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment954/experiment954.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment955/experiment955.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment956/experiment956.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment957/experiment957.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment958/experiment958.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment959/experiment959.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment96/experiment96.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment960/experiment960.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment961/experiment961.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment962/experiment962.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment963/experiment963.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment964/experiment964.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment965/experiment965.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment966/experiment966.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment967/experiment967.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment968/experiment968.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment969/experiment969.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment97/experiment97.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment970/experiment970.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment971/experiment971.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment972/experiment972.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment973/experiment973.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment974/experiment974.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment975/experiment975.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment976/experiment976.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment977/experiment977.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment978/experiment978.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment979/experiment979.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment98/experiment98.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment980/experiment980.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment981/experiment981.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment982/experiment982.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment983/experiment983.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment984/experiment984.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment985/experiment985.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment986/experiment986.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment987/experiment987.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment988/experiment988.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment989/experiment989.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment99/experiment99.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment990/experiment990.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment991/experiment991.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment992/experiment992.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment993/experiment993.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment994/experiment994.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment995/experiment995.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment996/experiment996.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment997/experiment997.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment998/experiment998.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.html
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.sass
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/experiment/experiment999/experiment999.component.ts
 delete mode 100644 experimental/angular/angular911/src/app/item.service.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/item.service.ts
 delete mode 100644 experimental/angular/angular911/src/app/item.spec.ts
 delete mode 100644 experimental/angular/angular911/src/app/item.ts
 delete mode 100644 experimental/angular/angular911/src/app/material/material.module.ts
 delete mode 100644 experimental/angular/angular911/src/assets/.gitkeep
 delete mode 100644 experimental/angular/angular911/src/assets/generate-component.txt
 delete mode 100644 experimental/angular/angular911/src/assets/json/item/1.json
 delete mode 100644 experimental/angular/angular911/src/assets/json/item/2.json
 delete mode 100644 experimental/angular/angular911/src/assets/json/item/3.json
 delete mode 100644 experimental/angular/angular911/src/assets/json/item/4.json
 delete mode 100644 experimental/angular/angular911/src/assets/json/item/5.json
 delete mode 100644 experimental/angular/angular911/src/assets/json/items.json
 delete mode 100644 experimental/angular/angular911/src/custom-theme.scss
 delete mode 100644 experimental/angular/angular911/src/environments/environment.prod.ts
 delete mode 100644 experimental/angular/angular911/src/environments/environment.ts
 delete mode 100644 experimental/angular/angular911/src/favicon.ico
 delete mode 100644 experimental/angular/angular911/src/index.html
 delete mode 100644 experimental/angular/angular911/src/main.ts
 delete mode 100644 experimental/angular/angular911/src/polyfills.ts
 delete mode 100644 experimental/angular/angular911/src/styles.sass
 delete mode 100644 experimental/angular/angular911/src/test.ts
 delete mode 100644 experimental/angular/angular911/tsconfig.app.json
 delete mode 100644 experimental/angular/angular911/tsconfig.json
 delete mode 100644 experimental/angular/angular911/tsconfig.spec.json
 delete mode 100644 experimental/angular/angular911/tslint.json
 delete mode 100644 experimental/angular/angular911/yarn.lock
 delete mode 100644 experimental/cpp17/.gitignore
 delete mode 100644 experimental/cpp17/CMakeLists.txt
 delete mode 100644 experimental/cpp17/main.cpp
 delete mode 100644 experimental/dotnet/Amarillo/Amarillo.sln
 delete mode 100644 experimental/dotnet/Buffy/Buffy.sln
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/.gitignore
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/BuffySpa.csproj
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/.editorconfig
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/.gitignore
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/README.md
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/angular.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/e2e/tsconfig.e2e.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/package-lock.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/package.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.component.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/app.server.module.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.spec.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/counter/counter.component.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/fetch-data/fetch-data.component.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/fetch-data/fetch-data.component.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/home/home.component.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/home/home.component.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.css
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/app/nav-menu/nav-menu.component.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/browserslist
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/index.html
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/karma.conf.js
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/main.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/polyfills.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/styles.css
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/test.ts
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.app.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.server.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/src/tslint.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/tsconfig.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/ClientApp/tslint.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Controllers/WeatherForecastController.cs
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Pages/Error.cshtml
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Pages/Error.cshtml.cs
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Pages/_ViewImports.cshtml
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Program.cs
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/Startup.cs
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/WeatherForecast.cs
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/appsettings.Development.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/appsettings.json
 delete mode 100644 experimental/dotnet/Buffy/BuffySpa/wwwroot/favicon.ico
 delete mode 100644 experimental/dotnet/ConsoleApp1/ConsoleApp1.sln
 delete mode 100644 experimental/dotnet/ConsoleApp1/ConsoleApp1/ConsoleApp1.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/ConsoleApp1/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/Database1/Database1.sqlproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/Database1/Person.sql
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/Controllers/ValuesController.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/Startup.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/WebApplication1.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/appsettings.Development.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication1/appsettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Controllers/HomeController.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Models/Book.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Models/ErrorViewModel.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Models/Publisher.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Startup.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Home/Index.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Home/Privacy.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/Error.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_CookieConsentPartial.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_Layout.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/Shared/_ValidationScriptsPartial.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/_ViewImports.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/Views/_ViewStart.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/WebApplication2.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/appsettings.Development.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/appsettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/css/site.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/favicon.ico
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/js/site.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/LICENSE
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.min.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-grid.min.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.min.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap-reboot.min.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.min.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/css/bootstrap.min.css.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.js.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.bundle.min.js.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.js.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/bootstrap/dist/js/bootstrap.min.js.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/LICENSE.txt
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation-unobtrusive/jquery.validate.unobtrusive.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/LICENSE.md
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/additional-methods.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/additional-methods.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/jquery.validate.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery-validation/dist/jquery.validate.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/LICENSE.txt
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.min.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication2/wwwroot/lib/jquery/dist/jquery.min.map
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/.gitignore
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/.editorconfig
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/.gitignore
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/README.md
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/angular.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/e2e/tsconfig.e2e.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/package-lock.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/package.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/app.server.module.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.spec.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/counter/counter.component.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/fetch-data/fetch-data.component.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/fetch-data/fetch-data.component.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/home/home.component.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/home/home.component.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/app/nav-menu/nav-menu.component.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/browserslist
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/index.html
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/karma.conf.js
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/main.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/polyfills.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/styles.css
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/test.ts
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.app.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.server.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/src/tslint.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/tsconfig.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/ClientApp/tslint.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Controllers/SampleDataController.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Pages/Error.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Pages/Error.cshtml.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Pages/_ViewImports.cshtml
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/Startup.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/WebApplication3.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/appsettings.Development.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/appsettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication3/wwwroot/favicon.ico
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/Controllers/ValuesController.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/Models/MyContact.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/README.md
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/Startup.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/WebApplication4.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/appsettings.Development.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication4/appsettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/Controllers/ValuesController.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/Program.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/Startup.cs
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/WebApplication5.csproj
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/appsettings.Development.json
 delete mode 100644 experimental/dotnet/ConsoleApp1/WebApplication5/appsettings.json
 delete mode 100644 experimental/dotnet/Daegu/.gitignore
 delete mode 100644 experimental/dotnet/Daegu/.vscode/launch.json
 delete mode 100644 experimental/dotnet/Daegu/.vscode/tasks.json
 delete mode 100644 experimental/dotnet/Daegu/Daegu.sln
 delete mode 100644 experimental/dotnet/Daegu/Daegu/Daegu.csproj
 delete mode 100644 experimental/dotnet/Daegu/Daegu/DiverseString.cs
 delete mode 100644 experimental/dotnet/Daegu/Daegu/MinimumCoin.cs
 delete mode 100644 experimental/dotnet/Daegu/Daegu/Program.cs
 delete mode 100644 experimental/dotnet/Daegu/DaeguTests/DaeguTests.csproj
 delete mode 100644 experimental/dotnet/Daegu/DaeguTests/DiverseStringTests.cs
 delete mode 100644 experimental/dotnet/Daegu/DaeguTests/MinimumCoinTests.cs
 delete mode 100644 experimental/dotnet/Daegu/buildlog.txt
 delete mode 100644 experimental/dotnet/Daejeon/.vscode/launch.json
 delete mode 100644 experimental/dotnet/Daejeon/Daejeon.sln
 delete mode 100644 experimental/dotnet/Daejeon/DapperConsole/DapperConsole.csproj
 delete mode 100644 experimental/dotnet/Daejeon/DapperConsole/Program.cs
 delete mode 100644 experimental/dotnet/Danube/ConsoleApp1/ConsoleApp1.csproj
 delete mode 100644 experimental/dotnet/Danube/ConsoleApp1/Program.cs
 delete mode 100644 experimental/dotnet/Danube/Danube.sln
 delete mode 100644 experimental/dotnet/Noir/.vscode/launch.json
 delete mode 100644 experimental/dotnet/Noir/API/API.csproj
 delete mode 100644 experimental/dotnet/Noir/API/Controllers/BlogsController.cs
 delete mode 100644 experimental/dotnet/Noir/API/Controllers/ValuesController.cs
 delete mode 100644 experimental/dotnet/Noir/API/Migrations/20190802044053_InitialCreate.Designer.cs
 delete mode 100644 experimental/dotnet/Noir/API/Migrations/20190802044053_InitialCreate.cs
 delete mode 100644 experimental/dotnet/Noir/API/Migrations/BloggingContextModelSnapshot.cs
 delete mode 100644 experimental/dotnet/Noir/API/Models/Model.cs
 delete mode 100644 experimental/dotnet/Noir/API/Models/User.cs
 delete mode 100644 experimental/dotnet/Noir/API/Program.cs
 delete mode 100644 experimental/dotnet/Noir/API/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/Noir/API/Startup.cs
 delete mode 100644 experimental/dotnet/Noir/API/Views/Blogs/Create.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/Views/Blogs/Delete.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/Views/Blogs/Details.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/Views/Blogs/Edit.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/Views/Blogs/Index.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/Views/Shared/_ValidationScriptsPartial.cshtml
 delete mode 100644 experimental/dotnet/Noir/API/appsettings.Development.json
 delete mode 100644 experimental/dotnet/Noir/API/appsettings.json
 delete mode 100644 experimental/dotnet/Noir/API/blogging.db
 delete mode 100644 experimental/dotnet/Noir/Noir.sln
 delete mode 100644 experimental/dotnet/Noir/UI/.editorconfig
 delete mode 100644 experimental/dotnet/Noir/UI/.gitignore
 delete mode 100644 experimental/dotnet/Noir/UI/README.md
 delete mode 100644 experimental/dotnet/Noir/UI/angular.json
 delete mode 100644 experimental/dotnet/Noir/UI/browserslist
 delete mode 100644 experimental/dotnet/Noir/UI/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/Noir/UI/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/Noir/UI/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/Noir/UI/e2e/tsconfig.json
 delete mode 100644 experimental/dotnet/Noir/UI/karma.conf.js
 delete mode 100644 experimental/dotnet/Noir/UI/package.json
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app-routing.module.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app.component.html
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app.component.sass
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app.component.spec.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/user.service.spec.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/user.service.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/user.spec.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/user.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/username/username.component.html
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/username/username.component.sass
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/username/username.component.spec.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/app/username/username.component.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/Noir/UI/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/favicon.ico
 delete mode 100644 experimental/dotnet/Noir/UI/src/index.html
 delete mode 100644 experimental/dotnet/Noir/UI/src/main.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/polyfills.ts
 delete mode 100644 experimental/dotnet/Noir/UI/src/styles.sass
 delete mode 100644 experimental/dotnet/Noir/UI/src/test.ts
 delete mode 100644 experimental/dotnet/Noir/UI/tsconfig.app.json
 delete mode 100644 experimental/dotnet/Noir/UI/tsconfig.json
 delete mode 100644 experimental/dotnet/Noir/UI/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/Noir/UI/tslint.json
 delete mode 100644 experimental/dotnet/Noir/UI/yarn.lock
 delete mode 100644 experimental/dotnet/Openroom/Openroom.Console/Openroom.Console.sln
 delete mode 100644 experimental/dotnet/Openroom/Openroom.Console/Openroom.Console/Openroom.Console.csproj
 delete mode 100644 experimental/dotnet/Openroom/Openroom.Console/Openroom.Console/Program.cs
 delete mode 100644 experimental/dotnet/Seongnam/.gitignore
 delete mode 100644 experimental/dotnet/Seongnam/Seongnam.sln
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/Controllers/WeatherForecastController.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/Program.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/SeongnamAPI.csproj
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/Startup.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/WeatherForecast.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/appsettings.Development.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamAPI/appsettings.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamBL/Class1.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamBL/SeongnamBL.csproj
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamConsole/Program.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamConsole/SeongnamConsole.csproj
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamDAL/Class1.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamDAL/SeongnamDAL.csproj
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamTest/SeongnamTest.csproj
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamTest/UnitTest1.cs
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/.editorconfig
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/.gitignore
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/README.md
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/angular.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/browserslist
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/e2e/tsconfig.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/karma.conf.js
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/package.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app-routing.module.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.html
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.sass
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.spec.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/favicon.ico
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/index.html
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/main.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/polyfills.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/styles.sass
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/src/test.ts
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/tsconfig.app.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/tsconfig.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/tslint.json
 delete mode 100644 experimental/dotnet/Seongnam/SeongnamUI/yarn.lock
 delete mode 100644 experimental/dotnet/Seoul/.gitignore
 delete mode 100644 experimental/dotnet/Seoul/.vscode/launch.json
 delete mode 100644 experimental/dotnet/Seoul/.vscode/tasks.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/.editorconfig
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/.gitignore
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/README.md
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/angular.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/browserslist
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/e2e/tsconfig.e2e.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/package-lock.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/package.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/app.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/app.server.module.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.spec.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/counter/counter.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.css
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.spec.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-client-detail/fetch-client-detail.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-data/fetch-data.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/fetch-data/fetch-data.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/filter-unique.pipe.spec.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/filter-unique.pipe.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/home/home.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/home/home.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.css
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/app/nav-menu/nav-menu.component.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/assets/clientdata.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/index.html
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/karma.conf.js
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/main.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/polyfills.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/styles.css
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/test.ts
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/tsconfig.app.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/tsconfig.server.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/src/tslint.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/tsconfig.json
 delete mode 100644 experimental/dotnet/Seoul/ClientApp/tslint.json
 delete mode 100644 experimental/dotnet/Seoul/ClientDetail.cs
 delete mode 100644 experimental/dotnet/Seoul/Controllers/ClientDetailController.cs
 delete mode 100644 experimental/dotnet/Seoul/Controllers/WeatherForecastController.cs
 delete mode 100644 experimental/dotnet/Seoul/Pages/Error.cshtml
 delete mode 100644 experimental/dotnet/Seoul/Pages/Error.cshtml.cs
 delete mode 100644 experimental/dotnet/Seoul/Pages/_ViewImports.cshtml
 delete mode 100644 experimental/dotnet/Seoul/Program.cs
 delete mode 100644 experimental/dotnet/Seoul/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/Seoul/Seoul.csproj
 delete mode 100644 experimental/dotnet/Seoul/Seoul.sln
 delete mode 100644 experimental/dotnet/Seoul/Startup.cs
 delete mode 100644 experimental/dotnet/Seoul/WeatherForecast.cs
 delete mode 100644 experimental/dotnet/Seoul/appsettings.Development.json
 delete mode 100644 experimental/dotnet/Seoul/appsettings.json
 delete mode 100644 experimental/dotnet/Seoul/wwwroot/favicon.ico
 delete mode 100644 experimental/dotnet/Sokcho/.vscode/launch.json
 delete mode 100644 experimental/dotnet/Sokcho/.vscode/tasks.json
 delete mode 100644 experimental/dotnet/Sokcho/README.md
 delete mode 100644 experimental/dotnet/Sokcho/Sokcho.sln
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/App.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/Counter.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/FetchData.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Pages/Index.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Program.cs
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/MainLayout.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/NavMenu.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Shared/SurveyPrompt.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/SokchoBlazorWasm.csproj
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/Startup.cs
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/_Imports.razor
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/bootstrap/bootstrap.min.css
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/bootstrap/bootstrap.min.css.map
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/FONT-LICENSE
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/ICON-LICENSE
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/README.md
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/css/open-iconic-bootstrap.min.css
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.eot
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.otf
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.svg
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.ttf
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/open-iconic/font/fonts/open-iconic.woff
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/css/site.css
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/index.html
 delete mode 100644 experimental/dotnet/Sokcho/SokchoBlazorWasm/wwwroot/sample-data/weather.json
 delete mode 100644 experimental/dotnet/Sokcho/buildlog.txt
 delete mode 100644 experimental/dotnet/Sokcho/runlog.txt
 delete mode 100644 experimental/dotnet/elitehacker/Program.cs
 delete mode 100644 experimental/dotnet/elitehacker/elitehacker.csproj
 delete mode 100644 experimental/dotnet/hubcap/hubcap-console/Program.cs
 delete mode 100644 experimental/dotnet/hubcap/hubcap-console/hubcap-console.csproj
 delete mode 100644 experimental/dotnet/hubcap/hubcap.sln
 delete mode 100644 experimental/dotnet/pyeongtaek/.gitignore
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaek.sln
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaekclasslib/Class1.cs
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaekclasslib/pyeongtaekclasslib.csproj
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaekconsole/Program.cs
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaekconsole/pyeongtaekconsole.csproj
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaektests/UnitTest1.cs
 delete mode 100644 experimental/dotnet/pyeongtaek/pyeongtaektests/pyeongtaektests.csproj
 delete mode 100644 experimental/dotnet/wonju/.gitignore
 delete mode 100644 experimental/dotnet/wonju/.vscode/launch.json
 delete mode 100644 experimental/dotnet/wonju/.vscode/tasks.json
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/Controllers/WeatherForecastController.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/Program.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/Properties/launchSettings.json
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/Startup.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/WeatherForecast.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/WonjuAPI.csproj
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/appsettings.Development.json
 delete mode 100644 experimental/dotnet/wonju/WonjuAPI/appsettings.json
 delete mode 100644 experimental/dotnet/wonju/WonjuBL/Class1.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuBL/IName.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuBL/Person.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuBL/WonjuBL.csproj
 delete mode 100644 experimental/dotnet/wonju/WonjuDAL/Class1.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuDAL/WonjuDAL.csproj
 delete mode 100644 experimental/dotnet/wonju/WonjuDB/WonjuDB/CreateTables.sql
 delete mode 100644 experimental/dotnet/wonju/WonjuDB/WonjuDB/InsertIntoTables.sql
 delete mode 100644 experimental/dotnet/wonju/WonjuDB/WonjuDB/WonjuDB.ssmssln
 delete mode 100644 experimental/dotnet/wonju/WonjuDB/WonjuDB/WonjuDB.ssmssqlproj
 delete mode 100644 experimental/dotnet/wonju/WonjuTest/PersonTests.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuTest/UnitTest1.cs
 delete mode 100644 experimental/dotnet/wonju/WonjuTest/WonjuTest.csproj
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/.editorconfig
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/.gitignore
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/README.md
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/angular.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/browserslist
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/e2e/protractor-ci.conf.js
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/e2e/protractor.conf.js
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/e2e/src/app.e2e-spec.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/e2e/src/app.po.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/e2e/tsconfig.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/karma.conf.js
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/package.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/_redirects
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app-routing.module.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app.component.html
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app.component.sass
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app.component.spec.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app.component.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/app/app.module.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/assets/.gitkeep
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/environments/environment.prod.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/environments/environment.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/favicon.ico
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/index.html
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/main.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/polyfills.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/styles.sass
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/src/test.ts
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/tsconfig.app.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/tsconfig.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/tsconfig.spec.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/tslint.json
 delete mode 100644 experimental/dotnet/wonju/WonjuUI/yarn.lock
 delete mode 100644 experimental/dotnet/wonju/wonju.sln
 delete mode 100644 experimental/flutter/lusk/.gitignore
 delete mode 100644 experimental/flutter/lusk/.metadata
 delete mode 100644 experimental/flutter/lusk/README.md
 delete mode 100644 experimental/flutter/lusk/android/app/build.gradle
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/AndroidManifest.xml
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/kotlin/io/gitlab/wyoming/lusk/MainActivity.kt
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/drawable/launch_background.xml
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/mipmap-hdpi/ic_launcher.png
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/mipmap-mdpi/ic_launcher.png
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/mipmap-xhdpi/ic_launcher.png
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/mipmap-xxhdpi/ic_launcher.png
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/mipmap-xxxhdpi/ic_launcher.png
 delete mode 100644 experimental/flutter/lusk/android/app/src/main/res/values/styles.xml
 delete mode 100644 experimental/flutter/lusk/android/build.gradle
 delete mode 100644 experimental/flutter/lusk/android/gradle.properties
 delete mode 100644 experimental/flutter/lusk/android/gradle/wrapper/gradle-wrapper.properties
 delete mode 100644 experimental/flutter/lusk/android/settings.gradle
 delete mode 100644 experimental/flutter/lusk/ios/Flutter/AppFrameworkInfo.plist
 delete mode 100644 experimental/flutter/lusk/ios/Flutter/Debug.xcconfig
 delete mode 100644 experimental/flutter/lusk/ios/Flutter/Release.xcconfig
 delete mode 100644 experimental/flutter/lusk/ios/Runner.xcodeproj/project.pbxproj
 delete mode 100644 experimental/flutter/lusk/ios/Runner.xcodeproj/project.xcworkspace/contents.xcworkspacedata
 delete mode 100644 experimental/flutter/lusk/ios/Runner.xcodeproj/xcshareddata/xcschemes/Runner.xcscheme
 delete mode 100644 experimental/flutter/lusk/ios/Runner.xcworkspace/contents.xcworkspacedata
 delete mode 100644 experimental/flutter/lusk/ios/Runner/AppDelegate.swift
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Contents.json
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@1x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-20x20@3x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@1x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-29x29@3x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@1x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-40x40@3x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-60x60@3x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@1x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-76x76@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-83.5x83.5@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/Contents.json
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@2x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/LaunchImage@3x.png
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Assets.xcassets/LaunchImage.imageset/README.md
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Base.lproj/LaunchScreen.storyboard
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Base.lproj/Main.storyboard
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Info.plist
 delete mode 100644 experimental/flutter/lusk/ios/Runner/Runner-Bridging-Header.h
 delete mode 100644 experimental/flutter/lusk/lib/main.dart
 delete mode 100644 experimental/flutter/lusk/pubspec.yaml
 delete mode 100644 experimental/flutter/lusk/test/widget_test.dart
 delete mode 100644 experimental/golang/micronesia/README.md
 delete mode 100644 experimental/golang/micronesia/hello.go
 delete mode 100644 experimental/golang/micronesia/hello_test.go
 delete mode 100644 experimental/golang/micronesia/user/user_registration.go
 delete mode 100644 experimental/golang/micronesia/user/user_registration_test.go
 delete mode 100644 experimental/html/tildeinstitute/.htaccess
 delete mode 100644 experimental/html/tildeinstitute/404.html
 delete mode 100644 experimental/html/tildeinstitute/bct
 delete mode 100644 experimental/html/tildeinstitute/blog.html
 delete mode 100644 experimental/html/tildeinstitute/contact.html
 delete mode 100644 experimental/html/tildeinstitute/css/style.css
 delete mode 100644 experimental/html/tildeinstitute/fallback.html
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20181225_163825-EFFECTS.jpg
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20190101_140108-EFFECTS.jpg
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20190101_140253-ANIMATION.gif
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20190101_140257-COLLAGE.jpg
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20190101_140418-ANIMATION.gif
 delete mode 100644 experimental/html/tildeinstitute/images/IMG_20190101_140426-EFFECTS.jpg
 delete mode 100644 experimental/html/tildeinstitute/index.html
 delete mode 100644 experimental/html/tildeinstitute/info.php
 delete mode 100644 experimental/html/tildeinstitute/kus.appcache
 delete mode 100644 experimental/html/tildeinstitute/kus.png
 delete mode 100644 experimental/html/tildeinstitute/posts/20181228-welcome.html
 delete mode 100644 experimental/html/tildeinstitute/posts/20181229-happybirthdaysana.html
 delete mode 100644 experimental/html/tildeinstitute/posts/20190102-dog.html
 delete mode 100644 experimental/html/tildeinstitute/posts/20190103-serviceworker.html
 delete mode 100644 experimental/php/noframework/barebear/Tests/MoneyTest.php
 delete mode 100644 experimental/php/noframework/barebear/composer.json
 delete mode 100644 experimental/php/noframework/barebear/composer.lock
 delete mode 100644 experimental/php/noframework/barebear/hello.php
 delete mode 100644 experimental/php/noframework/barebear/includes/classes/Money.php
 delete mode 100644 experimental/php/noframework/barebear/includes/pdo_connect.php
 delete mode 100644 experimental/php/noframework/barebear/phpunit.xml
 delete mode 100644 experimental/php/symfony/openroomsymfony/.env
 delete mode 100644 experimental/php/symfony/openroomsymfony/.env.test
 delete mode 100644 experimental/php/symfony/openroomsymfony/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/.htaccess
 delete mode 100644 experimental/php/symfony/openroomsymfony/composer.json
 delete mode 100644 experimental/php/symfony/openroomsymfony/composer.lock
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/bootstrap.php
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/bundles.php
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/routes.yaml
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/routes/annotations.yaml
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/routes/dev/twig.yaml
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/routes/dev/web_profiler.yaml
 delete mode 100644 experimental/php/symfony/openroomsymfony/config/services.yaml
 delete mode 100644 experimental/php/symfony/openroomsymfony/phpunit.xml.dist
 delete mode 100644 experimental/php/symfony/openroomsymfony/public/index.php
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Controller/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Controller/LuckyController.php
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Entity/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Kernel.php
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Migrations/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/src/Repository/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/symfony.lock
 delete mode 100644 experimental/php/symfony/openroomsymfony/templates/base.html.twig
 delete mode 100644 experimental/php/symfony/openroomsymfony/tests/.gitignore
 delete mode 100644 experimental/php/symfony/openroomsymfony/translations/.gitignore
 delete mode 100644 experimental/python/buford/.gitignore
 delete mode 100644 experimental/python/buford/Dockerfile
 delete mode 100644 experimental/python/buford/Pipfile
 delete mode 100644 experimental/python/buford/Pipfile.lock
 delete mode 100644 experimental/python/buford/README.md
 delete mode 100644 experimental/python/buford/app.py
 delete mode 100644 experimental/python/buford/config.py
 delete mode 100644 experimental/python/buford/db/create_tables.sql
 delete mode 100644 experimental/python/buford/db/drop_tables.sql
 delete mode 100644 experimental/python/buford/db/insert_data.sql
 delete mode 100644 experimental/python/buford/db/query_data.sql
 delete mode 100644 experimental/python/buford/docker-compose.yml
 delete mode 100644 experimental/python/buford/env.example
 delete mode 100644 experimental/python/buford/model/__init__.py
 delete mode 100644 experimental/python/buford/model/applicant.py
 delete mode 100644 experimental/python/buford/model/referral.py
 delete mode 100644 experimental/python/buford/model/visitor.py
 delete mode 100644 experimental/python/buford/requirements.txt
 delete mode 100644 experimental/python/buford/static/cta4096x800.png
 delete mode 100644 experimental/python/buford/static/img/README.md
 delete mode 100644 experimental/python/buford/static/img/android-chrome-192x192.png
 delete mode 100644 experimental/python/buford/static/img/android-chrome-512x512.png
 delete mode 100644 experimental/python/buford/static/img/apple-touch-icon.png
 delete mode 100644 experimental/python/buford/static/img/browserconfig.xml
 delete mode 100644 experimental/python/buford/static/img/favicon-16x16.png
 delete mode 100644 experimental/python/buford/static/img/favicon-32x32.png
 delete mode 100644 experimental/python/buford/static/img/favicon.ico
 delete mode 100644 experimental/python/buford/static/img/html_code.html
 delete mode 100644 experimental/python/buford/static/img/mstile-150x150.png
 delete mode 100644 experimental/python/buford/static/img/safari-pinned-tab.svg
 delete mode 100644 experimental/python/buford/static/img/site.webmanifest
 delete mode 100644 experimental/python/buford/static/img/successCloudNew.svg
 delete mode 100644 experimental/python/buford/static/img/tweetThis.svg
 delete mode 100644 experimental/python/buford/static/img/twitch-no.svg
 delete mode 100644 experimental/python/buford/static/logo240x100.png
 delete mode 100644 experimental/python/buford/static/logo4096x1600.png
 delete mode 100644 experimental/python/buford/static/styles.css
 delete mode 100644 experimental/python/buford/templates/base.html
 delete mode 100644 experimental/python/buford/templates/sitemap.xml
 delete mode 100644 experimental/python/buford/templates/subscribe.html
 delete mode 100644 experimental/python/buford/templates/success.html
 delete mode 100644 experimental/python/buford/templates/welcome.html
 delete mode 100644 experimental/python/buford/tests/__init__.py
 delete mode 100644 experimental/python/buford/tests/test_freebie.py
 delete mode 100755 experimental/python/buford/volumes/nginx-websites/conf.d/sample-website.conf
 delete mode 100644 experimental/python/buford/volumes/proxy/certs/.gitkeep
 delete mode 100755 experimental/python/buford/volumes/proxy/templates/nginx.tmpl
 delete mode 100644 experimental/python/evanston/Pipfile
 delete mode 100644 experimental/python/evanston/Pipfile.lock
 delete mode 100644 experimental/python/evanston/tests/test_person.py
 delete mode 100644 experimental/python/goshen/Pipfile
 delete mode 100644 experimental/python/goshen/Pipfile.lock
 delete mode 100644 experimental/python/goshen/README.md
 delete mode 100644 experimental/python/goshen/counting_valleys.py
 delete mode 100644 experimental/python/goshen/lijie_0.py
 delete mode 100644 experimental/python/goshen/sock_merchant.py
 delete mode 100644 experimental/python/goshen/tests/test_counting_valleys.py
 delete mode 100644 experimental/python/goshen/tests/test_lijie_0.py
 delete mode 100644 experimental/python/goshen/tests/test_sock_merchant.py
 delete mode 100644 experimental/python/hoback/.gitignore
 delete mode 100644 experimental/python/hoback/Pipfile
 delete mode 100644 experimental/python/hoback/Pipfile.lock
 delete mode 100644 experimental/python/hoback/README.md
 delete mode 100644 experimental/python/hoback/apns.py
 delete mode 100644 experimental/python/hoback/env.example
 delete mode 100644 experimental/python/hoback/model/__init__.py
 delete mode 100644 experimental/python/hoback/model/email_address.py
 delete mode 100644 experimental/python/hoback/model/person.py
 delete mode 100644 experimental/python/hoback/model/staff.py
 delete mode 100644 experimental/python/hoback/phone.py
 delete mode 100644 experimental/python/hoback/pinpoint.py
 delete mode 100644 experimental/python/hoback/settings.py
 delete mode 100644 experimental/python/hoback/tests/__init__.py
 delete mode 100644 experimental/python/hoback/tests/test_email_address.py
 delete mode 100644 experimental/python/hoback/tests/test_person.py
 delete mode 100644 experimental/python/hoback/tests/test_staff.py
 delete mode 100644 experimental/python/laramie/Pipfile.lock
 delete mode 100644 experimental/python/rawlins/.gitignore
 delete mode 100644 experimental/python/rawlins/Pipfile
 delete mode 100644 experimental/python/rawlins/Pipfile.lock
 delete mode 100644 experimental/python/rawlins/app.py
 delete mode 100644 experimental/python/rawlins/config.py
 delete mode 100644 experimental/python/rawlins/db/create_tables.sql
 delete mode 100644 experimental/python/rawlins/db/insert_data.sql
 delete mode 100644 experimental/python/rawlins/db/query_data.sql
 delete mode 100644 experimental/python/rawlins/env.example
 delete mode 100644 experimental/python/rawlins/model/User.py
 delete mode 100644 experimental/python/rawlins/model/__init__.py
 delete mode 100644 experimental/python/rawlins/static/style.css
 delete mode 100644 experimental/python/rawlins/templates/base.html
 delete mode 100644 experimental/python/rawlins/templates/index.html
 delete mode 100644 experimental/python/rawlins/test/__init__.py
 delete mode 100644 experimental/python/rawlins/test/test_user.py
 delete mode 100644 experimental/react/hello-types/.gitignore
 delete mode 100644 experimental/react/hello-types/README.md
 delete mode 100644 experimental/react/hello-types/package.json
 delete mode 100644 experimental/react/hello-types/public/favicon.ico
 delete mode 100644 experimental/react/hello-types/public/index.html
 delete mode 100644 experimental/react/hello-types/public/manifest.json
 delete mode 100644 experimental/react/hello-types/src/App.css
 delete mode 100644 experimental/react/hello-types/src/App.test.tsx
 delete mode 100644 experimental/react/hello-types/src/App.tsx
 delete mode 100644 experimental/react/hello-types/src/index.css
 delete mode 100644 experimental/react/hello-types/src/index.tsx
 delete mode 100644 experimental/react/hello-types/src/logo.svg
 delete mode 100644 experimental/react/hello-types/src/react-app-env.d.ts
 delete mode 100644 experimental/react/hello-types/src/serviceWorker.ts
 delete mode 100644 experimental/react/hello-types/tsconfig.json
 delete mode 100644 experimental/react/hello-types/yarn.lock
 delete mode 100644 experimental/react/hiraimomo/.gitignore
 delete mode 100644 experimental/react/hiraimomo/README.md
 delete mode 100644 experimental/react/hiraimomo/package.json
 delete mode 100644 experimental/react/hiraimomo/public/favicon.ico
 delete mode 100644 experimental/react/hiraimomo/public/index.html
 delete mode 100644 experimental/react/hiraimomo/public/logo192.png
 delete mode 100644 experimental/react/hiraimomo/public/logo512.png
 delete mode 100644 experimental/react/hiraimomo/public/manifest.json
 delete mode 100644 experimental/react/hiraimomo/public/robots.txt
 delete mode 100644 experimental/react/hiraimomo/src/App.css
 delete mode 100644 experimental/react/hiraimomo/src/App.test.tsx
 delete mode 100644 experimental/react/hiraimomo/src/App.tsx
 delete mode 100644 experimental/react/hiraimomo/src/index.css
 delete mode 100644 experimental/react/hiraimomo/src/index.tsx
 delete mode 100644 experimental/react/hiraimomo/src/logo.svg
 delete mode 100644 experimental/react/hiraimomo/src/react-app-env.d.ts
 delete mode 100644 experimental/react/hiraimomo/src/serviceWorker.ts
 delete mode 100644 experimental/react/hiraimomo/tsconfig.json
 delete mode 100644 experimental/react/hiraimomo/yarn.lock
 delete mode 100644 experimental/rust/hello/main.rs
 delete mode 100644 experimental/rust/hello_world/.gitignore
 delete mode 100644 experimental/rust/hello_world/Cargo.lock
 delete mode 100644 experimental/rust/hello_world/Cargo.toml
 delete mode 100644 experimental/rust/hello_world/src/main.rs
 delete mode 100644 experimental/sqlserver/Jeju/Jeju.ssmssln
 delete mode 100644 experimental/sqlserver/Jeju/JejuScript/JejuScript.ssmssln
 delete mode 100644 experimental/sqlserver/Jeju/JejuScript/JejuScript/JejuScript.ssmssqlproj
 delete mode 100644 experimental/sqlserver/Jeju/JejuScript/JejuScript/create_tables.sql
 delete mode 100644 experimental/typescript/jonah/.gitignore
 delete mode 100644 experimental/typescript/jonah/hackerrank.ts
 delete mode 100644 experimental/typescript/jonah/index.ts
 delete mode 100644 experimental/typescript/jonah/package.json
 delete mode 100644 experimental/typescript/jonah/tsconfig.json
 delete mode 100644 experimental/typescript/jonah/yarn.lock
 delete mode 100644 game.sh
 delete mode 100644 pcomplete.md
 delete mode 100644 public-backend/.gitignore
 delete mode 100644 public-backend/Dockerfile
 delete mode 100644 public-backend/Pipfile
 delete mode 100644 public-backend/Pipfile.lock
 delete mode 100644 public-backend/app.py
 delete mode 100644 public-backend/requirements.txt
 delete mode 100644 public-databases/create_tables.sql
 delete mode 100644 public-databases/insert_data.sql
 delete mode 100644 public-databases/query_data.sql
 delete mode 100644 public-website/.editorconfig
 delete mode 100644 public-website/.gitignore
 delete mode 100644 public-website/README.md
 delete mode 100644 public-website/angular.json
 delete mode 100644 public-website/browserslist
 delete mode 100644 public-website/e2e/protractor.conf.js
 delete mode 100644 public-website/e2e/src/app.e2e-spec.ts
 delete mode 100644 public-website/e2e/src/app.po.ts
 delete mode 100644 public-website/e2e/tsconfig.json
 delete mode 100644 public-website/karma.conf.js
 delete mode 100644 public-website/ngsw-config.json
 delete mode 100644 public-website/package.json
 delete mode 100644 public-website/src/app/app-routing.module.ts
 delete mode 100644 public-website/src/app/app.component.html
 delete mode 100644 public-website/src/app/app.component.sass
 delete mode 100644 public-website/src/app/app.component.spec.ts
 delete mode 100644 public-website/src/app/app.component.ts
 delete mode 100644 public-website/src/app/app.module.ts
 delete mode 100644 public-website/src/app/mock-owner.spec.ts
 delete mode 100644 public-website/src/app/mock-owner.ts
 delete mode 100644 public-website/src/app/mock-tier-category.spec.ts
 delete mode 100644 public-website/src/app/mock-tier-category.ts
 delete mode 100644 public-website/src/app/mock-tier.spec.ts
 delete mode 100644 public-website/src/app/mock-tier.ts
 delete mode 100644 public-website/src/app/mock-type.spec.ts
 delete mode 100644 public-website/src/app/mock-type.ts
 delete mode 100644 public-website/src/app/model-owner.spec.ts
 delete mode 100644 public-website/src/app/model-owner.ts
 delete mode 100644 public-website/src/app/model-tier-category.spec.ts
 delete mode 100644 public-website/src/app/model-tier-category.ts
 delete mode 100644 public-website/src/app/model-tier.spec.ts
 delete mode 100644 public-website/src/app/model-tier.ts
 delete mode 100644 public-website/src/app/model-type.spec.ts
 delete mode 100644 public-website/src/app/model-type.ts
 delete mode 100644 public-website/src/app/navbar/navbar.component.html
 delete mode 100644 public-website/src/app/navbar/navbar.component.sass
 delete mode 100644 public-website/src/app/navbar/navbar.component.spec.ts
 delete mode 100644 public-website/src/app/navbar/navbar.component.ts
 delete mode 100644 public-website/src/app/search-form/search-form.component.html
 delete mode 100644 public-website/src/app/search-form/search-form.component.sass
 delete mode 100644 public-website/src/app/search-form/search-form.component.spec.ts
 delete mode 100644 public-website/src/app/search-form/search-form.component.ts
 delete mode 100644 public-website/src/app/search/search.component.html
 delete mode 100644 public-website/src/app/search/search.component.sass
 delete mode 100644 public-website/src/app/search/search.component.spec.ts
 delete mode 100644 public-website/src/app/search/search.component.ts
 delete mode 100644 public-website/src/assets/.gitkeep
 delete mode 100644 public-website/src/assets/icons/icon-128x128.png
 delete mode 100644 public-website/src/assets/icons/icon-144x144.png
 delete mode 100644 public-website/src/assets/icons/icon-152x152.png
 delete mode 100644 public-website/src/assets/icons/icon-192x192.png
 delete mode 100644 public-website/src/assets/icons/icon-384x384.png
 delete mode 100644 public-website/src/assets/icons/icon-512x512.png
 delete mode 100644 public-website/src/assets/icons/icon-72x72.png
 delete mode 100644 public-website/src/assets/icons/icon-96x96.png
 delete mode 100644 public-website/src/assets/json/book.json
 delete mode 100644 public-website/src/assets/json/nested.json
 delete mode 100644 public-website/src/custom-theme.scss
 delete mode 100644 public-website/src/environments/environment.prod.ts
 delete mode 100644 public-website/src/environments/environment.ts
 delete mode 100644 public-website/src/favicon.ico
 delete mode 100644 public-website/src/index.html
 delete mode 100644 public-website/src/main.ts
 delete mode 100644 public-website/src/manifest.webmanifest
 delete mode 100644 public-website/src/polyfills.ts
 delete mode 100644 public-website/src/styles.sass
 delete mode 100644 public-website/src/test.ts
 delete mode 100644 public-website/tsconfig.app.json
 delete mode 100644 public-website/tsconfig.json
 delete mode 100644 public-website/tsconfig.spec.json
 delete mode 100644 public-website/tslint.json
 delete mode 100644 public-website/yarn.lock
 delete mode 100755 volumes/config/website/config.js
 delete mode 100755 volumes/nginx-website/conf.d/sample-website.conf
 delete mode 100755 volumes/proxy/templates/nginx.tmpl
Monday, June 10, 2024 2:09:23 PM
Current branch master is up to date.
Monday, June 10, 2024 2:09:24 PM
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 322 bytes | 161.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: GitHub found 1597 vulnerabilities on onewyoming/onewyoming's default branch (214 critical, 715 high, 591 moderate, 77 low). To find out more, visit:
remote:      https://github.com/onewyoming/onewyoming/security/dependabot
remote:
To github.com:onewyoming/onewyoming.git
   f2cf30b..d0b0dc3  master -> master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 322 bytes | 161.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
To gitlab.com:wyoming/wyoming.gitlab.io.git
   f2cf30b..d0b0dc3  master -> master
Monday, June 10, 2024 2:09:27 PM

```