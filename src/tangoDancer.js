var makeTangoDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('makeTangoDancer').prepend("<img src='pics/roof-down.gif' height=142px width=77px/>");

};

makeTangoDancer.prototype = Object.create(Dancer.prototype);
makeTangoDancer.prototype.constructor = makeTangoDancer;
makeTangoDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  console.log("Step was called");
  this.$node.toggle();

};