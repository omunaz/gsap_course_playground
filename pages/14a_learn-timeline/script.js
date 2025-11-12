import gsap from "gsap";

const animationBox = () => {
  const tl = gsap.timeline();

  tl.set(".card", { opacity: 0, y: 100, scale: 0.75 });

  tl.to(".card", {
    opacity: 1,
    y: 0,
    scale: 1,
    duration: 0.5,
    ease: "power2.in",
    stagger: 0.5,
  });
};

animationBox();
