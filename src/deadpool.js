//makeDeadpoolDance
var makeDeadpoolDance = function (top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('makeDeadpoolDance').prepend("<img src='pics/deadpool.gif' height=200px width=191px/>");

};

makeDeadpoolDance.prototype = Object.create(Dancer.prototype);
makeDeadpoolDance.prototype.constructor = makeDeadpoolDance;
makeDeadpoolDance.prototype.step = function () {
  Dancer.prototype.step.call(this);
  console.log("Step was called");
  this.$node.toggle();

};