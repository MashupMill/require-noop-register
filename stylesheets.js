module.exports = ['css', 'less', 'scss'];
module.exports.forEach(function (ext) {
    require('./' + ext);
});


