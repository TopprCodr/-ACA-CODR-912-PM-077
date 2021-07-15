class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 1.5,
      length: 80,
    };

    this.pointB = pointB;
    this.rope = Constraint.create(options);
    Composite.add(world, this.rope);
  }

  fly() {
    this.rope.bodyA = null;
  }

  display() {
    if (this.rope.bodyA) {
      var pointA = this.rope.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke("green");
      strokeWeight(6);

      line(pointB.x, pointB.y, pointA.x, pointA.y);

      pop();
    }
  }
}
