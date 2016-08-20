var app = angular.module("testapp",["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider

  .when("/", {
    templateUrl : "login.html"
  })
  .when("/test", {
    templateUrl : "test.html",
    controller : "mainController"
  })
  .when("/testintro", {
    templateUrl : "testintro.html",
    controller : "mainController"
  })
  .when("/presurvey", {
    templateUrl : "presurvey.html",
    controller : "mainController"
  })
  .when("/report", {
    templateUrl : "report.html",
    controller : "mainController"
  })
  .when("/instructions", {
    templateUrl : "instructions.html",
    controller : "mainController"
  })
  .when("/adminLogin", {
    templateUrl : "adminLogin.html"
  })
  .when("/adminPanel", {
    templateUrl : "adminPanel.html",
    controller : "mainAdminController"
  })
  .when("/individualRecords", {
    templateUrl : "individualRecords.html",
    controller : "individualRecordController"
  })
  .when("/completeRecords", {
    templateUrl : "completeRecords.html",
    controller : "completeRecordsController"
  });
});

