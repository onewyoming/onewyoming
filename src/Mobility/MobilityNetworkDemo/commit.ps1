# Assuming you're running this from a specific base directory, or define it:
$repoPath = "C:\code\wyoming"

# --- Git Operations ---
Write-Host "---"
Write-Host "Starting Git operations in '$repoPath'..."

# Navigate to the repository directory
Set-Location $repoPath

# Check current git status
Write-Host "Checking git status..."
git status | Out-Host # Using Out-Host to ensure output is visible immediately
if ($LASTEXITCODE -ne 0) { Write-Error "Git status failed. Aborting git operations."; exit 1 }

# Show remote origin details
Write-Host "Showing remote origin details..."
git remote show origin | Out-Host
if ($LASTEXITCODE -ne 0) { Write-Error "Git remote show origin failed. Aborting git operations."; exit 1 }

# Add all changes
Write-Host "Adding all changes to staging..."
git add .
if ($LASTEXITCODE -ne 0) { Write-Error "Git add failed. Aborting git operations."; exit 1 }

# Commit changes with a descriptive message
$commitMessage = "Refactor: Improve file generation and compression scripts"
$detailedMessage = "This commit includes improvements to the PowerShell scripts for generating system info and compressing files. The previous commit message 'add all changes' was indeed too generic."

Write-Host "Committing changes..."
git commit --message "$commitMessage" --message "$detailedMessage"
if ($LASTEXITCODE -ne 0) {
    Write-Warning "Git commit failed. This might be due to no changes to commit."
    # Optionally, you could check 'git diff --cached' here to see if there's anything staged.
} else {
    Write-Host "Changes committed successfully."
}

# Pull latest changes with rebase and 'ours' strategy for conflicts
Write-Host "Pulling latest changes with rebase and 'ours' strategy..."
git pull --rebase --strategy-option=ours
if ($LASTEXITCODE -ne 0) { Write-Error "Git pull failed. Please resolve conflicts manually if necessary."; exit 1 }

# Push all branches to origin
Write-Host "Pushing all branches to origin..."
git push origin --all
if ($LASTEXITCODE -ne 0) { Write-Error "Git push failed. Check your connection or permissions."; exit 1 }

Write-Host "Git operations completed."