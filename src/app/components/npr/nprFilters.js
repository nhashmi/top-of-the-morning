angular.module('nprFilters', [])
  .filter('nprTitle', function() {
    return function(input) {
      return input.title.$text;
    }
  })
  .filter('nprTeaser', function($sce) {
    return function(input) {
      return $sce.trustAsHtml(input.teaser.$text);
    }
  })
  .filter('nprProgram', function() {
    return function(input) {
      return input.show[0].program.$text;
    }
  })
  .filter('nprLink', function() {
    return function(input) {
      return input.link[0].$text;
    }
  });
