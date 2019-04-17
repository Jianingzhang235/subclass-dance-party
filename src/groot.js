var makeGrootDance = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('makeGrootDance').prepend("<img src='pics/groot2.gif' height=250px width=250px/>");

};

makeGrootDance.prototype = Object.create(Dancer.prototype);
makeGrootDance.prototype.constructor = makeGrootDance;
makeGrootDance.prototype.step = function () {
  Dancer.prototype.step.call(this);
  this.$node.toggle();

};