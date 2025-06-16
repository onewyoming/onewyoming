# Define the target directory and file
$targetDir = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo"
$outputFile = Join-Path $targetDir "powershell.txt"

# Ensure the target directory exists
if (-not (Test-Path $targetDir -PathType Container)) {
    New-Item -Path $targetDir -ItemType Directory -Force
}

# Create or overwrite the file with the initial content
Set-Content -Path $outputFile -Value "" # Clears the file if it exists

# Populate the file with various system information and timestamps
Push-Location $targetDir # Change to the directory for pwd to be relevant

# Output current working directory
(Get-Location).Path | Add-Content -Path $outputFile

# Add timestamps and capture command output
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

Write-Host "Running dotnet clean..."
# Capture all output (stdout and stderr) from dotnet clean
(dotnet clean 2>&1) | Add-Content -Path $outputFile

Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

Write-Host "Running dotnet build..."
# Capture all output (stdout and stderr) from dotnet build
(dotnet build 2>&1) | Add-Content -Path $outputFile

Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

Write-Host "Running dotnet run (capturing unhandled exceptions)..."
# Capture all output (stdout and stderr) from dotnet run
# The unhandled exception will be captured here because 2>&1 redirects stderr.
(dotnet run 2>&1) | Add-Content -Path $outputFile

Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

# Collect .NET info
$dotnetInfoPath = Join-Path $targetDir "dotnet_info.txt" # Consider a separate file for dotnet info
Write-Host "Collecting .NET info into '$dotnetInfoPath'..."
dotnet --info | Add-Content -Path $dotnetInfoPath # Appends to a separate file, or change $outputFile if you want it in powershell.txt

# Add more timestamps (if desired for the main powershell.txt)
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

Pop-Location # Go back to the original directory
Write-Host "File '$outputFile' and potentially '$dotnetInfoPath' have been updated."