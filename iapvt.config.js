const path = require('path');

module.exports = {
    template: path.resolve(__dirname, './dev/index.html'),
    bundle: {
        path: path.resolve('./dev/script/rank/index.js'),
        name: 'rank',
    },
};
