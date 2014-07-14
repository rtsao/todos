var angular = require('angular');
var _ = require('lodash');

module.exports = angular.module('app.TodosCtrl', [])
  .controller('TodosCtrl', function() {


    var that = this;

    this.sort = {
      option: '$$hashKey',
      reverse: false
    }

    this.items = [{title:'foo', done:false}, {title:'bar', done:false}, {title:'baz', done:true}];
    console.log(this.items)

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

    this.sortBy = function(option) {

      that.sort.option === option ?
        that.sort.reverse = !that.sort.reverse :
        that.sort.option = option

      console.log(that.sort.reverse);

    }


  })