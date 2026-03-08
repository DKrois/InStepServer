$rootPath = Split-Path $PSScriptRoot -Parent
$tempPath = Join-Path $rootPath ".temp_imd"
$imdProjectPath = Join-Path (Join-Path $tempPath "InStepIMD") "vite-project"
$outPath = Join-Path (Join-Path $rootPath "sites") "protected"

Push-Location $tempPath
Set-Location $imdProjectPath

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