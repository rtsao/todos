var angular = require('angular');

module.exports = angular.module('app.storageService', [])
  .service('storageService', function () {

    var storage_key = 'myTodosApp';

    return {

      getItems: function() {
        return JSON.parse(localStorage.getItem(storage_key) || '[]');
      },
      setItems: function(items) {
        localStorage.setItem(storage_key, JSON.stringify(items));
      }

    }

  })