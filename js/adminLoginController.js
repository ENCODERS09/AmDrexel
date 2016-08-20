app.controller("adminLoginController",function($scope,$http,$location,$rootScope){
    $scope.loginInfo=
    {
      username:undefined,
      password:undefined
    }

    $scope.login=function()
    {
      var data=
      {
        username:$scope.loginInfo.username,
        password:$scope.loginInfo.password
      }
      $http.post("adminlogin.php",data).success(function(response)
      {
        if(response!="null")
        { 
          console.log(response);
            
            localStorage.setItem("token",JSON.stringify(response));
            $rootScope.user=response.substr(1,response.indexOf(' | '));
            $location.path('/adminPanel');
        }
        else
        {
            $scope.inc="1";
        }
      }).error(function(error){
        console.error(error);
      });
    }
});

app.controller("mainAdminController",function($scope,$location,$http,AuthenticationService,$rootScope){
  console.log("inside main admin controller");
    var token;
    if (localStorage['token'])
    {
      token = JSON.parse(localStorage['token']);
    } 
    else 
    {
      token = "something stupid";
    }
    AuthenticationService.checkToken(token,"admin");
    document.getElementById('maindiv').scrollIntoView();
    $rootScope.user=token.substr(1,token.indexOf(' | '));

    $scope.fetchData=function(){
      $http.post("fetchUserData.php").success(function(response){
        $scope.count=response[0].length;;
        drawCharts(response);
      });
    }();

    drawCharts=function(response)
    {
        Chart.defaults.global.defaultFontColor="white";
        var ctxMain = document.getElementById("myChart1");
        var myChart = new Chart(ctxMain, {
            type: 'pie',
            data: 
            {
              labels: 
              [
                "Communication",
                "Imporvement needed"
              ],
              datasets: [
              {
                  data: [response[6][0], 100-response[6][0]],
                  backgroundColor: [
                      "rgba(75,192,192,0.7)",
                      "rgba(0, 0, 0, 0.7)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(75,192,192,1)",
                      "rgba(0, 0, 0, 0.7)"
                  ]
              }]
            }
        });

        ///////////////////////////////////////////////////////////////////////////////////
        var ctxMain = document.getElementById("myChart2");
        var myChart = new Chart(ctxMain, {
            type: 'pie',
            data: 
            {
              labels: 
              [
                "Adaptability",
                "Imporvement needed"
              ],
              datasets: [
              {
                  data: [response[6][1], 100-response[6][1]],
                  backgroundColor: [
                      "rgba(255, 0, 0, 0.7)",
                      "rgba(0, 0, 0, 0.7)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(255, 0, 0, 1)",
                      "rgba(0, 0, 0, 0.7)"
                  ]
              }]
            }
        });
        ///////////////////////////////////////////////////////////////////////////////////
        var ctxMain = document.getElementById("myChart3");
        var myChart = new Chart(ctxMain, {
            type: 'pie',
            data: 
            {
              labels: 
              [
                "Emotional_Intelligence",
                "Imporvement needed"
              ],
              datasets: [
              {
                  data: [response[6][2], 100-response[6][2]],
                  backgroundColor: [
                      "rgba(0, 128, 0, 0.7)",
                      "rgba(0, 0, 0, 0.7)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(0, 128, 0, 1)",
                      "rgba(0, 0, 0, 0.7)"
                  ]
              }]
            }
        });
        ///////////////////////////////////////////////////////////////////////////////////
        var ctxMain = document.getElementById("myChart4");
        var myChart = new Chart(ctxMain, {
            type: 'pie',
            data: 
            {
              labels: 
              [
                "Interpersonal_Skills",
                "Imporvement needed"
              ],
              datasets: [
              {
                  data: [response[6][3], 100-response[6][3]],
                  backgroundColor: [
                      "rgba(255, 255, 0, 0.7)",
                      "rgba(0, 0, 0, 0.7)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(255, 255, 0, 1)",
                      "rgba(0, 0, 0, 1)"
                  ]
              }]
            }
        });
        ///////////////////////////////////////////////////////////////////////////////////
        var ctxMain = document.getElementById("myChart5");
        var myChart = new Chart(ctxMain, {
            type: 'pie',
            data: 
            {
              labels: 
              [
                "Work_Ethics",
                "Imporvement needed"
              ],
              datasets: [
              {
                  data: [response[6][4], 100-response[6][4]],
                  backgroundColor: [
                      "rgba(128, 0, 128, 0.7)",
                      "rgba(0, 0, 0, 0.7)"
                  ],
                  hoverBackgroundColor: [
                      "rgba(128, 0, 128, 1)",
                      "rgba(0, 0, 0, 0.7)"
                  ]
              }]
            }
        });
        /////////////\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\/\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
    }
  
    
});

app.controller("completeRecordsController",function($scope,$http,$location,$rootScope,AuthenticationService){
    var token;
    if (localStorage['token'])
    {
      token = JSON.parse(localStorage['token']);
    } 
    else 
    {
      token = "something stupid";
    }
    AuthenticationService.checkToken(token,"admin");
    document.getElementById('maindiv').scrollIntoView();
    $rootScope.user=token.substr(1,token.indexOf(' | '));

     $scope.fetchCompleteUserData=function(){
      $http.post("fetchCompleteUserData.php").success(function(response){
        console.log(response);
        $scope.records=response;
      });
    }();

});

app.controller("individualRecordController",function($scope,$http,$location,$rootScope,AuthenticationService){
    var token;
    if (localStorage['token'])
    {
      token = JSON.parse(localStorage['token']);
    } 
    else 
    {
      token = "something stupid";
    }
    AuthenticationService.checkToken(token,"admin");
    document.getElementById('maindiv').scrollIntoView();
    $rootScope.user=token.substr(1,token.indexOf(' | '));

     $scope.fetchIndividualUserData=function(){
      var data={
        searchTerm:$scope.searchTerm
      }

      $http.post("fetchIndividualUserData.php",data).success(function(response){
        console.log(response);
        if(response!="null")
        {
          $scope.record=response[0];
          $scope.found=1;
        }
        else
          $scope.found=0;
      });
    };

});