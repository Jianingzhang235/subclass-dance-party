var makeBalletDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

makeBalletDancer.prototype = Object.create(Dancer.prototype);
makeBalletDancer.prototype.constructor = makeBalletDancer;
makeBalletDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};