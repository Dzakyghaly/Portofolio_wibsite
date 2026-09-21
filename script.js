// ==========================================
// TYPING EFFECT
// ==========================================

const texts = [
  "Web Developer",
  "IT Enthusiast",
  "Network Enthusiast",
  "IoT Enthusiast",
];

const typingText = document.getElementById("typing-text");

let textIndex = 0;

let characterIndex = 0;

let isDeleting = false;

function typingEffect() {
  if (!typingText) {
    return;
  }

  const currentText = texts[textIndex];

  if (!isDeleting) {
    typingText.textContent = currentText.substring(0, characterIndex + 1);

    characterIndex++;

    if (characterIndex === currentText.length) {
      isDeleting = true;

      setTimeout(typingEffect, 1400);

      return;
    }
  } else {
    typingText.textContent = currentText.substring(0, characterIndex - 1);

    characterIndex--;

    if (characterIndex === 0) {
      isDeleting = false;

      textIndex++;

      if (textIndex === texts.length) {
        textIndex = 0;
      }
    }
  }

  const speed = isDeleting ? 45 : 90;

  setTimeout(typingEffect, speed);
}

typingEffect();

// ==========================================
// HAMBURGER MENU
// ==========================================

const hamburger = document.getElementById("hamburger");

const navMenu = document.getElementById("nav-menu");

if (hamburger && navMenu) {
  hamburger.addEventListener("click", function () {
    navMenu.classList.toggle("active");

    const menuTerbuka = navMenu.classList.contains("active");

    hamburger.textContent = menuTerbuka ? "✕" : "☰";

    hamburger.setAttribute("aria-expanded", menuTerbuka);
  });
}

// ==========================================
// NAVIGATION LINKS
// ==========================================

const navLinks = document.querySelectorAll(".nav-menu a");

navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (navMenu) {
      navMenu.classList.remove("active");
    }

    if (hamburger) {
      hamburger.textContent = "☰";

      hamburger.setAttribute("aria-expanded", "false");
    }
  });
});

// ==========================================
// RESET MOBILE MENU
// ==========================================

window.addEventListener("resize", function () {
  if (window.innerWidth > 800) {
    if (navMenu) {
      navMenu.classList.remove("active");
    }

    if (hamburger) {
      hamburger.textContent = "☰";

      hamburger.setAttribute("aria-expanded", "false");
    }
  }
});

// ==========================================
// NAVBAR SCROLL EFFECT
// ==========================================

const header = document.getElementById("header");

function updateHeader() {
  if (!header) {
    return;
  }

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateHeader);

updateHeader();

// ==========================================
// ACTIVE NAVIGATION ON SCROLL
// ==========================================

const sections = document.querySelectorAll("main section[id]");

function updateActiveNavigation() {
  let currentSection = "home";

  sections.forEach(function (section) {
    const sectionTop = section.offsetTop - 160;

    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(function (link) {
    link.classList.remove("active");

    const href = link.getAttribute("href");

    if (href === "#" + currentSection) {
      link.classList.add("active");
    }
  });
}

window.addEventListener("scroll", updateActiveNavigation);

updateActiveNavigation();

// ==========================================
// SCROLL REVEAL
// ==========================================

const revealElements = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");

          revealObserver.unobserve(entry.target);
        }
      });
    },

    {
      threshold: 0.12,
    },
  );

  revealElements.forEach(function (element) {
    revealObserver.observe(element);
  });
} else {
  revealElements.forEach(function (element) {
    element.classList.add("active");
  });
}

// ==========================================
// PROJECT FILTER
// ==========================================

const filterButtons = document.querySelectorAll(".filter-btn");

const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const filter = button.getAttribute("data-filter");

    filterButtons.forEach(function (btn) {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    projectCards.forEach(function (card) {
      const category = card.getAttribute("data-category");

      if (filter === "all" || category === filter) {
        card.classList.remove("hide");
      } else {
        card.classList.add("hide");
      }
    });
  });
});

// ==========================================
// PROJECT DATA
// ==========================================

const projects = {
  // ========================================
  // FINANCE MANAGEMENT APP
  // ========================================

  finance: {
    title: "Finance Management App",

    category: "Web Application",

    image: "images/apk_1.jpeg",

    description:
      "Aplikasi keuangan yang dibuat untuk membantu pencatatan pemasukan dan pengeluaran secara lebih terstruktur. Data transaksi terhubung dengan Google Spreadsheet sehingga data dapat disimpan dan dikelola dengan mudah.",

    features: [
      "Pencatatan pemasukan",
      "Pencatatan pengeluaran",
      "Dashboard keuangan",
      "Riwayat transaksi",
      "Grafik pemasukan",
      "Grafik pengeluaran",
      "Perhitungan saldo",
      "Google Spreadsheet",
    ],

    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Apps Script",
      "Google Spreadsheet",
    ],
  },

  // ========================================
  // PRESENSI PRO
  // ========================================

  presensi: {
    title: "Presensi Pro",

    category: "Web Application",

    image: "images/presensi_2.jpeg",

    description:
      "Sistem presensi berbasis website yang dibuat untuk membantu proses pencatatan kehadiran pegawai dengan memanfaatkan lokasi GPS dan kamera perangkat.",

    features: [
      "Login pegawai",
      "Login admin",
      "Absen masuk",
      "Absen keluar",
      "Lokasi GPS",
      "Kamera",
      "Riwayat aktivitas",
      "Dashboard admin",
    ],

    technology: [
      "HTML",
      "CSS",
      "JavaScript",
      "Google Apps Script",
      "Google Spreadsheet",
    ],
  },

  // ========================================
  // ESP32 SMART LAMP
  // ========================================

  esp32: {
    title: "ESP32 Smart Lamp",

    category: "Internet of Things",

    image: "images/Lampu_pintar_2.png",

    description:
      "Project Internet of Things untuk mengontrol lampu menggunakan ESP32 dan Telegram Bot sehingga perangkat dapat dikontrol melalui pesan Telegram.",

    features: [
      "Kontrol lampu",
      "Telegram Bot",
      "Kontrol jarak jauh",
      "ESP32",
      "Relay",
      "Koneksi Wi-Fi",
    ],

    technology: ["ESP32", "MicroPython", "Telegram Bot", "Wi-Fi", "IoT"],
  },
};

// ==========================================
// PROJECT MODAL ELEMENTS
// ==========================================

const projectModal = document.getElementById("project-modal");

const modalClose = document.getElementById("modal-close");

const modalOverlay = document.querySelector(".modal-overlay");

const modalImage = document.getElementById("modal-image");

const modalCategory = document.getElementById("modal-category");

const modalTitle = document.getElementById("modal-title");

const modalDescription = document.getElementById("modal-description");

const modalFeatures = document.getElementById("modal-features");

const modalTech = document.getElementById("modal-tech");

const detailButtons = document.querySelectorAll(".project-detail");

// ==========================================
// OPEN PROJECT MODAL
// ==========================================

detailButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const projectName = button.getAttribute("data-project");

    const project = projects[projectName];

    if (!project) {
      return;
    }

    // IMAGE
    modalImage.src = project.image;

    modalImage.alt = project.title;

    // CATEGORY
    modalCategory.textContent = project.category;

    // TITLE
    modalTitle.textContent = project.title;

    // DESCRIPTION
    modalDescription.textContent = project.description;

    // ==================================
    // FEATURES
    // ==================================

    modalFeatures.innerHTML = "";

    project.features.forEach(function (feature) {
      const li = document.createElement("li");

      li.textContent = feature;

      modalFeatures.appendChild(li);
    });

    // ==================================
    // TECHNOLOGY
    // ==================================

    modalTech.innerHTML = "";

    project.technology.forEach(function (tech) {
      const span = document.createElement("span");

      span.textContent = tech;

      modalTech.appendChild(span);
    });

    // ==================================
    // SHOW MODAL
    // ==================================

    projectModal.classList.add("active");

    projectModal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";

    setTimeout(function () {
      modalClose.focus();
    }, 100);
  });
});

// ==========================================
// CLOSE PROJECT MODAL
// ==========================================

function closeProjectModal() {
  if (!projectModal) {
    return;
  }

  projectModal.classList.remove("active");

  projectModal.setAttribute("aria-hidden", "true");

  document.body.style.overflow = "";
}

// TOMBOL X

if (modalClose) {
  modalClose.addEventListener("click", closeProjectModal);
}

// KLIK AREA GELAP

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeProjectModal);
}

// ESC KEYBOARD

document.addEventListener("keydown", function (event) {
  if (
    event.key === "Escape" &&
    projectModal &&
    projectModal.classList.contains("active")
  ) {
    closeProjectModal();
  }
});

// ==========================================
// CURRENT YEAR
// ==========================================

const currentYear = document.getElementById("current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}
