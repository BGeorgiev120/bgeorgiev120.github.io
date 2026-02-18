/* ============================================
   SMOOTH SCROLL
   ============================================ */
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  });
});

const hamburger = document.getElementById("hamburger-menu");
const menuButoni = document.querySelector(".menu_butoni");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    menuButoni.classList.toggle("active");
  });

  document.querySelectorAll(".menu_link").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      menuButoni.classList.remove("active");
    });
  });
}

/* ============================================
   ACTIVE NAV LINK
   ============================================ */
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".menu_link");
  const scrollPos = window.scrollY + 120;

  sections.forEach((section) => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute("id");

    if (scrollPos >= top && scrollPos < top + height) {
      links.forEach((link) => {
        link.style.color = "";
        if (link.getAttribute("href") === "#" + id) {
          link.style.color = "var(--accent)";
        }
      });
    }
  });
});

/* ============================================
   CONTACT FORM
   ============================================ */
const form = document.getElementById("moqta_forma");
if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const btn = form.querySelector(".izprati_buton");
    const originalText = btn.querySelector(".btn-text").textContent;

    btn.querySelector(".btn-text").textContent = "Изпратено! ✓";
    btn.style.background = "var(--accent-3)";
    btn.style.boxShadow = "0 0 30px rgba(0, 212, 170, 0.4)";

    setTimeout(() => {
      btn.querySelector(".btn-text").textContent = originalText;
      btn.style.background = "";
      btn.style.boxShadow = "";
      form.reset();
    }, 3000);
  });
}

/* ============================================
   INTERSECTION OBSERVER ÃƒÂ¢Ã¢â€šÂ¬Ã¢â‚¬Â REVEAL
   ============================================ */
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  {
    threshold: 0.1,
    rootMargin: "0px 0px -60px 0px",
  },
);

document.querySelectorAll(".reveal-card, .reveal-text").forEach((el) => {
  revealObserver.observe(el);
});

/* ============================================
   COUNTER ANIMATION
   ============================================ */
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.dataset.target);
        const duration = 1500;
        const start = performance.now();

        function update(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.round(eased * target);
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);

document.querySelectorAll(".counter").forEach((el) => {
  counterObserver.observe(el);
});

/* ============================================
   MAGNETIC BUTTONS
   ============================================ */
document.querySelectorAll(".magnetic-btn").forEach((btn) => {
  btn.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    this.style.transform = `translate(${x * 0.25}px, ${y * 0.4}px)`;
  });

  btn.addEventListener("mouseleave", function () {
    this.style.transform = "";
    this.style.transition =
      "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.3s, background 0.3s";
    setTimeout(() => (this.style.transition = ""), 600);
  });
});

/* ============================================
   CARD MOUSE TILT
   ============================================ */
document.querySelectorAll(".umenie_kartichka").forEach((card) => {
  card.addEventListener("mousemove", function (e) {
    const rect = this.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;

    this.style.transform = `translateY(-10px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
    this.style.transition = "transform 0.1s";

    // Move glow to cursor
    const glow = this.querySelector(".card-glow");
    if (glow) {
      const px = ((e.clientX - rect.left) / rect.width) * 100;
      const py = ((e.clientY - rect.top) / rect.height) * 100;
      glow.style.background = `radial-gradient(circle at ${px}% ${py}%, rgba(108, 99, 255, 0.15), transparent 60%)`;
    }
  });

  card.addEventListener("mouseleave", function () {
    this.style.transform = "";
    this.style.transition =
      "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s, box-shadow 0.3s";
    setTimeout(() => (this.style.transition = ""), 500);
  });
});

/* ============================================
   TYPING ANIMATION FOR HERO TEXT
   ============================================ */
document.addEventListener("DOMContentLoaded", () => {
  const typeEl = document.querySelector(".type-in");
  if (!typeEl) return;

  const text = typeEl.textContent;
  typeEl.textContent = "";
  typeEl.style.opacity = "1";

  let i = 0;
  function typeNext() {
    if (i < text.length) {
      typeEl.textContent += text[i];
      i++;
      setTimeout(typeNext, 60);
    }
  }

  setTimeout(typeNext, 1000);
});

/* ============================================
   PARALLAX ORBS ON SCROLL
   ============================================ */
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const orb1 = document.querySelector(".orb-1");
  const orb2 = document.querySelector(".orb-2");
  const orb3 = document.querySelector(".orb-3");

  if (orb1) orb1.style.transform = `translateY(${scrollY * 0.15}px)`;
  if (orb2) orb2.style.transform = `translateY(${-scrollY * 0.1}px)`;
  if (orb3) orb3.style.transform = `translateY(${scrollY * 0.08}px)`;
});

/* ============================================
   FLOATING CARD PAUSE ON HOVER
   ============================================ */
const floatingCard = document.querySelector(".floating-card");
if (floatingCard) {
  floatingCard.addEventListener("mouseenter", () => {
    floatingCard.style.animationPlayState = "paused";
  });
  floatingCard.addEventListener("mouseleave", () => {
    floatingCard.style.animationPlayState = "running";
  });
}
