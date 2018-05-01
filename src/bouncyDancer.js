var makeBouncyDancer = function(top, left, timeBetweenSteps) {
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.top = top;
  this.$node.addClass('dancerBouncy');
  this.$node.append("<img src='images/monkey.png' alt='Monkey'>");
};

makeBouncyDancer.prototype = Object.create(makeDancer.prototype);
makeBouncyDancer.prototype.constructor = makeBouncyDancer;

makeBouncyDancer.prototype.step = function() {
  makeDancer.prototype.step.call(this);
  
  this.$node.animate({
    top: '-=100',
    // transform: 'rotate(60deg)'
  });
  this.$node.css('transform', 'rotate(-45deg)');
  
  this.$node.animate({
    top: '+=100'
    // transform: 'rotate(-60deg)'
  });
  // this.$node.css('transform', 'rotate(30deg)');
  
};