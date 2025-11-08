import gsap from "gsap";

gsap.to(".btn", {
  y: 600,
  duration: 0.4,
  ease: "power4.out",
  opacity: 1,
});

gsap.to(".toast", {
  x: -300,
  duration: 1.2,
  ease: "power2.out",
  opacity: 1,
});

gsap.to(".card", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  ease: "power3.inOut",
  opacity: 1,
});
