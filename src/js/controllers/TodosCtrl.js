var angular = require('angular');
var _ = require('lodash');

module.exports = angular.module('app.TodosCtrl', [])
  .controller('TodosCtrl', function() {


    var that = this;

    this.sortBy = '';
    this.reverse = false;
    this.items = [{title:'foo', done:false}, {title:'bar', done:false}, {title:'baz', done:true}];

    this.addItem = function() {

      if (!that.newTodo)
        return;

      that.items.push({
        title:that.newTodo,
        done:false
      });

      that.newTodo = '';

    }

    this.toggleItemStatus = function(item) {
      item.done = !item.done;
    }

    this.removeItem = function(item) {
      that.items.splice(that.items.indexOf(item), 1);
    }

    this.clearCompleted = function() {
      that.items = that.items.filter(function(item) {
        return !item.done;
      });
    }


  })