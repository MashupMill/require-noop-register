module.exports = ['png', 'jpg', 'gif'];
module.exports.forEach(function (ext) {
    require('./' + ext);
});

