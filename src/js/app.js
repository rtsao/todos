"use strict";

var angular = require('angular')
  , TodosCtrl = require('./controllers/TodosCtrl.js')

require('angular-animate')

var app = angular.module('app', [
  'ngAnimate',
  TodosCtrl.name
]);