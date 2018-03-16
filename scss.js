const ext = require('path').basename(__filename, '.js');
require.extensions['.' + ext] = require('noop');
module.exports = ext;
