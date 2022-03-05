import React from "react";
import Sketch from "react-p5";
import ExoLight from "./Exo-Light.otf";
import { p5 as p } from "p5";

let font;
let vehicles = [];

const BioCanvas = () => {
  const preload = (p5) => {
    font = p5.loadFont(ExoLight);
  };
  const setup = (p5, canvasParentRef) => {
    //Vehicle
    function Vehicle(x, y) {
      this.pos = p5.createVector(x, y);
      this.target = p5.createVector(x, y);
      this.vel = p5.Vector.random2D();
      this.acc = p5.createVector();
      this.r = 8;
    }

    Vehicle.prototype.update = function () {
      this.pos.add(this.vel);
      this.vel.add(this.acc);
    };

    Vehicle.prototype.show = function () {
      p5.stroke(255);
      p5.strokeWeight(3);
      p5.point(this.pos.x, this.pos.y);
    };

    // use parent to render the canvas in this ref
    // (without that p5 will render the canvas outside of your component)
    p5.createCanvas(500, 500).parent(canvasParentRef);
    p5.textFont(font);
    p5.textSize(128);
    p5.fill(255);
    p5.noStroke();

    let points = font.textToPoints("Train", 30, 200);
    for (let point of points) {
      vehicles.push(new Vehicle(point.x, point.y));
    }
  };
  const draw = (p5) => {
    p5.background(49, 47, 47);
    for (let vehicle of vehicles) {
      vehicle.update();
      vehicle.show();
    }
    // NOTE: Do not use setState in the draw function or in functions that are executed
    // in the draw function...
    // please use normal variables or class properties for these purposes
  };

  return <Sketch setup={setup} draw={draw} preload={preload} />;
};

export default BioCanvas;
