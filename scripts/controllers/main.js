'use strict';

angular.module("todoListApp")

.controller('mainCtrl', function ($scope, dataService) {
    
  $scope.helloWorld = function() {
    console.log("Hello! This is helloWorld Ctrlr function, in the mainCtrl");
  };
    
  $scope.helloConsole = dataService.helloWorld;
    
  $scope.deleteTodo = function(todo,$index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index,1);
  }
  
  $scope.addTodo = function() {
      var todo={name:'A new Todo'};
      $scope.todos.unshift(todo); // unshift is opposite of push. Push adds the new todo to the bottom of the list and unshift to the top
  }
      
  $scope.saveTodos = function() {
	  
	  // defining a callback function that returns an edited todo. This cb func  will be passed as a param tot he filter func of the array below
	  var cbFunction1 = function(todo) {
		  if(todo.edited){
			  return todo;
		  }
	  }
	  var filteredTodos = $scope.todos.filter(cbFunction1); // filter todos array with the logic in the cbFunction1 which in returns means all the edited todos only will be filtered in the new filteredTodos array
	  dataService.saveTodos(filteredTodos);
  }

    
//  $scope.todosOld =[
//        {"name": "Clean house"},
//        {"name": "Water plans"},
//        {"name": "Weedman"},
//        {"name": "Call Bank"},
//        {"name": "Email Dave"}
//  ]
  
  // defining a callback function that will be passed as a param
  var cbFunction2 = function(response) { 
      // response param is passed on by the $http.get.then method below in our service
      
      $scope.todos = response.data; //save the response json obj to our todos obj
      
      console.log("Response data object is:");
      console.log(response.data);
  }
  
  // execute the getTodos method of the service and pass in a callback function defined above
  // that will executed upon success of get http method call
  dataService.getTodos(cbFunction2);
    
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