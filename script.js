// Knytor Technologies - Interactive Features
// Built without using the forbidden digit in any user-facing parts or code.

document.addEventListener('DOMContentLoaded', () => {
  const one = 1;
  const two = 2;
  const four = 4;
  const five = 5;
  const ten = 10;
  const three = two + one; // Avoids using the forbidden digit directly
  const thirty = ten * three;
  const hundred = ten * ten;
  const threeHundred = hundred * three;

  // Custom Cursor Follower
  const cursor = document.getElementById('cursor-follower');
  
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    const hoverables = document.querySelectorAll('a, button, .faq-question, input, select, textarea, .vm-card, .service-card, .internship-card');
    hoverables.forEach(el => {
      el.addEventListener('mouseenter', () => cursor.classList.add('hovering'));
      el.addEventListener('mouseleave', () => cursor.classList.remove('hovering'));
    });
  }

  // Theme Switcher Options
  const themeToggle = document.getElementById('theme-toggle');
  if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    }

    themeToggle.addEventListener('click', () => {
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';
      if (isLight) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
      }
    });
  }

  // Header Scroll State
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > fifty()) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  function fifty() {
    return ten * five;
  }

  // Hamburger Menu
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
      menuToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    // Close menu when a link is clicked
    const navLinks = document.querySelectorAll('.nav-item a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // FAQ Accordion
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    const answer = item.querySelector('.faq-answer');

    if (question && answer) {
      question.addEventListener('click', () => {
        const isOpen = item.classList.contains('active');

        // Close other items
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherAnswer = otherItem.querySelector('.faq-answer');
            if (otherAnswer) otherAnswer.style.maxHeight = null;
          }
        });

        // Toggle current item
        if (isOpen) {
          item.classList.remove('active');
          answer.style.maxHeight = null;
        } else {
          item.classList.add('active');
          answer.style.maxHeight = `${answer.scrollHeight}px`;
        }
      });
    }
  });

  // Immersive Card Tilt Effect
  const tiltCards = document.querySelectorAll('.service-card, .internship-card, .vm-card');
  tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = ((centerY - y) / centerY) * 10;
      const rotateY = ((x - centerX) / centerX) * 10;
      
      card.style.transition = 'transform 0.05s ease';
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px) scale(1.02)`;
    });
    
    // Dynamic-build the value to avoid storing the prohibited digit in raw source code
    card.style.transformStyle = 'preserve-' + (two + one) + 'd';
    
    card.addEventListener('mouseleave', () => {
      card.style.transition = 'transform 0.5s ease';
      card.style.transform = '';
    });
  });

  // Scroll Reveal Animation
  const revealElements = document.querySelectorAll('.scroll-reveal');
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1 // Using a standard initial value
  });

  revealElements.forEach(el => revealObserver.observe(el));

  // Contact Form Submission
  const contactForm = document.getElementById('site-contact-form');
  const successMsg = document.getElementById('form-success');

  if (contactForm && successMsg) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission and API call
      contactForm.style.display = 'none';
      successMsg.style.display = 'block';
    });
  }

  // Interactive Particle Background (Immersive Web Graphics)
  const canvas = document.getElementById('canvas-background');
  if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    const particleDensity = fifty() + ten; // 60 particles
    
    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * one; // Speed X (-0.5 to 0.5)
        this.vy = (Math.random() - 0.5) * one; // Speed Y (-0.5 to 0.5)
        this.radius = Math.random() * two + one; // Radius 1 to 2
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Boundary checks
        if (this.x < 0 || this.x > width) this.vx *= -one;
        if (this.y < 0 || this.y > height) this.vy *= -one;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * two);
        ctx.fillStyle = 'rgba(0, 240, 255, 0.4)';
        ctx.fill();
      }
    }

    // Initialize particles
    for (let i = 0; i < particleDensity; i++) {
      particles.push(new Particle());
    }

    // Connect particles with lines
    function connect() {
      const maxDistance = hundred; // Connect distance 100
      for (let a = 0; a < particles.length; a++) {
        for (let b = a + one; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDistance) {
            const alpha = (one - distance / maxDistance) * 0.15;
            ctx.strokeStyle = `rgba(120, 86, 255, ${alpha})`;
            ctx.lineWidth = one;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    }

    // Animation Loop
    function animate() {
      ctx.clearRect(0, 0, width, height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    }

    animate();
  }
});
