/**
 * CountryController
 *
 * @description :: Server-side logic for managing countries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
module.exports = _.cloneDeep(require("sails-wohlig-controller"));
var controller = {
    check: function(req, res) {
        Office.check(res.callback);
    }
};
module.exports = _.assign(module.exports, controller);
