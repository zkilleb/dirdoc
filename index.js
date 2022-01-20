#!/usr/bin/env node

const currentDir = './';
const fs = require('fs');
const path = require('path');

function readDirectory(directory) {
    let scannedFiles = [];
    try {
        fs.readdirSync(directory).forEach((file) => {
            let fullPath = path.join(directory, file);
            if(fs.lstatSync(fullPath).isDirectory()) {
                scannedFiles = scannedFiles.concat(readDirectory(fullPath));
            } 
            if(path.extname(fullPath) === '.dd') {
                const data = fs.readFileSync(fullPath, 'utf8')
                const lastIndex = fullPath.lastIndexOf('\\');
                scannedFiles.push({path: fullPath.slice(0, lastIndex + 1), data});
            }
        });
        return scannedFiles;
    } catch(e) {
        return e;
    }
}

function compileMarkdown() {
    const results = readDirectory(currentDir);
    let writeString = '# Route Documentation\n';
    results.reverse().forEach((result) => {
        writeString += `## ${result.path}\n`
        writeString += `### ${result.data}\n`
    });
    try {
        fs.writeFileSync(`${currentDir}/DirectoryDoc.md`, writeString)
    } catch (err) {
        console.error(err)
    }
}

compileMarkdown();