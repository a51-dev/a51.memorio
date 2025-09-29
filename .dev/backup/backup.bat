@echo off
setlocal

:begin

cls

cd ../..
pushd %~dp0..\..\
set THISDIR=%CD%
popd

for /f "tokens=3,2,4 delims=/- " %%x in ("%date%") do set d=%%z%%x%%y
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /format:list') do set datetime=%%I
set logtime=%datetime:~8,6%
for /f "skip=1" %%x in ('wmic os get localdatetime') do if not defined tmpDate set tmpDate=%%x
set data=%tmpDate:~0,4%%tmpDate:~4,2%%tmpDate:~6,2%

cls

echo %THISDIR%

"%THISDIR%\.dev\backup\7z.exe" a -tzip %THISDIR%\.backup\%data%.%logtime%.zip %THISDIR% -xr!node_modules -xr!.backup -xr!.git
attrib +h %THISDIR%\.backup
echo Zip created into %THISDIR%\.backup!

:no
