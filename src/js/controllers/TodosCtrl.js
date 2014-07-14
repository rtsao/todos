var angular = require('angular');
var _ = require('lodash');
var storageService = require('../services/storageService.js');

module.exports = angular.module('app.TodosCtrl', [storageService.name])
  .controller('TodosCtrl', ['storageService', function(storageService) {

    var that = this;

    this.items = [];
    
    //Ensure unique $$hashKey
    _.each(storageService.getItems(), function(item){
      that.items.push({
        title:item.title,
        done:item.done
      });
    });

    this.sort = {
      option: '$$hashKey',
      reverse: false
    }

    this.addItem = function() {
      if (!that.newTodo)
        return;

      that.items.push({
        title:that.newTodo,
        done:false
      });

      that.newTodo = '';

      storageService.setItems(that.items);

    }

    this.toggleItemStatus = function(item) {
      item.done = !item.done;
      storageService.setItems(that.items);
    }

    this.removeItem = function(item) {
      that.items.splice(that.items.indexOf(item), 1);
      storageService.setItems(that.items);
    }

    this.clearCompleted = function() {
      that.items = that.items.filter(function(item) {
        return !item.done;
      });
      storageService.setItems(that.items);
    }

    this.sortBy = function(option) {
      that.sort.option === option ?
        that.sort.reverse = !that.sort.reverse :
        that.sort.option = option
    }


  }])