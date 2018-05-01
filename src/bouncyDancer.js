var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.$node.addClass('dancerBouncy');
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  this.$node.animate({
    top: '-=100',
    // transform: 'rotate(60deg)'
  });
  // this.$node.css('transform', 'rotate(60deg)');
  
  this.$node.animate({
    top: '+=100'
    // transform: 'rotate(-60deg)'
  });
  // this.$node.css('transform', 'rotate(30deg)');
  
};