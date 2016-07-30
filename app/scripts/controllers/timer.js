/**
 * Created by vatsalyagoel on 31/07/2016.
 */
/**
 * Created by vatsalyagoel on 31/07/2016.
 */

angular.module('dqtimerApp')
  .controller('TimerCtrl', function ($scope, $timeout) {

    $scope.$watch('request.endtime', function () {
      $scope.timer  = "";
      $scope.tickInterval = 1000;

      var str_pad_left = function(string,pad,length) {
        return (new Array(length+1).join(pad)+string).slice(-length);
      };

      var tick = function() {
        var duration = Math.floor(($scope.request.endtime - Date.now())/1000);
        if(duration < 0 )
        {
          $scope.timer = "00:00"
        }
        else
        {
          var minutes = Math.floor(duration / 60);
          var seconds = duration % 60;
          $scope.timer = str_pad_left(minutes,'0',2)+':'+str_pad_left(seconds,'0',2);
          $timeout(tick, $scope.tickInterval);
        }
      }
      tick();
    });
  });
