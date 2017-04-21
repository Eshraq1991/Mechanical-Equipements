angular.module('MEQ', [
  'GS.Users',
  'ngRoute'
])
.config(function ($routeProvider, $httpProvider) {
  $routeProvider
  .when('/',{
      templateUrl: 'app/Home/Home.html'
    })
    .when('/home',{
      templateUrl: 'app/Home/Home.html',
      controller: 'HomeController'
    })
    .when('/pump',{
      templateUrl:'app/Pump/Pump.html',
      controller: 'PumpController'
    })
    .when('/motor',{
      templateUrl:'app/Motor/motor.html',
      controller: 'MotorController'
    })
    .when('/valve',{
      templateUrl:'app/Valve/valve.html',
      controller: 'ValveController'
    })
    .when('/filtration',{
      templateUrl:'app/filtration/filtration.html',
      controller: 'filtrationController'
    })
    .when('/accessory',{
      templateUrl:'app/Accessory/accessory.html',
      controller: 'AccessoryController'
    })
    .when('/Hydraulic',{
      templateUrl:'app/Hydraulic/hydraulic.html',
      controller: 'HydraulicController'
    })
    .when('/Hydrotest',{
      templateUrl:'app/Hydrotest/hydrotest.html',
      controller: 'HydrotestController'
    })
    .when('/Testing',{
      templateUrl:'app/Testing/testing.html',
      controller: 'TestingController'
    })
    .when('/funit',{
      templateUrl:'app/fMachine/fMachine.html',
      controller: 'fMachineController'
    })
    .when('/aboutus',{
      templateUrl:'app/aboutus/aboutus.html',
      controller: 'aboutusController'
    })
    .when('/contactus',{
      templateUrl:'app/contactus/contactus.html',
      controller: 'contactusController'
    })
    $httpProvider.interceptors.push('AttachTokens');
})
.factory('AttachTokens', function ($window) {
  var attach = {
    request: function (object) {
      console.log("attach")
      var jwt = $window.localStorage.getItem('com.GSuser');
      if (jwt) {
        object.headers['x-access-token'] = jwt;
      }
      object.headers['Allow-Control-Allow-Origin'] = '*';
      return object;
    }
  };
  return attach;
})
.run(function ($rootScope, $location) {
  
});
