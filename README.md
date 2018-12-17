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