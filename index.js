const groups = ['documents', 'graphics', 'stylesheets'];
module.exports = [];
groups.forEach(function (group) {
    module.exports.concat(require(group));
});
