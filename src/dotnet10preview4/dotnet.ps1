Get-Date -Format "yyyy-MM-dd HH:mm:ss"
cd "C:\Code\wyoming\src\dotnet10preview4\single"
pwd > "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
ls >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
cat app.cs >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
dotnet --info >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
dotnet run app.cs >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"
Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview4\single\powershell.txt"

Get-Date -Format "yyyy-MM-dd HH:mm:ss"

cd "C:\Code\wyoming\src\dotnet10preview4\MyStastics"
pwd > "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
ls >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
dotnet --info >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
dotnet build >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
cd "C:\code\wyoming\src\dotnet10preview4\MyStastics\MyStatistics.Console"
dotnet run  >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"
Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview4\MyStastics\powershell.txt"

Get-Date -Format "yyyy-MM-dd HH:mm:ss"

cd "C:\code\wyoming\"
pwd
git status
Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git remote show origin
Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git add .
git commit --message "add all changes" --message "this is a bad commit message, isn't it?"
Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git pull --rebase --strategy-option=ours
Get-Date -Format "yyyy-MM-dd HH:mm:ss"
git push origin --all
Get-Date -Format "yyyy-MM-dd HH:mm:ss"
