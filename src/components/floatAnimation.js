import React, { useState } from "react";
import { gsap } from "gsap";


const FloatAnimation = (element, customDelay, delay) => {

  const floater = element;

  const floatDelay = delay + 1;

  const randomX = random(3, 13);
  const randomY = random(3, 17);
  const randomTime = random(1, 2);
  const randomTime2 = random(1, 3);
  const randomAngle = random(5, 15);


  gsap.timeline().set(floater, {
    x: randomX(-1),
    y: randomX(1),
    delay: floatDelay,
    ease: "sine",
    rotation: randomAngle(-1)
  });

  moveX(floater, 1);
  moveY(floater, -1);
  rotate(floater, 1);

  function rotate(target, direction) {

    gsap.timeline().to(target, randomTime2(), {
      rotation: randomAngle(direction),
      delay: floatDelay,
      ease: "sine",
      onComplete: rotate,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveX(target, direction) {

    gsap.timeline().to(target, randomTime(), {
      x: randomX(direction),
      ease: "sine",
      delay: floatDelay,
      onComplete: moveX,
      onCompleteParams: [target, direction * -1]
    });
  }

  function moveY(target, direction) {

    gsap.timeline().to(target, randomTime(), {

      y: randomY(direction),
      ease: "sine",
      delay: floatDelay,
      onComplete: moveY,
      onCompleteParams: [target, direction * 1]
    });
  };

  function random(min, max) {
    const delta = max - min;
    return (direction = 1) => (min + delta * Math.random()) * direction;
  };

};
export default FloatAnimation;