var makeCaptainDance = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('makeCaptainDance').prepend("<img src='pics/Captain America.gif' height=200px width=203px/>");

};

makeCaptainDance.prototype = Object.create(Dancer.prototype);
makeCaptainDance.prototype.constructor = makeCaptainDance;
makeCaptainDance.prototype.step = function () {
  Dancer.prototype.step.call(this);
  console.log("Step was called");
  this.$node.toggle();

};