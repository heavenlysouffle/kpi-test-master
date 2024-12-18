import {processFile} from "./processFile.js";

// Capture all arguments passed to the script
const args = process.argv.slice(2);
const cssFile = args[0]; // CSS file name

processFile(cssFile);