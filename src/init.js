$(document).ready(function() {
  window.dancers = [];

  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $('body').height() * Math.random(),
      $('body').width() * Math.random(),
      Math.random() * 1000
    );
    window.dancers.push(dancer);
    $('body').append(dancer.$node);
    
    $('.dancer').on('mouseover', function (event) {
      $(this).css('transform', 'rotateY(180deg)').css('transition', '0.2s');
      console.log('hi');
    });

    $('.dancer').on('mouseout', function (event) {
      $(this).css('transform', 'rotateY(0deg)').css('transition', '0.2s');
      console.log('hi');
    });
    
    $('.dancer').on('click', function (event) {
      
      var top = parseInt($(this).css('top'));
      var left = parseInt($(this).css('left'));
      console.log(left, top);
      var threshold = 500;
      var distancePyth;
      
      window.dancers.forEach(function(dancer) {
        dancerTop = parseInt(dancer.$node.css('top'));
        dancerLeft = parseInt(dancer.$node.css('left'));
        distancePyth = Math.sqrt(Math.pow((dancerTop - top), 2) + Math.pow((dancerLeft - left), 2));
        console.log(distancePyth);
        if (distancePyth < threshold) {
          dancer.$node.css('transform', 'rotateY(180deg)');
        }
      });
    });
    
  });
  
  $('.lineUpButton').on('click', function(event) {
    var originDancer = window.dancers.slice();
    window.dancers = [];
    
    var top = $('body').height() / 1.2;
    console.log(top);
    var left = 0;
    var lineUpDancer;
    
    for (var i = 0; i < originDancer.length; i++) {
      lineUpDancer = originDancer[i];
      lineUpDancer.lineUp(top, left);
      window.dancers.push(lineUpDancer);
      $('body').append(lineUpDancer.$node);
      left = left + 90;
    }  
  });
  
});

