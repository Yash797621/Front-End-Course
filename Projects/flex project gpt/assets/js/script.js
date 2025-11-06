// Mobile menu toggle (optional, if you add hamburger icon later)
const menuToggle = document.querySelector(".menu-toggle");
const navList = document.querySelector(".nav-list");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// Counter animation (if you want animated numbers in counters section)
const counters = document.querySelectorAll(".counter-box h3");
const speed = 200; // lower = faster

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.innerText.replace(/\D/g, "");
    const count = +counter.getAttribute("data-count") || 0;

    if (count < target) {
      const inc = Math.ceil(target / speed);
      counter.setAttribute("data-count", count + inc);
      counter.innerText = `${count + inc}+`;
      setTimeout(updateCount, 30);
    } else {
      counter.innerText = `${target}+`;
    }
  };

  updateCount();
});
