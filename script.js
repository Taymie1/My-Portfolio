
// Smooth scroll
document.querySelectorAll('.nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Typing effect
const roles = ["Full-Stack Developer", "UI/UX Enthusiast", "Marketing Alumni"];
let i = 0, j = 0, isDeleting = false;

function typeEffect() {
  const current = roles[i];
  const display = current.substring(0, j);
  document.getElementById("typing").textContent = display;

  if (!isDeleting && j < current.length) {
    j++;
    setTimeout(typeEffect, 120);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 60);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % roles.length;
    setTimeout(typeEffect, 800);
  }
}
typeEffect();

// Reveal on scroll
const reveals = document.querySelectorAll('.reveal');
function revealOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  reveals.forEach(section => {
    const top = section.getBoundingClientRect().top;
    if (top < triggerBottom) {
      section.classList.add('active');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
revealOnScroll();

// Dark/Light Mode Toggle
const themeBtn = document.getElementById("theme-toggle");
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  themeBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});
// Form validation