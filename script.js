// Language translations
const translations = {
  en: {
    nav_name: "Bojidar Georgiev",
    nav_home: "Home",
    nav_about: "About",
    nav_skills: "Skills",
    nav_contact: "Contact",
    hero_greeting: "Hello, I'm",
    hero_subtitle: "Full Stack Developer | Bot Creator | Server Architect",
    view_work: "View Work",
    scroll: "Scroll Down",
    tag_web: "Web Development",
    tag_discord: "Discord Bots",
    tag_minecraft: "Minecraft Servers",
    tag_python: "Python Expert",
    cta_button: "Get In Touch",
    about_title: "About Me",
    about_p1:
      "Hey! I'm <strong>bojkata120</strong>, a passionate developer with a diverse skill set spanning web development, bot creation, and server management.",
    about_p2:
      "I graduated from <strong>SoftUni Python Course</strong>, where I honed my programming skills and developed a deep understanding of software development principles.",
    about_p3:
      "I specialize in creating dynamic websites, powerful Discord bots, custom Minecraft servers, and various other technical solutions that bring ideas to life.",
    stat_projects: "Projects Completed",
    stat_experience: "Years Experience",
    stat_clients: "Happy Clients",
    skills_title: "Skills & Expertise",
    skill_web_title: "Web Development",
    skill_web_desc:
      "Building responsive, modern websites with HTML, CSS, JavaScript, and various frameworks",
    skill_python_title: "Python Programming",
    skill_python_desc:
      "SoftUni certified Python developer with expertise in automation, scripting, and backend development",
    skill_discord_title: "Discord Bots",
    skill_discord_desc:
      "Creating custom Discord bots with advanced features, moderation tools, and interactive commands",
    skill_minecraft_title: "Minecraft Servers",
    skill_minecraft_desc:
      "Setting up and managing custom Minecraft servers with plugins, mods, and unique gameplay",
    skill_backend_title: "Backend Development",
    skill_backend_desc:
      "Building robust APIs, databases, and server-side logic for scalable applications",
    skill_design_title: "UI/UX Design",
    skill_design_desc:
      "Crafting beautiful, intuitive interfaces with attention to detail and user experience",
    contact_title: "Let's Work Together",
    contact_intro:
      "Have a project in mind? Need a custom solution? I'm always open to discussing new opportunities and collaborations.",
    contact_email: "Available via Email",
    contact_portfolio: "Online Portfolio",
    form_name: "Your Name",
    form_email: "Your Email",
    form_message: "Your Message",
    form_submit: "Send Message",
    footer_copyright: "© 2025 B.Georgiev (bojkata120). All rights reserved.",
    footer_subtitle: "SoftUni Python Graduate | Full Stack Developer",
    form_success: "Thank you for your message! I will get back to you soon.",
  },
  bg: {
    nav_name: "Божидар Георгиев",
    nav_home: "Начало",
    nav_about: "За мен",
    nav_skills: "Умения",
    nav_contact: "Контакт",
    hero_greeting: "Здравей, аз съм",
    hero_subtitle:
      "Full Stack Разработчик | Създател на Ботове | Сървър Архитект",
    view_work: "Виж Работата",
    scroll: "Скролни Надолу",
    tag_web: "Уеб Разработка",
    tag_discord: "Discord Ботове",
    tag_minecraft: "Minecraft Сървъри",
    tag_python: "Python Експерт",
    cta_button: "Свържете се",
    about_title: "За мен",
    about_p1:
      "Здравей! Аз съм <strong>bojkata120</strong>, страстен разработчик с разнообразни умения в уеб разработката, създаването на ботове и управлението на сървъри.",
    about_p2:
      "Завърших <strong>SoftUni курс по Python</strong>, където усъвършенствах програмистките си умения и развих дълбоко разбиране на принципите на софтуерната разработка.",
    about_p3:
      "Специализирам в създаването на динамични уебсайтове, мощни Discord ботове, персонализирани Minecraft сървъри и различни други технически решения, които вдъхват живот на идеите.",
    stat_projects: "Завършени Проекти",
    stat_experience: "Години Опит",
    stat_clients: "Доволни Клиенти",
    skills_title: "Умения и Експертиза",
    skill_web_title: "Уеб Разработка",
    skill_web_desc:
      "Създаване на отзивчиви, модерни уебсайтове с HTML, CSS, JavaScript и различни frameworks",
    skill_python_title: "Python Програмиране",
    skill_python_desc:
      "Сертифициран Python разработчик от SoftUni с опит в автоматизация, скриптове и backend разработка",
    skill_discord_title: "Discord Ботове",
    skill_discord_desc:
      "Създаване на персонализирани Discord ботове с напреднали функции, инструменти за модерация и интерактивни команди",
    skill_minecraft_title: "Minecraft Сървъри",
    skill_minecraft_desc:
      "Настройка и управление на персонализирани Minecraft сървъри с плъгини, модове и уникален геймплей",
    skill_backend_title: "Backend Разработка",
    skill_backend_desc:
      "Изграждане на стабилни API, бази данни и сървърна логика за мащабируеми приложения",
    skill_design_title: "UI/UX Дизайн",
    skill_design_desc:
      "Създаване на красиви, интуитивни интерфейси с внимание към детайла и потребителското изживяване",
    contact_title: "Нека Работим Заедно",
    contact_intro:
      "Имате проект? Нуждаете се от персонализирано решение? Винаги съм готов да обсъдя нови възможности и сътрудничества.",
    contact_email: "Достъпен чрез Имейл",
    contact_portfolio: "Онлайн Портфолио",
    form_name: "Вашето Име",
    form_email: "Вашият Имейл",
    form_message: "Вашето Съобщение",
    form_submit: "Изпрати Съобщение",
    footer_copyright: "© 2025 Б.Георгиев (bojkata120). Всички права запазени.",
    footer_subtitle: "SoftUni Python Завършил | Full Stack Разработчик",
    form_success: "Благодаря за съобщението! Ще се свържа с вас скоро.",
  },
};

// Current language state
let currentLang = "en";
let typingInterval = null;

// Typing effect for hero subtitle
function typeWriterEffect(element, text) {
  if (!element) return;

  // Clear any existing interval
  if (typingInterval) {
    clearTimeout(typingInterval);
  }

  element.textContent = "";
  let i = 0;

  function typeChar() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      typingInterval = setTimeout(typeChar, 30);
    }
  }

  typeChar();
}

// Language switcher functionality
function switchLanguage() {
  currentLang = currentLang === "en" ? "bg" : "en";
  updateLanguage();
  document.getElementById("currentLang").textContent =
    currentLang.toUpperCase();
}

// Update all translatable elements
function updateLanguage() {
  const lang = translations[currentLang];

  // Update elements with data-translate attribute (except hero subtitle)
  document.querySelectorAll("[data-translate]").forEach((element) => {
    const key = element.getAttribute("data-translate");
    if (lang[key]) {
      // Special handling for hero subtitle with typing effect
      if (key === "hero_subtitle") {
        typeWriterEffect(element, lang[key]);
      } else {
        element.innerHTML = lang[key];
      }
    }
  });

  // Update placeholder attributes
  document
    .querySelectorAll("[data-translate-placeholder]")
    .forEach((element) => {
      const key = element.getAttribute("data-translate-placeholder");
      if (lang[key]) {
        element.placeholder = lang[key];
      }
    });

  // Update HTML lang attribute
  document.documentElement.lang = currentLang;
}

// Initialize language switcher
document.addEventListener("DOMContentLoaded", () => {
  const langSwitcher = document.getElementById("langSwitcher");
  if (langSwitcher) {
    langSwitcher.addEventListener("click", switchLanguage);
  }

  // Set initial language
  updateLanguage();

  // Mobile menu functionality
  const mobileMenuToggle = document.getElementById("mobileMenuToggle");
  const navLinks = document.getElementById("navLinks");

  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener("click", () => {
      mobileMenuToggle.classList.toggle("active");
      navLinks.classList.toggle("active");
    });

    // Close mobile menu when clicking on a link
    document.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        !navLinks.contains(e.target) &&
        !mobileMenuToggle.contains(e.target) &&
        navLinks.classList.contains("active")
      ) {
        mobileMenuToggle.classList.remove("active");
        navLinks.classList.remove("active");
      }
    });
  }
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Animated counter for stats
const animateCounter = (element) => {
  const target = parseInt(element.getAttribute("data-target"));
  const duration = 2000;
  const step = target / (duration / 16);
  let current = 0;

  const updateCounter = () => {
    current += step;
    if (current < target) {
      element.textContent = Math.floor(current) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  };

  updateCounter();
};

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -100px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Animate stat numbers
      if (entry.target.classList.contains("stat-number")) {
        animateCounter(entry.target);
      }

      // Animate skill progress bars
      if (entry.target.classList.contains("skill-card")) {
        const progressBar = entry.target.querySelector(".skill-progress");
        const progress = progressBar.getAttribute("data-progress");
        setTimeout(() => {
          progressBar.style.width = progress + "%";
        }, 200);
      }

      // Fade in elements
      if (entry.target.classList.contains("fade-in")) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }

      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe elements
document.querySelectorAll(".stat-number").forEach((el) => observer.observe(el));
document.querySelectorAll(".skill-card").forEach((el) => observer.observe(el));
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

// Form submission
const contactForm = document.querySelector(".contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const lang = translations[currentLang];
    alert(lang.form_success);
    e.target.reset();
  });
}

// Add active state to nav links on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").slice(1) === current) {
      link.classList.add("active");
    }
  });
});

// Cursor glow effect
document.addEventListener("mousemove", (e) => {
  const glow = document.createElement("div");
  glow.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 242, 255, 0.1), transparent 70%);
    pointer-events: none;
    left: ${e.clientX - 150}px;
    top: ${e.clientY - 150}px;
    z-index: 9999;
    transition: opacity 0.3s;
  `;
  document.body.appendChild(glow);
  setTimeout(() => {
    glow.style.opacity = "0";
    setTimeout(() => glow.remove(), 300);
  }, 100);
});

// Initial typing effect on page load
document.addEventListener("DOMContentLoaded", () => {
  const subtitle = document.querySelector(".hero-subtitle");
  if (subtitle) {
    const initialText = translations[currentLang].hero_subtitle;

    setTimeout(() => {
      typeWriterEffect(subtitle, initialText);
    }, 800);
  }
});

// Scroll reveal animation
const revealElements = document.querySelectorAll(
  ".fade-in, .skill-card, .stat-card, .contact-item"
);

const scrollReveal = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  {
    threshold: 0.15,
    rootMargin: "0px 0px -50px 0px",
  }
);

revealElements.forEach((el) => scrollReveal.observe(el));
