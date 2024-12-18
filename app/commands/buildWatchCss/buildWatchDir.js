import {processDir} from "./processDir.js";

// Capture the directory path from the arguments
const args = process.argv.slice(2);
const cssDir = args[0]; // directory name
processDir(cssDir);