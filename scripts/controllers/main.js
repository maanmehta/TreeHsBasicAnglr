'use strict';

angular.module("todoListApp")

.controller('mainCtrl', function ($scope, dataService) {
    
  $scope.helloWorld = function() {
    console.log("Hello! This is helloWorld Ctrlr function, in the mainCtrl");
  };
    
  $scope.helloConsole = dataService.helloWorld;
    
  $scope.deleteTodo = function(todo,idx) {
      dataService.deleteTodo(todo,idx);
      $scope.todos.splice(idx,1);
  }
  
  $scope.addTodo = function() {
      var todo={name:'A new Todo'};
      $scope.todos.push(todo);
  }
      
  $scope.saveTodo = dataService.saveTodo;

    
//  $scope.todosOld =[
//        {"name": "Clean house"},
//        {"name": "Water plans"},
//        {"name": "Weedman"},
//        {"name": "Call Bank"},
//        {"name": "Email Dave"}
//  ]
  
  var cbFunction = function(response) { 
      // response param is passed on by the $http.get.then method below in our service
      
      $scope.todos = response.data; //save the response json obj to our todos obj
      
      console.log("Response data object is:");
      console.log(response.data);
  }
  
  // execute the getTodos method of the service and pass in a callback function defined above
  // that will executed upon success of get http method call
  dataService.getTodos(cbFunction);
    
})


//.controller('coolCtrl', function ($scope) {
//    
//  $scope.whoAmI = function() {
//    console.log("Hello! This is whoAmI  function, in the coolCtrl");
//  };
//    
//  $scope.helloWorld = function() {
//    console.log("Hello! This is overridden helloWorld Ctrlr function, in the coolCtrl");
//  };
//    
//})
//
//.controller('imASibling', function ($scope) {
//
//  $scope.foobar=1234;
//
//})

;