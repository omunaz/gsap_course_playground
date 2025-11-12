import gsap from "gsap";

const reactionButtons = document.querySelectorAll(".reactions button");

const createBubble = (emoji, { x, y }) => {
  const bubble = document.createElement("span");
  bubble.className = "bubble";
  bubble.textContent = emoji;

  bubble.style.left = `${x}px`;
  bubble.style.top = `${y}px`;

  document.body.appendChild(bubble);

  gsap.fromTo(
    bubble,
    {
      y: 0,
      scale: 0.8,
      opacity: 0.9,
      rotation: 0,
      x: 0,
    },
    {
      y: -120,
      x: gsap.utils.random(-30, 30),
      scale: 1.2,
      rotation: gsap.utils.random(-25, 25),
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        bubble.remove();
      },
    }
  );
};

reactionButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const emoji = button.dataset.emoji || button.textContent.trim();
    const rect = button.getBoundingClientRect();

    const coordinates = {
      x: rect.left + rect.width / 2 + window.scrollX,
      y: rect.top + rect.height / 2 + window.scrollY,
    };

    createBubble(emoji, coordinates);
  });
});
