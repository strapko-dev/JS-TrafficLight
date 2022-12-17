"use strict";

let btn = document.getElementById('js-btn');
let trafficLight = document.getElementById('js-traffic-light');

btn.addEventListener("click", toggleColor);

async function toggleColor() {
  trafficLight.classList.add('traffic-light-green');

  for (let i = 0; i < Infinity; i++) {
    let delay;
    if (i == 0) {
      delay = 0; 
    } else {
      delay = 2000;
    };

    let trafficLightRed = new Promise((resolve, reject) => {
      setTimeout(() => resolve(
        trafficLight.classList.remove('traffic-light-yellow'),
        trafficLight.classList.add('traffic-light-green')
        ), delay)
    }) 
    let result1 = await trafficLightRed;

    let trafficLightYellow = new Promise((resolve, reject) => {
      setTimeout(() => resolve(
        trafficLight.classList.remove('traffic-light-green'),
        trafficLight.classList.add('traffic-light-yellow')
        ), 3000)
    }) 
    let result2 = await trafficLightYellow;

    let trafficLightGreen = new Promise((resolve, reject) => {
      setTimeout(() => resolve(
        trafficLight.classList.remove('traffic-light-yellow'),
        trafficLight.classList.add('traffic-light-red')
        ), 2000)
    }) 
    let result3 = await trafficLightGreen;

    trafficLightYellow = new Promise((resolve, reject) => {
      setTimeout(() => resolve(
        trafficLight.classList.remove('traffic-light-red'),
        trafficLight.classList.add('traffic-light-yellow')
        ), 3000)
    }) 
    result2 = await trafficLightYellow;
  }
};