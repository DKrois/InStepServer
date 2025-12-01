param(
    [Parameter(Mandatory = $true)]
    [string]$Version,

    [switch]$ReRelease,
    [switch]$Force
)

# Ensure Version starts with "v"
$Version = $Version.Trim()
if (-not $Version.StartsWith('v')) {
    $Version = "v$Version"
}

# --- Checks for package.json ---
if (-not $Force) {
    $pkgPath = Join-Path $PSScriptRoot "package.json"
    if (-not (Test-Path $pkgPath)) { # check current dir
        $pkgPath = Join-Path (Split-Path $PSScriptRoot -Parent) "package.json"
    }
    if (-not (Test-Path $pkgPath)) { # check parent dir
        Write-Warning "No package.json found in current or parent directory."
        exit 1
    }

    # package.json present, proceed
    try {
        $pkgContent = Get-Content $pkgPath -Raw | ConvertFrom-Json
        $pkgVersion = $pkgContent.version
    } catch {
        Write-Error "Failed to read or parse package.json at $pkgPath"
        exit 1
    }

    if ($pkgVersion -ne $Version.TrimStart('v')) {
        Write-Warning "Version mismatch! package.json has 'v$pkgVersion', but you entered '$Version'."
        exit 1
    } else {
        Write-Host "Version check passed ($Version)."
    }
}

Write-Host "Proceeding with release..."

# make sure repo & packages are up-to-date
pnpm i

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
} else {
    git tag $Version
    git push origin $Version
}
Write-Host "-- Done!"