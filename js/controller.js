app.controller("testController",function($scope,testService,$location,$rootScope,$http){

    var promise;
    var sectionsScore=[];
    var temp=[];
    var subSectionsScore=[];
    var links=[];
    var subSections=[];
    $rootScope.user=undefined;

    $rootScope.getQuestions=function(){
      promise=testService.getJSON();
      promise.then(function(object){
        console.log(object);
        $scope.data=object;     

      },function(reason){
          $scope.data=reason;
      });
    }

      ontop=function(){
        document.getElementById('maindiv').scrollIntoView();
      }

      submit=function()
      {
        var total=0;
        var subtotal=0;
        var sections=["Communication","Adaptability","Emotional Intelligence","Interpersonal","Work Ethic"];
        subSections=["Verbal","Written","Both","Presentation","Adaptability","Stress","Self-Awareness","Social Skills","Motivation","Empathy","Workplace Attire","Workplace Ettiquette","Initiative","Accountability","Trustworthiness"];
      	var subSectionsQuestions=[5,6,6,3,13,7,6,5,5,4,13,7,6,7,7];
        links=["https://www.youtube.com/watch?v=G031QFT5810","https://www.youtube.com/watch?v=p6qVJ1KhHek","https://www.youtube.com/watch?v=1zpf8H_Dd40","https://www.youtube.com/watch?v=tKmkB7OVO_M","https://www.youtube.com/watch?v=rlmX1yWt_SI","https://www.youtube.com/watch?v=XeKfpCGwN8I","https://www.youtube.com/watch?v=LH12DmOwWRk","https://www.youtube.com/watch?v=-PwNNmmNqdk","https://www.youtube.com/watch?v=rrkrvAUbU9Y","https://www.youtube.com/watch?v=baHrcC8B4WM","https://www.youtube.com/watch?v=RgbL2rKRvyw","https://www.youtube.com/watch?v=ZSZYMxM5E7w","https://www.youtube.com/watch?v=ZSZYMxM5E7w","https://www.youtube.com/watch?v=Iyw1dgXUCEI","https://www.youtube.com/watch?v=goT4N1hCqek"];
        suggestedCourses=[];

        $scope.data.module.forEach(function(module){
            subtotal=0;
            module.questions.forEach(function(question){
              subtotal=subtotal+parseInt(question.Answer);
            });
            sectionsScore.push(subtotal);
            total=total+subtotal;
        });
        console.log(sectionsScore);
        for(i=0;i<5;i++)
          for(j=0;j<20;j++)
            console.log($scope.data.module[i].questions[j].Answer);

        subtotal=0;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        for(i=0;i<5;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[0].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=5;i<11;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[0].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=11;i<17;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[0].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=17;i<20;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[0].questions[i].Answer);
        }
        temp.push(subtotal);

        console.log(temp);
        subSectionsScore.push(temp);
        temp=[];
        subtotal=0;
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        for(i=0;i<13;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[1].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=13;i<20;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[1].questions[i].Answer);
        }
        temp.push(subtotal);
        
        console.log(temp);
        subSectionsScore.push(temp);
        temp=[];
        subtotal=0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        for(i=0;i<6;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[2].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=6;i<11;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[2].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=11;i<16;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[2].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=16;i<20;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[2].questions[i].Answer);
        }
        temp.push(subtotal);

        console.log(temp);
        subSectionsScore.push(temp);
        temp=[];
        subtotal=0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        for(i=0;i<13;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[3].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=13;i<20;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[3].questions[i].Answer);
        }
        temp.push(subtotal);

        console.log(temp);
        subSectionsScore.push(temp);
        temp=[];
        subtotal=0;

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        for(i=0;i<6;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[4].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=6;i<13;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[4].questions[i].Answer);
        }
        temp.push(subtotal);
        subtotal=0;
        for(i=13;i<20;i++)
        {
          subtotal=subtotal+parseInt($scope.data.module[4].questions[i].Answer);
        }
        temp.push(subtotal);

        console.log(temp);
        subSectionsScore.push(temp);
        temp=[];
        subtotal=0;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        var data=
          {
            token:JSON.parse(localStorage['token']),
            score:total
          }

        var scoreData=
        {
          token:JSON.parse(localStorage['token']),
          sectionsScore:sectionsScore,
          subSectionsScore:subSectionsScore
        }

        $http.post("saveSectionScore.php",scoreData).success(function(response)
        {
        });

        /*$http.post("mailer.php").success(function(response)
        {
          console.log(response);
        });*/


        $http.post("savescore.php",data).success(function(response)
          {
            console.log(response);
            $location.path('/report');
          });

        $scope.$apply(function() 
        { 
          $scope.score=total;
        });
      }

       $scope.logout=function()
      {
        var data=
        {
          token:JSON.parse(localStorage['token'])
        }
        console.log($rootScope.user,$rootScope.user.length);
        if($rootScope.user.localeCompare("admin ")==0||$rootScope.user.localeCompare("ceo ")==0||$rootScope.user.localeCompare("hr ")==0)
        {
          $http.post("adminLogout.php",data).success(function(response)
          {
            localStorage.clear();
            $rootScope.user=undefined; 
            sectionsScore=[];
            $location.path('/adminLogin');
            
          }).error(function(error){
            console.error(error);
          });
        }
        else
        { 
          $http.post("logout.php",data).success(function(response)
          {
            localStorage.clear();
            $rootScope.user=undefined; 
            sectionsScore=[];
            $location.path('/');
            
          }).error(function(error){
            console.error(error);
          });
        }
      }

      drawChart=function()
      {
        var colors=[];

        for(i=0;i<sectionsScore.length;i++)
        {
          if(sectionsScore[i]>=20&&sectionsScore[i]<=99)
            colors.push('rgba(255, 0, 0, 1)');
          else if(sectionsScore[i]>=100&&sectionsScore[i]<=149)
            colors.push('rgba(255, 255, 0, 1)');
          else if(sectionsScore[i]>=150&&sectionsScore[i]<=200)
            colors.push('rgba(128, 255, 0, 1)');
        }

        Chart.defaults.global.defaultFontStyle="bold";
        Chart.defaults.global.defaultFontSize=18;

        var ctxMain = document.getElementById("myChart");
        var myChart = new Chart(ctxMain, {
            type: 'horizontalBar',
            data: {
                labels: ["Communication", "Adaptability", "Emotional Intelligence", "Interpersonal Skills", "Work Ethics"],
                datasets: [{
                    label: 'SECTIONS',
                    data: sectionsScore,
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:200
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });

        ctxMain.onclick = function()
        {
          document.getElementById('myChart1').scrollIntoView();
        };
      
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      var colors=[];

          if(subSectionsScore[0][0]>=5&&subSectionsScore[0][0]<=24)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(0);
          }
          else if(subSectionsScore[0][0]>=25&&subSectionsScore[0][0]<=37)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[0][0]>=38&&subSectionsScore[0][0]<=50)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[0][1]>=6&&subSectionsScore[0][1]<=29)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(1);
          }
          else if(subSectionsScore[0][1]>=30&&subSectionsScore[0][1]<=44)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[0][1]>=45&&subSectionsScore[0][1]<=60)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[0][2]>=6&&subSectionsScore[0][2]<=29)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(2);
          }
          else if(subSectionsScore[0][2]>=30&&subSectionsScore[0][2]<=44)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[0][2]>=45&&subSectionsScore[0][2]<=60)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[0][3]>=3&&subSectionsScore[0][3]<=14)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(3);
          }
          else if(subSectionsScore[0][3]>=15&&subSectionsScore[0][3]<=22)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[0][3]>=23&&subSectionsScore[0][3]<=30)
            colors.push('rgba(128, 255, 0, 1)');
        

        var ctx = document.getElementById("myChart1");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Verbal", "Written", "Both", "Presentatations"],
                datasets: [{
                    label: 'COMMUNICATION',
                    data: subSectionsScore[0],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:100
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          var colors=[];

          if(subSectionsScore[1][0]>=13&&subSectionsScore[1][0]<=65)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(4);
          }
          else if(subSectionsScore[1][0]>=66&&subSectionsScore[1][0]<=98)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[1][0]>=99&&subSectionsScore[1][0]<=130)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[1][1]>=7&&subSectionsScore[1][1]<=34)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(5);
          }
          else if(subSectionsScore[1][1]>=35&&subSectionsScore[1][1]<=52)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[1][1]>=53&&subSectionsScore[1][1]<=70)
            colors.push('rgba(128, 255, 0, 1)');
        
        var ctx = document.getElementById("myChart2");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Adaptability", "Stress"],
                datasets: [{
                    label: 'ADAPTABILITY',
                    data: subSectionsScore[1],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:100
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          var colors=[];

          if(subSectionsScore[2][0]>=6&&subSectionsScore[2][0]<=29)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(6);
          }
          else if(subSectionsScore[2][0]>=30&&subSectionsScore[2][0]<=44)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[2][0]>=45&&subSectionsScore[2][0]<=60)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[2][1]>=5&&subSectionsScore[2][1]<=24)
           {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(7);
          }
          else if(subSectionsScore[2][1]>=25&&subSectionsScore[2][1]<=37)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[2][1]>=38&&subSectionsScore[2][1]<=50)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[2][2]>=5&&subSectionsScore[2][2]<=24)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(8);
          }
          else if(subSectionsScore[2][2]>=25&&subSectionsScore[2][2]<=37)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[2][2]>=38&&subSectionsScore[2][2]<=50)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[2][3]>=3&&subSectionsScore[2][3]<=14)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(9);
          }
          else if(subSectionsScore[2][3]>=15&&subSectionsScore[2][3]<=22)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[2][3]>=23&&subSectionsScore[2][3]<=30)
            colors.push('rgba(128, 255, 0, 1)');
        

        var ctx = document.getElementById("myChart3");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Self Awareness/Self Management", "Social Skills", "Motivation", "Empathy"],
                datasets: [{
                    label: 'Emotional Intelligence',
                    data: subSectionsScore[2],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:100
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          var colors=[];

          if(subSectionsScore[3][0]>=13&&subSectionsScore[3][0]<=65)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(10);
          }
          else if(subSectionsScore[3][0]>=66&&subSectionsScore[3][0]<=98)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[3][0]>=99&&subSectionsScore[3][0]<=130)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[3][1]>=7&&subSectionsScore[3][1]<=34)
           {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(11);
          }
          else if(subSectionsScore[3][1]>=35&&subSectionsScore[3][1]<=52)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[3][1]>=53&&subSectionsScore[3][1]<=70)
            colors.push('rgba(128, 255, 0, 1)');
        
        var ctx = document.getElementById("myChart4");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Workplace Attire", "Workplace Ettiquette"],
                datasets: [{
                    label: 'Interpersonal',
                    data: subSectionsScore[3],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:100
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

          var colors=[];

          if(subSectionsScore[4][0]>=6&&subSectionsScore[4][0]<=29)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(12);
          }
          else if(subSectionsScore[4][0]>=30&&subSectionsScore[4][0]<=44)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[4][0]>=45&&subSectionsScore[4][0]<=60)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[4][1]>=7&&subSectionsScore[4][1]<=34)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(13);
          }
          else if(subSectionsScore[4][1]>=35&&subSectionsScore[4][1]<=52)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[4][1]>=53&&subSectionsScore[4][1]<=70)
            colors.push('rgba(128, 255, 0, 1)');

          if(subSectionsScore[4][2]>=7&&subSectionsScore[4][2]<=34)
          {
            colors.push('rgba(255, 0, 0, 1)');
            suggestedCourses.push(14);
          }
          else if(subSectionsScore[4][2]>=35&&subSectionsScore[4][2]<=52)
            colors.push('rgba(255, 255, 0, 1)');
          else if(subSectionsScore[4][2]>=53&&subSectionsScore[4][2]<=70)
            colors.push('rgba(128, 255, 0, 1)');
        

        var ctx = document.getElementById("myChart5");
        var myChart = new Chart(ctx, {
            type: 'horizontalBar',
            data: {
                labels: ["Initiative", "Accountability", "Trustworthiness"],
                datasets: [{
                    label: 'Work Ethic',
                    data: subSectionsScore[4],
                    backgroundColor: colors,
                    borderColor: colors,
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true,
                            max:100
                        }
                    }],
                    yAxes:[{
                        barPercentage:0.6,
                        categoryPercentage:0.6
                    }]
                }
            }
        });

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
      console.log(suggestedCourses);
      $scope.suggestedCourses=suggestedCourses;
      $scope.subSections=subSections;

      }
      $scope.openTab = function(n) {
          $scope.url = links[n];
      }
});

app.controller("loginController",function($scope,$http,$location,$rootScope){
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
      $http.post("login.php",data).success(function(response)
      {
        if(response!="null")
        { 
          console.log(response);
          if(JSON.parse(response)=="taken")
          {
            $scope.taken="1";
            $scope.message="You have already taken the test.";
          }
          else
          {
            
            localStorage.setItem("token",JSON.stringify(response));
            $rootScope.getQuestions();
            $rootScope.user=response.substr(1,response.indexOf(' | '));
            $location.path('/testintro');
          }
        }
        else{
          $scope.message="Incorrect ID or Password.";
          $scope.taken="1";
        }
      }).error(function(error){
      });
    }
});

app.controller("mainController",function($scope,$location,$http,AuthenticationService,$rootScope){
    var token;
    if (localStorage['token'])
    {
      token = JSON.parse(localStorage['token']);
    } 
    else 
    {
      token = "something stupid";
    }
    AuthenticationService.checkToken(token,"user");
    document.getElementById('maindiv').scrollIntoView();
    $rootScope.user=token.substr(1,token.indexOf(' | '));
    


    $scope.presurvey=
    {
      com:undefined,
      ada:undefined,
      emo:undefined,
      inter:undefined,
      wor:undefined
    }

    $scope.addpresurvey=function(){
      var data=
      {
        token:JSON.parse(localStorage['token']),
        com:$scope.presurvey.ada,
        ada:$scope.presurvey.com,
        emo:$scope.presurvey.emo,
        inter:$scope.presurvey.inter,
        wor:$scope.presurvey.wor
      }

      console.log(data);

      $http.post("presurvey.php",data).success(function(response)
      {
        console.log(response);
        if(response!="null")
        {
          console.log(response);
          $location.path('/instructions');
        }
      }).error(function(error){
        console.error(error);
      });

    }
  
    
});