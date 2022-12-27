# BATCH 225 :: Calculator Project #

### Dependencies ###
Make sure that the following Dependencies version is the same as your environment

| CLI  Command | Version |
| ------ | ------ |
| npm -v | 6.14.12 |
| node --version | 14.16.1 |
| gulp -v | (CLI) 2.3.0 // (Local) XXXX/Unknown |

https://nodejs.org/download/release/v14.16.1/
or
https://nodejs.org/download/release/v14.16.1/node-v14.16.1-win-x64.zip

## CLI commands ##

### Initial install ###
*Run this commands ONLY if this is the first time you will setup on your computer 
*(skip this if initial install is done... use gulp watch)
```sh
    - edit the file "asset_builder/env.json" .. 
    - make sure the value of localPath is the root of your files
    - { "localPath": "C:/PATH/TO/MY/PROJECT/" }
    
    cd path/to/your/project/folder
    cd asset_builder
    npm install
```
## Local development (watch files) ##
type the command below to enable auto refresh and check code format:
```sh
    cd path/to/your/project/folder
    cd asset_builder
    gulp watch
```

## Build assets for dev server ##
type the command below to compile the scripts and css files: (make sure the gulp watch is terminated using CTRL+C)
```sh
    cd path/to/your/project/folder
    cd asset_builder
    gulp
```
## Build assets for live server ##
type the command below to compile and minify the scripts and css files: (make sure the gulp watch is terminated using CTRL+C)
```sh
    cd path/to/your/project/folder
    cd asset_builder
    gulp production
```
