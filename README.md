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













































































































Restoring packages for C:\code\callcenter\CallCenter.Benchmarks\CallCenter.Benchmarks.csproj...
Restoring packages for C:\code\callcenter\Data\CallCenter.Data.csproj...
Restoring packages for C:\code\callcenter\DataTests\DataTests.csproj...
Restoring packages for C:\code\callcenter\ClientTests\ClientTests.csproj...
  GET https://api.nuget.org/v3-flatcontainer/mathnet.numerics/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/index.json
  GET https://api.nuget.org/v3-flatcontainer/npgsql.entityframeworkcore.postgresql/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.usersecrets/index.json
  GET https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/index.json
  GET https://api.nuget.org/v3-flatcontainer/fluentassertions/index.json
  GET https://api.nuget.org/v3-flatcontainer/coverlet.collector/index.json
  GET https://api.nuget.org/v3-flatcontainer/bunit/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.usersecrets/index.json 115ms
  OK https://api.nuget.org/v3-flatcontainer/npgsql.entityframeworkcore.postgresql/index.json 120ms
  OK https://api.nuget.org/v3-flatcontainer/mathnet.numerics/index.json 130ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.usersecrets/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.usersecrets.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/npgsql.entityframeworkcore.postgresql/10.0.0-preview.3/npgsql.entityframeworkcore.postgresql.10.0.0-preview.3.nupkg
  OK https://api.nuget.org/v3-flatcontainer/fluentassertions/index.json 118ms
  GET https://api.nuget.org/v3-flatcontainer/mathnet.numerics/6.0.0-beta2/mathnet.numerics.6.0.0-beta2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/fluentassertions/8.3.0/fluentassertions.8.3.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/index.json 141ms
  OK https://api.nuget.org/v3-flatcontainer/coverlet.collector/index.json 130ms
  OK https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/index.json 140ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/10.0.0-preview.4.25258.110/microsoft.extensions.logging.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/bunit/index.json 128ms
  CACHE https://api.nuget.org/v3-flatcontainer/coverlet.collector/index.json
  GET https://api.nuget.org/v3-flatcontainer/coverlet.collector/6.0.4/coverlet.collector.6.0.4.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/index.json
  GET https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/3.1.0/xunit.runner.visualstudio.3.1.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/bunit/2.0.36-preview/bunit.2.0.36-preview.nupkg
  OK https://api.nuget.org/v3-flatcontainer/fluentassertions/8.3.0/fluentassertions.8.3.0.nupkg 37ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.usersecrets/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.usersecrets.10.0.0-preview.4.25258.110.nupkg 47ms
  OK https://api.nuget.org/v3-flatcontainer/npgsql.entityframeworkcore.postgresql/10.0.0-preview.3/npgsql.entityframeworkcore.postgresql.10.0.0-preview.3.nupkg 48ms
  OK https://api.nuget.org/v3-flatcontainer/mathnet.numerics/6.0.0-beta2/mathnet.numerics.6.0.0-beta2.nupkg 48ms
  OK https://api.nuget.org/v3-flatcontainer/coverlet.collector/6.0.4/coverlet.collector.6.0.4.nupkg 46ms
  OK https://api.nuget.org/v3-flatcontainer/bunit/2.0.36-preview/bunit.2.0.36-preview.nupkg 57ms
  OK https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/3.1.0/xunit.runner.visualstudio.3.1.0.nupkg 60ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/10.0.0-preview.4.25258.110/microsoft.extensions.logging.10.0.0-preview.4.25258.110.nupkg 97ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/index.json 239ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/17.14.0/microsoft.net.test.sdk.17.14.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/17.14.0/microsoft.net.test.sdk.17.14.0.nupkg 18ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.net.test.sdk/17.14.0/microsoft.net.test.sdk.17.14.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json 40ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.abstractions.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/10.0.0-preview.4.25258.110/microsoft.extensions.logging.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.relational/index.json
  GET https://api.nuget.org/v3-flatcontainer/npgsql/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.abstractions.10.0.0-preview.4.25258.110.nupkg 46ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/index.json 117ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/index.json 65ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/index.json 71ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.json.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/10.0.0-preview.4.25258.110/microsoft.extensions.dependencyinjection.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.logging.abstractions.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/xunit.runner.visualstudio/3.1.0/xunit.runner.visualstudio.3.1.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/index.json 207ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/10.0.0-preview.4.25258.110/microsoft.extensions.dependencyinjection.10.0.0-preview.4.25258.110.nupkg 27ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.json.10.0.0-preview.4.25258.110.nupkg 30ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/index.json
  OK https://api.nuget.org/v3-flatcontainer/npgsql/index.json 133ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.relational/index.json 136ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/index.json 139ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.abstractions.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.localization.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/index.json
  GET https://api.nuget.org/v3-flatcontainer/npgsql/9.0.3/npgsql.9.0.3.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/9.0.1/microsoft.extensions.logging.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/10.0.0-preview.4.25258.110/microsoft.extensions.options.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.relational/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.relational.10.0.0-preview.3.25171.6.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/9.0.1/microsoft.extensions.logging.abstractions.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.logging.abstractions.10.0.0-preview.4.25258.110.nupkg 50ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/index.json 46ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/17.14.0/microsoft.testplatform.testhost.17.14.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore/index.json 183ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.abstractions.10.0.0-preview.4.25258.110.nupkg 49ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.relational/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.relational.10.0.0-preview.3.25171.6.nupkg 39ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.10.0.0-preview.3.25171.6.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/10.0.0-preview.4.25258.110/microsoft.extensions.options.10.0.0-preview.4.25258.110.nupkg 44ms
  OK https://api.nuget.org/v3-flatcontainer/npgsql/9.0.3/npgsql.9.0.3.nupkg 48ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/17.14.0/microsoft.testplatform.testhost.17.14.0.nupkg 15ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging/9.0.1/microsoft.extensions.logging.9.0.1.nupkg 111ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/index.json 122ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/index.json 127ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.localization.abstractions/index.json 122ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/index.json 125ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.10.0.0-preview.3.25171.6.nupkg 76ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/index.json 129ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/index.json 59ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/index.json 138ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/9.0.1/microsoft.aspnetcore.components.authorization.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/index.json 136ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/9.0.1/microsoft.aspnetcore.components.webassembly.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.localization.abstractions/9.0.1/microsoft.extensions.localization.abstractions.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/index.json 145ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/9.0.1/microsoft.aspnetcore.components.webassembly.authentication.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/9.0.1/microsoft.extensions.caching.memory.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/9.0.1/microsoft.aspnetcore.components.web.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.dependencyinjection.abstractions.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/9.0.1/microsoft.aspnetcore.components.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/17.14.0/microsoft.codecoverage.17.14.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/9.0.1/microsoft.extensions.logging.abstractions.9.0.1.nupkg 138ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/9.0.1/microsoft.extensions.caching.memory.9.0.1.nupkg 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/17.14.0/microsoft.codecoverage.17.14.0.nupkg 36ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.localization.abstractions/9.0.1/microsoft.extensions.localization.abstractions.9.0.1.nupkg 52ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/9.0.1/microsoft.aspnetcore.components.authorization.9.0.1.nupkg 60ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/9.0.1/microsoft.aspnetcore.components.webassembly.9.0.1.nupkg 62ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/9.0.1/microsoft.aspnetcore.components.web.9.0.1.nupkg 63ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.dependencyinjection.abstractions.10.0.0-preview.4.25258.110.nupkg 67ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/9.0.1/microsoft.aspnetcore.components.9.0.1.nupkg 104ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/9.0.1/microsoft.aspnetcore.components.webassembly.authentication.9.0.1.nupkg 127ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/10.0.0-preview.4.25258.110/microsoft.extensions.dependencyinjection.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.testhost/17.14.0/microsoft.testplatform.testhost.17.14.0.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.logging.abstractions.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/10.0.0-preview.4.25258.110/microsoft.extensions.options.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.abstractions/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/10.0.0-preview.3.25171.5/microsoft.extensions.caching.memory.10.0.0-preview.3.25171.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.configuration.abstractions.10.0.0-preview.3.25171.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.configuration.abstractions.10.0.0-preview.3.25171.5.nupkg 38ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.memory/10.0.0-preview.3.25171.5/microsoft.extensions.caching.memory.10.0.0-preview.3.25171.5.nupkg 46ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/index.json 56ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.abstractions/index.json 55ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/10.0.0-preview.4.25258.110/microsoft.extensions.primitives.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.abstractions/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.abstractions.10.0.0-preview.3.25171.6.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/10.0.0-preview.4.25258.110/microsoft.extensions.primitives.10.0.0-preview.4.25258.110.nupkg 36ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.entityframeworkcore.abstractions/10.0.0-preview.3.25171.6/microsoft.entityframeworkcore.abstractions.10.0.0-preview.3.25171.6.nupkg 67ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.dependencyinjection.abstractions.10.0.0-preview.3.25171.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.logging.abstractions.10.0.0-preview.3.25171.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/10.0.0-preview.3.25171.5/microsoft.extensions.options.10.0.0-preview.3.25171.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/10.0.0-preview.3.25171.5/microsoft.extensions.primitives.10.0.0-preview.3.25171.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/10.0.0-preview.3.25171.5/microsoft.extensions.options.10.0.0-preview.3.25171.5.nupkg 22ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/10.0.0-preview.3.25171.5/microsoft.extensions.primitives.10.0.0-preview.3.25171.5.nupkg 26ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.dependencyinjection.abstractions.10.0.0-preview.3.25171.5.nupkg 32ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/index.json 51ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.caching.abstractions.10.0.0-preview.3.25171.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.logging.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.logging.abstractions.10.0.0-preview.3.25171.5.nupkg 84ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/10.0.0-preview.3.25171.5/microsoft.extensions.caching.abstractions.10.0.0-preview.3.25171.5.nupkg 39ms
  CACHE https://api.nuget.org/v3-flatcontainer/coverlet.collector/6.0.4/coverlet.collector.6.0.4.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/10.0.0-preview.4.25258.110/microsoft.extensions.primitives.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/index.json 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/index.json 46ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/17.14.0/microsoft.testplatform.objectmodel.17.14.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/17.14.0/microsoft.testplatform.objectmodel.17.14.0.nupkg 24ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.10.0.0-preview.4.25258.110.nupkg 26ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/index.json 108ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.fileextensions.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.fileextensions.10.0.0-preview.4.25258.110.nupkg 36ms
Installed Npgsql.EntityFrameworkCore.PostgreSQL 10.0.0-preview.3 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\npgsql.entityframeworkcore.postgresql\10.0.0-preview.3 with content hash 1mzASAkFmT0yLKhLs7Kx3oaXag9PYzkAZOtkviDHsA36aODm/yfZH0HrmZmG8hrK9WzJdnq+QGEY8r4WXTzFcw==.
Installed Microsoft.EntityFrameworkCore.Relational 10.0.0-preview.3.25171.6 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.entityframeworkcore.relational\10.0.0-preview.3.25171.6 with content hash a4u68469kYNVhEKtEMouvn8RiK+7spEeFBk+iDTaBD85NJGzH8fCNtz8E4DRUsvn3Y9mBH5wBh/N1Bwi/O/Xlw==.
Installed Microsoft.Extensions.Caching.Memory 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.caching.memory\10.0.0-preview.3.25171.5 with content hash 4Acl7inrXHNCMjXiyaxpCCeO/cIf+rNE8OVQDWkztIG2l5H5tTRyja63obsE+Luv5OmGlU/LKu44UBCQZIA4cw==.
Installed Microsoft.Extensions.Caching.Abstractions 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.caching.abstractions\10.0.0-preview.3.25171.5 with content hash oJFNHKEbW3heuX+yWWenXQl9iGu5yNwmnJMvq6uXHVe5/kem6ir/t/YnCWmKID4bqMBW+MABeQCGI6fSyHItQg==.
Installed MathNet.Numerics 6.0.0-beta2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\mathnet.numerics\6.0.0-beta2 with content hash ew55vr5MqCEokG0jRsndoRSPNxdDvSgGwhWyxEFhzc8EuGn3TNtSGKRppCcpHnwXtjFiUvFBN+BBo75yrdKOrQ==.
Installed Microsoft.Extensions.Configuration.Abstractions 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.abstractions\10.0.0-preview.3.25171.5 with content hash J9Scx8s52LsDCVuIYWJ7M/rRHyYAzF1D9skARHrZkKFrhDxksOdhXmrGJWnSJce2CqQhVx+n6fZtItmyhXpyWQ==.
Installed Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.logging\10.0.0-preview.4.25258.110 with content hash 9uz/Xe3hLtDNcNRnr7hcHhWUGbWH8n/cIL36HFZfeJcUCfrJn08fWugGixyjoyTnUKUyHqti71+y4EBe/LUPaw==.
Installed Microsoft.EntityFrameworkCore 10.0.0-preview.3.25171.6 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.entityframeworkcore\10.0.0-preview.3.25171.6 with content hash hGlI94rtMbyG23FZae9UZTLXN4pA6ai+DXg12bycJGlXFNy/27i6En030w3iGU19VIt0Cpb3/kQAWaPYUiCGng==.
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
Installed Microsoft.Extensions.DependencyInjection 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.dependencyinjection\10.0.0-preview.4.25258.110 with content hash A8aIJ9EnpN0qxcsbhBUJr62XlM4n30ppwn2opvdcpxQrnD7JENazVkp087GkYx5egbCixlS8eI+P1o75m3McSQ==.
Installed Microsoft.Extensions.Primitives 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.primitives\10.0.0-preview.3.25171.5 with content hash 1U7p/PNQw7CGbbaAK1GTdVy/Fu85DC2h6DJHqvca12xtroVllU6KjboN590SxGxg2iz4sHM+joYpYSIYBrm0bQ==.
Installed Npgsql 9.0.3 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\npgsql\9.0.3 with content hash tPvY61CxOAWxNsKLEBg+oR646X4Bc8UmyQ/tJszL/7mEmIXQnnBhVJZrZEEUv0Bstu0mEsHZD5At3EO8zQRAYw==.
Installed Microsoft.Extensions.DependencyInjection.Abstractions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.dependencyinjection.abstractions\10.0.0-preview.4.25258.110 with content hash SYIIGR549cPnt87N7JtQlCDYr3fPSnFOB8i7BrIU9NDW4MSukSdG74ddl5BpCIwOEk1hhxtlcclIN65StppbMQ==.
Installed Microsoft.Extensions.Primitives 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.primitives\10.0.0-preview.4.25258.110 with content hash kG3cJqv8N7BtFSFVupnBFSymfLk2eSnDgpttAEw7bxndWliKDhAem8xrh0EvAvk2BVH5ivNIdWzv8w/tkNVwcQ==.
Installed Microsoft.EntityFrameworkCore.Abstractions 10.0.0-preview.3.25171.6 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.entityframeworkcore.abstractions\10.0.0-preview.3.25171.6 with content hash rB1DoKy4rwrMSD0p/xYvZiGAq6UQc5cfrFPLLnYg3wBN3MeN+ZGasA2FXRT2r1EmAOM4VF0qQSvhUbHQh4DHnQ==.
Restoring packages for C:\code\callcenter\Client\CallCenter.Client.csproj...
  GET https://api.nuget.org/v3-flatcontainer/microsoft.authentication.webassembly.msal/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.devserver/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.http/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/index.json
  GET https://api.nuget.org/v3-flatcontainer/radzen.blazor/index.json
Installed Microsoft.Extensions.Options 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.options\10.0.0-preview.4.25258.110 with content hash uXMTwQljNFUnkIRVMo1F+ilaNQTl0uofwSuzWDBwj6dnE4zAZGiWVLqgrpL57vsZ4+MO7tWM9HwXP7LyjXqU6Q==.
Installed Microsoft.Extensions.DependencyInjection.Abstractions 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.dependencyinjection.abstractions\10.0.0-preview.3.25171.5 with content hash kYUb9+gyWtphwC5ZPApnhJ8kYLFfeMwt0qHgMchfagjCVFFuwp4iyn9tSYe/mDmlyMxfaZ8XmatJttmXxfQT5g==.
Installed Microsoft.Extensions.Options 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.options\10.0.0-preview.3.25171.5 with content hash 4UwRpSTCzTHSc5D1Os5gdtzJZTP2tdMRAfidJy23munK5PVm1uFBRUlyqu5n1bWPY8n1F6lee7AixJkbMP2DcA==.
  OK https://api.nuget.org/v3-flatcontainer/microsoft.authentication.webassembly.msal/index.json 133ms
  OK https://api.nuget.org/v3-flatcontainer/radzen.blazor/index.json 133ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/index.json 135ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.authentication.webassembly.msal/10.0.0-preview.4.25258.110/microsoft.authentication.webassembly.msal.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.devserver/index.json 140ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.http/index.json 143ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/radzen.blazor/7.0.7/radzen.blazor.7.0.7.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.devserver/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.devserver.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.http/10.0.0-preview.4.25258.110/microsoft.extensions.http.10.0.0-preview.4.25258.110.nupkg
Installed Microsoft.Extensions.Logging.Abstractions 10.0.0-preview.3.25171.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.logging.abstractions\10.0.0-preview.3.25171.5 with content hash RelfzqJYDT+QGnda61isCoab/Xq8HWAK0tawwyCYm7r2voGs9r9igkxeFo43lAnFztVdOdslB+zQmJh0pZcXuw==.
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.http/10.0.0-preview.4.25258.110/microsoft.extensions.http.10.0.0-preview.4.25258.110.nupkg 43ms
  OK https://api.nuget.org/v3-flatcontainer/radzen.blazor/7.0.7/radzen.blazor.7.0.7.nupkg 48ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.devserver/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.devserver.10.0.0-preview.4.25258.110.nupkg 52ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.10.0.0-preview.4.25258.110.nupkg 56ms
Installed Microsoft.Extensions.Logging.Abstractions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.logging.abstractions\10.0.0-preview.4.25258.110 with content hash TbXuoqn12xrQpZ3zYIQx3QRnDxkBIzV0SqnzbwKK7RdhW4cjzL1cGEozIwgu/4ZFzGQdpWArEVqguolNvWsn4Q==.
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.authentication.webassembly.msal/10.0.0-preview.4.25258.110/microsoft.authentication.webassembly.msal.10.0.0-preview.4.25258.110.nupkg 121ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/index.json 46ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.authentication.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json 62ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics/index.json 59ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.abstractions.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics/10.0.0-preview.4.25258.110/microsoft.extensions.diagnostics.10.0.0-preview.4.25258.110.nupkg
Restoring packages for C:\code\callcenter\Server\CallCenter.Server.csproj...
  GET https://api.nuget.org/v3-flatcontainer/serilog/index.json
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.file/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.server/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.ui/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/index.json
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.applicationinsights/index.json
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore/index.json
  GET https://api.nuget.org/v3-flatcontainer/serilog.extensions.hosting/index.json
  GET https://api.nuget.org/v3-flatcontainer/abp/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.openidconnect/index.json
  GET https://api.nuget.org/v3-flatcontainer/polly/index.json
  GET https://api.nuget.org/v3-flatcontainer/fluentvalidation/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics/10.0.0-preview.4.25258.110/microsoft.extensions.diagnostics.10.0.0-preview.4.25258.110.nupkg 30ms
  GET https://api.nuget.org/v3-flatcontainer/serilog.settings.configuration/index.json
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.console/index.json
  GET https://api.nuget.org/v3-flatcontainer/mediatr/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.abstractions.10.0.0-preview.4.25258.110.nupkg 45ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/index.json 118ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/index.json 119ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/index.json 119ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/index.json 119ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/10.0.0-preview.4.25258.110/microsoft.jsinterop.webassembly.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.web.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.json.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.binder.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.authentication/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.authentication.10.0.0-preview.4.25258.110.nupkg 88ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/10.0.0-preview.4.25258.110/microsoft.jsinterop.webassembly.10.0.0-preview.4.25258.110.nupkg 20ms
  OK https://api.nuget.org/v3-flatcontainer/polly/index.json 101ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.json.10.0.0-preview.4.25258.110.nupkg 60ms
  OK https://api.nuget.org/v3-flatcontainer/abp/index.json 105ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web/index.json 110ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.applicationinsights/index.json 108ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.console/index.json 99ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.web.10.0.0-preview.4.25258.110.nupkg 65ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.ui/index.json 112ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.settings.configuration/index.json 101ms
  OK https://api.nuget.org/v3-flatcontainer/serilog/index.json 115ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.binder.10.0.0-preview.4.25258.110.nupkg 65ms
  OK https://api.nuget.org/v3-flatcontainer/fluentvalidation/index.json 107ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/index.json 115ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.extensions.hosting/index.json 115ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore/index.json 116ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.file/index.json 127ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.server/index.json 128ms
  GET https://api.nuget.org/v3-flatcontainer/polly/8.5.2/polly.8.5.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.openidconnect/index.json 129ms
  GET https://api.nuget.org/v3-flatcontainer/abp/10.2.0/abp.10.2.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web/3.9.2/microsoft.identity.web.3.9.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/mediatr/index.json 141ms
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.applicationinsights/4.1.0-dev-02304/serilog.sinks.applicationinsights.4.1.0-dev-02304.nupkg
  GET https://api.nuget.org/v3-flatcontainer/serilog/4.3.1-dev-02373/serilog.4.3.1-dev-02373.nupkg
  GET https://api.nuget.org/v3-flatcontainer/serilog.settings.configuration/9.0.1-dev-02317/serilog.settings.configuration.9.0.1-dev-02317.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authentication.jwtbearer.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.ui/3.9.2/microsoft.identity.web.ui.3.9.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/serilog.extensions.hosting/9.0.1-dev-02307/serilog.extensions.hosting.9.0.1-dev-02307.nupkg
  GET https://api.nuget.org/v3-flatcontainer/fluentvalidation/12.0.0/fluentvalidation.12.0.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.console/6.0.1-dev-00953/serilog.sinks.console.6.0.1-dev-00953.nupkg
  GET https://api.nuget.org/v3-flatcontainer/serilog.sinks.file/7.0.0/serilog.sinks.file.7.0.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.server/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.server.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.openidconnect/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authentication.openidconnect.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore/8.1.2/swashbuckle.aspnetcore.8.1.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/mediatr/12.5.0/mediatr.12.5.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/polly/8.5.2/polly.8.5.2.nupkg 44ms
  OK https://api.nuget.org/v3-flatcontainer/fluentvalidation/12.0.0/fluentvalidation.12.0.0.nupkg 31ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.jwtbearer/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authentication.jwtbearer.10.0.0-preview.4.25258.110.nupkg 53ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.file/7.0.0/serilog.sinks.file.7.0.0.nupkg 50ms
  OK https://api.nuget.org/v3-flatcontainer/serilog/4.3.1-dev-02373/serilog.4.3.1-dev-02373.nupkg 58ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.settings.configuration/9.0.1-dev-02317/serilog.settings.configuration.9.0.1-dev-02317.nupkg 55ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.console/6.0.1-dev-00953/serilog.sinks.console.6.0.1-dev-00953.nupkg 51ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web/3.9.2/microsoft.identity.web.3.9.2.nupkg 68ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.ui/3.9.2/microsoft.identity.web.ui.3.9.2.nupkg 56ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authentication.openidconnect/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authentication.openidconnect.10.0.0-preview.4.25258.110.nupkg 51ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore/8.1.2/swashbuckle.aspnetcore.8.1.2.nupkg 52ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.extensions.hosting/9.0.1-dev-02307/serilog.extensions.hosting.9.0.1-dev-02307.nupkg 78ms
  OK https://api.nuget.org/v3-flatcontainer/abp/10.2.0/abp.10.2.0.nupkg 99ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.webassembly.server/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.webassembly.server.10.0.0-preview.4.25258.110.nupkg 78ms
  OK https://api.nuget.org/v3-flatcontainer/mediatr/12.5.0/mediatr.12.5.0.nupkg 89ms
  OK https://api.nuget.org/v3-flatcontainer/serilog.sinks.applicationinsights/4.1.0-dev-02304/serilog.sinks.applicationinsights.4.1.0-dev-02304.nupkg 158ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.applicationinsights/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.applicationinsights/index.json 83ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.applicationinsights/2.23.0/microsoft.applicationinsights.2.23.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.applicationinsights/2.23.0/microsoft.applicationinsights.2.23.0.nupkg 28ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/9.0.5/microsoft.aspnetcore.components.web.9.0.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.web/9.0.5/microsoft.aspnetcore.components.web.9.0.5.nupkg 67ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/index.json 88ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/9.0.5/microsoft.aspnetcore.components.9.0.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/9.0.5/microsoft.aspnetcore.components.9.0.5.nupkg 17ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options.configurationextensions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/index.json 45ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.10.0.0-preview.4.25258.110.nupkg 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/index.json 42ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options.configurationextensions/index.json 48ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.authorization.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics.abstractions/index.json 50ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/10.0.0-preview.4.25258.110/microsoft.jsinterop.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/index.json 57ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/index.json 51ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options.configurationextensions/10.0.0-preview.4.25258.110/microsoft.extensions.options.configurationextensions.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.diagnostics.abstractions.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/index.json 56ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.forms.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/index.json 63ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.abstractions.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.fileextensions.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/10.0.0-preview.4.25258.110/microsoft.jsinterop.10.0.0-preview.4.25258.110.nupkg 33ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options.configurationextensions/10.0.0-preview.4.25258.110/microsoft.extensions.options.configurationextensions.10.0.0-preview.4.25258.110.nupkg 29ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.diagnostics.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.diagnostics.abstractions.10.0.0-preview.4.25258.110.nupkg 29ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.10.0.0-preview.4.25258.110.nupkg 33ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.forms.10.0.0-preview.4.25258.110.nupkg 38ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.authorization/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.authorization.10.0.0-preview.4.25258.110.nupkg 73ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/10.0.0-preview.4.25258.110/microsoft.extensions.configuration.fileextensions.10.0.0-preview.4.25258.110.nupkg 60ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.abstractions.10.0.0-preview.4.25258.110.nupkg 69ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/index.json 135ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/9.0.5/microsoft.aspnetcore.components.analyzers.9.0.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.analyzers.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/9.0.5/microsoft.aspnetcore.components.analyzers.9.0.5.nupkg 22ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/10.0.0-preview.4.25258.110/microsoft.aspnetcore.components.analyzers.10.0.0-preview.4.25258.110.nupkg 54ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/index.json 268ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/9.0.5/microsoft.aspnetcore.authorization.9.0.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authorization.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/9.0.5/microsoft.aspnetcore.authorization.9.0.5.nupkg 17ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/10.0.0-preview.4.25258.110/microsoft.aspnetcore.authorization.10.0.0-preview.4.25258.110.nupkg 22ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/index.json 74ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/10.0.0-preview.4.25258.110/microsoft.aspnetcore.metadata.10.0.0-preview.4.25258.110.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/10.0.0-preview.4.25258.110/microsoft.aspnetcore.metadata.10.0.0-preview.4.25258.110.nupkg 32ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.codecoverage/17.14.0/microsoft.codecoverage.17.14.0.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/9.0.1/microsoft.aspnetcore.components.analyzers.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/9.0.1/microsoft.aspnetcore.authorization.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/9.0.1/microsoft.aspnetcore.components.forms.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/9.0.1/microsoft.jsinterop.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/9.0.1/microsoft.extensions.dependencyinjection.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/9.0.1/microsoft.extensions.primitives.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/9.0.1/microsoft.jsinterop.webassembly.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/9.0.1/microsoft.extensions.configuration.binder.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/9.0.1/microsoft.extensions.configuration.json.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/9.0.1/microsoft.extensions.caching.abstractions.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/9.0.1/microsoft.extensions.dependencyinjection.abstractions.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/9.0.1/microsoft.extensions.options.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.authorization/9.0.1/microsoft.aspnetcore.authorization.9.0.1.nupkg 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.analyzers/9.0.1/microsoft.aspnetcore.components.analyzers.9.0.1.nupkg 43ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection/9.0.1/microsoft.extensions.dependencyinjection.9.0.1.nupkg 36ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.components.forms/9.0.1/microsoft.aspnetcore.components.forms.9.0.1.nupkg 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.json/9.0.1/microsoft.extensions.configuration.json.9.0.1.nupkg 32ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificateless/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificate/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokenacquisition/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokencache/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols.openidconnect/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.binder/9.0.1/microsoft.extensions.configuration.binder.9.0.1.nupkg 56ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.validators/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop.webassembly/9.0.1/microsoft.jsinterop.webassembly.9.0.1.nupkg 61ms
  GET https://api.nuget.org/v3-flatcontainer/system.identitymodel.tokens.jwt/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.jsinterop/9.0.1/microsoft.jsinterop.9.0.1.nupkg 68ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.dependencyinjection.abstractions/9.0.1/microsoft.extensions.dependencyinjection.abstractions.9.0.1.nupkg 56ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.primitives/9.0.1/microsoft.extensions.primitives.9.0.1.nupkg 63ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.caching.abstractions/9.0.1/microsoft.extensions.caching.abstractions.9.0.1.nupkg 60ms
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swagger/index.json
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggergen/index.json
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggerui/index.json
  GET https://api.nuget.org/v3-flatcontainer/castle.core/index.json
  GET https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/index.json
  GET https://api.nuget.org/v3-flatcontainer/system.linq.dynamic.core/index.json
  GET https://api.nuget.org/v3-flatcontainer/system.runtime.serialization.formatters/index.json
  GET https://api.nuget.org/v3-flatcontainer/timezoneconverter/index.json
  GET https://api.nuget.org/v3-flatcontainer/polly.core/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.validators/index.json 37ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificate/index.json 41ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokenacquisition/index.json 41ms
  OK https://api.nuget.org/v3-flatcontainer/system.identitymodel.tokens.jwt/index.json 41ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokencache/index.json 46ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificateless/index.json 66ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.options/9.0.1/microsoft.extensions.options.9.0.1.nupkg 121ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols.openidconnect/index.json 68ms
  OK https://api.nuget.org/v3-flatcontainer/system.linq.dynamic.core/index.json 42ms
  OK https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/index.json 43ms
  OK https://api.nuget.org/v3-flatcontainer/system.runtime.serialization.formatters/index.json 42ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.validators/8.11.0/microsoft.identitymodel.validators.8.11.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokenacquisition/3.9.2/microsoft.identity.web.tokenacquisition.3.9.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificate/3.9.2/microsoft.identity.web.certificate.3.9.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggergen/index.json 75ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggerui/index.json 74ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/index.json
  OK https://api.nuget.org/v3-flatcontainer/timezoneconverter/index.json 58ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/9.0.1/microsoft.aspnetcore.metadata.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swagger/index.json 86ms
  GET https://api.nuget.org/v3-flatcontainer/system.identitymodel.tokens.jwt/8.11.0/system.identitymodel.tokens.jwt.8.11.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokencache/3.9.2/microsoft.identity.web.tokencache.3.9.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/polly.core/index.json 71ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificateless/3.9.2/microsoft.identity.web.certificateless.3.9.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols.openidconnect/8.11.0/microsoft.identitymodel.protocols.openidconnect.8.11.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/9.0.5/system.configuration.configurationmanager.9.0.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/system.linq.dynamic.core/1.6.4/system.linq.dynamic.core.1.6.4.nupkg
  GET https://api.nuget.org/v3-flatcontainer/system.runtime.serialization.formatters/9.0.5/system.runtime.serialization.formatters.9.0.5.nupkg
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggergen/8.1.2/swashbuckle.aspnetcore.swaggergen.8.1.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggerui/8.1.2/swashbuckle.aspnetcore.swaggerui.8.1.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/timezoneconverter/7.0.0/timezoneconverter.7.0.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.aspnetcore.metadata/9.0.1/microsoft.aspnetcore.metadata.9.0.1.nupkg 21ms
  GET https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swagger/8.1.2/swashbuckle.aspnetcore.swagger.8.1.2.nupkg
  GET https://api.nuget.org/v3-flatcontainer/polly.core/8.5.2/polly.core.8.5.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/castle.core/index.json 113ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokenacquisition/3.9.2/microsoft.identity.web.tokenacquisition.3.9.2.nupkg 51ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificate/3.9.2/microsoft.identity.web.certificate.3.9.2.nupkg 51ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.validators/8.11.0/microsoft.identitymodel.validators.8.11.0.nupkg 55ms
  OK https://api.nuget.org/v3-flatcontainer/system.identitymodel.tokens.jwt/8.11.0/system.identitymodel.tokens.jwt.8.11.0.nupkg 40ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggerui/8.1.2/swashbuckle.aspnetcore.swaggerui.8.1.2.nupkg 32ms
  GET https://api.nuget.org/v3-flatcontainer/castle.core/5.2.1/castle.core.5.2.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols.openidconnect/8.11.0/microsoft.identitymodel.protocols.openidconnect.8.11.0.nupkg 39ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.certificateless/3.9.2/microsoft.identity.web.certificateless.3.9.2.nupkg 39ms
  OK https://api.nuget.org/v3-flatcontainer/system.runtime.serialization.formatters/9.0.5/system.runtime.serialization.formatters.9.0.5.nupkg 37ms
  OK https://api.nuget.org/v3-flatcontainer/timezoneconverter/7.0.0/timezoneconverter.7.0.0.nupkg 36ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swagger/8.1.2/swashbuckle.aspnetcore.swagger.8.1.2.nupkg 36ms
  OK https://api.nuget.org/v3-flatcontainer/system.configuration.configurationmanager/9.0.5/system.configuration.configurationmanager.9.0.5.nupkg 45ms
  OK https://api.nuget.org/v3-flatcontainer/system.linq.dynamic.core/1.6.4/system.linq.dynamic.core.1.6.4.nupkg 45ms
  OK https://api.nuget.org/v3-flatcontainer/swashbuckle.aspnetcore.swaggergen/8.1.2/swashbuckle.aspnetcore.swaggergen.8.1.2.nupkg 51ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.tokencache/3.9.2/microsoft.identity.web.tokencache.3.9.2.nupkg 72ms
  OK https://api.nuget.org/v3-flatcontainer/polly.core/8.5.2/polly.core.8.5.2.nupkg 62ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.client/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.jsonwebtokens/index.json
  OK https://api.nuget.org/v3-flatcontainer/castle.core/5.2.1/castle.core.5.2.1.nupkg 59ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.diagnostics/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.client/index.json 44ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.client/4.72.1/microsoft.identity.client.4.72.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.diagnostics/index.json 40ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.client/4.72.1/microsoft.identity.client.4.72.1.nupkg 33ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.diagnostics/3.9.2/microsoft.identity.web.diagnostics.3.9.2.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.abstractions/index.json 55ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.jsonwebtokens/index.json 112ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identity.abstractions/9.1.0/microsoft.identity.abstractions.9.1.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.loggingextensions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.jsonwebtokens/8.11.0/microsoft.identitymodel.jsonwebtokens.8.11.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.web.diagnostics/3.9.2/microsoft.identity.web.diagnostics.3.9.2.nupkg 30ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.openapi/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identity.abstractions/9.1.0/microsoft.identity.abstractions.9.1.0.nupkg 39ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.jsonwebtokens/8.11.0/microsoft.identitymodel.jsonwebtokens.8.11.0.nupkg 30ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/index.json 46ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.loggingextensions/index.json 55ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.openapi/index.json 52ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/8.11.0/microsoft.identitymodel.tokens.8.11.0.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/index.json
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/index.json 65ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.loggingextensions/8.11.0/microsoft.identitymodel.loggingextensions.8.11.0.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/9.0.1/microsoft.extensions.configuration.fileextensions.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/9.0.1/microsoft.extensions.configuration.abstractions.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.openapi/1.6.23/microsoft.openapi.1.6.23.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/9.0.1/microsoft.extensions.configuration.9.0.1.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/8.11.0/microsoft.identitymodel.logging.8.11.0.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/9.0.1/microsoft.extensions.fileproviders.abstractions.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols/index.json 78ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols/8.11.0/microsoft.identitymodel.protocols.8.11.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.fileextensions/9.0.1/microsoft.extensions.configuration.fileextensions.9.0.1.nupkg 27ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.loggingextensions/8.11.0/microsoft.identitymodel.loggingextensions.8.11.0.nupkg 32ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration.abstractions/9.0.1/microsoft.extensions.configuration.abstractions.9.0.1.nupkg 28ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.openapi/1.6.23/microsoft.openapi.1.6.23.nupkg 28ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.abstractions/9.0.1/microsoft.extensions.fileproviders.abstractions.9.0.1.nupkg 26ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.logging/8.11.0/microsoft.identitymodel.logging.8.11.0.nupkg 29ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.tokens/8.11.0/microsoft.identitymodel.tokens.8.11.0.nupkg 50ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.configuration/9.0.1/microsoft.extensions.configuration.9.0.1.nupkg 41ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.protocols/8.11.0/microsoft.identitymodel.protocols.8.11.0.nupkg 29ms
  GET https://api.nuget.org/v3-flatcontainer/system.security.cryptography.protecteddata/index.json
  OK https://api.nuget.org/v3-flatcontainer/system.security.cryptography.protecteddata/index.json 43ms
  GET https://api.nuget.org/v3-flatcontainer/system.security.cryptography.protecteddata/9.0.5/system.security.cryptography.protecteddata.9.0.5.nupkg
  OK https://api.nuget.org/v3-flatcontainer/system.security.cryptography.protecteddata/9.0.5/system.security.cryptography.protecteddata.9.0.5.nupkg 30ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/index.json 7587ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.abstractions/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.physical.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/9.0.1/microsoft.extensions.fileproviders.physical.9.0.1.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/9.0.1/microsoft.extensions.fileproviders.physical.9.0.1.nupkg 48ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.physical.10.0.0-preview.4.25258.110.nupkg 52ms
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.fileproviders.physical/10.0.0-preview.4.25258.110/microsoft.extensions.fileproviders.physical.10.0.0-preview.4.25258.110.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/index.json
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.testplatform.objectmodel/17.14.0/microsoft.testplatform.objectmodel.17.14.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/index.json 56ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.abstractions/index.json 195ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/9.0.1/microsoft.extensions.filesystemglobbing.9.0.1.nupkg
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/index.json
  GET https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/10.0.0-preview.4.25258.110/microsoft.extensions.filesystemglobbing.10.0.0-preview.4.25258.110.nupkg
  GET https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.abstractions/8.11.0/microsoft.identitymodel.abstractions.8.11.0.nupkg
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/10.0.0-preview.4.25258.110/microsoft.extensions.filesystemglobbing.10.0.0-preview.4.25258.110.nupkg 22ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/9.0.1/microsoft.extensions.filesystemglobbing.9.0.1.nupkg 37ms
  OK https://api.nuget.org/v3-flatcontainer/microsoft.identitymodel.abstractions/8.11.0/microsoft.identitymodel.abstractions.8.11.0.nupkg 58ms
  CACHE https://api.nuget.org/v3-flatcontainer/microsoft.extensions.filesystemglobbing/10.0.0-preview.4.25258.110/microsoft.extensions.filesystemglobbing.10.0.0-preview.4.25258.110.nupkg
Installed Microsoft.AspNetCore.Components.Authorization 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.authorization\9.0.1 with content hash CrfhX/TAu/8x4K0l8U0GpniJs28ApWPKH3D+Uww0hRljJdwFdTXjMz4fmoEkt3PgDeXTPS5WOT5oK4HDXqkxkQ==.
Installed Microsoft.AspNetCore.Components.WebAssembly.Authentication 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly.authentication\9.0.1 with content hash Wvm5AVv1vp6/Wos9dxzlb4kYNpOnYxotoxT7owTStNyLZ+TU1KQtReezyvz5vP70w9PfJCRCYUJulxXJygfjTQ==.
Installed Microsoft.Extensions.Caching.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.caching.abstractions\9.0.1 with content hash Eghsg9SyIvq0c8x6cUpe71BbQoOmsytXxqw2+ZNiTnP8a8SBLKgEor1zZeWhC0588IbS2M0PP4gXGAd9qF862Q==.
Installed Microsoft.JSInterop.WebAssembly 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.jsinterop.webassembly\9.0.1 with content hash 4YMLT96BmWT/BUJ2Btqb34DU8ikpLO3SWHQbe13cIXYmvhgBZGX89T9L/dxCfl7ODBnvyuBpa/E0DgcPHwjdHw==.
Installed Microsoft.Extensions.DependencyInjection.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.dependencyinjection.abstractions\9.0.1 with content hash Tr74eP0oQ3AyC24ch17N8PuEkrPbD0JqIfENCYqmgKYNOmL8wQKzLJu3ObxTUDrjnn4rHoR1qKa37/eQyHmCDA==.
Installed Microsoft.Extensions.FileProviders.Physical 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.fileproviders.physical\9.0.1 with content hash TKDMNRS66UTMEVT38/tU9hA63UTMvzI3DyNm5mx8+JCf3BaOtxgrvWLCI1y3J52PzT5yNl/T2KN5Z0KbApLZcg==.
Installed Microsoft.Extensions.Configuration.Json 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.json\9.0.1 with content hash z+g+lgPET1JRDjsOkFe51rkkNcnJgvOK5UIpeTfF1iAi0GkBJz5/yUuTa8a9V8HUh4gj4xFT5WGoMoXoSDKfGg==.
Installed Microsoft.OpenApi 1.6.23 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.openapi\1.6.23 with content hash tZ1I0KXnn98CWuV8cpI247A17jaY+ILS9vvF7yhI0uPPEqF4P1d7BWL5Uwtel10w9NucllHB3nTkfYTAcHAh8g==.
Installed Microsoft.AspNetCore.Components 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components\10.0.0-preview.4.25258.110 with content hash XFL5+O4/NTebxd1YlFKM0gR0LIWPwr8IOSsahTCYrvVrULHIartXQhyyMWLXHFBw39BLJWFOsuFk4Sq7M88lsg==.
Installed bunit 2.0.36-preview from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\bunit\2.0.36-preview with content hash X3UhG/kK72Dsj6aXUa+HMK0rdraWxcp/Z5epto1aE0BeUF+ekG3W3Sx5jIAeIU/mwFFZ2Ft1QbstU3/o9AQ0Fg==.
Installed Microsoft.AspNetCore.Components.Web 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.web\10.0.0-preview.4.25258.110 with content hash SCOHzVU4gfigfiEBjiBKXLQQF+ayD+GXf//mR3SSj1Rh58FOuEhXehiZ9sM0DOc4bnWBNF6brzgqgdrRkOC2Zg==.
Installed Microsoft.Extensions.Configuration.FileExtensions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.fileextensions\9.0.1 with content hash QBOI8YVAyKqeshYOyxSe6co22oag431vxMu5xQe1EjXMkYE4xK4J71xLCW3/bWKmr9Aoy1VqGUARSLFnotk4Bg==.
Installed Microsoft.AspNetCore.Components 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components\9.0.1 with content hash 6pwfbQKNtvPkbF4tCGiAKGyt6BVpu58xAXz7u2YXcUKTNmNxrymbG1mEyMc0EPzVdnquDDqTyfXM3mC1EJycxQ==.
Installed Microsoft.Extensions.FileProviders.Abstractions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.fileproviders.abstractions\10.0.0-preview.4.25258.110 with content hash vgCa7L9eVnullIbE6nezDmr7MahOIUefvKN1G5ORIjX9dcnZLlw9PeriqHQkS1xHCaeqDKob/XkFx86G0Gr2HQ==.
Installed Microsoft.Extensions.FileProviders.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.fileproviders.abstractions\9.0.1 with content hash DguZYt1DWL05+8QKWL3b6bW7A2pC5kYFMY5iXM6W2M23jhvcNa8v6AU8PvVJBcysxHwr9/jax0agnwoBumsSwg==.
Installed Microsoft.IdentityModel.Protocols.OpenIdConnect 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.protocols.openidconnect\8.11.0 with content hash 8zMVhLnAKhr0gaRe2xHmg5YqkEWy4w6A1LnpZthvqr+C3xBDA4a8oedroh7/stcsD4LdG4XDMZIaB2RCf9fx+A==.
Installed Microsoft.Extensions.DependencyInjection 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.dependencyinjection\9.0.1 with content hash qZI42ASAe3hr2zMSA6UjM92pO1LeDq5DcwkgSowXXPY8I56M76pEKrnmsKKbxagAf39AJxkH2DY4sb72ixyOrg==.
Installed Swashbuckle.AspNetCore 8.1.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\swashbuckle.aspnetcore\8.1.2 with content hash GcfwU8slhnC7ZKOGVkGheuyGgwIpqeLI11mtSO5P6cm1ej7U3LF83Okt9Jp76ar2zI7herN2yLcvIgzP63wgPQ==.
Installed Microsoft.AspNetCore.Components.WebAssembly 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly\9.0.1 with content hash ZZwox99qtrzjQMCdpEd0ZZpotxV0Vabj5+FQkja5IHa8EP6EO/LLHx9mEthdBoi56ltXsXjTpgfEGAGPHN7z+Q==.
Installed Microsoft.AspNetCore.Components.Forms 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.forms\9.0.1 with content hash KyULVU32bLz74LWDwPEwNUEllTehzWJuM7YAsz80rMKEzvR0K8cRjRzO0fnN/nfydMeLRRlbI0xj8wnEAymLVw==.
Installed Microsoft.Extensions.Configuration.Abstractions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.abstractions\10.0.0-preview.4.25258.110 with content hash MG9m9h5Ea/XUZn735it7DmOxZNk1xtljdZLYUIiGnduVI+xa3f7Xb3Dhzx+X1nlD8F6hyEFOUHnYWXB0Y6O4lw==.
Installed TimeZoneConverter 7.0.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\timezoneconverter\7.0.0 with content hash sFbY65N/5GdsHx7nkdHFHUG+5Ar4W0w6Aks7Y2X+Q4NOTw6XyX2Il7jm+4tPkc//4mA3nG0RdxI8gKgoJitdLw==.
Installed Microsoft.Extensions.Http 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.http\10.0.0-preview.4.25258.110 with content hash cZuv/RroDpJPjXHi1jnGVADifjrRIarWGuO+JrEkA8MII4p0h24F1/Xu4/1tYhkkl7ToaJGYuUKdIwFiE4vqew==.
Installed Microsoft.ApplicationInsights 2.23.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.applicationinsights\2.23.0 with content hash nWArUZTdU7iqZLycLKWe0TDms48KKGE6pONH2terYNa8REXiqixrMOkf1sk5DHGMaUTqONU2YkS4SAXBhLStgw==.
Installed System.Configuration.ConfigurationManager 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\system.configuration.configurationmanager\9.0.5 with content hash 6JiI15x4eqlHptNG8HqFtQ1NmNTK1hNKuZGECY97deaVpca85XkITo8Me8uCTlKb01egRZGTFA9/kMjewwttPw==.
Installed Microsoft.IdentityModel.Logging 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.logging\8.11.0 with content hash /JNOMdYOQ4Tgbdwu9GbEcRJEpzakizuECCE8dCgY5lKXyqZUdAKXyeq4zITgS81eZYThqjhQZUYaJxOPofbmrg==.
Installed Microsoft.JSInterop 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.jsinterop\9.0.1 with content hash /xBwIfb0YoC2Muv6EsHjxpqZw2aKv94+i0g0FWZvqvGv3DeAy+8wipAuECVvKYEs2EIclRD41bjajHLoD6mTtw==.
Installed FluentAssertions 8.3.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\fluentassertions\8.3.0 with content hash iri1druxHPUAvaFqTUKJG7NOHwnOLmWwfDorgezZWpeBWBJmk2o8niI7jL7zW9TEFGnUpMJi/JLG6FXgr3cM3A==.
Installed Microsoft.AspNetCore.Components.Analyzers 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.analyzers\10.0.0-preview.4.25258.110 with content hash qmIdMxDp80elJmcqH0VL67DiJaQbhjhaN8pmbFGZh7F/ohHgSs+bf/fX2lLDLEDdaj9ccejyqhYd4LDWEr9Zaw==.
Installed Microsoft.Extensions.Options 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.options\9.0.1 with content hash nggoNKnWcsBIAaOWHA+53XZWrslC7aGeok+aR+epDPRy7HI7GwMnGZE8yEsL2Onw7kMOHVHwKcsDls1INkNUJQ==.
Installed Microsoft.Extensions.Diagnostics.Abstractions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.diagnostics.abstractions\10.0.0-preview.4.25258.110 with content hash r3piZW1nOo+nBBcZcMhhHxWOeRi1s2G0KRT/tlj1hX355B1bAtvhMNaOGKn3fhNjwVsqiNRHsKK74BX5aiw7BA==.
Installed Microsoft.Extensions.Primitives 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.primitives\9.0.1 with content hash bHtTesA4lrSGD1ZUaMIx6frU3wyy0vYtTa/hM6gGQu5QNrydObv8T5COiGUWsisflAfmsaFOe9Xvw5NSO99z0g==.
Installed Microsoft.Extensions.Localization.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.localization.abstractions\9.0.1 with content hash CABog43lyaZQMjmlktuImCy6zmAzRBaXqN81uPaMQjlp//ISDVYItZPh6KWpWRF4MY/B67X5oDc3JTUpfdocZw==.
Installed Microsoft.Identity.Abstractions 9.1.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.abstractions\9.1.0 with content hash 6xXC5DLWASaI/eyS7vq4Hs2MtC6wDBpQiMmSvg+KeQUpfOwbwaE/HRvaEB+Ic2DLdHizClPV5yg/HbtwbeGhNQ==.
Installed Microsoft.Identity.Web.Certificateless 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.certificateless\3.9.2 with content hash k4ZiwjAMh+TeoaljNWuT5l32rKcXutOS0ZIp5J8Xs9wc0GYT0u5BlxVGhcH+KMmGl2jSNB6vuQe9/Ip1jshUzQ==.
Installed Castle.Core 5.2.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\castle.core\5.2.1 with content hash wHARzQA695jwwKreOzNsq54KiGqKP38tv8hi8e2FXDEC/sA6BtrX90tVPDkOfVu13PbEzr00TCV8coikl+D1Iw==.
Installed System.Runtime.Serialization.Formatters 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\system.runtime.serialization.formatters\9.0.5 with content hash G4lMyCxylv0wdrmtDlJwgV8XjAHeMcTyBgRwSABSSRMr2ILEwgYdFKaybBYqMXgZLhFIbFom86g03QmBbsc7VA==.
Installed Serilog.Sinks.Console 6.0.1-dev-00953 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog.sinks.console\6.0.1-dev-00953 with content hash Goi2B0Je0X0NvWYUi0SiU9MJNF2957Kfjmc6VPZ2hNl6Lmj9he6laxmDuQU/c0fBdAFnNiEUPPcHd/NJVyfbkA==.
Installed Microsoft.AspNetCore.Components.Authorization 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.authorization\10.0.0-preview.4.25258.110 with content hash NpHFcD1QPJxQhV9hz5OJjt3iAuqVUXn4jTgSVWRXwKv4ryAKdIlXhywgMfb1p1rXzc29nHpfVdNPSVb3uxYH7g==.
Installed Microsoft.Extensions.Configuration.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.abstractions\9.0.1 with content hash +4hfFIY1UjBCXFTTOd+ojlDPq6mep3h5Vq5SYE3Pjucr7dNXmq4S/6P/LoVnZFz2e/5gWp/om4svUFgznfULcA==.
Installed Microsoft.AspNetCore.Metadata 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.metadata\10.0.0-preview.4.25258.110 with content hash UaWl3zTwaoSPjTf3xGVXJFDcRV6piXfVtsAg+7Lxowp5qzpbLdBkgHPw9uQF5zyqiZoaxoEEEkcf6R3fHsvokw==.
Installed Microsoft.AspNetCore.Components.Forms 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.forms\10.0.0-preview.4.25258.110 with content hash rh3YUL5mz2WjPa28zTcghMvAJkkzWjRjVaueSMbbYpQl+w4uCEQdPcFuhnzH3/7OnC3oYnP4BDYEhvDUr/lw0A==.
Installed Microsoft.AspNetCore.Components.Web 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.web\9.0.5 with content hash llh2dh9rR9JcnAMqvbijc9BzEnVhloQwKF8Kvfw73N2tJMnUJoxF3C9Ln1sao+nkZo3IpUuUu3k2czLOpS3NRQ==.
Installed Microsoft.AspNetCore.Components.Analyzers 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.analyzers\9.0.1 with content hash I8Rs4LXT5UQxM5Nin2+Oj8aSY2heszSZ3EyTLgt3mxmfiRPrVO7D8NNSsf1voI2Gb0qFJceof/J5c9E+nfNuHw==.
Installed Microsoft.Extensions.Configuration 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration\9.0.1 with content hash VuthqFS+ju6vT8W4wevdhEFiRi1trvQtkzWLonApfF5USVzzDcTBoY3F24WvN/tffLSrycArVfX1bThm/9xY2A==.
Installed Serilog.Settings.Configuration 9.0.1-dev-02317 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog.settings.configuration\9.0.1-dev-02317 with content hash 1/PPRG1VvYCuFJL8Dc7lkpHNFRZq6n0cwy976CgK21qRwmAIR2GgEkzIc9LZw8TVlvSmoUhZRyeBoU7bB9TjIw==.
Installed Microsoft.JSInterop 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.jsinterop\10.0.0-preview.4.25258.110 with content hash Le9i7ERa7P84mHUIAZuB1JTNYBHxD7KAwpdj9Tv0QigSvjhxYTdDarCD/hT3J+z3PEqmk8GHFqidGRJWjaw3Rg==.
Installed Microsoft.TestPlatform.TestHost 17.14.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.testplatform.testhost\17.14.0 with content hash 8htQBKM92s/NXUI/U0/CKKLlvlDfWIo3/mbnY/GS/2XLkBGNIVQufmUpDIzznaZqUpdzspGSsJcLhVN8aRoMaA==.
Installed Microsoft.Authentication.WebAssembly.Msal 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.authentication.webassembly.msal\10.0.0-preview.4.25258.110 with content hash WzSTF/qBE7kNVuMfp3VJU9B+mtM6iW148hUMvs6h8uGICyxrYVZ/prtW4JXdxzGy4zoj4JSR7ECMe2M9ShWMxA==.
Installed Microsoft.Extensions.Logging 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.logging\9.0.1 with content hash E/k5r7S44DOW+08xQPnNbO8DKAQHhkspDboTThNJ6Z3/QBb4LC6gStNWzVmy3IvW7sUD+iJKf4fj0xEkqE7vnQ==.
Installed Microsoft.Extensions.FileSystemGlobbing 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.filesystemglobbing\9.0.1 with content hash Mxcp9NXuQMvAnudRZcgIb5SqlWrlullQzntBLTwuv0MPIJ5LqiGwbRqiyxgdk+vtCoUkplb0oXy5kAw1t469Ug==.
Installed Microsoft.AspNetCore.Authorization 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.authorization\9.0.1 with content hash WgLlLBlMczb2+QLNG6sM95OUZ0EBztz60k/N75tjIgpyu0SdpIfYytAmX/7JJAjRTZF0c/CrWaQV+SH9FuGsrA==.
Installed Microsoft.Extensions.Caching.Memory 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.caching.memory\9.0.1 with content hash JeC+PP0BCKMwwLezPGDaciJSTfcFG4KjsG8rX4XZ6RSvzdxofrFmcnmW2L4+cWUcZSBTQ+Dd7H5Gs9XZz/OlCA==.
Installed Microsoft.Extensions.Diagnostics 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.diagnostics\10.0.0-preview.4.25258.110 with content hash BTzSyrE3jvUkUZ7HUyHfEzpw3ZuieWXq6m58jZAqLANFcfjUa+AAZrs5ncsLnA1u6shyAMzyZrl4QqsHpSrmxA==.
Installed Microsoft.Extensions.Configuration.Binder 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.binder\9.0.1 with content hash w7kAyu1Mm7eParRV6WvGNNwA8flPTub16fwH49h7b/yqJZFTgYxnOVCuiah3G2bgseJMEq4DLjjsyQRvsdzRgA==.
Installed Microsoft.AspNetCore.Components 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components\9.0.5 with content hash qwA9bx7nWayh1ogWe1H13vyGL64pNjHrukHmnZ9WZbQPtHeY9QTuXkvF/Uue0tzGbxChBf9v2LH5+KeVaRJIqw==.
Installed Microsoft.Extensions.Options.ConfigurationExtensions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.options.configurationextensions\10.0.0-preview.4.25258.110 with content hash RweH4vI1c07zGdQ60hmnH8mK3B6Ea9FSvo9oXEeeFeoYGRjpNx+JYmPdlGaH3kEJTHK9pNQv5tlnGzMk3mTXZQ==.
Installed Microsoft.Extensions.Configuration.Json 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.json\10.0.0-preview.4.25258.110 with content hash WeAl49iGalcQQnkHJEkYjdje/4fhr3D29aeLMNH4AFVD6T6TZ2KGRHmazZ21JyE+DThgtCoUvwfpODiNjkY3GA==.
Installed Microsoft.Extensions.Configuration.UserSecrets 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.usersecrets\10.0.0-preview.4.25258.110 with content hash G0ZlqepNRMfHmPU8XNjWUiZ//Gyl8/Z9ruEBf6h6Gvsc2a1TB+HsGjEuzSOrhZYKE8QdKM2F3Dxy5koBgurMFQ==.
Installed Microsoft.AspNetCore.Authentication.OpenIdConnect 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.authentication.openidconnect\10.0.0-preview.4.25258.110 with content hash ZRxdby80hU5pFKTxCSd5jWEq0ykFBCToWV2tYuz3jspiv8aja/yQLC+YN+7m7H8AMZIQOYDpT4J2LtnBLrPS7A==.
Installed Microsoft.Extensions.Configuration.Binder 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.binder\10.0.0-preview.4.25258.110 with content hash PicqcEwMqwJ4EhwDgOX4mracnv/5hu6H4NRabs/LPPlrqZ21w1S3OgrtTc51v7QZsFgyPcL44I+gudZW83A6pQ==.
Installed Microsoft.AspNetCore.Authorization 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.authorization\10.0.0-preview.4.25258.110 with content hash maOmb/KStJNT+r6IVh7s/R8Vt1G5F7tk9QVzqhUI///qVT1d41pGPD6qlzP+C4TpSWJbs9wMT+LqXiDyfF4GbQ==.
Installed Microsoft.TestPlatform.ObjectModel 17.14.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.testplatform.objectmodel\17.14.0 with content hash 3h7y7f/HuY8jdZa163p/55VmGw/fYJwrI8FOtsp4aEQAJaPgBr5LBS25uOfBwRYI95QDiByfaqSPBcWEvuHEwA==.
Installed System.Linq.Dynamic.Core 1.6.4 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\system.linq.dynamic.core\1.6.4 with content hash 8+/9Iux+i/IJ9L4FdwGM7ilMCeif3cKw8iB4dXgCBtn67fkr7KuXEGTc05d52tgaUQpnmNr4TIFscmyiKWL84g==.
Installed coverlet.collector 6.0.4 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\coverlet.collector\6.0.4 with content hash lkhqpF8Pu2Y7IiN7OntbsTtdbpR1syMsm2F3IgX6ootA4ffRqWL5jF7XipHuZQTdVuWG/gVAAcf8mjk8Tz0xPg==.
Installed Microsoft.Extensions.FileProviders.Physical 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.fileproviders.physical\10.0.0-preview.4.25258.110 with content hash SoEhizumgc3mn+h6Cz2ODiVuGS8/fAIMW2rbTiBg7AUwzmSy6zd5zN47IvOpgvR1f9mcbHTceRgxgAOv9/LewQ==.
Installed Microsoft.AspNetCore.Components.WebAssembly 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly\10.0.0-preview.4.25258.110 with content hash oc+38pAz2xiisHw6LSccRH1a3c1n4BGCoVjxVp8E7AaiqED9ohaaLxnblBc+aywnQLlV/hJG4u0VDlHcqMy38A==.
Installed Microsoft.AspNetCore.Components.Web 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.web\9.0.1 with content hash LI0vjYEd9MaDZPDQxPCn4gGYDkEC5U9rp1nWZo7rPozJxgTG2zU3WERujxTi2LeAC2ZzdXlOVCrUyPQ55LZV2A==.
Installed Microsoft.Identity.Web.Diagnostics 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.diagnostics\3.9.2 with content hash aGYi7PV3UKvJi40YwrCrU8Q+hhFDZXay+PQDFkeFuXIMgNeWTGpJVwJvX0OT6cZBLYfj7/4Z4C9AsC+JXXP95A==.
Installed Microsoft.Extensions.Configuration.FileExtensions 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration.fileextensions\10.0.0-preview.4.25258.110 with content hash ux7QHPgX2Bsd+cE9fQvDSYQ6WxYpkJexwJz1tDeUeOib29/H7HemgYofDHu+ZL3HbXlPbVRCD4syzhl8TQpUkQ==.
Installed Microsoft.JSInterop.WebAssembly 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.jsinterop.webassembly\10.0.0-preview.4.25258.110 with content hash 9Ht5zjbwy3J3BwbLZZg50Ce364HYOP5sehRX2TrCdEvrtMROr5eovgCQRdvBn2kpmMlo+jug22kvyGHRVBvR9g==.
Installed Microsoft.Extensions.FileSystemGlobbing 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.filesystemglobbing\10.0.0-preview.4.25258.110 with content hash XVvw2x5YRgvjfdjhIEEdcv/St6UFIXjGA9+IZexjdUCK/YF/ETJAu+5uwo8bfr9MupjL3FCESaSzNn/HUlAF+Q==.
Installed Microsoft.AspNetCore.Metadata 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.metadata\9.0.1 with content hash EZnHifamF7IFEIyjAKMtJM3I/94OIe72i3P09v5oL0twmsmfQwal6Ni3m8lbB5mge3jWFhMozeW+rUdRSqnXRQ==.
Installed Microsoft.NET.Test.Sdk 17.14.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.net.test.sdk\17.14.0 with content hash rTtdOm6C96q9QgP3mS8nUGPGPh5Xm2HnBYJggNmNrJ3LDmX9lJuUIgnJEfvX6wSQY4swUMiCcIXd3OkjhYCgtw==.
Installed Microsoft.AspNetCore.Components.WebAssembly.Authentication 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly.authentication\10.0.0-preview.4.25258.110 with content hash LlyriZLbZ+dPuDBXW7m2oTH/W2WvndjKlRMfpw7ae5oHh0oL6nlE/agJgadZWQNuYqEtJJy40rof8Dq3HstCaQ==.
Installed Microsoft.Extensions.Configuration 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.configuration\10.0.0-preview.4.25258.110 with content hash l7/T9aX3JrTSx/LR8wjxU+6h13gzBIF4tGg64D+Oo+41YgHuS8Cm8+QModHs/m402hAgz9qk4XiT0Ff6b8UAaA==.
Installed Microsoft.Identity.Client 4.72.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.client\4.72.1 with content hash U3FbgYeKbU34zP17vi4xO70U5WiVO4GcqHbGwfqzAGJMQQfzkdEK5Ue69mI1tWj7Ft2lbJJ9Wsho9/6Jn5OKqQ==.
Installed xunit.runner.visualstudio 3.1.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\xunit.runner.visualstudio\3.1.0 with content hash K9O9TOzugqOo4LJ87uuq1VG8RAqGp20Ng85Wx932oT5LNBkIgeeGYubVW5UMnOOTanFNbGavmbuYrJr4INzSwg==.
Installed Serilog.Sinks.File 7.0.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog.sinks.file\7.0.0 with content hash fKL7mXv7qaiNBUC71ssvn/dU0k9t0o45+qm2XgKAlSt19xF+ijjxyA3R6HmCgfKEKwfcfkwWjayuQtRueZFkYw==.
Installed System.IdentityModel.Tokens.Jwt 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\system.identitymodel.tokens.jwt\8.11.0 with content hash fDPoJMD4/puOlYaOESFCZNKy8X5Cw7URr9ibcHe0Qq3SrGhku9xVSxeXSNAP9RRahFQ/GbLfqO9AN1XD3Nxacw==.
Installed Serilog.Sinks.ApplicationInsights 4.1.0-dev-02304 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog.sinks.applicationinsights\4.1.0-dev-02304 with content hash D6gyOE1fVJJiVihXX2r5Cxrms/eOfJO2EmylssGLEQi0YNCrTBV6bX1qgkRwG7l9KfqKrODMPU6Jc6GGmRjYrw==.
Installed System.Security.Cryptography.ProtectedData 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\system.security.cryptography.protecteddata\9.0.5 with content hash tgS+q4zR08qX4ZA/HPtpNXU2i1EDRBNhNtbTGFdSgYyWcKf5mUtlihbzKcYqArisG1b3x4dk/FIOiWxnHrSENw==.
Installed FluentValidation 12.0.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\fluentvalidation\12.0.0 with content hash 8NVLxtMUXynRHJIX3Hn1ACovaqZIJASufXIIFkD0EUbcd5PmMsL1xUD5h548gCezJ5BzlITaR9CAMrGe29aWpA==.
Installed Microsoft.Identity.Web.UI 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.ui\3.9.2 with content hash abSNMUp0F3r+JW2fbkJQbwuoEBJY3sDXtTIrlEWgmEsfO8AdC+14Y2JyENO6AvQ0hzX9O6oAuvSz5yAGZNfvQw==.
Installed Microsoft.IdentityModel.LoggingExtensions 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.loggingextensions\8.11.0 with content hash 263OKo8C1EOaO4rofjYQ5MGuxAL9olASIsMwy5TTOhto+Tk7oFcWXmiSCDPUKZsAmjJ/zZW34cxT0gcZ8VWjDw==.
Installed Microsoft.AspNetCore.Authorization 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.authorization\9.0.5 with content hash HPd+7PG+nMZSP13bTJuM5+q0vdzoBtjoBUMP9iuUGwG/kFHkeBOZ9QrZuSHHGmz/IgYdLbqbdJGEykSI5biIPw==.
Installed Microsoft.IdentityModel.Protocols 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.protocols\8.11.0 with content hash OA5PAHKhwZqVLuFtLUfsE78VgRSxZIQhgKERL/Wj1/1oQT8M1jEjJsAJ/Rkw2wsQU6qbk+4OyHej5h9oMIxD5Q==.
Installed Microsoft.AspNetCore.Components.Analyzers 9.0.5 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.analyzers\9.0.5 with content hash u9dQP0/bjkTVHFHVBV+8TYpBVerjbFfvD3nwwOfaoJ8VmyCHoBFbD8m4nxV+rfu+jVLe2FQF4skjHZLIjjFbyQ==.
Installed Microsoft.AspNetCore.Authentication.JwtBearer 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.authentication.jwtbearer\10.0.0-preview.4.25258.110 with content hash FzxHF6roNxg46Or8z/Cy3gCMRQ2JMAUfG8NiMLGCbBbrjAjmndHyaTh/23MJybZMWgIhbq29WPMHyoTcQd+ysw==.
Installed Microsoft.Identity.Web.Certificate 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.certificate\3.9.2 with content hash 8V1ymCgsYO7oz4Ucu4uahVvdC76qGk4mmI9fx7n4tuGPR3Cm7yx4Zs4NinZnIswQ4t2mMnncfqqmlhpJ/v1sJg==.
Installed Microsoft.Identity.Web 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web\3.9.2 with content hash uyp5/6RIwDCd8P+8y6TQJMpiyd4crehn/V54rHjl4brQbEtcKDi8sdFdNzdXnO5s5WCarh4s1t+298B6Ne4o0Q==.
Installed Microsoft.IdentityModel.Validators 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.validators\8.11.0 with content hash HC0Q35bBycbOHJiRT+uWoLTeEI9CrtGyo+EFxE4lWPK91jfpdeMa0Yqw0Xfi7/GPVttTOqkEGa1N1atUIbBCkw==.
Installed Swashbuckle.AspNetCore.SwaggerUI 8.1.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\swashbuckle.aspnetcore.swaggerui\8.1.2 with content hash qsGf333N+sa2XmxqU287HZEP/W1OrPwk2DpXHb0fL2PhXj5fatUv50ExePJb7yiA6kpKLVpGReJD0tj2Kai1CA==.
Installed Polly 8.5.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\polly\8.5.2 with content hash vbXsGgkG86nG+TOwY+SmtrGrRHmHH0DQaxtILx//d3Dz/ocJ8izSNYzdvU2gEtWa/LDD8zJLvD3HdjEkdlvkhg==.
Installed Swashbuckle.AspNetCore.SwaggerGen 8.1.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\swashbuckle.aspnetcore.swaggergen\8.1.2 with content hash R91Wt4NpBJAgkx924Scv22WC80NmZH1VMgUNbmvqNfXE3H07noA4Q8wUMkBwJehQiRJr3Ts519JoScKazbLcww==.
Installed Microsoft.Extensions.Logging.Abstractions 9.0.1 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.extensions.logging.abstractions\9.0.1 with content hash w2gUqXN/jNIuvqYwX3lbXagsizVNXYyt6LlF57+tMve4JYCEgCMMAjRce6uKcDASJgpMbErRT1PfHy2OhbkqEA==.
Installed Swashbuckle.AspNetCore.Swagger 8.1.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\swashbuckle.aspnetcore.swagger\8.1.2 with content hash 5GTvC2Lbv3LnEHllm4N3LxpRSrDkVSBjUPlPHg3oIN7VJhxxuysYuTXzS2hExf3tuCPsTa5/TaDoCzfBlI05SQ==.
Installed Abp 10.2.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\abp\10.2.0 with content hash 1FCq0ULG0jHc4OMgd98Yraolfrev/0LVzRl4qGRvVn8StAPxpaspth4i2K8R7GbsjTs/cHFc5bBanqX4BYRTFQ==.
Installed Serilog 4.3.1-dev-02373 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog\4.3.1-dev-02373 with content hash f0HNPaleOox5++8zqxAdi9afnUUkoznLOmd0ur/UnLbzl8bIaPyyBGOpbIJmC1kz2vHfkQ0fXh6KXMdlz7bcLQ==.
Installed MediatR 12.5.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\mediatr\12.5.0 with content hash vqm2H8/nqL5NAJHPhsG1JOPwfkmbVrPyh4svdoRzu+uZh6Ex7PRoHBGsLYC0/RWCEJFqD1ohHNpteQvql9OktA==.
Installed Microsoft.IdentityModel.Tokens 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.tokens\8.11.0 with content hash E0iKSD9vv9X+tbHGriMTLkSNK/OOjxOPuf1dt9q32d25Ig+OZaidUqDoUTSS3mWTvPw+x5oXrCTHtDatbzRzTQ==.
Installed Microsoft.IdentityModel.JsonWebTokens 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.jsonwebtokens\8.11.0 with content hash rLvApg2vqs/Kz5kVHwHUMAe3owInYrsPX8QP8CQktubX9R63P+J47nR/IOS4n6ddJCvGInUGRBKqcBGJtuA4Rw==.
Installed Polly.Core 8.5.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\polly.core\8.5.2 with content hash 1MJKdxv4zwDmiWvYvVN24DsrWUfgQ4F83voH8bhbtLMdPuGy8CfTUzsgQhvyrl1a7hrM6f/ydwLVdVUI0xooUw==.
Installed Microsoft.Identity.Web.TokenCache 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.tokencache\3.9.2 with content hash MNr7ml/H3qp0WPN7FnBOAbefDqWHoeIF+F9HYA/xjJwB+TUau9CgNhsK/AA9mZUPHEX3FYXPU11XjtE1AWP9ew==.
Installed Microsoft.IdentityModel.Abstractions 8.11.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identitymodel.abstractions\8.11.0 with content hash X92UuBmvHYtsVrD+R+senFn6wOtSVtliSZNTZI8oHD+WqhYLmLNlHH6avYcbXqEznozxshSYzD/DVAuz54jjtg==.
Installed Serilog.Extensions.Hosting 9.0.1-dev-02307 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\serilog.extensions.hosting\9.0.1-dev-02307 with content hash bBx2sEozyzXTv+nysstxgUxHOWbAx/viJ/SmM4ELLhjEHjj+KfGOpn2c0hn0Wb6x+9OZ3bVESsZmhtPLr4gLKw==.
Installed Microsoft.Identity.Web.TokenAcquisition 3.9.2 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.identity.web.tokenacquisition\3.9.2 with content hash ZXahy7mt1h+tc06+FmdYXqDkM/G+7IZArj8dWG3QLHDWiO04HHgn8axQk3M6dUY9F6pecc0DFi0BDkWaUW55Qw==.
Installed Radzen.Blazor 7.0.7 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\radzen.blazor\7.0.7 with content hash dyXrdQucd7r7VbjGhAeAXCjv8sREoZ20oJhSv1yAnwWPtck0T+HXDlEtCj2iNmudONE8V+/QB8hvYeCsPc9V8g==.
Installed Microsoft.AspNetCore.Components.WebAssembly.Server 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly.server\10.0.0-preview.4.25258.110 with content hash /Tb2+1fwe2yEU2ptfICz0f5M97qHmwYyenK+uBAumb/J/cxAHQXOsqAj34uLdIBhXTVFWAILN5jnufA3RSKJww==.
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
Installed Microsoft.CodeCoverage 17.14.0 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.codecoverage\17.14.0 with content hash z2GYXGG6LjGoumT59xSB2dMnqSwQBjkxdDJmSJHwy5nPtZ435GXa6wj5hz/lRrAZ7NyXXxZNXVsiHXzHRru5eA==.
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
Installed Microsoft.AspNetCore.Components.WebAssembly.DevServer 10.0.0-preview.4.25258.110 from https://api.nuget.org/v3/index.json to C:\Users\kushal\.nuget\packages\microsoft.aspnetcore.components.webassembly.devserver\10.0.0-preview.4.25258.110 with content hash V1WWg0prE7NkA2vflH6jdOsHBA8riPWF/AizgUp5sIcCOJgOYkjjeOkHO0P425YzaXQw3yoLkandTqCzmOjGDw==.
  CACHE https://api.nuget.org/v3/vulnerabilities/index.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/vulnerability.base.json
  CACHE https://api.nuget.org/v3-vulnerabilities/2025.05.28.05.39.59/2025.05.30.05.40.06/vulnerability.update.json
Installing NuGet package Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110.
Installing NuGet package Npgsql.EntityFrameworkCore.PostgreSQL 10.0.0-preview.3.
Generating MSBuild file C:\code\callcenter\Data\obj\CallCenter.Data.csproj.nuget.g.props.
Generating MSBuild file C:\code\callcenter\Data\obj\CallCenter.Data.csproj.nuget.g.targets.
Writing assets file to disk. Path: C:\code\callcenter\Data\obj\project.assets.json
Successfully uninstalled 'Microsoft.EntityFrameworkCore 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.EntityFrameworkCore.Abstractions 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.EntityFrameworkCore.Analyzers 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.EntityFrameworkCore.Relational 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Caching.Abstractions 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Caching.Memory 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Configuration.Abstractions 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection.Abstractions 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Logging 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Logging.Abstractions 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Options 9.0.0' from CallCenter.Data
Successfully uninstalled 'Microsoft.Extensions.Primitives 9.0.0' from CallCenter.Data
Successfully uninstalled 'Npgsql 9.0.2' from CallCenter.Data
Successfully uninstalled 'Npgsql.EntityFrameworkCore.PostgreSQL 9.0.2' from CallCenter.Data
Successfully installed 'Microsoft.EntityFrameworkCore 10.0.0-preview.3.25171.6' to CallCenter.Data
Successfully installed 'Microsoft.EntityFrameworkCore.Abstractions 10.0.0-preview.3.25171.6' to CallCenter.Data
Successfully installed 'Microsoft.EntityFrameworkCore.Relational 10.0.0-preview.3.25171.6' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Caching.Abstractions 10.0.0-preview.3.25171.5' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Caching.Memory 10.0.0-preview.3.25171.5' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Configuration.Abstractions 10.0.0-preview.3.25171.5' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.DependencyInjection 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.DependencyInjection.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Logging.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Options 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Microsoft.Extensions.Primitives 10.0.0-preview.4.25258.110' to CallCenter.Data
Successfully installed 'Npgsql 9.0.3' to CallCenter.Data
Successfully installed 'Npgsql.EntityFrameworkCore.PostgreSQL 10.0.0-preview.3' to CallCenter.Data
Executing nuget actions took 301 ms
Installing NuGet package Microsoft.AspNetCore.Components.WebAssembly 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.AspNetCore.Components.WebAssembly.DevServer 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.Authentication.WebAssembly.Msal 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.Extensions.Http 10.0.0-preview.4.25258.110.
Installing NuGet package Radzen.Blazor 7.0.7.
Generating MSBuild file C:\code\callcenter\Client\obj\CallCenter.Client.csproj.nuget.g.props.
Generating MSBuild file C:\code\callcenter\Client\obj\CallCenter.Client.csproj.nuget.g.targets.
Writing assets file to disk. Path: C:\code\callcenter\Client\obj\project.assets.json
Successfully uninstalled 'DartSassBuilder 1.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Authorization 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.Analyzers 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.Authorization 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.Forms 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.Web 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly.Authentication 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly.DevServer 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.AspNetCore.Metadata 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Authentication.WebAssembly.Msal 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Configuration 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Configuration.Abstractions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Configuration.Binder 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Configuration.FileExtensions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Configuration.Json 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection.Abstractions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Diagnostics 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Diagnostics.Abstractions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Abstractions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Physical 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.FileSystemGlobbing 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Http 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Logging 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Logging.Abstractions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Options 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Options.ConfigurationExtensions 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.Extensions.Primitives 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.JSInterop 9.0.0' from CallCenter.Client
Successfully uninstalled 'Microsoft.JSInterop.WebAssembly 9.0.0' from CallCenter.Client
Successfully uninstalled 'Radzen.Blazor 5.7.5' from CallCenter.Client
Successfully uninstalled 'System.Linq.Dynamic.Core 1.3.7' from CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Authorization 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.Analyzers 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.Authorization 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.Forms 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.Web 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly.Authentication 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly.DevServer 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.AspNetCore.Metadata 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Authentication.WebAssembly.Msal 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Configuration 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Configuration.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Configuration.Binder 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Configuration.FileExtensions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Configuration.Json 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.DependencyInjection 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.DependencyInjection.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Diagnostics 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Diagnostics.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.FileProviders.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.FileProviders.Physical 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.FileSystemGlobbing 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Http 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Logging.Abstractions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Options 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Options.ConfigurationExtensions 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.Extensions.Primitives 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.JSInterop 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Microsoft.JSInterop.WebAssembly 10.0.0-preview.4.25258.110' to CallCenter.Client
Successfully installed 'Radzen.Blazor 7.0.7' to CallCenter.Client
Executing nuget actions took 739 ms
Installing NuGet package Abp 10.2.0.
Installing NuGet package FluentValidation 12.0.0.
Installing NuGet package MediatR 12.5.0.
Installing NuGet package Microsoft.AspNetCore.Authentication.JwtBearer 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.AspNetCore.Authentication.OpenIdConnect 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.AspNetCore.Components.WebAssembly.Server 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.Identity.Web 3.9.2.
Installing NuGet package Microsoft.Identity.Web.UI 3.9.2.
Installing NuGet package Polly 8.5.2.
Installing NuGet package Serilog 4.3.1-dev-02373.
Installing NuGet package Serilog.Extensions.Hosting 9.0.1-dev-02307.
Installing NuGet package Serilog.Settings.Configuration 9.0.1-dev-02317.
Installing NuGet package Serilog.Sinks.ApplicationInsights 4.1.0-dev-02304.
Installing NuGet package Serilog.Sinks.Console 6.0.1-dev-00953.
Installing NuGet package Serilog.Sinks.File 7.0.0.
Installing NuGet package Swashbuckle.AspNetCore 8.1.2.
Generating MSBuild file C:\code\callcenter\Server\obj\CallCenter.Server.csproj.nuget.g.props.
Generating MSBuild file C:\code\callcenter\Server\obj\CallCenter.Server.csproj.nuget.g.targets.
Writing assets file to disk. Path: C:\code\callcenter\Server\obj\project.assets.json
Successfully uninstalled 'Abp 10.0.0' from CallCenter.Server
Successfully uninstalled 'Castle.Core 5.1.1' from CallCenter.Server
Successfully uninstalled 'FluentValidation 11.11.0' from CallCenter.Server
Successfully uninstalled 'Humanizer 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.af 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ar 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.az 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.bg 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.bn-BD 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.cs 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.da 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.de 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.el 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.es 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.fa 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.fi-FI 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.fr 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.fr-BE 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.he 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.hr 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.hu 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.hy 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.id 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.is 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.it 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ja 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ko-KR 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ku 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.lv 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ms-MY 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.mt 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.nb 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.nb-NO 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.nl 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.pl 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.pt 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ro 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.ru 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.sk 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.sl 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.sr 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.sr-Latn 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.sv 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.th-TH 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.tr 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.uk 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.uz-Cyrl-UZ 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.uz-Latn-UZ 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.vi 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.zh-CN 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.zh-Hans 2.14.1' from CallCenter.Server
Successfully uninstalled 'Humanizer.Core.zh-Hant 2.14.1' from CallCenter.Server
Successfully uninstalled 'MediatR 12.4.1' from CallCenter.Server
Successfully uninstalled 'Microsoft.ApplicationInsights 2.20.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.AspNetCore.Authentication.JwtBearer 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.AspNetCore.Authentication.OpenIdConnect 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly.Server 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.AspNetCore.Razor.Language 6.0.24' from CallCenter.Server
Successfully uninstalled 'Microsoft.Bcl.AsyncInterfaces 7.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Build 17.10.4' from CallCenter.Server
Successfully uninstalled 'Microsoft.Build.Framework 17.10.4' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Analyzers 3.3.4' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.AnalyzerUtilities 3.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Common 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.CSharp 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.CSharp.Features 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.CSharp.Workspaces 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Elfie 1.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Features 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Razor 6.0.24' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Scripting.Common 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.CodeAnalysis.Workspaces.Common 4.8.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.DiaSymReader 2.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.DotNet.Scaffolding.Shared 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Abstractions 7.2.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Client 4.66.1' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.Certificate 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.Certificateless 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.Diagnostics 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.TokenAcquisition 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.TokenCache 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.Identity.Web.UI 3.5.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Abstractions 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.JsonWebTokens 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Logging 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.LoggingExtensions 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Protocols 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Protocols.OpenIdConnect 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Tokens 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.IdentityModel.Validators 8.3.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.NET.StringTools 17.10.4' from CallCenter.Server
Successfully uninstalled 'Microsoft.OpenApi 1.6.22' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration.Core 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration.Design 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration.EntityFrameworkCore 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration.Templating 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGeneration.Utils 9.0.0' from CallCenter.Server
Successfully uninstalled 'Microsoft.VisualStudio.Web.CodeGenerators.Mvc 9.0.0' from CallCenter.Server
Successfully uninstalled 'Mono.TextTemplating 3.0.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Common 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Configuration 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.DependencyResolver.Core 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Frameworks 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.LibraryModel 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Packaging 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.ProjectModel 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Protocol 6.11.0' from CallCenter.Server
Successfully uninstalled 'NuGet.Versioning 6.11.0' from CallCenter.Server
Successfully uninstalled 'Polly 8.5.0' from CallCenter.Server
Successfully uninstalled 'Polly.Core 8.5.0' from CallCenter.Server
Successfully uninstalled 'Serilog 4.2.0' from CallCenter.Server
Successfully uninstalled 'Serilog.Extensions.Hosting 9.0.0' from CallCenter.Server
Successfully uninstalled 'Serilog.Settings.Configuration 9.0.0' from CallCenter.Server
Successfully uninstalled 'Serilog.Sinks.ApplicationInsights 4.0.0' from CallCenter.Server
Successfully uninstalled 'Serilog.Sinks.Console 6.0.0' from CallCenter.Server
Successfully uninstalled 'Serilog.Sinks.File 6.0.0' from CallCenter.Server
Successfully uninstalled 'Swashbuckle.AspNetCore 7.2.0' from CallCenter.Server
Successfully uninstalled 'Swashbuckle.AspNetCore.Swagger 7.2.0' from CallCenter.Server
Successfully uninstalled 'Swashbuckle.AspNetCore.SwaggerGen 7.2.0' from CallCenter.Server
Successfully uninstalled 'Swashbuckle.AspNetCore.SwaggerUI 7.2.0' from CallCenter.Server
Successfully uninstalled 'System.CodeDom 6.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition.AttributedModel 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition.Convention 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition.Hosting 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition.Runtime 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Composition.TypedParts 7.0.0' from CallCenter.Server
Successfully uninstalled 'System.Configuration.ConfigurationManager 9.0.0' from CallCenter.Server
Successfully uninstalled 'System.Data.DataSetExtensions 4.5.0' from CallCenter.Server
Successfully uninstalled 'System.IdentityModel.Tokens.Jwt 8.3.0' from CallCenter.Server
Successfully uninstalled 'System.Linq.Dynamic.Core 1.4.8' from CallCenter.Server
Successfully uninstalled 'System.Reflection.MetadataLoadContext 8.0.0' from CallCenter.Server
Successfully uninstalled 'System.Runtime.Serialization.Formatters 9.0.0' from CallCenter.Server
Successfully uninstalled 'System.Security.Cryptography.ProtectedData 9.0.0' from CallCenter.Server
Successfully uninstalled 'TimeZoneConverter 6.1.0' from CallCenter.Server
Successfully installed 'Abp 10.2.0' to CallCenter.Server
Successfully installed 'Castle.Core 5.2.1' to CallCenter.Server
Successfully installed 'FluentValidation 12.0.0' to CallCenter.Server
Successfully installed 'MediatR 12.5.0' to CallCenter.Server
Successfully installed 'Microsoft.ApplicationInsights 2.23.0' to CallCenter.Server
Successfully installed 'Microsoft.AspNetCore.Authentication.JwtBearer 10.0.0-preview.4.25258.110' to CallCenter.Server
Successfully installed 'Microsoft.AspNetCore.Authentication.OpenIdConnect 10.0.0-preview.4.25258.110' to CallCenter.Server
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly.Server 10.0.0-preview.4.25258.110' to CallCenter.Server
Successfully installed 'Microsoft.Bcl.AsyncInterfaces 1.1.1' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Abstractions 9.1.0' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Client 4.72.1' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.Certificate 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.Certificateless 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.Diagnostics 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.TokenAcquisition 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.TokenCache 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.Identity.Web.UI 3.9.2' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Abstractions 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.JsonWebTokens 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Logging 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.LoggingExtensions 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Protocols 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Protocols.OpenIdConnect 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Tokens 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.IdentityModel.Validators 8.11.0' to CallCenter.Server
Successfully installed 'Microsoft.OpenApi 1.6.23' to CallCenter.Server
Successfully installed 'Polly 8.5.2' to CallCenter.Server
Successfully installed 'Polly.Core 8.5.2' to CallCenter.Server
Successfully installed 'Serilog 4.3.1-dev-02373' to CallCenter.Server
Successfully installed 'Serilog.Extensions.Hosting 9.0.1-dev-02307' to CallCenter.Server
Successfully installed 'Serilog.Settings.Configuration 9.0.1-dev-02317' to CallCenter.Server
Successfully installed 'Serilog.Sinks.ApplicationInsights 4.1.0-dev-02304' to CallCenter.Server
Successfully installed 'Serilog.Sinks.Console 6.0.1-dev-00953' to CallCenter.Server
Successfully installed 'Serilog.Sinks.File 7.0.0' to CallCenter.Server
Successfully installed 'Swashbuckle.AspNetCore 8.1.2' to CallCenter.Server
Successfully installed 'Swashbuckle.AspNetCore.Swagger 8.1.2' to CallCenter.Server
Successfully installed 'Swashbuckle.AspNetCore.SwaggerGen 8.1.2' to CallCenter.Server
Successfully installed 'Swashbuckle.AspNetCore.SwaggerUI 8.1.2' to CallCenter.Server
Successfully installed 'System.Configuration.ConfigurationManager 9.0.5' to CallCenter.Server
Successfully installed 'System.IdentityModel.Tokens.Jwt 8.11.0' to CallCenter.Server
Successfully installed 'System.Linq.Dynamic.Core 1.6.4' to CallCenter.Server
Successfully installed 'System.Runtime.Serialization.Formatters 9.0.5' to CallCenter.Server
Successfully installed 'System.Security.Cryptography.ProtectedData 9.0.5' to CallCenter.Server
Successfully installed 'TimeZoneConverter 7.0.0' to CallCenter.Server
Executing nuget actions took 2.25 sec
Installing NuGet package coverlet.collector 6.0.4.
Installing NuGet package FluentAssertions 8.3.0.
Installing NuGet package Microsoft.Extensions.Configuration.UserSecrets 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110.
Installing NuGet package Microsoft.NET.Test.Sdk 17.14.0.
Installing NuGet package xunit.runner.visualstudio 3.1.0.
Generating MSBuild file C:\code\callcenter\DataTests\obj\DataTests.csproj.nuget.g.props.
Generating MSBuild file C:\code\callcenter\DataTests\obj\DataTests.csproj.nuget.g.targets.
Writing assets file to disk. Path: C:\code\callcenter\DataTests\obj\project.assets.json
Successfully uninstalled 'coverlet.collector 6.0.3' from DataTests
Successfully uninstalled 'FluentAssertions 7.0.0' from DataTests
Successfully uninstalled 'Microsoft.CodeCoverage 17.12.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Configuration 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.Abstractions 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.FileExtensions 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.Json 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.UserSecrets 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection.Abstractions 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Abstractions 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Physical 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.FileSystemGlobbing 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Logging 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Logging.Abstractions 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Options 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.Extensions.Primitives 9.0.0' from DataTests
Successfully uninstalled 'Microsoft.NET.Test.Sdk 17.12.0' from DataTests
Successfully uninstalled 'Microsoft.TestPlatform.ObjectModel 17.12.0' from DataTests
Successfully uninstalled 'Microsoft.TestPlatform.TestHost 17.12.0' from DataTests
Successfully uninstalled 'Microsoft.Win32.SystemEvents 6.0.0' from DataTests
Successfully uninstalled 'System.Configuration.ConfigurationManager 6.0.0' from DataTests
Successfully uninstalled 'System.Drawing.Common 6.0.0' from DataTests
Successfully uninstalled 'System.Security.Cryptography.ProtectedData 6.0.0' from DataTests
Successfully uninstalled 'System.Security.Permissions 6.0.0' from DataTests
Successfully uninstalled 'System.Windows.Extensions 6.0.0' from DataTests
Successfully uninstalled 'xunit.runner.visualstudio 3.0.1' from DataTests
Successfully installed 'coverlet.collector 6.0.4' to DataTests
Successfully installed 'FluentAssertions 8.3.0' to DataTests
Successfully installed 'Microsoft.CodeCoverage 17.14.0' to DataTests
Successfully installed 'Microsoft.Extensions.Configuration 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Configuration.Abstractions 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Configuration.FileExtensions 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Configuration.Json 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Configuration.UserSecrets 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.DependencyInjection 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.DependencyInjection.Abstractions 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.FileProviders.Abstractions 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.FileProviders.Physical 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.FileSystemGlobbing 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Logging 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Logging.Abstractions 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Options 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.Extensions.Primitives 10.0.0-preview.4.25258.110' to DataTests
Successfully installed 'Microsoft.NET.Test.Sdk 17.14.0' to DataTests
Successfully installed 'Microsoft.TestPlatform.ObjectModel 17.14.0' to DataTests
Successfully installed 'Microsoft.TestPlatform.TestHost 17.14.0' to DataTests
Successfully installed 'xunit.runner.visualstudio 3.1.0' to DataTests
Executing nuget actions took 398 ms
Installing NuGet package bunit 2.0.36-preview.
Installing NuGet package coverlet.collector 6.0.4.
Installing NuGet package Microsoft.NET.Test.Sdk 17.14.0.
Installing NuGet package xunit.runner.visualstudio 3.1.0.
Generating MSBuild file C:\code\callcenter\ClientTests\obj\ClientTests.csproj.nuget.g.props.
Generating MSBuild file C:\code\callcenter\ClientTests\obj\ClientTests.csproj.nuget.g.targets.
Writing assets file to disk. Path: C:\code\callcenter\ClientTests\obj\project.assets.json
Successfully uninstalled 'bunit 1.38.5' from ClientTests
Successfully uninstalled 'bunit.core 1.38.5' from ClientTests
Successfully uninstalled 'bunit.web 1.38.5' from ClientTests
Successfully uninstalled 'coverlet.collector 6.0.3' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Authorization 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.Analyzers 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.Authorization 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.Forms 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.Web 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Components.WebAssembly.Authentication 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.AspNetCore.Metadata 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.CodeCoverage 17.12.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Caching.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Caching.Memory 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Configuration 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.Binder 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.FileExtensions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Configuration.Json 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.DependencyInjection.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.FileProviders.Physical 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.FileSystemGlobbing 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Localization.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Logging 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Logging.Abstractions 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Options 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.Extensions.Primitives 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.JSInterop 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.JSInterop.WebAssembly 9.0.0' from ClientTests
Successfully uninstalled 'Microsoft.NET.Test.Sdk 17.12.0' from ClientTests
Successfully uninstalled 'Microsoft.TestPlatform.ObjectModel 17.12.0' from ClientTests
Successfully uninstalled 'Microsoft.TestPlatform.TestHost 17.12.0' from ClientTests
Successfully uninstalled 'xunit.runner.visualstudio 3.0.1' from ClientTests
Successfully installed 'bunit 2.0.36-preview' to ClientTests
Successfully installed 'coverlet.collector 6.0.4' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Authorization 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.Analyzers 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.Authorization 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.Forms 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.Web 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Components.WebAssembly.Authentication 9.0.1' to ClientTests
Successfully installed 'Microsoft.AspNetCore.Metadata 9.0.1' to ClientTests
Successfully installed 'Microsoft.CodeCoverage 17.14.0' to ClientTests
Successfully installed 'Microsoft.Extensions.Caching.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Caching.Memory 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Configuration 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Configuration.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Configuration.Binder 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Configuration.FileExtensions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Configuration.Json 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.DependencyInjection 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.DependencyInjection.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.FileProviders.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.FileProviders.Physical 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.FileSystemGlobbing 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Localization.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Logging 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Logging.Abstractions 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Options 9.0.1' to ClientTests
Successfully installed 'Microsoft.Extensions.Primitives 9.0.1' to ClientTests
Successfully installed 'Microsoft.JSInterop 9.0.1' to ClientTests
Successfully installed 'Microsoft.JSInterop.WebAssembly 9.0.1' to ClientTests
Successfully installed 'Microsoft.NET.Test.Sdk 17.14.0' to ClientTests
Successfully installed 'Microsoft.TestPlatform.ObjectModel 17.14.0' to ClientTests
Successfully installed 'Microsoft.TestPlatform.TestHost 17.14.0' to ClientTests
Successfully installed 'xunit.runner.visualstudio 3.1.0' to ClientTests
Executing nuget actions took 395 ms
Installing NuGet package MathNet.Numerics 6.0.0-beta2.
Generating MSBuild file C:\code\callcenter\CallCenter.Benchmarks\obj\CallCenter.Benchmarks.csproj.nuget.g.props.
Writing assets file to disk. Path: C:\code\callcenter\CallCenter.Benchmarks\obj\project.assets.json
Successfully uninstalled 'MathNet.Numerics 5.0.0' from CallCenter.Benchmarks
Successfully installed 'MathNet.Numerics 6.0.0-beta2' to CallCenter.Benchmarks
Executing nuget actions took 85 ms
Time Elapsed: 00:00:17.0047885
========== Finished ==========


