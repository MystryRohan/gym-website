// Controllers for each effect controll
let controller = new ScrollMagic.Controller();
let controller2 = new ScrollMagic.Controller();
let controller3 = new ScrollMagic.Controller();
let controller4 = new ScrollMagic.Controller();
// separate timeline
let tl = new TimelineMax();
let tlBuffModel = new TimelineMax();
let tlWeightlossModel = new TimelineMax();
let tlCardioModel = new TimelineMax();

tl.to(".home-page", 3, { y: -300 }).to(".background", 3, { y: 50 }, "-=3");

tlBuffModel.fromTo(".buff-model", { y: 200 }, { y: -100 });
tlWeightlossModel.fromTo(".weightloss-model", { y: 200 }, { y: -100 });
tlCardioModel.fromTo(".cardio-model", { y: 200 }, { y: -100 });

let scene = new ScrollMagic.Scene({
  triggerElement: ".home",
  duration: "100%",
  triggerHook: 0,
})
  .setTween(tl)
  .addTo(controller);

let scene2 = new ScrollMagic.Scene({
  triggerElement: ".buff",
  duration: "100%",
  triggerHook: 0.5,
})
  .setTween(tlBuffModel)
  .addTo(controller2);

let scene3 = new ScrollMagic.Scene({
  triggerElement: ".weightloss",
  duration: "100%",
  triggerHook: 0.5,
})
  .setTween(tlWeightlossModel)
  .addTo(controller3);
let scene4 = new ScrollMagic.Scene({
  triggerElement: ".cardio",
  duration: "100%",
  triggerHook: 0.5,
})
  .setTween(tlCardioModel)
  .addTo(controller4);
