$env:DOTNET_CLI_TELEMETRY_OPTOUT='1'
$baseDir = "C:\code\wyoming\src\dotnet\"
$configurations = @("Debug", "Release")
$osPlatforms = @("win-x64", "linux-x64")
$trimmed = $true

cd $baseDir
foreach ($config in $configurations) {
    foreach ($os in $osPlatforms) {
        Write-Host "Building with configuration: $config, OS: $os"
        dotnet clean
        dotnet build -c $config
        dotnet publish -c $config
    }
}

# Additional commands for other directories
$additionalDirs = @("mydotnet", "WyomingDotNet")
foreach ($dir in $additionalDirs) {
    cd "C:\code\wyoming\src\$dir"
    dotnet clean
    dotnet build
}

# Yarn build for public-website
cd "C:\code\wyoming\src\public-website"
yarn

# Git operations
cd "C:\code\wyoming\"
git status
git remote show origin
git add .
git commit -m "add all changes" -m "this is a bad commit message, isn't it?"
git pull --rebase --strategy-option=ours
git push origin master