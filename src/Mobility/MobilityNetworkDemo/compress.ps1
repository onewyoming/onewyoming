<#
.SYNOPSIS
    Compresses a specified file using 7-Zip, verifies the archive's integrity,
    and then conditionally deletes the original file.

.DESCRIPTION
    This script leverages 7-Zip to perform maximum compression on a given file.
    After compression, it automatically performs an integrity check on the
    newly created 7z archive. If the archive passes the integrity check
    (indicating no errors), the original source file is then deleted.
    Error messages and success/failure notifications are provided throughout.

.PARAMETER OriginalFilePath
    The full path to the file you want to compress.

.EXAMPLE
    .\Compress-And-Verify.ps1 -OriginalFilePath "C:\MyFiles\LargeLog.txt"

.NOTES
    Requires 7-Zip (7z.exe) to be installed and accessible via the specified path.
    The script assumes 7z.exe is located at C:\Users\kushal\scoop\apps\7zip\current\7z.exe.
    Modify the $7zipPath variable if your 7-Zip installation differs.
#>
param (
    [Parameter(Mandatory=$true)]
    [string]$OriginalFilePath
)

# --- Configuration ---
$7zipPath = "C:\Users\kushal\scoop\apps\7zip\current\7z.exe" # Use 7z.exe for command-line operations
$ArchiveFilePath = $OriginalFilePath + ".7z" # Automatically append .7z to the original filename

# --- Pre-Checks ---
Write-Host "Starting compression and verification process..."
Write-Host "Original file: '$OriginalFilePath'"
Write-Host "Archive will be created at: '$ArchiveFilePath'"

# 1. Ensure 7-Zip executable exists
if (-not (Test-Path $7zipPath -PathType Leaf)) {
    Write-Error "7-Zip executable not found at '$($7zipPath)'. Please ensure 7-Zip is installed and the path is correct."
    exit 1 # Exit with a non-zero code to indicate an error
}

# 2. Ensure the original file exists
if (-not (Test-Path $OriginalFilePath -PathType Leaf)) {
    Write-Error "Original file not found at '$($OriginalFilePath)'. Nothing to compress."
    exit 1
}

# --- Compression Phase ---
Write-Host "---"
Write-Host "Attempting to compress '$($OriginalFilePath)' to '$($ArchiveFilePath)' with maximum compression..."

# The 'a' command adds to archive, '-t7z' specifies 7z format (implied by .7z extension but good to be explicit for clarity),
# '-mx=9' sets ultra compression, '-mmt' enables multithreading for potentially faster compression.
# Output is captured for review but not directly used for success/failure which relies on $LASTEXITCODE.
$compressionOutput = & "$7zipPath" a "-mx=9" "-mmt" "$ArchiveFilePath" "$OriginalFilePath" 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "Compression completed successfully."
} else {
    Write-Error "Compression failed (Exit Code: $LASTEXITCODE). Original file has NOT been deleted."
    Write-Error "7-Zip Output: $($compressionOutput | Out-String)" # Display raw 7-Zip output
    exit 1
}

# --- Integrity Check Phase ---
Write-Host "---"
Write-Host "Checking integrity of '$($ArchiveFilePath)'..."

# The 't' command tests the archive.
# Output is captured to look for the "Everything is Ok" string.
$testOutput = & "$7zipPath" t "$ArchiveFilePath" 2>&1

# 7-Zip returns 0 for "No error" for a successful test.
# We also check the output string for "Everything is Ok" for more robust confirmation.
if ($LASTEXITCODE -eq 0 -and $testOutput -like "*Everything is Ok*") {
    Write-Host "Archive integrity check passed: No errors found in '$($ArchiveFilePath)'."

    # --- Deletion Phase ---
    Write-Host "---"
    Write-Host "Deleting original file: '$($OriginalFilePath)'..."
    try {
        Remove-Item -LiteralPath $OriginalFilePath -Force -ErrorAction Stop
        Write-Host "Original file '$($OriginalFilePath)' deleted successfully."
    } catch {
        Write-Error "Failed to delete original file: $($_.Exception.Message)"
        Write-Warning "The archive was created successfully, but the original file could not be deleted."
        exit 1 # Indicate partial success/failure
    }
} else {
    Write-Error "Archive integrity check failed (Exit Code: $LASTEXITCODE). Errors found in '$($ArchiveFilePath)' or 7-Zip returned an error."
    Write-Warning "Original file '$($OriginalFilePath)' has NOT been deleted due to archive errors."
    Write-Error "7-Zip Output: $($testOutput | Out-String)" # Display raw 7-Zip output
    exit 1
}

Write-Host "---"
Write-Host "Script completed successfully."