var makeTangoDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

makeTangoDancer.prototype = Object.create(Dancer.prototype);
makeTangoDancer.prototype.constructor = makeTangoDancer;
makeTangoDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  console.log("Step was called");
  this.$node.toggle();

};