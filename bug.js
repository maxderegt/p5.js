function Bug() {
  this.x = random(1280);
  this.y = random(720);
  this.diameter = random(10, 80);
  this.color = color(random(255),random(255),random(255));

  this.display = function() {
    fill(this.color);
    ellipse(this.x, this.y, this.diameter, this.diameter);
    noFill();
  }
};
