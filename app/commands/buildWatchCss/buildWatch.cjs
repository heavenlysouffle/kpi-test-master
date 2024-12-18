const { exec } = require('child_process');
const chokidar = require('chokidar');

const watcher = chokidar.watch('./src/styles');

function watch(watcher) {
    watcher.on('add', (path) => {
        console.log(`Created: ${path}`);
    });
}

watch(watcher)

exec("del /Q /F \"./src/compiled-css\"")
exec("npm run build-watch-dir:css ./src/styles")
exec("npm run build-watch-dir:css ./src/styles/pages")
exec("npm run build-watch-dir:css ./src/styles/components")