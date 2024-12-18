import fs from "fs";
import * as path from "path";
import {processFile} from "./processFile.js";

export function processDir(cssDir) {
    if (!cssDir) {
        console.error('Error: No directory specified.');
        process.exit(1);
    }

    // Read the directory to get all CSS files
    fs.readdir(cssDir, (err, files) => {
        if (err) {
            console.error(`Error reading directory: ${err.message}`);
            process.exit(1);
        }

        // Filter out only CSS files
        const cssFiles = files.filter(file => path.extname(file) === '.css');

        if (cssFiles.length === 0) {
            console.error('Error: No CSS files found in the specified directory.');
            process.exit(1);
        }

        // Process each CSS file
        cssFiles.forEach(cssFile => {
            const filePath = path.join(cssDir, cssFile);
            processFile(filePath);
        });
    });
}