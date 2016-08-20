
app.factory("testService",function($http,$q){
    return{
     getJSON:function(){
       var defered=$q.defer();

          $http.get("questions.json").success(function(data){
        defered.resolve(data);
       }).error(function(){
         defered.reject("No data found");
       });
       return defered.promise;
     }
   } 
});

app.service('AuthenticationService', ["$http", "$location", function($http, $location){
  var self = this;
  self.checkToken = function(token,role)
  {
    var data = {token: token};
    if(role.localeCompare("admin")==0)
    {
      $http.post("checkAdminToken.php", data).success(function(response)
      {
        if (response === "unauthorized")
        {
          console.log("Logged out");
          $location.path("/adminLogin")
        } 
        else 
        {
          console.log("Logged In");
          return response;
        }
      }).error(function(error)
      {
        $location.path("/adminLogin")
      })
    }

    else if(role.localeCompare("user")==0)
    {

      $http.post("checkToken.php", data).success(function(response){
      if (response === "unauthorized"){
        console.log("Logged out");
        $location.path("/")
      } else {
        console.log("Logged In");
        return response;
      }
    }).error(function(error){
      $location.path("/")
    })
    }

    
    
  }

}]);