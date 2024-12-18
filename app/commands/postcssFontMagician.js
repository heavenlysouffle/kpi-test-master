import fs from 'fs';
import postcss from 'postcss';
import pfm from 'postcss-font-magician';

postcss([ pfm({}) ]).process( fs.readFileSync('/styles/pages/Index.css', 'utf8'), {from: undefined} ).then(function (result) { fs.writeFileSync('/compiled-css/Index.css', result.css); });