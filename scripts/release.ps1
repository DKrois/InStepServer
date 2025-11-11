param(
    [Parameter(Mandatory = $true)]
    [string]$Version,

    [switch]$ReRelease
)

# Ensure Version starts with "v"
if (-not $Version.StartsWith('v')) {
    $Version = "v$Version"
}

# make sure repo & packages are up-to-date
npm i

git add .
git commit -m "Release $Version"
git push origin master

Write-Host "-- Pushed to git"

if ($ReRelease) {
    # delete tags
    git push origin --delete $Version
    git tag -d $Version
    Write-Host "-- Deleted tag from local and remote repository"

    # recreate tag
    git tag $Version
    Write-Host "-- Recreated tag"

    # push new tag to GitHub, which will trigger the workflow again
    git push origin $Version
    Write-Host "-- Done!"
} else {
    git tag $Version
    git push origin $Version
}