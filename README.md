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

```json
{
    "hello": {
        "scope": "javascript,html",
        "prefix": "hello",
        "body": "$BLOCK_COMMENT_START Hello World $BLOCK_COMMENT_END"
    }
}
```

```ts
import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.languages.registerSignatureHelpProvider('markdown', new class implements vscode.SignatureHelpProvider {
        provideSignatureHelp(
            document: vscode.TextDocument,
            position: vscode.Position,
            token: vscode.CancellationToken,
            context: vscode.SignatureHelpContext
        ): vscode.ProviderResult<vscode.SignatureHelp> {
            // Return fake signature help result
            const sigHelp = new vscode.SignatureHelp();
            sigHelp.activeParameter = 0;
            sigHelp.activeSignature = 0;
            sigHelp.signatures = [new vscode.SignatureInformation(getLabel(context))];
            return sigHelp;
        }
    }, {
        triggerCharacters: ['('],
        retriggerCharacters: [',']
    });
}
```

```bash
sudo podman run -e "ACCEPT_EULA=Y" -e "SA_PASSWORD=Microsoft1987" -p 1433:1433 --name sql1 -d mcr.microsoft.com/mssql/server:2019-CU3-ubuntu-18.04
```

```powershell
PS C:\code> cd C:\code\; git clone git@gitlab.com:wyoming/wyoming.gitlab.io.git wyoming
Cloning into 'wyoming'...
The authenticity of host 'gitlab.com (172.65.251.78)' can't be established.
ED25519 key fingerprint is SHA256:eUXGGm1YGsMAS7vkcx6JOJdOGHPem5gQp4taiCfCLB8.
This key is not known by any other names.
Are you sure you want to continue connecting (yes/no/[fingerprint])? yes
Warning: Permanently added 'gitlab.com' (ED25519) to the list of known hosts.
remote: Enumerating objects: 13973, done.
remote: Counting objects: 100% (13973/13973), done.
remote: Compressing objects: 100% (4237/4237), done.
remote: Total 13973 (delta 7500), reused 13906 (delta 7452), pack-reused 0 (from 0)
Receiving objects: 100% (13973/13973), 41.51 MiB | 8.33 MiB/s, done.
Resolving deltas: 100% (7500/7500), done.
Updating files: 100% (5232/5232), done.
PS C:\code> cd C:\code\wyoming\; date; git status; date; git remote set-url --add --push origin git@github.com:onewyoming/onewyoming.git

Monday, June 10, 2024 1:50:52 PM
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Monday, June 10, 2024 1:50:53 PM


PS C:\code\wyoming> git remote set-url --add --push origin git@gitlab.com:wyoming/wyoming.gitlab.io.git
PS C:\code\wyoming> cd C:\code\wyoming\; date; git status; date; git remote show origin

Monday, June 10, 2024 1:51:13 PM
On branch master
Your branch is up to date with 'origin/master'.

nothing to commit, working tree clean
Monday, June 10, 2024 1:51:13 PM
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

PS C:\code\wyoming> cd C:\code\wyoming\; date; git status; date; git remote show origin; date; git add .; git commit --message "update readme" --message "add output from new setup of Windows"; date; git pull --rebase --strategy-option=ours; date; git push origin master; date;

Monday, June 10, 2024 1:57:03 PM
On branch master
Your branch is up to date with 'origin/master'.

Changes to be committed:
  (use "git restore --staged <file>..." to unstage)
        modified:   README.md

Monday, June 10, 2024 1:57:03 PM
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
Monday, June 10, 2024 1:57:04 PM
[master 49b3f48] update readme
 1 file changed, 50 insertions(+)
Monday, June 10, 2024 1:57:04 PM
Current branch master is up to date.
Monday, June 10, 2024 1:57:06 PM
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.09 KiB | 371.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (2/2), completed with 2 local objects.
remote:
remote: GitHub found 1597 vulnerabilities on onewyoming/onewyoming's default branch (214 critical, 715 high, 591 moderate, 77 low). To find out more, visit:
remote:      https://github.com/onewyoming/onewyoming/security/dependabot
remote:
To github.com:onewyoming/onewyoming.git
   1fac52b..49b3f48  master -> master
Enumerating objects: 5, done.
Counting objects: 100% (5/5), done.
Delta compression using up to 10 threads
Compressing objects: 100% (3/3), done.
Writing objects: 100% (3/3), 1.09 KiB | 556.00 KiB/s, done.
Total 3 (delta 2), reused 0 (delta 0), pack-reused 0 (from 0)
To gitlab.com:wyoming/wyoming.gitlab.io.git
   1fac52b..49b3f48  master -> master
Monday, June 10, 2024 1:57:09 PM
```