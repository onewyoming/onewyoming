PowerShell 6.2.2                                                                                                                                                                                                   Copyright (c) Microsoft Corporation. All rights reserved.                                                                                                                                                                                                                                                                                                                                                                             https://aka.ms/pscore6-docs                                                                                                                                                                                        Type 'help' to get help.                                                                                                                                                                                                                                                                                                                                                                                                              PS C:\Users\kus> cd C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Daegu;date | Out-File buildlog.txt;dotnet test | Out-File -Append buildlog.txt;dotnet run --project .\Daegu\Daegu.csproj | Out-File -Append buildlog.txt; date | Out-File -Append buildlog.txt; git add .; git commit; git pull origin master --strategy-option=theirs; git push origin master;dotnet run --project .\Daegu\Daegu.csproj                   [master 268b1da] build again
 1 file changed, 21 insertions(+), 40 deletions(-)
 rewrite experimental/dotnet/Daegu/buildlog.txt (70%)
From https://gitlab.com/wyoming/wyoming.gitlab.io
 * branch            master     -> FETCH_HEAD
Already up to date.
Enumerating objects: 11, done.
Counting objects: 100% (11/11), done.
Delta compression using up to 4 threads
Compressing objects: 100% (6/6), done.
Writing objects: 100% (6/6), 542 bytes | 271.00 KiB/s, done.
Total 6 (delta 5), reused 0 (delta 0)
To https://gitlab.com/wyoming/wyoming.gitlab.io.git
   6382e22..268b1da  master -> master
CCB
CCBCCB
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Daegu> cd ..                                                                                                                                             PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet> dotnet new sln -o Sokcho                                                                                                                                The template "Solution File" was created successfully.
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet> cd .\Sokcho\                                                                                                                                            PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet new                                                                                                                                       Usage: new [options]

Options:
  -h, --help          Displays help for this command.
  -l, --list          Lists templates containing the specified name. If no name is specified, lists all templates.
  -n, --name          The name for the output being created. If no name is specified, the name of the current directory is used.
  -o, --output        Location to place the generated output.
  -i, --install       Installs a source or a template pack.
  -u, --uninstall     Uninstalls a source or a template pack.
  --nuget-source      Specifies a NuGet source to use during install.
  --type              Filters templates based on available types. Predefined values are "project", "item" or "other".
  --dry-run           Displays a summary of what would happen if the given command line were run if it would result in a template creation.
  --force             Forces content to be generated even if it would change existing files.
  -lang, --language   Filters templates based on language and specifies the language of the template to create.
  --update-check      Check the currently installed template packs for updates.
  --update-apply      Check the currently installed template packs for update, and install the updates.


Templates                                         Short Name               Language          Tags
----------------------------------------------------------------------------------------------------------------------------------
Console Application                               console                  [C#], F#, VB      Common/Console
Class library                                     classlib                 [C#], F#, VB      Common/Library
WPF Application                                   wpf                      [C#]              Common/WPF
WPF Class library                                 wpflib                   [C#]              Common/WPF
WPF Custom Control Library                        wpfcustomcontrollib      [C#]              Common/WPF
WPF User Control Library                          wpfusercontrollib        [C#]              Common/WPF
Windows Forms (WinForms) Application              winforms                 [C#]              Common/WinForms
Windows Forms (WinForms) Class library            winformslib              [C#]              Common/WinForms
Worker Service                                    worker                   [C#]              Common/Worker/Web
Unit Test Project                                 mstest                   [C#], F#, VB      Test/MSTest
NUnit 3 Test Project                              nunit                    [C#], F#, VB      Test/NUnit
NUnit 3 Test Item                                 nunit-test               [C#], F#, VB      Test/NUnit
xUnit Test Project                                xunit                    [C#], F#, VB      Test/xUnit
Razor Component                                   razorcomponent           [C#]              Web/ASP.NET
Razor Page                                        page                     [C#]              Web/ASP.NET
MVC ViewImports                                   viewimports              [C#]              Web/ASP.NET
MVC ViewStart                                     viewstart                [C#]              Web/ASP.NET
Blazor Server App                                 blazorserver             [C#]              Web/Blazor
ASP.NET Core Empty                                web                      [C#], F#          Web/Empty
ASP.NET Core Web App (Model-View-Controller)      mvc                      [C#], F#          Web/MVC
ASP.NET Core Web App                              webapp                   [C#]              Web/MVC/Razor Pages
ASP.NET Core with Angular                         angular                  [C#]              Web/MVC/SPA
ASP.NET Core with React.js                        react                    [C#]              Web/MVC/SPA
ASP.NET Core with React.js and Redux              reactredux               [C#]              Web/MVC/SPA
Razor Class Library                               razorclasslib            [C#]              Web/Razor/Library/Razor Class Library
ASP.NET Core Web API                              webapi                   [C#], F#          Web/WebAPI
ASP.NET Core gRPC Service                         grpc                     [C#]              Web/gRPC
dotnet gitignore file                             gitignore                                  Config
global.json file                                  globaljson                                 Config
NuGet Config                                      nugetconfig                                Config
Dotnet local tool manifest file                   tool-manifest                              Config
Web Config                                        webconfig                                  Config
Solution File                                     sln                                        Solution
Protocol Buffer File                              proto                                      Web/gRPC

Examples:
    dotnet new mvc --auth Individual
    dotnet new classlib --framework netcoreapp3.0
    dotnet new --help
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet new -i Microsoft.AspNetCore.Blazor.Templates::3.0.0-preview9.19457.4                                                                        Restore completed in 1.62 sec for C:\Users\kus\.templateengine\dotnetcli\v3.0.100-rc1-014190\scratch\restore.csproj.

Usage: new [options]

Options:
  -h, --help          Displays help for this command.
  -l, --list          Lists templates containing the specified name. If no name is specified, lists all templates.
  -n, --name          The name for the output being created. If no name is specified, the name of the current directory is used.
  -o, --output        Location to place the generated output.
  -i, --install       Installs a source or a template pack.
  -u, --uninstall     Uninstalls a source or a template pack.
  --nuget-source      Specifies a NuGet source to use during install.
  --type              Filters templates based on available types. Predefined values are "project", "item" or "other".
  --dry-run           Displays a summary of what would happen if the given command line were run if it would result in a template creation.
  --force             Forces content to be generated even if it would change existing files.
  -lang, --language   Filters templates based on language and specifies the language of the template to create.
  --update-check      Check the currently installed template packs for updates.
  --update-apply      Check the currently installed template packs for update, and install the updates.


Templates                                         Short Name               Language          Tags
----------------------------------------------------------------------------------------------------------------------------------
Console Application                               console                  [C#], F#, VB      Common/Console
Class library                                     classlib                 [C#], F#, VB      Common/Library
WPF Application                                   wpf                      [C#]              Common/WPF
WPF Class library                                 wpflib                   [C#]              Common/WPF
WPF Custom Control Library                        wpfcustomcontrollib      [C#]              Common/WPF
WPF User Control Library                          wpfusercontrollib        [C#]              Common/WPF
Windows Forms (WinForms) Application              winforms                 [C#]              Common/WinForms
Windows Forms (WinForms) Class library            winformslib              [C#]              Common/WinForms
Worker Service                                    worker                   [C#]              Common/Worker/Web
Unit Test Project                                 mstest                   [C#], F#, VB      Test/MSTest
NUnit 3 Test Project                              nunit                    [C#], F#, VB      Test/NUnit
NUnit 3 Test Item                                 nunit-test               [C#], F#, VB      Test/NUnit
xUnit Test Project                                xunit                    [C#], F#, VB      Test/xUnit
Razor Component                                   razorcomponent           [C#]              Web/ASP.NET
Razor Page                                        page                     [C#]              Web/ASP.NET
MVC ViewImports                                   viewimports              [C#]              Web/ASP.NET
MVC ViewStart                                     viewstart                [C#]              Web/ASP.NET
Blazor Server App                                 blazorserver             [C#]              Web/Blazor
Blazor WebAssembly App                            blazorwasm               [C#]              Web/Blazor/WebAssembly
ASP.NET Core Empty                                web                      [C#], F#          Web/Empty
ASP.NET Core Web App (Model-View-Controller)      mvc                      [C#], F#          Web/MVC
ASP.NET Core Web App                              webapp                   [C#]              Web/MVC/Razor Pages
ASP.NET Core with Angular                         angular                  [C#]              Web/MVC/SPA
ASP.NET Core with React.js                        react                    [C#]              Web/MVC/SPA
ASP.NET Core with React.js and Redux              reactredux               [C#]              Web/MVC/SPA
Razor Class Library                               razorclasslib            [C#]              Web/Razor/Library/Razor Class Library
ASP.NET Core Web API                              webapi                   [C#], F#          Web/WebAPI
ASP.NET Core gRPC Service                         grpc                     [C#]              Web/gRPC
dotnet gitignore file                             gitignore                                  Config
global.json file                                  globaljson                                 Config
NuGet Config                                      nugetconfig                                Config
Dotnet local tool manifest file                   tool-manifest                              Config
Web Config                                        webconfig                                  Config
Solution File                                     sln                                        Solution
Protocol Buffer File                              proto                                      Web/gRPC

Examples:
    dotnet new mvc --auth Individual
    dotnet new viewimports
    dotnet new --help
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet new blazorwasm -o SokchoBlazorWasm                                                                                                        The template "Blazor WebAssembly App" was created successfully.

Processing post-creation actions...
Running 'dotnet restore' on C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\SokchoBlazorWasm.csproj...
  Restore completed in 10.02 sec for C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\SokchoBlazorWasm.csproj.

Restore succeeded.

PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet build                                                                                                                                     Microsoft (R) Build Engine version 16.3.0-preview-19455-02+4a2d77107 for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

C:\Program Files\dotnet\sdk\3.0.100-rc1-014190\NuGet.targets(123,5): warning : Unable to find a project to restore! [C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\Sokcho.sln]

Build succeeded.

C:\Program Files\dotnet\sdk\3.0.100-rc1-014190\NuGet.targets(123,5): warning : Unable to find a project to restore! [C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\Sokcho.sln]
    1 Warning(s)
    0 Error(s)

Time Elapsed 00:00:00.71
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet sln add .\SokchoBlazorWasm\SokchoBlazorWasm.csproj                                                                                        Project `SokchoBlazorWasm\SokchoBlazorWasm.csproj` added to the solution.
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> dotnet build                                                                                                                                     Microsoft (R) Build Engine version 16.3.0-preview-19455-02+4a2d77107 for .NET Core
Copyright (C) Microsoft Corporation. All rights reserved.

  Restore completed in 66.81 ms for C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\SokchoBlazorWasm.csproj.
  You are using a preview version of .NET Core. See: https://aka.ms/dotnet-core-preview
  SokchoBlazorWasm -> C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\bin\Debug\netstandard2.0\SokchoBlazorWasm.dll
  Processing embedded resource linker descriptor: System.Text.Json.xml
  Processing embedded resource linker descriptor: System.Text.Encodings.Web.xml
  Processing embedded resource linker descriptor: mscorlib.xml
  Duplicate preserve in resource mscorlib.xml in mscorlib, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e of System.Threading.WasmRuntime (All).  Duplicate uses (All)
  Duplicate preserve in resource System.Text.Encodings.Web.xml in System.Text.Encodings.Web, Version=4.0.4.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Text.Encodings.Web.TextEncoder (Nothing).  Duplicate uses (Nothing)
  Duplicate preserve in resource System.Text.Encodings.Web.xml in System.Text.Encodings.Web, Version=4.0.4.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Buffers.OperationStatus System.Text.Encodings.Web.TextEncoder::EncodeUtf8Shim(System.Text.Encodings.Web.TextEncoder,System.ReadOnlySpan`1<System.Byte>,System.Span`1<System.Byte>,System.Int32&,System.Int32&,System.Boolean)
  Duplicate preserve in resource System.Text.Encodings.Web.xml in System.Text.Encodings.Web, Version=4.0.4.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Int32 System.Text.Encodings.Web.TextEncoder::FindFirstCharacterToEncodeUtf8Shim(System.Text.Encodings.Web.TextEncoder,System.ReadOnlySpan`1<System.Byte>)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Text.Json.JsonPropertyInfoNullable`2 (Nothing).  Duplicate uses (Nothing)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Void System.Text.Json.JsonPropertyInfoNullable`2::.ctor()
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Text.Json.Serialization.JsonPropertyInfoNotNullableContravariant`4 (Nothing).  Duplicate uses (Nothing)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Void System.Text.Json.Serialization.JsonPropertyInfoNotNullableContravariant`4::.ctor()
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Text.Json.Serialization.Converters.JsonConverterEnum`1 (Nothing).  Duplicate uses (Nothing)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Void System.Text.Json.Serialization.Converters.JsonConverterEnum`1::.ctor(System.Text.Json.Serialization.Converters.EnumConverterOptions)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Void System.Text.Json.Serialization.Converters.JsonConverterEnum`1::.ctor(System.Text.Json.Serialization.Converters.EnumConverterOptions,System.Text.Json.JsonNamingPolicy)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Text.Json.Serialization.Converters.JsonKeyValuePairConverter`2 (Nothing).  Duplicate uses (Nothing)
  Duplicate preserve in resource System.Text.Json.xml in System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51 of System.Void System.Text.Json.Serialization.Converters.JsonKeyValuePairConverter`2::.ctor()
  Type System.Reflection.Assembly has no fields to preserve
  Type Mono.ValueTuple has no fields to preserve
  Output action:     Link assembly: SokchoBlazorWasm, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
  Output action:     Save assembly: System.Threading.Tasks.Extensions, Version=4.2.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: System.Text.Json, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: System.Text.Encodings.Web, Version=4.0.4.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: System.Runtime.CompilerServices.Unsafe, Version=4.0.5.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a
  Output action:     Save assembly: System.Numerics.Vectors, Version=4.1.4.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a
  Output action:     Save assembly: System.Memory, Version=4.0.1.1, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: System.ComponentModel.Annotations, Version=4.2.1.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a
  Output action:     Save assembly: System.Buffers, Version=4.0.3.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: Mono.WebAssembly.Interop, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.JSInterop, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Extensions.Primitives, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Extensions.Options, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Extensions.Logging.Abstractions, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Extensions.DependencyInjection.Abstractions, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Extensions.DependencyInjection, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.Bcl.AsyncInterfaces, Version=1.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Save assembly: Microsoft.AspNetCore.Metadata, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Components.Web, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Components.Forms, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Components, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Blazor.HttpClient, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Blazor, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:     Save assembly: Microsoft.AspNetCore.Authorization, Version=3.0.0.0, Culture=neutral, PublicKeyToken=adb9793829ddae60
  Output action:   Delete assembly: netstandard, Version=2.1.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:     Link assembly: mscorlib, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e
  Output action:     Link assembly: System, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e
  Output action:     Link assembly: Mono.Security, Version=2.0.5.0, Culture=neutral, PublicKeyToken=0738eb9f132ed756
  Output action:   Delete assembly: System.Xml, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e
  Output action:   Delete assembly: System.Numerics, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:     Link assembly: System.Core, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e
  Output action:   Delete assembly: System.Data, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:   Delete assembly: System.Drawing.Common, Version=4.0.0.0, Culture=neutral, PublicKeyToken=cc7b13ffcd2ddd51
  Output action:   Delete assembly: System.IO.Compression, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:   Delete assembly: System.IO.Compression.FileSystem, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:   Delete assembly: System.ComponentModel.Composition, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:     Link assembly: System.Net.Http, Version=4.0.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a
  Output action:   Delete assembly: System.Runtime.Serialization, Version=2.0.5.0, Culture=neutral, PublicKeyToken=7cec85d7bea7798e
  Output action:   Delete assembly: System.Transactions, Version=2.0.5.0, Culture=neutral, PublicKeyToken=b77a5c561934e089
  Output action:   Delete assembly: System.Xml.Linq, Version=2.0.5.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35
  Output action:   Delete assembly: System.ServiceModel.Internals, Version=0.0.0.0, Culture=neutral, PublicKeyToken=31bf3856ad364e35
  Output action:   Delete assembly: System.Runtime, Version=4.1.0.0, Culture=neutral, PublicKeyToken=b03f5f7f11d50a3a
  Writing boot data to: C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\obj\Debug\netstandard2.0\blazor\blazor.boot.json
  Blazor Build result -> 35 files in C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho\SokchoBlazorWasm\bin\Debug\netstandard2.0\dist

Build succeeded.
    0 Warning(s)
    0 Error(s)

Time Elapsed 00:00:25.62
PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho> date | Out-File -Append buildlog.txt; dotnet build | Out-File -Append buildlog.txt; date | Out-File -Append buildlog.txt;                        PS C:\Users\kus\Documents\src\wyoming\experimental\dotnet\Sokcho>  