var makeBalletDancer = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('makeBalletDancer').prepend("<img src='pics/spiderman.gif' height=142px width=142px/>");

};

makeBalletDancer.prototype = Object.create(Dancer.prototype);
makeBalletDancer.prototype.constructor = makeBalletDancer;
makeBalletDancer.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};

