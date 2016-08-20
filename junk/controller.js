app.controller("testController",function($scope,testService){
    var promise=testService.getJSON();

      promise.then(function(object){
      	console.log(object);
        $scope.data=object;     

      },function(reason){
          $scope.data=reason;
      });

      submit=function()
      {
        var total=0;
        var subtotal=0;
      	$scope.data.module.forEach(function(module){
            subtotal=0;
            module.questions.forEach(function(question){
              subtotal=subtotal+parseInt(question.Answer);
            });
            total=total+subtotal;
        });

        $scope.$apply(function() 
        { 
          $scope.score=total;
        });
      }
});