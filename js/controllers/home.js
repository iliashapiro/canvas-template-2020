app.controller('HomeCtrl', ['$scope', '$rootScope', '$interval', '$timeout', '$state', '$stateParams', '$http','$tm1Ui', 
                            	function($scope, $rootScope, $interval, $timeout, $state, $stateParams, $http,$tm1Ui) {
	$rootScope.pageTitle = "Home";
     
     $scope.defaults = {
        lineColorArray:["4181c3","40af9c","ffffff"],
        
     }
     $scope.filterSelections = [];
      $rootScope.showView = false; 
      //$rootScope.calendarShow = true ;
    
    
   
    // $scope.startSlider = function(){
    //     $rootScope.mySlider = $("#slider-input").slider({
    //         min:0,
    //         max: 100,
    //         value:$rootScope.zoomScale,
    //         step:1
    //     });
    //     $rootScope.mySlider.on("slide", function(sliderValue) {
    //        // console.log("sliding", sliderValue, $rootScope.lists.spaceships)
    //        $timeout(
    //            function(){
    //             $rootScope.zoomScale =  sliderValue.value;
    //            }
    //        )
        
    //      });
    //      $rootScope.mySlider.on("ontouchstart", function(sliderValue) {
    //         // console.log("sliding", sliderValue, $rootScope.lists.spaceships)
    //         $timeout(
    //             function(){
    //              $rootScope.zoomScale =  sliderValue.value;
    //             }
    //         )
         
    //       });
        
    // }
    
    
}]);
