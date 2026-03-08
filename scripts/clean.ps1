Remove-Item -ErrorAction SilentlyContinue -r .webpack
Remove-Item -ErrorAction SilentlyContinue -r out
Remove-Item -ErrorAction SilentlyContinue -r $env:appdata\instepserver
Remove-Item -ErrorAction SilentlyContinue -r "$env:appdata\InStep Server"
Get-ItemProperty HKLM:\Software\Microsoft\Windows\CurrentVersion\Uninstall\*, HKLM:\Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Uninstall\*, HKCU:\Software\Microsoft\Windows\CurrentVersion\Uninstall\* | Where-Object { $_.DisplayName -match 'instep' } | ForEach-Object { Start-Process "cmd.exe" "/c `"$($_.UninstallString)`"" }