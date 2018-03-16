module.exports = ['pdf'];
module.exports.forEach(function (ext) {
    require(ext);
});

