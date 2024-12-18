import {exec} from "child_process";

export function processFile(cssFile) {
    if (!cssFile) {
        console.error('Error: No CSS file specified.');
        process.exit(1);
    }

    const command = `postcss ${cssFile} --dir ./src/compiled-css -w`;

    exec(command);
}