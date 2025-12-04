// Плавно скролиране при клик на менюто
const vsichki_linkove = document.querySelectorAll('a[href^="#"]');
vsichki_linkove.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const cel = document.querySelector(this.getAttribute("href"));
    if (cel) {
      cel.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Форма за контакт
const formata = document.getElementById("moqta_forma");
formata.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Благодаря за съобщението! 😊");
  formata.reset();
});

// Активен линк при скролиране
window.addEventListener("scroll", function () {
  const sekciite = document.querySelectorAll("section");
  const linkovete = document.querySelectorAll(".menu_link");

  const tekushta_poziciq = window.scrollY + 100;

  sekciite.forEach(function (sekciq) {
    const vrh = sekciq.offsetTop;
    const visochina = sekciq.offsetHeight;
    const id = sekciq.getAttribute("id");

    if (tekushta_poziciq >= vrh && tekushta_poziciq < vrh + visochina) {
      linkovete.forEach(function (link) {
        link.style.color = "#b0b0b0";
        if (link.getAttribute("href") === "#" + id) {
          link.style.color = "#667eea";
        }
      });
    }
  });
});

// Анимация при влизане на елементи в екрана
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Добавяне на анимация за всички секции
document.addEventListener("DOMContentLoaded", function () {
  const animirani_elementi = document.querySelectorAll(
    ".umenie_kartichka, .stat_kutiq, .kontakt_red"
  );

  animirani_elementi.forEach(function (element) {
    element.style.opacity = "0";
    element.style.transform = "translateY(30px)";
    element.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(element);
  });
});
