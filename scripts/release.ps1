param(
    [Parameter(Mandatory = $true)]
    [string]$Version,

    [switch]$ReRelease
)

# Ensure Version starts with "v"
if (-not $Version.StartsWith('v')) {
    $Version = "v$Version"
}

if ($ReRelease) {
    # 1. Delete the tag from your remote repository on GitHub
    git push origin --delete $Version
    # 2. Delete the tag from your local repository
    git tag -d $Version

    Write-Host "Deleted tag from local and remote repository"

    # 3. (Optional but recommended) Make any code changes needed to fix the build
    #    For example, remove package-lock.json from .gitignore
    git add .
    git commit -m "Release $Version"
    git push origin master

    Write-Host "Pushed to git"

    # 4. Re-create the tag on your latest commit
    git tag $Version
    Write-Host "Created new tag"

    # 5. Push the new tag to GitHub, which will trigger the workflow again
    git push origin $Version
    Write-Host "Done!"
} else {
    git tag $Version
    git push origin $Version
}