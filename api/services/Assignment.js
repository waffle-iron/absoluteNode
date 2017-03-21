var autoIncrement = require('mongoose-auto-increment');
var objectid = require("mongodb").ObjectID;
var schema = new Schema({
  sixthDigit: {
    type: String
  },
  dateMOY: {
    type: String
  },
  brachCode: {
    type: String
  },
  billingPeriod: {
    type: String
  },
  fourthDigit: {
    type: String
  },
  surveyDate: {
    type: Date
  },
  assignedTo: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    index: true
  },
  survey: [{
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true
    },
    status: {
      type: String,
      enum: ["Approval Pending", "Pending", "Completed", "Declined"]
    },
    timestamp: {
      type: Date,
      default: Date.now()
    },
    approvalTime: {
      type: Date
    },
    completionTime: {
      type: Date
    },
    declineTime: {
      type: Date
    },
    surveyEndTime: {
      type: Date
    },
    surveyStartTime: {
      type: Date
    },
    surveyDate: {
      type: Date
    },
    address: {
      type: String
    }
  }],
  timelineStatus: {
    type: String,
    enum: ["Pending", "Survey Pending", "Survey Assigned", "ILA Pending", "LOR Pending", "Dox Pending", "Part Dox Pending", "Assessment Pending", "Consent Pending", "JIR Pending", "FSR Pending", "BBND", "Collected", "Dispatched", "Force Closed", "Reopened", ""],
    default: "Survey Pending"
  },
  brokerClaimId: {
    type: String
  },
  insurerClaimId: {
    type: String
  },
  insuredClaimId: {
    type: String
  },
  name: {
    type: String,
    unique: true
  },
  name1: {
    type: String
  },
  company: {
    type: Schema.Types.ObjectId,
    ref: "Company",
    index: true,
    required: true,
    key: "assignment"
  },
  assignmentNumber: {
    type: Number,
    default: 0
  },
  typeOfClaim: {
    type: Boolean,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    index: true,
    required: true,
    key: "assignment"
  },
  salvage: {
    type: Schema.Types.ObjectId,
    ref: "Salvage",
    index: true
  },
  policyDepartment: {
    type: Schema.Types.ObjectId,
    ref: "Department",
    index: true,
    key: "assignment"
  },
  office: {
    type: Schema.Types.ObjectId,
    ref: "Office",
    index: true,
    required: true,
    key: "assignment"
  },
  branch: {
    type: Schema.Types.ObjectId,
    ref: "Branch",
    index: true,
    required: true,
    key: "assignment"
  },
  appointment: {
    type: String
  },
  dateOfAppointment: {
    type: Date
  },
  dateOfIntimation: {
    type: Date
  },
  dateOfLoss: {
    type: Date
  },
  intimatedLoss: {
    type: Number
  },
  owner: {
    type: Schema.Types.ObjectId,
    ref: "Employee",
    index: true,
    required: true,
    key: "assignment"
  },
  customer: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    index: true,
    key: "assignment"
  },
  segment: {
    type: Schema.Types.ObjectId,
    ref: "CustomerSegment",
    index: true,
    required: true,
    key: "assignment"
  },
  insuredOffice: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    index: true,
    key: "assignment"
  },
  insurerOffice: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    index: true,
    key: "assignment"
  },
  brokerOffice: {
    type: Schema.Types.ObjectId,
    ref: "Customer",
    index: true,
    key: "assignment"
  },
  insured: {
    type: Schema.Types.ObjectId,
    ref: "CustomerCompany",
    index: true,
    key: "assignment"
  },
  customerCompany: {
    type: Schema.Types.ObjectId,
    ref: "CustomerCompany",
    index: true,
    key: "assignment"
  },
  provisionalInsured: {
    type: String
  },
  causeOfLoss: {
    type: Schema.Types.ObjectId,
    ref: "CauseLoss",
    index: true,
    key: "assignment"
  },
  natureOfLoss: [{
    type: Schema.Types.ObjectId,
    ref: "NatureLoss",
    index: true,
    key: "assignment"
  }],
  broker: {
    type: Schema.Types.ObjectId,
    ref: "CustomerCompany",
    index: true,
    // required: true,
    key: "assignment"
  },
  insurer: {
    type: Schema.Types.ObjectId,
    ref: "CustomerCompany",
    index: true,
    // required: true,
    key: "assignment"
  },
  policyType: {
    type: Schema.Types.ObjectId,
    ref: "PolicyType",
    key: "assignment"
  },
  policyDoc: {
    type: Schema.Types.ObjectId,
  },
  city: {
    type: Schema.Types.ObjectId,
    ref: "City",
    index: true
  },
  address: String,
  pincode: String,
  lat: {
    type: Number,
  },
  lng: {
    type: Number,
  },
  siteNumber: {
    type: String
  },
  siteMobile: {
    type: String
  },
  siteEmail: {
    type: String
  },
  shareWith: [{
    name: {
      type: String
    },
    office: {
      type: Schema.Types.ObjectId,
      ref: "Office",
      index: true,
      key: "assignment"
    },
    persons: [{
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }]
  }],
  isInsured: {
    type: Boolean
  },
  postLoss: {
    type: Boolean
  },
  products: [{
    product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      index: true,
      required: true,
      key: "assignment"
    },
    item: {
      type: String
    }
  }],
  invoices: [{
    invoiceNumber: {
      type: String
    },
    invoiceNumberDate: {
      type: Date
    }
  }],
  LRs: [{
    lrNumber: {
      type: String
    },
    lrNumberDate: {
      type: Date
    }
  }],
  vehicleNumber: [{
    vehicleNumber: {
      type: String
    }
  }],
  others: [{
    locationID: {
      type: String
    },
    productID: {
      type: String
    }
  }],
  locationArr: [{
    locationString: {
      type: String
    },
    date: {
      type: Date
    }
  }],
  product: [{
    product: {
      type: String
    },
    date: {
      type: Date
    }
  }],
  status: {
    type: Boolean,
    default: false
  },
  ilaStatus: {
    type: Boolean,
    default: true
  },
  lorStatus: {
    type: Boolean,
    default: true
  },
  timeline: {
    type: [{
      type: Schema.Types.ObjectId,
      ref: "Timeline",
    }],
    index: true
  },
  assessment: [{
    file: {
      type: String
    },
    fileName: {
      type: String
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }
  }],
  jir: [{
    file: {
      type: String
    },
    fileName: {
      type: String
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }
  }],
  photos: [{
    file: {
      type: String
    },
    fileName: {
      type: String
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }
  }],
  docs: [{
    file: {
      type: String
    },
    fileName: {
      type: String
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }
  }],
  fsrs: [{
    file: {
      type: String
    },
    fileName: {
      type: String
    },
    employee: {
      type: Schema.Types.ObjectId,
      ref: "Employee",
      index: true,
      key: "assignment"
    }
  }],
  invoice: [{
    type: Schema.Types.ObjectId,
    ref: "Invoice",
    index: true,
    key: "assignment"
  }],
  templateIla: [{
    templateName: {
      type: String
    },
    name: {
      type: String
    },
    status: {
      type: Boolean,
      default: true
    },
    forms: {
      type: []
    },
    templateIla: {
      type: Schema.Types.ObjectId,
      ref: "TemplateIla",
      key: "assignment"
    },
    timestamp: {
      type: Date,
      default: Date.now()
    },
    authTimestamp: {
      type: Date
    },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Reject", "Revised"],
      default: "Pending"
    }
  }],
  templateIsr: [{
    templateName: {
      type: String
    },
    name: {
      type: String
    },
    status: {
      type: Boolean,
      default: true
    },
    forms: {
      type: []
    },
    templateIsr: {
      type: Schema.Types.ObjectId,
      ref: "TemplateIsr",
      key: "assignment"
    },
    timestamp: {
      type: Date,
      default: Date.now()
    },
    authTimestamp: {
      type: Date
    },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Reject", "Revised"],
      default: "Pending"
    }
  }],
  templateJir: [{
    templateName: {
      type: String
    },
    name: {
      type: String
    },
    status: {
      type: Boolean,
      default: true
    },
    forms: {
      type: []
    },
    templateJir: {
      type: Schema.Types.ObjectId,
      ref: "TemplateJir",
      key: "assignment"
    },
    timestamp: {
      type: Date,
      default: Date.now()
    },
    authTimestamp: {
      type: Date
    },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Reject", "Revised"],
      default: "Pending"
    }
  }],
  templateLor: [{
    templateName: {
      type: String
    },
    name: {
      type: String
    },
    status: {
      type: Boolean,
      default: true
    },
    forms: {
      type: []
    },
    templateLor: {
      type: Schema.Types.ObjectId,
      ref: "TemplateLor",
      key: "assignment"
    },
    timestamp: {
      type: Date,
      default: Date.now()
    },
    authTimestamp: {
      type: Date
    },
    approvalStatus: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Revised"],
      default: "Pending"
    }
  }]
});

schema.plugin(deepPopulate, {

  populate: {
    salvage: {
      select: ''
    },
    customer: {
      select: 'name _id'
    },
    'insurerOffice': {
      select: 'name _id'
    },
    department: {
      select: 'name _id'
    },
    'branch': {
      select: 'name _id office'
    },
    'office': {
      select: 'name _id'
    },
    'invoice': {
      select: 'name invoiceNumber _id grandTotal createdBy'
    },
    'invoice.createdBy': {
      select: 'name _id'
    },
    'assignedTo': {
      select: 'name _id'
    },
    'city': {
      select: 'name _id district'
    },
    'owner': {
      select: 'name _id func houseColor photo email mobile'
    },
    'owner.func': {
      select: 'name'
    },
    'city.district': {
      select: 'name _id state'
    },
    'city.district.state': {
      select: 'name _id zone'
    },
    'city.district.state.zone': {
      select: 'name _id country'
    },
    'city.district.state.zone.country': {
      select: 'name countryCode _id'
    },
    'insurer': {
      select: ''
    },
    'company': {
      select: ''
    },
    'company.city': {
      select: 'name district'
    },
    'company.city.district': {
      select: 'name state _id'
    },
    'company.city.district.state': {
      select: 'name _id'
    },
    'bank': {
      select: 'name _id'
    },
    'natureOfLoss': {
      select: 'name _id'
    },
    'shareWith.persons': {
      select: 'name _id email'
    },
    'insured': {
      select: 'name _id'
    },
    'insuredOffice': {
      select: 'name _id'
    },
    'products.product': {
      select: 'name _id category'
    },
    'products.product.category': {
      select: 'name _id industry'
    },
    'products.product.category.industry': {
      select: 'name _id'
    },
    'templateInvoice.forms.invoiceExpenditure': {
      select: 'name _id'
    },
    'assessment.employee': {
      select: 'name _id photo'
    },
    'docs.employee': {
      select: 'name _id photo'
    },
    'fsrs.employee': {
      select: 'name _id photo'
    },
    'photos.employee': {
      select: 'name _id photo'
    },
    'causeOfLoss': {
      select: 'name _id'
    },
    'policyType': {
      select: 'name _id'
    },
    'survey.employee': {
      select: 'name _id email mobile'
    }
  }
});
autoIncrement.initialize(mongoose.connection);
schema.plugin(uniqueValidator);
schema.plugin(timestamps);

module.exports = mongoose.model('Assignment', schema);

var exports = _.cloneDeep(require("sails-wohlig-service")(schema, "city.district.state.zone.country products.product.category.industry department shareWith.persons policyType natureOfLoss invoice invoice.createdBy insured insuredOffice owner owner.func company company.city insurerOffice company.city.district.state assessment.employee docs.employee fsrs.employee photos.employee causeOfLoss insurer assignedTo office branch survey.employee", "city.district.state.zone.country products.product.category.industry department shareWith.persons natureOfLoss invoice invoice.createdBy insuredOffice assignedTo insurerOffice office branch survey.employee"));

var model = {
  saveData: function (data, callback) {
    var Model = this;
    var Const = this(data);
    var foreignKeys = Config.getForeignKeys(schema);
    if (data._id) {
      Model.findOne({
        _id: data._id
      }, function (err, data2) {
        if (err) {
          callback(err, data2);
        } else if (data2) {
          async.each(foreignKeys, function (n, callback) {
            if (data[n.name] != data2[n.name]) {
              Config.manageArrayObject(mongoose.models[n.ref], data2[n.name], data2._id, n.key, "delete", function (err, md) {
                if (err) {
                  callback(err, md);
                } else {
                  Config.manageArrayObject(mongoose.models[n.ref], data[n.name], data2._id, n.key, "create", callback);
                }
              });
            } else {
              callback(null, "no found for ");
            }
          }, function (err) {
            data2.update(data, {
              w: 1
            }, callback);
          });
        } else {
          callback("No Data Found", data2);
        }
      });
    } else {
      Const.save(function (err, data2) {
        if (err) {
          callback(err, data2);
        } else {
          async.each(foreignKeys, function (n, callback) {
            Config.manageArrayObject(mongoose.models[n.ref], data2[n.name], data2._id, n.key, "create", function (err, md) {
              callback(err, data2);
            });
          }, function (err) {
            if (err) {
              callback(err, data2);
            } else {
              Model.generateAssignmentNumber(data2, callback);
            }
          });
        }
      });
    }
  },

  getNearestSurveyor: function (data, callback) {
    Employee.find({
      $or: [{
        isSurveyor: true
      }, {
        isField: true
      }],
      location: {
        $near: {
          $geometry: {
            type: "Point",
            coordinates: [data.lng, data.lat]
          }
        }
      }
    }, {
      // name: 1,
      // photo: 1,
      // employeeCode: 1,
      officeEmail: 1
    }).limit(10).lean().exec(function (err, data2) {
      if (err) {
        callback(err, null);
      } else {
        callback(err, data2);
      }
    });
  },

  getNearestSurveyor2: function (data, callback) {
    Employee.find({
      _id: {
        $in: data.ids
      }
    }, {
      name: 1,
      photo: 1,
      employeeCode: 1,
      officeEmail: 1
    }).lean().exec(function (err, data2) {
      if (err) {
        callback(err, null);
      } else {
        callback(err, data2);
      }
    });
  },

  generateAssignmentNumberForAll: function (data, callback) {
    Assignment.find({}).sort({
      _id: 1
    }).exec(function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        async.eachSeries(data, function (n, callback1) {
          Assignment.generateAssignmentNumber(n, function (err, data3) {
            if (err) {
              callback1(err, null)
            } else {
              callback1(null, data3);
            }
          });

        }, function (err, data2) {
          if (err) {
            callback(err, data2);
          } else {
            callback(null, data2);
          }
        });
      }
    })
  },

  generateAssignmentNumber: function (data, callback) {
    Branch.getBillingType(data.branch, function (err, branchDetails) {
      if (err) {
        callback(err, null);
      } else if (branchDetails) {
        data.dateMOY = branchDetails.seriesFormat;
        data.brachCode = branchDetails.code;
        data.fourthDigit = Assignment.getFourthDigit(data);
        Assignment.getSixthDigit(data, function (err, sixthDigit) {
          if (err) {
            callback(err, null)
          } else {
            data.sixthDigit = sixthDigit;
            data.billingPeriod = Assignment.getDate(data);
            Assignment.find({
              dateMOY: data.dateMOY,
              brachCode: data.brachCode,
              fourthDigit: data.fourthDigit,
              nos: data.nos,
              billingPeriod: data.billingPeriod
            }).sort({
              assignmentNumber: -1
            }).exec(function (err, assignmentNo) {
              if (err) {
                callback(err, null);
              } else if (assignmentNo.length == 0) {
                data.assignmentNumber = 1;
                var num = data.assignmentNumber;
                num = '' + num;
                while (num.length < 4) {
                  num = '0' + num;
                }
                data.name = "IN1" + data.fourthDigit + "-" + sixthDigit + data.brachCode + "-" + moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("YY") + moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("MM") + "-" + num;
                data.save(function (err, data) {
                  if (err) {
                    callback(err, data);
                  } else {
                    callback(null, data);
                  }
                });
              } else {
                data.assignmentNumber = assignmentNo[0].assignmentNumber + 1
                var num = data.assignmentNumber;
                num = '' + num;
                while (num.length < 4) {
                  num = '0' + num;
                }
                data.name = "IN1" + data.fourthDigit + "-" + sixthDigit + data.brachCode + "-" + moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("YY") + moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("MM") + "-" + num;
                data.save(function (err, data) {
                  if (err) {
                    callback(err, data);
                  } else {
                    callback(null, data);
                  }
                });

              }
            });
          }
        });
      } else {
        callback(err, null);
      }
    });
  },

  getAssignmentTemplate: function (type, id, callback) {
    var Model = this;

    var aggText = [];
    aggText = [{
      "$unwind": "$" + type
    }, {
      "$match": {

      }
    }];
    aggText[1]["$match"][type + "._id"] = mongoose.Types.ObjectId(id);


    Model.aggregate(aggText).exec(function (err, data) {
      if (err || data.length === 0) {
        callback(err);
      } else if (data.length > 0) {
        var data2 = _.cloneDeep(data[0][type]);
        data2.type = type;

        Model.findOne({
          _id: data[0]._id
        }).deepPopulate("city.district.state.zone.country products.product.category.industry shareWith.persons branch natureOfLoss department insurerOffice insuredOffice owner owner.func company company.city assessment.employee customer docs.employee fsrs.employee photos.employee causeOfLoss insurer policyType insured salvage natureOfLoss", "city.district.state.zone.country products.product.category.industry shareWith.persons natureOfLoss insurerOffice insuredOffice").lean().exec(function (err, data3) {
          if (err) {
            callback(err, data3);
          } else {
            var filter = {
              _id: data3.policyDoc
            }
            PolicyDoc.getPolicyDoc({
              filter
            }, function (err, data4) {
              if (err) {
                data2.assignment = data3;
                callback(null, data2);
              } else {
                data2.assignment = data3;
                data2.assignment.policyNumber = data4.results[0].policyNo;
                callback(null, data2);
              }
            });
          }
        });

      }
    });
  },

  editAssignmentTemplate: function (body, callback) {
    var Model = this;
    var timelStatus = body.assignment.timelineStatus;
    var approvalType = "None";
    var approvalStatus = "Pending";
    if (body.type == "templateIla") {
      timelStatus = "LOR Pending";
      approvalType = "ILA";
    } else if (body.type == "templateLor") {
      timelStatus = "Dox Pending";
      approvalType = "LOR";
    }
    var $scope = {};
    var data2 = _.cloneDeep(body);
    delete data2.assignment;
    $scope.data = data2;

    _.each($scope.data.forms, function (n) {
      _.each(n.items, function (m) {
        if (m.value == "Date") {
          // m.field = moment(m.field).format('ddd, MMM Do, YYYY');
          m.field = moment(m.field).format('DD/MM/YYYY');
        }
      });
    });
    var findObj = {
      _id: body.assignment
    };
    findObj[body.type + "._id"] = body._id;

    var setObj = {};
    setObj[body.type + ".$"] = data2;
    Model.update(findObj, {
      "$set": setObj,
      timelineStatus: timelStatus,
      approvalType: approvalType,
      approvalStatus: approvalStatus
    }, function (err, data3) {
      if (err) {
        callback(err, null);
      } else {
        $scope.assignment = findObj._id;
        Config.generatePdf("pdf/abs-synopsis", $scope, callback);
      }
    });
  },

  generateInvoicePdf: function (data, callback) {
    green(data);
    $scope = {};
    Invoice.findOne({
      _id: data._id
    }).lean().deepPopulate("assignment assignment.department assignment.products.product.category assignment.natureOfLoss assignment.causeOfLoss assignment.policyType assignment.customer assignment.insurerOffice assignment.insuredOffice billedTo.customerCompany billedTo.city.district.state.zone.country assignment.city.district.state.zone.country assignment.company.city.district.state").exec(function (err, data2) {
      if (err) {
        callback(err, null);
      } else {
        $scope.data = data2;
        var filter = {
          _id: data2.assignment.policyDoc
        }
        // For policyNumber
        PolicyDoc.getPolicyDoc({
          filter
        }, function (err, data4) {
          if (err) {
            Config.generatePdf("pdf/abs-invoice", $scope, callback);
          } else {
            $scope.data.assignment.policyNumber = data4.results[0].policyNo;
            Config.generatePdf("pdf/abs-invoice", $scope, callback);
          }
        });
      }
    });
  },

  search: function (data, callback) {
    var Model = this;
    var Const = this(data);
    var maxRow = Config.maxRow;
    var page = 1;
    // var name1=subString()
    if (data.page) {
      page = data.page;
    }
    var field = data.field;
    var options = {
      field: data.field,
      filters: {
        keyword: {
          fields: ['name'],
          term: data.keyword
        }
      },

      sort: {
        desc: "name1",
      },
      start: (page - 1) * maxRow,
      count: maxRow
    };
    _.each(data.filter, function (n, key) {
      if (_.isEmpty(n)) {
        n = undefined;
      }
    });
    var Search = Model.find(data.filter)
      .order(options)
      .deepPopulate("city.district.state.zone.country products.product.category.industry department shareWith.persons policyType natureOfLoss invoice invoice.createdBy insured insuredOffice owner owner.func company company.city insurerOffice company.city.district.state assessment.employee docs.employee fsrs.employee photos.employee causeOfLoss insurer assignedTo office branch survey.employee")
      .keyword(options)
      .page(options, callback);

  },

  updateSurveyor: function (data, callback) {
    Assignment.update({
      _id: data._id
    }, {
      timelineStatus: "Survey Assigned",
      $push: {
        survey: data.survey
      }
    }).exec(function (err, found) {
      if (err) {
        callback(err, null);
      } else if (found) {
        callback(null, found);
      } else {
        callback(null, found);
      }
    });
  },
  //    TASK LIST
  taskList: function (data, callback) {
    Assignment.aggregate([{
      $lookup: {
        from: "cities",
        localField: "city",
        foreignField: "_id",
        as: "city"
      }
    }, {
      $unwind: {
        path: "$city",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "districts",
        localField: "city.district",
        foreignField: "_id",
        as: "city.districts"
      }
    }, {
      $unwind: {
        path: "$city.districts",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "states",
        localField: "city.districts.state",
        foreignField: "_id",
        as: "city.districts.states"
      }
    }, {
      $unwind: {
        path: "$city.districts.states",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "zones",
        localField: "city.districts.states.zone",
        foreignField: "_id",
        as: "city.districts.states.zones"
      }
    }, {
      $unwind: {
        path: "$city.districts.states.zones",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "countries",
        localField: "city.districts.states.zones.country",
        foreignField: "_id",
        as: "city.districts.states.zones.country"
      }
    }, {
      $unwind: {
        path: "$city.districts.states.zones.country",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $unwind: {
        path: "$survey",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $match: {
        "survey.employee": objectid(data.id),
        "survey.status": "Pending"
      }
    }, {
      $limit: 30
    }, {
      $project: {
        name: 1,
        surveyDate: 1,
        address: 1,
        city: "$city.name",
        district: "$city.districts.name",
        state: "$city.districts.states.name",
        zone: "$city.districts.states.zones.name",
        country: "$city.districts.states.zones.country.name",
        pincode: 1,
        siteEmail: 1,
        siteMobile: 1,
        siteNumber: 1,
        survey: 1
      }
    }], function (err, data1) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data1);
      }
    });
  },

  // Declined
  decline: function (data, callback) {
    Assignment.update({
      "survey._id": data.surveyId
    }, {
      $set: {
        "survey.$.status": "Declined",
        "survey.$.declineTime": Date.now(),
        timelineStatus: "Survey Pending",
      }
    }).exec(function (err, found) {

      if (err) {
        callback(err, null);
      } else {
        var newChat = {};
        newChat.employee = data.empId,
          newChat.type = "Normal",
          newChat.title = "Has Declined the Assignment",
          newChat.message = data.message
        Timeline.update({
          assignment: data.assignId
        }, {
          $push: {
            chat: newChat
          }
        }).exec(function (err, data) {
          if (err) {
            red("Decline");
            callback(err, null);
          } else {
            green("Decline");
            callback(null, data);
          }
        });
      }
    });
  },

  // Doc  Photos JIR

  mobileSubmit: function (data, callback) {
    var fileArray = [];
    var docCount = 0;
    if (!_.isEmpty(data.doc)) {
      _.each(data.doc, function (n) {
        n.fileName = Date.now(),
          n.employee = data.empId,
          fileArray[docCount] = {
            attachment: n.file,
            message: "Document"
          },
          docCount = docCount + 1;
      });
    }
    if (!_.isEmpty(data.photos)) {
      _.each(data.photos, function (n) {
        n.fileName = Date.now(),
          n.employee = data.empId,
          fileArray[docCount] = {
            attachment: n.file,
            message: "Photo"
          },
          docCount = docCount + 1;
      });
    }
    if (!_.isEmpty(data.jir)) {
      _.each(data.jir, function (n) {
        n.fileName = Date.now(),
          n.employee = data.empId,
          fileArray[docCount] = {
            attachment: n.file,
            message: "JIR"
          },
          docCount = docCount + 1;
      });
    }
    Assignment.update({
      "survey._id": data.surveyId
    }, {
      timelineStatus: "ILA Pending",
      $set: {
        "survey.$.surveyDate": new Date(data.surveyDate),
        "survey.$.status": "Completed",
        "survey.$.address": data.address,
        // "survey.$.dateOfSurvey": new Date(data.dateOfSurvey),
        "survey.$.completionTime": Date.now(),
        "survey.$.surveyEndTime": new Date(data.endTime),
        "survey.$.surveyStartTime": new Date(data.startTime)
      },
      $push: {
        docs: {
          $each: data.doc
        },
        photos: {
          $each: data.photos
        },
        jir: {
          $each: data.jir
        }
      },
    }).exec(function (err, found) {
      console.log("update assignment", found);
      if (err) {
        callback(err, null);
      } else {
        var newChat = {};
        newChat.employee = data.empId,
          newChat.type = "SurveyDone",
          newChat.title = "Survey Done",
          newChat.surveyEndTime = new Date(data.endTime),
          newChat.surveyStartTime = new Date(data.startTime),
          newChat.surveyDate = new Date(data.surveyDate),
          newChat.address = data.address,
          newChat.event = "On Survey Attended",
          _.each(fileArray, function (n) {
            n.employee = data.empId,
              n.type = "Normal",
              n.title = "Survey Done";
          })
        fileArray.push(newChat);
        Timeline.update({
          assignment: data.assignId
        }, {
          $push: {
            chat: {
              $each: fileArray
            }
          }
        }).exec(function (err, data) {
          console.log("update timeline", data);
          if (err) {
            callback(err, null);
          } else {
            green("Success");
            callback(null, data);
          }
        });
      }
    });
  },
  getFourthDigit: function (data) {
    var fourthDigit = "";
    switch (data.typeOfClaim + "-" + data.isInsured) {
      case "true-false":
        {
          fourthDigit = "0";
          break;
        }
      case "true-true":
        {
          fourthDigit = "1";
          break;
        }
      case "false-false":
        {
          fourthDigit = "2";
          break;
        }
      case "false-true":
        {
          fourthDigit = "3";
          break;
        }
    }
    return fourthDigit;
  },
  getDate: function (data) {
    if (data.dateMOY == "yearly") {
      var newDate = "";
      var currentDateMonth = moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("MM");
      green(currentDateMonth);
      if (currentDateMonth > 3) {
        newDate = moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").add(1, "year").format("YYYY");
      } else {
        newDate = moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("YYYY");
      }
      return newDate;
    } else {
      var currentDateMonth = moment(new Date(data.dateOfAppointment)).add(5, "hours").add(30, "minutes").format("MM-YYYY");
      return currentDateMonth;
    }
  },

  getSixthDigit: function (data, callback) {
    Department.findOne({
      _id: data.department
    }, {
      name: 1
    }).exec(function (err, data2) {
      if (err) {
        return 0;
      } else {
        var sixthDigit = "";
        switch (data.typeOfClaim + "-" + data2.name) {
          case "false-Engineering":
            {
              sixthDigit = "40";
              break;
            }
          case "false-Motor":
            {
              sixthDigit = "30";
              break;
            }
          case "false-Pre Dispatch":
            {
              sixthDigit = "20";
              break;
            }
          case "false-Pre Acceptance - Fire":
            {
              sixthDigit = "10";
              break;
            }
          case "true-Engineering":
            {
              sixthDigit = "44";
              break;
            }
          case "true-Fire":
            {
              sixthDigit = "11";
              break;
            }
          case "true-Marine Cargo":
            {
              sixthDigit = "21";
              break;
            }
          case "true-Misc":
            {
              sixthDigit = "48";
              break;
            }
          case "true-Motor":
            {
              sixthDigit = "31";
              break;
            }
          default:
            {
              sixthDigit = "00";
              break;
            }
        }
        callback(null, sixthDigit);
      }
    })
  },

  getAll: function (data, callback) {
    if (_.isEmpty(data.sorting[0])) {
      var sort = {
        $sort: {
          createdAt: -1
        }
      }
    }
    if (data.sorting[0] == "name") {
      var sort = {
        $sort: {
          name: data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "intimatedLoss") {
      var sort = {
        $sort: {
          intimatedLoss: data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "owner") {
      var sort = {
        $sort: {
          "owner.name": data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "insurer") {
      var sort = {
        $sort: {
          "insurer.name": data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "insurerd") {
      var sort = {
        $sort: {
          "insurerd.name": data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "department") {
      var sort = {
        $sort: {
          "department.name": data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "city") {
      var sort = {
        $sort: {
          "city.name": data.sorting[1]
        }
      }
    }
    if (data.sorting[0] == "timelineStatus") {
      var sort = {
        $sort: {
          timelineStatus: data.sorting[1]
        }
      }
    }
    if (_.isEmpty(data.timelineStatus)) {
      var timelineStatus = {}
    } else {
      var timelineStatus = {
        timelineStatus: {
          $in: data.timelineStatus
        }
      }
    }
    if (data.from === "" && data.to === "") {
      var intimatedLoss = {}
    } else {
      var intimatedLoss = {
        intimatedLoss: {
          "$gte": data.from,
          "$lte": data.to
        }
      }
    }
    if (data.fromDate === "" && data.toDate === "") {
      var createdAt = {}
    } else {
      var createdAt = {
        createdAt: {
          "$gte": new Date(data.fromDate),
          "$lte": new Date(data.toDate)
        }
      }
    }

    if (_.isEmpty(data.name)) {
      var name = {}
    } else {
      var name = {
        name: {
          $regex: data.name,
          $options: 'i'
        }
      }
    }


    if (_.isEmpty(data.owner)) {
      var owner = {}
    } else {
      var ownerArr = [];
      _.each(data.owner, function (values) {
        ownerArr.push(objectid(values));
      });
      var owner = {

        'owner._id': {
          $in: ownerArr
        },
      }
    }
    if (_.isEmpty(data.city)) {
      var city = {}
    } else {
      var cityArr = [];
      _.each(data.city, function (values) {
        cityArr.push(objectid(values));
      });
      var city = {
        'city._id': {
          $in: cityArr
        },
      }
    }
    if (_.isEmpty(data.branch)) {
      var branch = {}
    } else {
      var branchArr = [];
      _.each(data.branch, function (values) {
        branchArr.push(objectid(values));
      });
      var branch = {
        'branch._id': {
          $in: branchArr
        },
      }
    }
    if (_.isEmpty(data.insurer)) {
      var insurer = {}
    } else {
      var insurerArr = [];
      _.each(data.insurer, function (values) {
        insurerArr.push(objectid(values));
      });
      var insurer = {
        'insurer._id': {
          $in: insurerArr
        },
      }
    }
    if (_.isEmpty(data.insurerd)) {
      var insurerd = {}
    } else {
      var insurerdArr = [];
      _.each(data.insurerd, function (values) {
        insurerdArr.push(objectid(values));
      });
      var insurerd = {
        'insurerd._id': {
          $in: insurerdArr
        },
      }
    }
    if (_.isEmpty(data.department)) {
      var department = {}
    } else {
      var departmentArr = [];
      _.each(data.department, function (values) {
        departmentArr.push(objectid(values));
      });
      var department = {
        'department._id': {
          $in: departmentArr
        },
      }
    }

    if (data.ownerStatus == "My files") {
      if (data.ownerId === "") {
        var ownerId = {}
      } else {
        var ownerId = {
          'owner._id': objectid(data.ownerId),
        }
      }

    } else if (data.ownerStatus == "Shared with me") {
      if (data.ownerId === "") {
        var shareWith = {}
      } else {
        var shareWith = {
          'shareWith.persons': objectid(data.ownerId),
        }
      }
    }
    var ownerStatus = Object.assign(timelineStatus, name, owner, insurer, insurerd, department, ownerId, intimatedLoss, city, branch, createdAt, shareWith);
    console.log(data.pagenumber);
    var pageStartFrom = (data.pagenumber - 1) * data.pagelimit;
    var allTable = [{
      $lookup: {
        from: "cities",
        localField: "city",
        foreignField: "_id",
        as: "city"
      }
    }, {
      $unwind: {
        path: "$city",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "branches",
        localField: "branch",
        foreignField: "_id",
        as: "branch"
      }
    }, {
      $unwind: {
        path: "$branch",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "customers",
        localField: "insurerOffice",
        foreignField: "_id",
        as: "insurer"
      }
    }, {
      $unwind: {
        path: "$insurer",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "employees",
        localField: "owner",
        foreignField: "_id",
        as: "owner"
      }
    }, {
      $unwind: {
        path: "$owner",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "customers",
        localField: "insuredOffice",
        foreignField: "_id",
        as: "insurerd"
      }
    }, {
      $unwind: {
        path: "$insurerd",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "departments",
        localField: "department",
        foreignField: "_id",
        as: "department"
      }
    }, {
      $unwind: {
        path: "$department",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $match: {
        $and: [ownerStatus]
      }
    }, sort, {
      $skip: parseInt(pageStartFrom)
    }, {
      $limit: data.pagelimit
    }, {
      $project: {
        _id: 1,
        name: 1,
        owner: "$owner.name",
        insurerName: "$insurer.name",
        insurerdName: "$insurerd.name",
        department: "$department.name",
        city: "$city.name",
        intimatedLoss: 1,
        timelineStatus: 1,
        status: 1
      }
    }];

    var countAllData = [{
      $lookup: {
        from: "cities",
        localField: "city",
        foreignField: "_id",
        as: "city"
      }
    }, {
      $unwind: {
        path: "$city",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "branches",
        localField: "branch",
        foreignField: "_id",
        as: "branch"
      }
    }, {
      $unwind: {
        path: "$branch",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "customers",
        localField: "insurerOffice",
        foreignField: "_id",
        as: "insurer"
      }
    }, {
      $unwind: {
        path: "$insurer",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "employees",
        localField: "owner",
        foreignField: "_id",
        as: "owner"
      }
    }, {
      $unwind: {
        path: "$owner",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "customers",
        localField: "insuredOffice",
        foreignField: "_id",
        as: "insurerd"
      }
    }, {
      $unwind: {
        path: "$insurerd",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $lookup: {
        from: "departments",
        localField: "department",
        foreignField: "_id",
        as: "department"
      }
    }, {
      $unwind: {
        path: "$department",
        preserveNullAndEmptyArrays: true
      }
    }, {
      $match: {
        $and: [ownerStatus]
      }
    }, {
      $group: {
        _id: null,
        count: {
          $sum: 1
        }
      }
    }];

    if (data.ownerStatus == "Shared with me") {
      var unwindEmp = {
        $unwind: "$shareWith.persons"
      };
      allTable.unshift(unwindEmp);
      countAllData.unshift(unwindEmp);
      var unwindSharewith = {
        $unwind: "$shareWith"
      }
      allTable.unshift(unwindSharewith);
      countAllData.unshift(unwindSharewith);
    }
    async.parallel([

      //get assignment
      function (callback) {
        Assignment.aggregate(allTable).allowDiskUse(true).exec(function (err, data1) {
          if (err) {
            callback(null, data1);
          } else {
            callback(null, data1);
          }
        });
      },

      //get all assignment count
      function (callback) {
        Assignment.aggregate(countAllData, function (err, data2) {
          if (err) {
            callback(null, data2);
          } else {
            callback(null, data2);
          }
        });
      },

    ], function (err, data3) {
      if (err) {
        callback(err, null);
      } else {
        if (_.isEmpty(data3[0]) || _.isEmpty(data3[1])) {
          callback(null, []);
        } else {
          var data4 = {};
          data4.results = data3[0];
          data4.total = data3[1][0].count;
          callback(null, data4);
        }
      }
    });
  },

  // updateAllIntimatedLoss: function (data, callback) {
  //   Assignment.find().lean().exec(function (err, found) {
  //     _.each(found, function (n) {
  //       var a = _.split(n.intimatedLoss, ",");
  //       n.intimatedLoss = "";
  //       _.each(a, function (m) {
  //         n.intimatedLoss = n.intimatedLoss + m;
  //       });
  //       n.intimatedLoss = parseInt(n.intimatedLoss);
  //       if (_.isInteger(n.intimatedLoss)) {
  //         Assignment.update({
  //           _id: n._id
  //         }, {
  //           intimatedLoss: n.intimatedLoss
  //         }).lean().exec(
  //           function (err, data5) {
  //             console.log("Done");
  //           }
  //         )
  //       }

  //     })
  //   })
  // },

  assignmentFilter: function (data, callback) {
    var Model = this;
    var Const = this(data);
    var maxRow = Config.maxRow;
    var pagestartfrom = (data.page - 1) * maxRow;
    var page = 1;
    var aggText = [];
    var arr = [];
    if (data.name !== "") {
      var name = {
        "name": {
          $regex: data.name,
          $options: 'i'
        }
      }
      arr.push(name);
    }
    if (data.intimatedLoss !== "") {
      var intimatedLoss = {
        "intimatedLoss": {
          $regex: data.intimatedLoss,
          $options: 'i'
        }
      }
      arr.push(intimatedLoss);
    }
    if (data.city !== "") {
      var name = {
        "city.name": {
          $regex: data.city,
          $options: 'i'
        }
      }
      arr.push(name);
    }
    if (data.city !== "") {
      var city = {
        "city.name": {
          $regex: data.city,
          $options: 'i'
        }
      }
      arr.push(city);
    }
    if (data.insurer !== "") {
      var insurer = {
        "insurer.name": {
          $regex: data.insurer,
          $options: 'i'
        }
      }
      arr.push(insurer);
    }
    if (data.insured !== "") {
      var insured = {
        "insured.name": {
          $regex: data.insured,
          $options: 'i'
        }
      }
      arr.push(insured);
    }
    if (data.owner !== "") {
      var owner = {
        "owner.name": {
          $regex: data.owner,
          $options: 'i'
        }
      }
      arr.push(owner);
    }
    if (data.department !== "") {
      var department = {
        "department.name": {
          $regex: data.department,
          $options: 'i'
        }
      }
      arr.push(department);
    }
    if (data.timelineStatus !== "") {
      var timelineStatus = {
        "timelineStatus": {
          $regex: data.timelineStatus,
          $options: 'i'
        }
      }
      arr.push(timelineStatus);
    }

    aggText = [{
      $lookup: {
        from: "cities",
        localField: "city",
        foreignField: "_id",
        as: "city"
      }
    }, {
      $unwind: "$city"
    }, {
      $lookup: {
        from: "customers",
        localField: "insurerOffice",
        foreignField: "_id",
        as: "insurer"
      }
    }, {
      $unwind: "$insurer"
    }, {
      $lookup: {
        from: "customers",
        localField: "insuredOffice",
        foreignField: "_id",
        as: "insured"
      }
    }, {
      $unwind: "$insured"
    }, {
      $lookup: {
        from: "employees",
        localField: "owner",
        foreignField: "_id",
        as: "owner"
      }
    }, {
      $unwind: "$owner"
    }, {
      $lookup: {
        from: "departments",
        localField: "department",
        foreignField: "_id",
        as: "department"
      }
    }, {
      $unwind: "$department"
    }, {
      $match: {
        $and: arr
      }
    }, {
      $project: {
        name: 1,
        timelineStatus: 1,
        intimatedLoss: 1,
        city: "$city.name",
        insurer: "$insurer.name",
        insured: "$insured.name",
        owner: "$owner.name",
        department: "$department.name"
      }
    }, {
      $skip: parseInt(pagestartfrom)
    }, {
      $limit: maxRow
    }]
    Assignment.aggregate(aggText).exec(function (err, found) {

      if (err) {
        callback(err, null);
      } else {
        callback(null, found);
      }
    });
  },


  getExpenditure: function (data, callback) {
    Assignment.aggregate([{
        $unwind: "$templateInvoice"
      }, {
        $unwind: "$templateInvoice.forms"
      }, {
        $lookup: {
          from: "invoiceexpenditures",
          localField: "templateInvoice.forms.invoiceExpenditure",
          foreignField: "_id",
          as: "templateInvoice.forms.InvoiceExpenditure"
        }
      }, {
        $unwind: "$templateInvoice.forms.InvoiceExpenditure"
      }, {
        $match: {
          'templateInvoice._id': objectid(data._id)
        }
      }, {
        $group: {
          _id: "$_id",
          forms: {
            $addToSet: "$templateInvoice.forms"
          },
          tax: {
            $addToSet: "$templateInvoice.tax"
          },
          templateId: {
            $addToSet: "$templateInvoice._id"
          },
          name: {
            $addToSet: "$templateInvoice.name"
          }
        }
      }, {
        $unwind: "$templateId"
      }, {
        $unwind: "$name"
      }
      // , {
      //   $project: {
      //     name: 1,
      //     surveyDate: 1,
      //     address: 1,
      //     InvoiceExpenditure: "$templateInvoice.forms.InvoiceExpenditure.name"
      //     }
      // }
    ], function (err, data1) {
      if (err) {
        callback(err, null);
      } else if (data1 && data1.length > 0) {
        callback(null, data1);
      } else {
        callback(null, []);
      }
    });
  },

  updateOfficeId: function (data, callback) {
    Assignment.find({}, {
      branch: 1
    }).populate("branch", "office").lean().exec(function (err, findData) {
      if (err) {
        console.log("err", err);
        callback(err, null);
      } else {
        if (_.isEmpty(findData)) {
          callback("No Data found", null);
        } else {
          // callback(null,findData);
          async.eachSeries(findData, function (n, callback1) {
            console.log("n", n);
            Assignment.update({
              _id: n._id
            }, {
              office: n.branch.office
            }, function (err, data3) {
              if (err) {
                callback1(err, null)
              } else {
                callback1(null, data3);
              }
            });

          }, function (err, data2) {
            if (err) {
              callback(err, data2);
            } else {
              callback(null, data2);
            }
          });
        }
      }
    });
  },
  getSurveyorApprovalList: function (data, callback) {
    var Model = this;
    var maxRow = Config.maxRow;
    var pagestartfrom = (data.page - 1) * maxRow;
    var page = 1;
    var aggText = [];
    var aggTextCount = [];
    var type = data.type;
    var unwind1 = {};
    var match1 = {};
    var sort1 = {};
    if (_.isEmpty(data.name)) {
      var name = {
        $match: {
          "survey.status": "Approval Pending"
        }
      }
    } else {
      var name = {
        $match: {
          "survey.status": "Approval Pending",
          "name": {
            $regex: data.name,
            $options: 'i'
          }
        }
      }
    }
    aggText = [{
        $unwind: {
          path: "$survey"
        }
      }, name, {
        $lookup: {
          from: "cities",
          localField: "city",
          foreignField: "_id",
          as: "city"
        }
      }, {
        $unwind: {
          path: "$city"
        }
      }, {
        $lookup: {
          from: "employees",
          localField: "survey.employee",
          foreignField: "_id",
          as: "survey.employee"
        }
      }, {
        $unwind: {
          path: "$survey.employee"
        }
      }, {
        $sort: {
          "survey.timestamp": 1
        }
      }, {
        $skip: parseInt(pagestartfrom)
      }, {
        $limit: maxRow
      }],
      aggTextCount = [{
        $unwind: {
          path: "$survey"
        }
      }, name, {
        $lookup: {
          from: "cities",
          localField: "city",
          foreignField: "_id",
          as: "city"
        }
      }, {
        $unwind: {
          path: "$city"
        }
      }, {
        $lookup: {
          from: "employees",
          localField: "survey.employee",
          foreignField: "_id",
          as: "survey.employee"
        }
      }, {
        $unwind: {
          path: "$survey.employee"
        }
      }, {
        $sort: {
          "survey.timestamp": 1
        }
      }, {
        $group: {
          _id: null,
          count: {
            $sum: 1
          }
        }
      }, {
        $project: {
          "_id": 1,
          "count": 1
        }
      }]
    async.parallel([
        function (callback) {
          Model.aggregate(aggText,
            function (err, data1) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, data1)
              }

            });
        },
        function (callback) {
          Model.aggregate(aggTextCount,
            function (err, data2) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, data2)
              }

            });
        }
      ],
      function (err, data4) {
        if (err) {
          callback(err, null);
        } else {
          if (_.isEmpty(data4[1])) {
            var data5 = {
              results: data4[0],
              options: {
                count: 0
              }
            };
          } else {
            var data5 = {
              results: data4[0],
              options: {
                count: maxRow
              }
            };
            data5.total = data4[1][0].count;
          }
          callback(null, data5);
        }
      });
  },


  getApprovalList: function (data, callback) {
    var Model = this;
    var maxRow = Config.maxRow;
    var pagestartfrom = (data.page - 1) * maxRow;
    var page = 1;
    var aggText = [];
    var aggTextCount = [];
    var type = data.type;
    var unwind1 = {};
    var match1 = {};
    var sort1 = {};
    if (type == "templateIla") {
      unwind1 = {
        "$unwind": "$templateIla"
      };
      match1 = {
        "$match": {
          "templateIla.approvalStatus": "Pending"
        }
      };
      sort1 = {
        "$sort": {
          "templateIla.timestamp": 1
        }
      };
    } else if (type == "templateLor") {
      unwind1 = {
        "$unwind": "$templateLor"
      };
      match1 = {
        "$match": {
          "templateLor.approvalStatus": "Pending"
        }
      };
      sort1 = {
        "$sort": {
          "templateLor.timestamp": 1
        }
      };
    }
    aggText = [{
        $lookup: {
          from: "employees",
          localField: "owner",
          foreignField: "_id",
          as: "owner"
        }
      }, {
        $unwind: {
          path: "$owner",
          preserveNullAndEmptyArrays: true
        }
      }, unwind1, match1, sort1, {
        $skip: parseInt(pagestartfrom)
      }, {
        $limit: maxRow
      }],
      aggTextCount = [{
        $lookup: {
          from: "employees",
          localField: "owner",
          foreignField: "_id",
          as: "owner"
        }
      }, {
        $unwind: {
          path: "$owner",
          preserveNullAndEmptyArrays: true
        }
      }, unwind1, match1, sort1, {
        $group: {
          _id: null,
          count: {
            $sum: 1
          }
        }
      }, {
        $project: {
          "_id": 1,
          "count": 1
        }
      }]
    async.parallel([
        function (callback) {
          Model.aggregate(aggText,
            function (err, data1) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, data1)
              }

            });
        },
        function (callback) {
          Model.aggregate(aggTextCount,
            function (err, data2) {
              if (err) {
                callback(err, null);
              } else {
                callback(null, data2)
              }

            });
        }
      ],
      function (err, data4) {
        if (err) {
          callback(err, null);
        } else {
          if (_.isEmpty(data4[1])) {
            var data5 = {
              results: data4[0],
              options: {
                count: 0
              }
            };
          } else {
            var data5 = {
              results: data4[0],
              options: {
                count: maxRow
              }
            };
            data5.total = data4[1][0].count;
          }
          callback(null, data5);
        }
      });
  },
  saveTemplate: function (data, callback) {
    var matchObj = {};
    var matchObj2 = {};
    if (data.type == "templateIla") {
      matchObj = {
        _id: data.assignId,
        templateIla: {
          $elemMatch: {
            _id: data._id
          }
        }
      };
      matchObj2 = {
        $set: {
          "templateIla.$.approvalStatus": data.approvalStatus,
          "templateIla.$.authTimestamp": data.authTimestamp
        }
      };
    } else if (data.type == "templateLor") {
      console.log("In templateLor", data);
      matchObj = {
        _id: data.assignId,
        templateLor: {
          $elemMatch: {
            _id: data._id
          }
        }
      };
      matchObj2 = {
        $set: {
          "templateLor.$.approvalStatus": data.approvalStatus,
          "templateLor.$.authTimestamp": data.authTimestamp
        }
      };
    } else if (data.type == "survey") {
      matchObj = {
        _id: data.assignId,
        survey: {
          $elemMatch: {
            _id: data._id
          }
        }
      };
      matchObj2 = {
        $set: {
          "survey.$.status": "Pending"
        }
      };
    }
    Assignment.update(matchObj, matchObj2).exec(function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },
  updateNewSurveyor: function (data, callback) {
    Assignment.update({
      _id: data.assignId,
      survey: {
        $elemMatch: {
          _id: data.surveyId
        }
      }
    }, {
      $set: {
        "survey.$.employee": data.employee
      }
    }).exec(function (err, data) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, data);
      }
    });
  },

  getMailaData: function(data,callback){
    $scope.emailersData = function (type, emailData, index) {
        console.log("email Data", emailData);
        $scope.emailData = {};
        // emailData.to =  _.uniq(emailData.to);
        var i = 0;
        var toData = [];
        _.map(emailData.to, function (values) {
            values.email.toString();
            values.name.toString();
        });
        emailData.to = _.uniqBy(emailData.to, "email");
        console.log("values array ", emailData.to);

        emailData.assignmentNo = (emailData.assignmentNo ? emailData.assignmentNo : "");
        emailData.ownerName = (emailData.ownerName ? emailData.ownerName : "");
        emailData.ownerEmail = (emailData.ownerEmail ? emailData.ownerEmail : "");
        emailData.ownerPhone = (emailData.ownerPhone ? emailData.ownerPhone : "");
        emailData.siteCity = (emailData.siteCity ? emailData.siteCity : "");
        emailData.to = (emailData.to ? emailData.to : []);
        emailData.cc = (emailData.cc ? emailData.cc : []);
        emailData.bcc = (emailData.bcc ? emailData.bcc : []);
        emailData.surveyorNumber = (emailData.surveyorNumber ? emailData.surveyorNumber : "");
        emailData.surveyorName = (emailData.surveyorName ? emailData.surveyorName : "");
        emailData.surveyorEmail = (emailData.surveyorEmail ? emailData.surveyorEmail : "");
        emailData.insuredName = (emailData.insuredName ? emailData.insuredName : "");
        emailData.ilaAuthDate = (emailData.ilaAuthDate ? emailData.ilaAuthDate : "");

        switch (type) {
            case "Acknowledgment Email":
                {
                    var emails = {
                        name: 'Acknowledgment Email',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Assignment : " + emailData.assignmentNo + " | Site City : " + emailData.siteCity,
                        message: "<p style='font-size: 16px;'>Dear Sir/Madam,</p><p style='font-size: 16px;'>Thank you for retaining us to inspect & assess the subject loss. This is to confirm that " + emailData.surveyorName + " shall be attending this claim. He can be reached on " + emailData.surveyorNumber + ". Our reference number for this claim would be " + emailData.assignmentNo + "</p> <p style='font-size: 16px;'>Should you ever need any support / information / update, please feel at ease to get in touch with me.</p><br>" + "<p style='font-size: 16px;'>Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;
            case "Deputation mail":
                {
                    var to = [];
                    to.push({
                        name: emailData.surveyorName,
                        email: emailData.surveyorEmail
                    })
                    var emails = {
                        name: 'Deputation mail',
                        from: emailData.ownerEmail,
                        to: to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Assignment : " + emailData.assignmentNo + " | Site City : " + emailData.siteCity,
                        message: "<p style='font-size: 16px;'>Dear " + emailData.surveyorName + ",</p><p style='font-size: 16px;'>Please refer to our telecom, in respect of the subject claim. You are requested to kindly attend the loss inline with the discussions held and specific requirements of the claim. Our reference number for this claim would be " + emailData.assignmentNo + "</p> <p style='font-size: 16px;'>In order to assist you, we are attaching relevant format of JIR. Please ensure to capture every detail there in & get the same duly signed by the concerned person. In an unlikely event wherein there is a difference of opinion between yourself & the concerned person, both the opinions may be recorded. We would appreciate a brief call from the site while you are attending the loss as this helps us update the insurer's of the developments. Should you ever need any support / information / update please feel at ease to get in touch with me. I will be more than willing to assist.</p><br>" + "<p style='font-size: 16px;'>Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;
            case "On Survey Attended":
                {
                    var emails = {
                        name: 'On Survey Attended',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Assignment : " + emailData.assignmentNo + " | Site City : " + emailData.siteCity,
                        message: "<p style='font-size: 16px;'>We are pleased to inform you that the survey for the said claim has been attended on " + emailData.surveyDate + " No sooner we receive further details, we shall update you in this regard. Meanwhile, request you to kindly bear with us. Should you ever need any support / information / update please feel at ease to get in touch with me. I will be more than willing to assist.</p><br>" + "<p style='font-size: 16px;'>Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;
            case "ILA Authorization":
                {
                    var emails = {
                        name: 'ILA Authorization',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "ILA Authorized of Assignment : " + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>Dear " + emailData.ownerName + "</p><p style='font-size: 16px;'>I have gone through the ILA prepared for " + emailData.insuredName + ", Assignment No. " + emailData.assignmentNo + " and have  authorized the same. It is OK to release</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "ILA Back to Regenerate":
                {
                    var emails = {
                        name: 'ILA Back to Regenerate',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "ILA Sent back for regeneration of Assignment : " + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>Dear " + emailData.ownerName + "</p><p style='font-size: 16px;'>This is to inform you that ILA No. " + emailData.assignmentNo + " has NOT been authorized on " + emailData.ilaAuthDate + ". Please regenrate as per the comments.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "ILA Release":
                {
                    var emails = {
                        name: 'ILA Release',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "ILA Authorized of Assignment : " + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>Dear Sir/Madam,</p><p style='font-size: 16px;'>We are pleased to release the ILA in respect of our Assignment No. " + emailData.assignmentNo + " and your #ClaimNo# and #PolicyNo#.</p><p style='font-size: 16px;'>We hope that the same shall serve your purpose. Should you ever need any support / information / update please feel at ease to get in touch with me. I will be more than willing to assist.</p>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "ILA Send for Authorization":
                {
                    var emails = {
                        name: 'ILA Send for Authorization',
                        from: emailData.ownerEmail,
                        to: "",
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "ILA Send for Authorization Mail of Assignment : " + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>Please go through the ILA for Assignment No. " + emailData.assignmentNo + " in respect of loss sustained by " + emailData.insuredName + " on account of damage to #ProductDetails# and authorize the same.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Authorization":
                {
                    var emails = {
                        name: 'Invoice Authorization',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Invoice Authorization : #InvoiceNo#",
                        message: "<p style='font-size: 16px;'>I have gone through the Invoice prepared for " + emailData.insuredName + ", Invoice No.#InvoiceNo# and authorized the same. It is OK to release.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Back to Regenerate":
                {
                    var emails = {
                        name: 'Invoice Back to Regenerate',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Invoice Back to Regenerate : #InvoiceNo#",
                        message: "<p style='font-size: 16px;'>I have gone through the Invoice prepared for " + emailData.insuredName + ", Invoice No. #InvoiceNo#. Kindly make the changes as advised to you & resend for authorization.</p><p style='font-size: 16px;'>Please let me know if assistance required.</p>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Cancel":
                {
                    var emails = {
                        name: 'Invoice Cancel',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Invoice Cancel : #InvoiceNo#",
                        message: "<p style='font-size: 16px;'>This is to inform all that the Invoice #InvoiceNo# has been canceled.</p><p style='font-size: 16px;'>You may update your record accordingly.</p>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Release":
                {
                    var emails = {
                        name: 'Invoice Release',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "",
                        message: "<p style='font-size: 16px;'>Dear Sir/Madam,We are pleased to attach our bill for professional services rendered for your kind perusal & payment. Our bank details are as follows: #BankDetails# You are requested to kindly release our payment & confirm in order to enable us to release the report.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Revise":
                {
                    var emails = {
                        name: 'Invoice Revise',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Invoice Revise : #InvoiceNo#",
                        message: "<p style='font-size: 16px;'>Invoice #InvoiceNo# has been revised, you are requested to kindly make a note of the same. Copy of the revised invoice is attached for perusal.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "Invoice Send Authorization":
                {
                    var emails = {
                        name: 'Invoice Send Authorization',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "Invoice Send Authorization : #InvoiceNo#",
                        message: "<p style='font-size: 16px;'>Please go through the Invoice for Assignment No. " + emailData.assignmentNo + " in respect of loss sustained by " + emailData.insuredName + " on account of damage to #ProductDetails# and authorize the same</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + emailData.ownerName + "<br> " + emailData.ownerPhone + "<br>" + emailData.ownerEmail + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "LOR Authorization":
                {

                    var to = [];
                    to.push({
                        name: $.jStorage.get("profile").name,
                        email: $.jStorage.get("profile").email
                    })
                    var emails = {
                        name: 'LOR Authorization',
                        from: emailData.ownerEmail,
                        to: to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "LOR is Authorizaed For Assignment : " + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>I have gone through the LOR prepared for " + emailData.insuredName + ", Assignment " + emailData.assignmentNo + " and have authorized the same. It is OK to release.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + $.jStorage.get("profile").name + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            case "LOR Back to Regenerate":
                {
                    var emails = {
                        name: 'LOR Back to Regenerate',
                        from: emailData.ownerEmail,
                        to: emailData.to,
                        cc: emailData.cc,
                        bcc: emailData.bcc,
                        subject: "LOR Back to Regenerate For Assignment No :" + emailData.assignmentNo,
                        message: "<p style='font-size: 16px;'>I have gone through the LOR prepared for " + emailData.insuredName + ", assignment " + emailData.assignmentNo + " Kindly make the changes as advised to you & resend for authorization. Please let me know if assistance required.</p><br>" + "<p style='font-size: 16px;'> Warm Regards, <br>" + $.jStorage.get("profile").name + "</p>"
                    }
                    $scope.emailData = emails;
                }
                break;

            default:
                {
                    // $scope.formData.push($scope.newjson);
                }

        }

    }
  }

};

module.exports = _.assign(module.exports, exports, model);