cd "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\"; pwd > "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"; Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"; dotnet run Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"; Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"; dotnet --info >> "C:\code\wyoming\src\dotnet10preview5\powershell.txt"; Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview5\powershell.txt"; Get-Date -Format "yyyy-MM-dd HH:mm:ss" >> "C:\code\wyoming\src\dotnet10preview5\powershell.txt"; 

# Define variables
$originalFilePath = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"
$archiveFilePath = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.7z"
$7zipPath = "C:\Users\kushal\scoop\apps\7zip\current\7z.exe" # Use 7z.exe for command-line operations

# Ensure 7-Zip executable exists
if (-not (Test-Path $7zipPath)) {
    Write-Error "7-Zip executable not found at $7zipPath. Please check the path."
    exit
}

# 1. Compress the file with maximum compression
Write-Host "Compressing '$originalFilePath' to '$archiveFilePath' with maximum compression..."
& "$7zipPath" a -mx=9 "$archiveFilePath" "$originalFilePath"

# Check if compression was successful (exit code 0 indicates success)
if ($LASTEXITCODE -eq 0) {
    Write-Host "Compression successful. Checking archive for errors..."

    # 2. Check the 7z file for errors
    & "$7zipPath" t "$archiveFilePath"

    # Check if the test was successful (exit code 0 indicates no errors)
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Archive check passed. No errors found."

        # 3. Delete the original file
        Write-Host "Deleting original file: '$originalFilePath'..."
        Remove-Item "$originalFilePath" -Force

        Write-Host "Original file deleted successfully."
    } else {
        Write-Warning "Archive check failed. Errors found in '$archiveFilePath'. Original file not deleted."
    }
} else {
    Write-Warning "Compression failed. Original file not deleted."
}

Write-Host "Script completed."

cd "C:\code\wyoming\"; git status; Get-Date -Format "yyyy-MM-dd HH:mm:ss"; git remote show origin; Get-Date -Format "yyyy-MM-dd HH:mm:ss"; git add .; git commit --message "add all changes" --message "this is a bad commit message, isn't it?"; Get-Date -Format "yyyy-MM-dd HH:mm:ss"; git pull --rebase --strategy-option=ours; Get-Date -Format "yyyy-MM-dd HH:mm:ss"; git push origin --all; Get-Date -Format "yyyy-MM-dd HH:mm:ss";