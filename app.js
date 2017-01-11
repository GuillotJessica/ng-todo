const app = angular.module("TodoApp", []);

app.controller("TodoController", function($scope) {
  /*******
    Model part (data)
  *******/
  // load from localStorage
  const stringified = localStorage.getItem("list");
  // bind data to $scope (now it's available to the view)
  $scope.list = JSON.parse(stringified);

  /*******
    UX (methods callable from the view)
  *******/
  $scope.addItem = function(item) {
    if(item === null || item === undefined || item === "") return;
    $scope.list.push(item);
    $scope.newItem = null;
    save($scope.list);
  };
  $scope.removeItem = function(index) {
    $scope.list.splice(index, 1);
    save($scope.list);
  };
  $scope.clear = function() {
    $scope.list = [];
    save($scope.list);
  };
  /*******
    Private functions (called by the controller itself)
  *******/
  const save = function(list) {
    const stringified = JSON.stringify(list);
    localStorage.setItem("list", stringified);
  }
});
