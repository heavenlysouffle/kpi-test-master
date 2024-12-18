/** @type {autoprefixer | ((options?: autoprefixer.Options) => (postcss.Plugin & autoprefixer.ExportedAPI)) | ((browsers: string[], options?: autoprefixer.Options) => (postcss.Plugin & autoprefixer.ExportedAPI)) | (<T extends string[]>(...args: [...T, autoprefixer.Options]) => (postcss.Plugin & autoprefixer.ExportedAPI))} */
const autoprefixer = require('autoprefixer');
const postcssNested = require('postcss-nested');
const cssnano = require('cssnano');
const postcssFontMagician = require('postcss-font-magician');
const postcssCustomProperties = require('postcss-custom-properties');
const postcssImport = require("postcss-import")

const config = {
    plugins: [
        autoprefixer,
        postcssNested,
        cssnano({
            preset: 'default',
        }),
        postcssFontMagician,
        postcssCustomProperties,
        postcssImport
    ]
}

module.exports = config