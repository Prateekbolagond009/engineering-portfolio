(() => {
      const toggle = document.getElementById('resume-toggle');
      const menu = document.getElementById('resume-menu');
      if (!toggle || !menu) return;
      toggle.addEventListener('click', () => {
        const open = menu.hidden;
        menu.hidden = !open;
        toggle.setAttribute('aria-expanded', String(open));
      });
      document.addEventListener('click', (event) => {
        if (!event.target.closest('.resume-dropdown')) {
          menu.hidden = true;
          toggle.setAttribute('aria-expanded', 'false');
        }
      });
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          menu.hidden = true;
          toggle.setAttribute('aria-expanded', 'false');
          toggle.focus();
        }
      });
    })();

(() => {
      const menuToggle = document.querySelector('.menu-toggle');
      const nav = document.querySelector('.nav-links');
      if (menuToggle && nav) {
        menuToggle.addEventListener('click', () => {
          const isOpen = nav.classList.toggle('open');
          menuToggle.setAttribute('aria-expanded', String(isOpen));
        });
        nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
          nav.classList.remove('open');
          menuToggle.setAttribute('aria-expanded', 'false');
        }));
      }
      document.querySelectorAll('.filter-btn').forEach(button => {
        button.addEventListener('click', () => {
          document.querySelectorAll('.filter-btn').forEach(item => item.classList.remove('active'));
          button.classList.add('active');
          const filter = button.dataset.filter;
          document.querySelectorAll('.project-card').forEach(card => {
            card.hidden = !(filter === 'all' || card.dataset.category === filter);
          });
        });
      });
    })();
// --- Interactive Electric Current / Node Mesh for Contact Section ---
(function initElectricCanvas() {
  const canvas = document.getElementById('electric-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  let mouse = { x: null, y: null, active: false };
  let particles = [];
  const PARTICLE_COUNT = 65;

  function resize() {
    const rect = canvas.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;
    if (!mouse.active) {
      mouse.x = width * 0.65;
      mouse.y = height * 0.55;
    }
  }

  window.addEventListener('resize', resize);

  const section = document.getElementById('contact');
  section.addEventListener('mousemove', (e) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
    mouse.active = true;
  });

  section.addEventListener('mouseleave', () => {
    mouse.active = false;
  });

  class Node {
    constructor() {
      this.reset();
    }

    reset() {
      this.angle = Math.random() * Math.PI * 2;
      this.dist = 60 + Math.random() * 260;
      this.speed = (Math.random() - 0.5) * 0.008;
      this.radius = Math.random() * 2.5 + 1.2;
      
      const colors = ['#38bdf8', '#48d9d0', '#fbbf24', '#f87171', '#a78bfa'];
      this.color = colors[Math.floor(Math.random() * colors.length)];
      this.pulsePhase = Math.random() * Math.PI * 2;
    }

    update() {
      this.angle += this.speed;
      this.pulsePhase += 0.04;
    }

    draw(originX, originY) {
      const x = originX + Math.cos(this.angle) * this.dist;
      const y = originY + Math.sin(this.angle) * this.dist;

      ctx.beginPath();
      ctx.moveTo(originX, originY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 0.6;
      ctx.globalAlpha = 0.18 + 0.12 * Math.sin(this.pulsePhase);
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(x, y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = 0.85;
      ctx.fill();

      for (let other of particles) {
        const dx = other.x - x;
        const dy = other.y - y;
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < 55) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(other.x, other.y);
          ctx.strokeStyle = '#38bdf8';
          ctx.lineWidth = 0.4;
          ctx.globalAlpha = (1 - d / 55) * 0.25;
          ctx.stroke();
        }
      }

      this.x = x;
      this.y = y;
    }
  }

  resize();
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    particles.push(new Node());
  }

  let currentOrigin = { x: mouse.x, y: mouse.y };

  function animate() {
    ctx.clearRect(0, 0, width, height);

    const targetX = mouse.active ? mouse.x : width * 0.65;
    const targetY = mouse.active ? mouse.y : height * 0.55;
    currentOrigin.x += (targetX - currentOrigin.x) * 0.08;
    currentOrigin.y += (targetY - currentOrigin.y) * 0.08;

    const gradient = ctx.createRadialGradient(
      currentOrigin.x, currentOrigin.y, 2,
      currentOrigin.x, currentOrigin.y, 35
    );
    gradient.addColorStop(0, '#ffffff');
    gradient.addColorStop(0.3, 'rgba(56, 189, 248, 0.8)');
    gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');

    ctx.beginPath();
    ctx.arc(currentOrigin.x, currentOrigin.y, 35, 0, Math.PI * 2);
    ctx.fillStyle = gradient;
    ctx.globalAlpha = 0.85;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(currentOrigin.x, currentOrigin.y, 3.5, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 1;
    ctx.fill();

    particles.forEach(p => {
      p.update();
      p.draw(currentOrigin.x, currentOrigin.y);
    });

    requestAnimationFrame(animate);
  }

  animate();
})();
