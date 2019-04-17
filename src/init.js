// $(document).ready(function () {
//   window.dancers = [];

//   $('.addDancerButton').on('click', function (event) {
//     /* This function sets up the click handlers for the create-dancer
//      * buttons on dancefloor.html. You should only need to make one small change to it.
//      * As long as the "data-dancer-maker-function-name" attribute of a
//      * class="addDancerButton" DOM node matches one of the names of the
//      * maker functions available in the global scope, clicking that node
//      * will call the function to make the dancer.
//      */

//      dancerMakerFunctionName is a string which must match
//      * one of the dancer maker functions available in global scope.
//      * A new object of the given type will be created and added
//      * to the stage.
     
//     var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');

//     // get the maker function for the kind of dancer we're supposed to make
//     var dancerMakerFunction = window[dancerMakerFunctionName];

//     // make a dancer with a random position

//     var dancer = new dancerMakerFunction(
//       $("body").height() * Math.random(),
//       $("body").width() * Math.random(),
//       Math.random() * 1000
//     );
//     //should know more about addClass;
//     dancer.$node.addClass(dancerMakerFunctionName);

//     $('body').append(dancer.$node);
//   });


//  $('.lineUpButton').on('click', function(event) {
//     $('.dancer').animate({top: '200px'});
//   });


// });

 $(document).ready(function(){
  window.dancers = [];
  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
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
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    // Appends the dancer "span" element to the DOM
    $('body').append(dancer.$node);
    // Pushes each dancer to the global "dancers" array
    window.dancers.push(dancer);
  });
  //new button
  // $('.lineupDancerButton').on('click', function(event) {
  //   var top = $("body").height() / 2;
  //   var left = 50;
  //   for(var i=0; i<window.dancers.length; i++){
  //     //window.dancers[i].setPosition(top, left);
  //     window.dancers[i].lineUp(top, left);
  //     console.log(window.dancers[i])
  //     left += 100;
  //     // if(window.dancers[i] instanceof BlinkyDancer) {
  //     //   var css = {'display': 'flex', 'align-items': 'center'};
  //     //   $(window.dancers[i]).css(css);
  //     // }
  //   }
  // });



 $('.lineUpButton').on('click', function(event) {
    $('.dancer').animate({top: '200px'});
  });


  
  $('.clearLinup').on('click',function(event){
    window.dancers.forEach((element)=>{
      element.breakLinup();
    })
  })
  $('.pairUpButton').on('click', function (event) {
    for (var i = 0; i < window.dancers.length; i = i + 2) {
      if (window.dancers[i + 1]) {
        window.dancers[i].pairUp(window.dancers[i + 1]);
      } else {
        window.dancers[i].pairUp();
      }
    }
  });
  $('body').on("mouseover", ".dancer", function(){
    $(this).text('you find me !');
  });
});