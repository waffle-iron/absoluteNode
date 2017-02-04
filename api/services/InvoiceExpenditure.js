var schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        uniqueCaseInsensitive: true
    },
    description:String,
    unit:String,
    rate:Number,
    status: {
        type: Boolean,
        default: true
    },
    rateArray:[{
        rate:Number,
        validFrom:Date,
        validTo:Date
    }]
});

schema.plugin(deepPopulate, {});
schema.plugin(uniqueValidator);
schema.plugin(timestamps);
module.exports = mongoose.model('InvoiceExpenditure', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema));
var model = {};
module.exports = _.assign(module.exports, exports, model);