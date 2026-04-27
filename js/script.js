const shape = document.querySelector(".tool-img");
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
  if (!link.classList.contains("active")) {
    link.addEventListener("click", (e) => {
      e.preventDefault();
    });
  }
});

gsap.set(shape, {
  transformPerspective: 1000,
  transformOrigin: "center",
  force3D: true,
});

gsap.to(shape, {
  y: -20,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

gsap.to(shape, {
  rotateY: "+=360",
  duration: 6,
  repeat: -1,
  ease: "none",
});
