import gsap from "gsap";

gsap.set(".gsap-box", {
  scale: 0.5,
  opacity: 0,
  y: 500,
  x: -500,
});

gsap.to(".gsap-box", {
  delay: 0.5,
  opacity: 1,
  scale: 1,
  y: 0,
  x: 0,
  duration: 1,
  ease: "expo.out",
});
