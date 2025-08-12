// EmailJS is already initialized in HTML with correct key

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  html.classList.toggle('light');
  localStorage.setItem('theme', html.classList.contains('light') ? 'light' : 'dark');
});

// Load saved theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  html.classList.add('light');
}

// Sidebar collapse
const collapseBtn = document.getElementById('collapseBtn');
const sidebar = document.getElementById('sidebar');

collapseBtn.addEventListener('click', () => {
  sidebar.classList.toggle('collapsed');
});

// Smooth scrolling for navigation links
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});



// Handle Contact Form Submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("service_5vk87e7", "template_fv70bai", this)
        .then(function () {
            document.getElementById("form-status").innerText = "✅ Message sent successfully!";
            document.getElementById("form-status").style.color = "green";
        }, function (error) {
            console.error("EmailJS Error:", error);
            document.getElementById("form-status").innerText = "❌ Failed to send message. Please try again!";
            document.getElementById("form-status").style.color = "red";
        });
});

// Dynamic year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Animate skill bars on scroll
const observerOptions = {
  threshold: 0.5,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const skillFills = entry.target.querySelectorAll('.skill-fill');
      skillFills.forEach(fill => {
        const width = fill.getAttribute('data-fill') + '%';
        fill.style.width = width;
      });
    }
  });
}, observerOptions);

const skillsSection = document.querySelector('.skills-right');
if (skillsSection) {
  observer.observe(skillsSection);
}
