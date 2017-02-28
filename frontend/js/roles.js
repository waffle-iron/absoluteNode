angular.module('rolesController', ['templateservicemod', 'navigationservice', 'assignmenttemplate', 'ui.bootstrap', 'ui.select', 'ngAnimate', 'toastr', 'ngSanitize', 'angular-flexslider', 'ui.tinymce', 'imageupload', 'ngMap', 'toggle-switch', 'cfp.hotkeys', 'ui.sortable', 'infinite-scroll', 'dragularModule'])

    .controller('RolesCtrl', function ($scope, $window, TemplateService, NavigationService, $timeout, base64) {
        //Used to name the .html file
        $scope.template = TemplateService.changecontent("roles");
        $scope.menutitle = NavigationService.makeactive("Roles");
        TemplateService.title = $scope.menutitle;
        $scope.navigation = NavigationService.getnav();
        $scope.formData = {
            roles: [],
            name: ""
        };
        var obj = {
            mainMenu: "",
            subMenu: "",
            subThirdMenu: "",
            states: [],
            view: {
                val: false,
                isExist: false
            },
            add: {
                val: false,
                isExist: false
            },
            edit: {
                val: false,
                isExist: false
            },
            delete: {
                val: false,
                isExist: false
            },
            addRequest: {
                val: false,
                isExist: false
            },
            modifyRequest: {
                val: false,
                isExist: false
            },
            approve: {
                val: false,
                isExist: false
            },
            reject: {
                val: false,
                isExist: false
            },
            viewAll: {
                val: false,
                isExist: false
            }
        };
        $scope.roles = [];

        function addRoles(menu1, menu2, menu3, states, viewBool, addBool, editBool, deleteBool, addRequestBool, modifyRequestBool, approveBool, rejectBool, viewAllBool) {
            var o = _.cloneDeep(obj);
            o.mainMenu = menu1;
            o.subMenu = menu2;
            o.subThirdMenu = menu3;
            o.states = _.split(states, ",");
            o.view.isExist = viewBool;
            o.add.isExist = addBool;
            o.edit.isExist = editBool;
            o.delete.isExist = deleteBool;
            o.addRequest.isExist = addRequestBool;
            o.modifyRequest.isExist = modifyRequestBool;
            o.approve.isExist = approveBool;
            o.reject.isExist = rejectBool;
            o.viewAll.isExist = viewAllBool;
            $scope.formData.roles.push(o);
        }
        addRoles("Email", "Inbox", "", "", true, false, false, false, false, false, false, false, true);
        addRoles("Role", "Role", "", "role,roles-list", true, true, true, true, false, false, false, false, true);        
        addRoles("Company Setup", "Company", "", "company,company-list", true, true, true, true, false, false, false, false, true);
        addRoles("Company Setup", "Type of Office", "", "company,typeOfOffice-list", true, true, true, true, false, false, false, false, true);
        addRoles("Company Setup", "Office", "", "company,office-list", true, true, true, true, false, false, false, false, true);
        addRoles("Company Setup", "Branch", "", "company,branch-list", true, true, true, true, false, false, false, false, true);
        addRoles("Location", "Country", "", "location,country-list", true, true, true, true, false, false, false, false, true);
        addRoles("Location", "Zone", "", "location,zone-list", true, true, true, true, false, false, false, false, true);
        addRoles("Location", "State", "", "location,state-list", true, true, true, true, false, false, false, false, true);
        addRoles("Location", "District", "location,district-list", "", true, true, true, true, false, false, false, false, true);
        addRoles("Location", "City", "", "location,city-list", true, true, true, true, false, false, false, false, true);
        addRoles("Products", "Industry", "", "product,industry-list", true, true, true, true, true, true, true, true, true);
        addRoles("Products", "Category", "", "product,category-list", true, true, true, true, true, true, true, true, true);
        addRoles("Products", "Product", "", "product,product-list", true, true, true, true, true, true, true, true, true);
        addRoles("Finance", "Currency", "", "finance,currency-list", true, true, true, true, false, false, false, false, true);
        addRoles("Finance", "Banks", "", "finance,bankMaster-list", true, true, true, true, false, false, false, false, true);
        addRoles("Finance", "Activity Type", "", "finance,activityType-list", true, true, true, true, true, true, true, true, true);
        addRoles("Finance", "Expense", "", "finance,expense-list", true, true, true, true, true, true, true, true, true);
        addRoles("Finance", "InvoiceExpenditure", "", "finance,invoiceExpenditure-list", true, true, true, true, false, false, false, false, true);
        addRoles("Finance", "Tax", "", "finance,tax-list", true, true, true, true, false, false, false, false, true);
        addRoles("Customer", "Segment", "", "customer,customerSegment-list", true, true, true, true, false, false, false, false, true);
        addRoles("Customer", "Company", "", "customer,customerCompany-list", true, true, true, true, false, false, false, false, true);
        addRoles("Customer", "Customer", "", "customer,customer-list", true, true, true, true, false, false, false, false, true);
        addRoles("Employee", "Employee", "", "employee,employee-list", true, true, true, true, false, false, false, false, true);
        addRoles("Employee", "Function", "", "employee,func-list", true, true, true, true, false, false, false, false, true);
        addRoles("Employee", "Grade", "", "employee,grade-list", true, true, true, true, false, false, false, false, true);
        addRoles("Insurance", "Department", "", "insurance,department-list", true, true, true, true, false, false, false, false, true);
        addRoles("Insurance", "Policy Type", "", "insurance,policyType-list", true, true, true, true, true, true, true, true, true);
        addRoles("Insurance", "Policy Doc", "", "insurance,policyDoc-list", true, true, true, true, false, false, false, false, true);
        addRoles("Insurance", "COL", "", "insurance,causeLoss-list", true, true, true, true, true, true, true, true, true);
        addRoles("Insurance", "NOL", "", "insurance,natureLoss-list", true, true, true, true, true, true, true, true, true);
        addRoles("Insurance", "Salvage", "", "insurance,salvage-list", true, true, true, true, true, true, true, true, true);
        addRoles("Insurance", "Nature Of Survey Code", "", "insurance,surveyCode-list", true, true, true, true, false, false, false, false, true);
        addRoles("Assignments", "Type Of Claims", "", "assignment,claims-list,", true, true, true, true, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "New", "assignment,assignment-list", true, true, true, true, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Edit", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "List", "assignment", true, false, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Document Upload", "assignment", true, true, true, true, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Document Download", "assignment", true, false, true, true, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Photographs", "assignment", true, true, true, true, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Transfer", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Force close request", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Force close approval", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Reopen Request", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "Assignment", "Reopen Approval", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "New", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "Send for Authorize", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "Authorize", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "Revise", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "Release", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "ILA", "Released", "assignment", true, false, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "New", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Send for authorize", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Authorize", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Revise", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Release", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Regenerate", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Assignments", "LOR", "Status", "assignment", true, true, false, false, false, false, false, false, true);
        addRoles("Templates", "LOR", "", "template,templateLor-list", true, true, true, true, false, false, false, false, true);
        addRoles("Templates", "ILA", "", "template,templateIla-list", true, true, true, true, false, false, false, false, true);
        addRoles("Templates", "ISR", "", "template,templateIsr-list", true, true, true, true, false, false, false, false, true);
        addRoles("Templates", "Invoice", "", "template,templateInvoice-list", true, true, true, true, false, false, false, false, true);        
        addRoles("Reimbursement", "Reimbursement Detail", "Request", "reimbursement,reimbursement-list", true, true, true, true, false, false, false, false, true);
        addRoles("Reimbursement", "Reimbursement Detail", "Approval", "reimbursement,reimbursement-list", true, false, true, false, false, false, true, true, true);
        addRoles("Reimbursement", "Reimbursement Detail", "Disbusement", "reimbursement,reimbursement-list", true, true, true, true, false, false, false, false, true);
        addRoles("Knowledge Base", "Knowledge Base list", "Access", "", true, true, true, false, false, false, false, false, true);
        addRoles("Knowledge Base", "Knowledge Base list", "Request", "", true, true, true, false, false, false, false, false, true);
        addRoles("Knowledge Base", "Knowledge Base list", "Approval", "", true, true, true, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "New", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Send for Authorize", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Authorize", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Revise", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Release", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Cancle", "", true, true, false, false, false, false, false, false, true);
        addRoles("Invoice", "Invoice", "Regenerate", "", true, true, false, false, false, false, false, false, true);
        console.log("$.jstorage", $.jStorage.get("profile"));
        $scope.saveModel = function (formData) {
            NavigationService.modelSave("Role", $scope.formData, function (data) {
                if (data.value === true) {
                    $window.history.back();
                    toastr.success($scope.modelCap + " " + formData.name + " created successfully.", $scope.modelCap + " Created");
                } else {
                    toastr.error($scope.modelCap + " creation failed.", $scope.modelCap + " creation error");
                }
            });
        };
        $scope.viewAll = function (index, state) {
            _.each($scope.formData.roles[index], function (n) {
                if (n.isExist == true) {
                    n.val = state;
                }
            });
        };
        $scope.selectAll = function () {
            _.each($scope.formData.roles, function (n) {
                if (n.isExist == true) {
                    n.val = state;
                }
            });
        };
    });