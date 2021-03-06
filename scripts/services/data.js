'use strict';

angular.module("todoListApp")

.service('dataService', function($http) {
    
    this.helloWorld = function() {
        console.log("This is helloWorld function from dataService service");
    }
    
    this.getTodos = function(callbackFunc) {
        $http.get('mock/todos.json')
        .then(callbackFunc) //then method passes in the response object
    }
    
    this.deleteTodo = function(todo) {
        
        console.log("deleteTodo service method - Call to DELETE the following todo --> "+todo.name);
        //other logic to delete todo from backend
    }
    
    this.saveTodos = function(todos) {
        console.log("saveTodos service method - " + todos.length + " have been saved ");
        //other logic to delete todo from backend
    }
      
})

;