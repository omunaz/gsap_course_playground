import gsap from "gsap";

const card = document.querySelector("#card");

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.5,
    ease: "power4.inOut",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.5,
    ease: "power4.inOut",
  });
});
