const app = angular.module("myApp", ["ngRoute"]);
      app.config([
        "$routeProvider",
        "$locationProvider",
        function ($routeProvider, $locationProvider) {
          $routeProvider
          .when("/", {
            templateUrl: "templates/home.html",
            
          })
            .when("/tourism", {
              templateUrl: "templates/tourism.html",
              
            })
            .when("/species/normal", {
              templateUrl: "templates/species.html",
              controller : "normal"
            })
            .when("/species/endangered", {
              templateUrl: "templates/species.html",
              controller : "endangered"
            })
            .when("/species/extinct", {
              templateUrl: "templates/species.html",
              controller : "extinct"
            })
            .when("/species/rare", {
              templateUrl: "templates/species.html",
              controller : "rare"
            })
            .when("/species/endemic", {
              templateUrl: "templates/species.html",
              controller : "endemic"
            })
            .when("/species/vulnerable", {
              templateUrl: "templates/species.html",
              controller : "vulnerable"
            })
            .when("/parks", {
              templateUrl: "templates/parks.html",
              
            })
            .when("/stats", {
              templateUrl: "templates/stats.html",
              
            });
        //   $locationProvider.html5Mode(true);
        },
      ]);
      app.controller("normal", function ($scope) {
        $scope.title = "Normal Scpecies";
        $scope.msg = "Normal Species";
      });
      app.controller("extinct", function ($scope) {
        $scope.title = "Extinct Scpecies";
        $scope.msg = "Extinct Species";
      });
      app.controller("endangered", function ($scope) {
        $scope.title = "Endangered Scpecies";
        $scope.msg = "endangered Species";
      });
      app.controller("endemic", function ($scope) {
        $scope.title = "Endemic Scpecies";
        $scope.msg = "Endemic Species";
      });
      app.controller("rare", function ($scope) {
        $scope.title = "Rare Scpecies";
        $scope.msg = "Rare Species";
      });
      app.controller("vulnerable", function ($scope) {
        $scope.title = "Vulnerable Scpecies";
        $scope.msg = "Vulnerable Species";
      });
