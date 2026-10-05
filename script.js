const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

reveals.forEach(el => observer.observe(el));

// Subtle mouse parallax for the 3D hero scene.
const scene = document.querySelector(".scene");
if (scene && window.matchMedia("(pointer:fine)").matches) {
  document.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 10;
    const y = (e.clientY / window.innerHeight - 0.5) * -10;
    scene.style.transform = `rotateX(${y}deg) rotateY(${x}deg)`;
  });
}
