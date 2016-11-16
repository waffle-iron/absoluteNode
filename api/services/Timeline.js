var mongoose = require('mongoose');
var deepPopulate = require('mongoose-deep-populate')(mongoose);
var uniqueValidator = require('mongoose-unique-validator');
var timestamps = require('mongoose-timestamp');
var validators = require('mongoose-validators');
var monguurl = require('monguurl');
require('mongoose-middleware').initialize(mongoose);

var Schema = mongoose.Schema;

var schema = new Schema({
    assignment: {
        type: Schema.Types.ObjectId,
        ref: "Assignment",
        index: true,
        required: true,
        key: "timeline"
    },
    chat: [{
        employee: {
            type: Schema.Types.ObjectId,
            ref: "User",
            index: true,
            key: "timeline"
        },
        title: {
            type: String
        },
        time: {
            type: Date,
            default: Date.now
        },
        type: {
            type: String,
            enum: ["Email", "Normal"]
        },
        message: {
            type: String
        },
        email: {
            type: {}
        },
        attachment: {
            type: []
        }
    }]
});

schema.plugin(deepPopulate, {
    populate: {
        'chat.employee': {
            select: "name employee _id"
        },
        'chat.employee.employee': {
            select: ""
        },
        'chat.employee.employee.func': {
            select: "name"
        }
    }
});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('Timeline', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "chat.employee chat.employee.employee chat.employee.employee.func", "chat.employee"));
var model = {};
module.exports = _.assign(module.exports, exports, model);