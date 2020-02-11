app.controller('C3DirectiveCtrl', ['$scope', '$rootScope', '$log', '$tm1Ui','$timeout', '$interval', function($scope, $rootScope, $log, $tm1Ui, $timeout, $interval) {
   /*
    *     defaults.* are variables that are declared once and are changed in the page, otherwise known as constants in programming languages
    *     lists.* should be used to store any lists that are used with ng-repeat, i.e. tm1-ui-element-list
    *     selections.* should be used for all selections that are made by a user in the page
    *     values.* should store the result of any dbr, dbra or other values from server that you want to store to use elsewhere, i.e. in a calculation
    * 
    *     For more information: https://github.com/cubewise-code/canvas-best-practice
    */
    
 
    $scope.defaults = {};
    $scope.selections = {};
    $scope.lists = {};
    $scope.values = {};
    $rootScope.charts = [];
    $rootScope.pageTitle = 'C3 Directive';
    $scope.dimensionAlias = { "alias": { "Account":"Description", "Period":"Description" } };
    $rootScope.dimensionColors = {  "OperatingExpenses":"darkorange", "Commissions":"steelblue","SalesandMarketing":"red", "OfficeFurniture&Equipment":"#1355ce" };
    $scope.mdxParam = { "parameters": {  
         
        "Year":$rootScope.defaults.year,
        "Period":$rootScope.defaults.period,
        "Region":$rootScope.defaults.region,
        "Account":$rootScope.defaults.account,
        "Department":$rootScope.defaults.department
       } };

    

    
    $rootScope.$watchCollection( 'defaults', function(newNames, oldNames) {
        console.log("watch collection   ", newNames);
        
        $scope.mdxParam = { "parameters": {  
            "Year":$rootScope.defaults.year,
            "Period":$rootScope.defaults.period,
            "Region":$rootScope.defaults.region,
            "Account":$rootScope.defaults.account,
            "Department":$rootScope.defaults.department
        
        }}
        $scope.loading = true;
        $timeout(
            function(){
                 $scope.loading = false;

            },1000
        )
          
     });

 
      
}
]);
