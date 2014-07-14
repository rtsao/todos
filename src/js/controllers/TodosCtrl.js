var angular = require('angular');

module.exports = angular.module('app.TodosCtrl', [])
  .controller('TodosCtrl', function() {

    var that = this;

    this.items = [{title:'foo', done:false}, {title:'bar', done:false}, {title:'baz', done:true}];

    this.addItem = function() {

      that.items.push({
        title:that.newTodo,
        done:false
      });

    }

    this.toggleStatus = function(item) {
      item.done = !item.done;
    }


  })