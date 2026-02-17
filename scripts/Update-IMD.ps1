$rootPath = Split-Path $PSScriptRoot -Parent
$tempPath = Join-Path $rootPath ".temp_imd"
$imdProjectPath = Join-Path (Join-Path $tempPath "InStepIMD") "vite-project"
$outPath = Join-Path (Join-Path $rootPath "sites") "protected"

Write-Host "-- Creating temporary directory..."
Remove-Item -Path $tempPath -ErrorAction SilentlyContinue -Recurse -Force
New-Item -ItemType Directory -Path $tempPath -Force | Out-Null

Push-Location $tempPath

Write-Host "-- Downloading IMD from git..."
git clone "https://DKrois@github.com/DKrois/InStepIMD"
if ($LASTEXITCODE -ne 0) { throw "git clone failed!" }

Set-Location $imdProjectPath

Write-Host "-- Downloading dependencies..."
npm i
if ($LASTEXITCODE -ne 0) { throw "npm install failed!" }

Write-Host "-- Building project..."
npm run build
if ($LASTEXITCODE -ne 0) { throw "npm build failed!" }

Write-Host "-- Replacing '/assets' with 'assets'..."
$distPath = Join-Path $imdProjectPath "dist"
$indexFile = Join-Path $distPath "index.html"

(Get-Content $indexFile -Raw) `
    -replace '/assets', 'assets' |
        Set-Content $indexFile -NoNewline

Write-Host "-- Deleting old and copying over files..."
Remove-Item -Path "$outPath\*" -ErrorAction SilentlyContinue -Recurse -Force

Copy-Item -Path "$distPath\*" -Destination $outPath -Recurse

Pop-Location # returns to original dir
# return dir & sleep before deleting as dir is busy otherwise
Start-Sleep -Milliseconds 100
Remove-Item -Path $tempPath -Recurse -Force
