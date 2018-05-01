var makeFightingDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.left = left;
  this.$node.addClass('dancerFighting');
};

makeFightingDancer.prototype = Object.create(makeDancer.prototype);
makeFightingDancer.prototype.constructor = makeFightingDancer;

makeFightingDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  this.$node.animate({
    left: '+=100',
    'border-width': '+=10'
  }, 'fast').animate({
    left: '-=100',
    'border-width': '-=10'
  });
};