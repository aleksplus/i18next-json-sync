const tsc = require('typescript');
const fs = require('fs');
const config = require('./tsconfig.json');

module.exports = {
    process(src, path) {
        if (path.slice(-3) !== '.ts') {
            return src;
        }

        return tsc.transpileModule(src, {
            fileName: path,
            compilerOptions: Object.assign(config, {
                inlineSourceMap: true,
                inlineSources: true,
            })
        }).outputText;
    }
};