/**
 * CompanyController
 *
 * @description :: Server-side logic for managing Companies
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

 module.exports = {
 		saveData: function(req, res) {
 				if (req.body) {
 						Company.saveData(req.body, function(err, respo) {
 								if (err) {
 										res.json({
 												value: false,
 												data: err
 										});
 								} else {
 										res.json({
 												value: true,
 												data: respo
 										});
 								}
 						});
 				} else {
 						res.json({
 								value: false,
 								data: "Invalid call"
 						});
 				}
 		},
 		getAll: function(req, res) {
 				if (req.body) {
 						Company.getAll(req.body, function(err, respo) {
 								if (err) {
 										res.json({
 												value: false,
 												data: err
 										});
 								} else {
 										res.json({
 												value: true,
 												data: respo
 										});
 								}
 						});
 				} else {
 						res.json({
 								value: false,
 								data: "Invalid call"
 						});
 				}
 		},
 		delete: function(req, res) {
 				if (req.body) {
 						if (req.body._id && req.body._id != "") {
 								//	console.log("not valid");
 								Company.deleteData(req.body, function(err, respo) {
 										if (err) {
 												res.json({
 														value: false,
 														data: err
 												});
 										} else {
 												res.json({
 														value: true,
 														data: respo
 												});
 										}
 								});
 						} else {
 								res.json({
 										value: false,
 										data: "Invalid Id"
 								});
 						}
 				} else {
 						res.json({
 								value: false,
 								data: "Invalid call"
 						});
 				}
 		},
 		getOne: function(req, res) {
 			console.log(req);
 				if (req.body) {
 						if (req.body._id && req.body._id != "") {
 								Company.getOne(req.body, function(err, respo) {
 										if (err) {
 												res.json({
 														value: false,
 														data: err
 												});
 										} else {
 												res.json({
 														value: true,
 														data: respo
 												});
 										}
 								});
 						} else {
 								res.json({
 										value: false,
 										data: "User id Invalid"
 								});
 						}
 				} else {
 						res.json({
 								value: false,
 								data: "Invalid call"
 						});
 				}
 		},

 };
