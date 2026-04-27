const shape = document.querySelector(".tool-img");
const links = document.querySelectorAll(".navbar a");

links.forEach((link) => {
  // kalau bukan active (Myself)
  if (!link.classList.contains("active")) {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // blok klik
    });
  }
});

// setup 3D
gsap.set(shape, {
  transformPerspective: 1000,
  transformOrigin: "center",
  force3D: true,
});

// FLOATING
gsap.to(shape, {
  y: -20,
  duration: 2.5,
  repeat: -1,
  yoyo: true,
  ease: "power1.inOut",
});

// ROTATE 3D
gsap.to(shape, {
  rotateY: "+=360",
  duration: 6,
  repeat: -1,
  ease: "none",
});
