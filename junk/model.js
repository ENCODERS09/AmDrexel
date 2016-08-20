
app.factory("testService",function($http,$q){
    return{
     getJSON:function(){
       var defered=$q.defer();

       //$http.get("https://frozen-meadow-67901.herokuapp.com/data").success(function(data){
        //$http.get("http://localhost:1234/").success(function(data){
          $http.get("questions.json").success(function(data){
        defered.resolve(data);
       }).error(function(){
         defered.reject("No data found");
       });
       return defered.promise;
     }
   } 
});