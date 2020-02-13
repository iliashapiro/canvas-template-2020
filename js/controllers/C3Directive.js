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
    $scope.dimensionAlias = { "alias": { "Account":"Description", "Period":"Description", "Department":"Description", "Region":"Description" } };
    $rootScope.dimensionColors = {  "OperatingExpenses":"darkorange", "Commissions":"steelblue","SalesandMarketing":"red", "OfficeFurniture&Equipment":"#1355ce" };
    $scope.mdxParam = { "parameters": {  
         
        "Year":$rootScope.defaults.year,
        "Period":$rootScope.defaults.period,
        "Region":$rootScope.defaults.region,
        "Account":$rootScope.defaults.account,
        "Department":$rootScope.defaults.department,
        "Measure":$rootScope.defaults.measure
       } };

       $('.modal-content').resizable({
        //alsoResize: ".modal-dialog",
        minHeight: 300,
        minWidth: 300
      });
      $('.modal-dialog').draggable();
  
      $('#myModal').on('show.bs.modal', function() {
        $(this).find('.modal-body').css({
          'max-height': '100%'
        });
      });
           
       $rootScope.openRefModel = function(elementString, cubeName){
         
                //$rootScope.dimensionArray = elementString;
                
                if((elementString+'').split(',').length > 0){
                    

                     $rootScope.cellreferenceArray = (elementString+'').split(',');
                     $rootScope.cellreferenceCube = cubeName;
                     $tm1Ui.cubeDimensions($rootScope.defaults.settingsInstance,cubeName).then(function(result){
                         $rootScope.dimensionArray = result;
                         $("#myModal").modal({show: true});
                        
                        
                     })
                 }
                
            
                
            }
    
    $rootScope.$watchCollection( 'defaults', function(newNames, oldNames) {
        console.log("watch collection   ", newNames);
        
        if($rootScope.defaults.measure === 'Amount M' || $rootScope.defaults.measure === 'Amount Percentage'  ){
            $rootScope.defaults.decimalPlace = 2;
        }else{
            $rootScope.defaults.decimalPlace = 0;
        }
        $scope.mdxParam = { "parameters": {  
            "Year":$rootScope.defaults.year,
            "Period":$rootScope.defaults.period,
            "Region":$rootScope.defaults.region,
            "Account":$rootScope.defaults.account,
            "Department":$rootScope.defaults.department,
            "Measure":$rootScope.defaults.measure
        
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
app.directive('ngRightClick', ['$parse', function($parse) {
    return function(scope, element, attrs) {
        var fn = $parse(attrs.ngRightClick);
        element.bind('contextmenu', function(event) {
            scope.$apply(function() {
                event.preventDefault();
                fn(scope, {$event:event});
                 
            });
        });
    };
}]);