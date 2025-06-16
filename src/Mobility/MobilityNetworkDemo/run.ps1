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

# Add timestamps
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

# Execute dotnet commands and redirect output
# Assuming 'dotnet run' isn't meant to output directly to the file here,
# as it typically runs an application. If it's meant to output the result
# of a specific command, that command would need to be specified.
# For example, if you wanted 'dotnet --version':
# (dotnet --version) | Add-Content -Path $outputFile

# If 'dotnet run' is meant to output *something*, you might need to adjust this.
# For now, I'm removing 'dotnet run Get-Date -Format "yyyy-MM-dd HH:mm:ss"'
# as it's unlikely to produce useful output for a text file unless a specific
# program is being run to output that date.

# Collect .NET info
# Correcting the path for dotnet --info output
$dotnetInfoPath = Join-Path $targetDir "dotnet_info.txt" # Consider a separate file for dotnet info
Write-Host "Collecting .NET info into '$dotnetInfoPath'..."
dotnet --info | Add-Content -Path $dotnetInfoPath # Appends to a separate file, or change $outputFile if you want it in powershell.txt

# Add more timestamps (if desired for the main powershell.txt)
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile
Get-Date -Format "yyyy-MM-dd HH:mm:ss" | Add-Content -Path $outputFile

Pop-Location # Go back to the original directory
Write-Host "File '$outputFile' and potentially '$dotnetInfoPath' have been updated."