<#
.SYNOPSIS
    Executes a sequence of three PowerShell scripts.

.DESCRIPTION
    This script serves as a wrapper to sequentially run:
    1. A script to generate or update 'powershell.txt' (run.ps1).
    2. A script to compress 'powershell.txt' and verify the archive (compress.ps1).
    3. A script to perform git operations (commit.ps1).

    It includes basic error checking to stop the sequence if any script fails.

.NOTES
    Ensure the paths to 'run.ps1', 'compress.ps1', and 'commit.ps1' are correct.
    'compress.ps1' expects the -OriginalFilePath parameter.
#>

# --- Define Script Paths ---
$runScriptPath = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\run.ps1"
$compressScriptPath = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\compress.ps1"
$commitScriptPath = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\commit.ps1"

# Define the file to be compressed for compress.ps1
$fileToCompress = "C:\code\wyoming\src\Mobility\MobilityNetworkDemo\powershell.txt"

Write-Host "--- Starting sequence of operations ---"

# --- Step 1: Run the first script (run.ps1) ---
Write-Host "Executing '$runScriptPath'..."
try {
    & "$runScriptPath"
    if ($LASTEXITCODE -ne 0) {
        throw "Script '$runScriptPath' exited with an error code: $LASTEXITCODE"
    }
} catch {
    Write-Error "Error executing '$runScriptPath': $($_.Exception.Message)"
    Write-Warning "Aborting script sequence."
    exit 1
}
Write-Host "Successfully executed '$runScriptPath'."

# --- Step 2: Run the compression script (compress.ps1) ---
Write-Host "---"
Write-Host "Executing '$compressScriptPath' for file '$fileToCompress'..."
try {
    # Pass the OriginalFilePath parameter explicitly
    & "$compressScriptPath" -OriginalFilePath "$fileToCompress"
    if ($LASTEXITCODE -ne 0) {
        throw "Script '$compressScriptPath' exited with an error code: $LASTEXITCODE"
    }
} catch {
    Write-Error "Error executing '$compressScriptPath': $($_.Exception.Message)"
    Write-Warning "Aborting script sequence."
    exit 1
}
Write-Host "Successfully executed '$compressScriptPath'."

# --- Step 3: Run the commit script (commit.ps1) ---
Write-Host "---"
Write-Host "Executing '$commitScriptPath'..."
try {
    & "$commitScriptPath"
    if ($LASTEXITCODE -ne 0) {
        throw "Script '$commitScriptPath' exited with an error code: $LASTEXITCODE"
    }
} catch {
    Write-Error "Error executing '$commitScriptPath': $($_.Exception.Message)"
    Write-Warning "Aborting script sequence."
    exit 1
}
Write-Host "Successfully executed '$commitScriptPath'."

Write-Host "--- All scripts in sequence completed successfully! ---"