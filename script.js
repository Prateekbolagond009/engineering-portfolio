// --- Resume Dropdown Menu Controller ---
(() => {
  const toggle = document.getElementById('resume-toggle');
  const menu = document.getElementById('resume-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', (e) => {
    e.stopPropagation();
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

// --- Mobile Navigation Menu Toggle ---
(() => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (!menuToggle || !nav) return;

  menuToggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
})();

// --- LatentForce Elastic Constellation / Radial Hub Effect ---
document.addEventListener('DOMContentLoaded', () => {
    const section = document.getElementById('contact');
    const canvas = document.getElementById('contact-circuit-canvas');
    if (!section || !canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let width, height;

    const nodeCount = 48;
    const nodes = [];
    const colors = ['#ff5733', '#ffc300', '#38bdf8', '#84cc16', '#a855f7', '#ffffff'];

    const mouse = {
        x: -1000,
        y: -1000,
        targetX: -1000,
        targetY: -1000,
        isInside: false
    };

    function resizeCanvas() {
        const rect = section.getBoundingClientRect();
        width = rect.width;
        height = rect.height;
        
        const dpr = window.devicePixelRatio || 1;
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        ctx.scale(dpr, dpr);
    }

    class Node {
        constructor() {
            this.reset();
        }
        reset() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.vx = (Math.random() - 0.5) * 0.5;
            this.vy = (Math.random() - 0.5) * 0.5;
            this.radius = Math.random() * 2.2 + 1.2;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }
        update() {
            this.x += this.vx;
            this.y += this.vy;
            if (this.x < 0 || this.x > width) this.vx *= -1;
            if (this.y < 0 || this.y > height) this.vy *= -1;
        }
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.globalAlpha = 0.45;
            ctx.fill();
            ctx.globalAlpha = 1.0;
        }
    }

    function initNodes() {
        nodes.length = 0;
        for (let i = 0; i < nodeCount; i++) {
            nodes.push(new Node());
        }
    }

    section.addEventListener('mouseenter', () => {
        mouse.isInside = true;
    });

    section.addEventListener('mousemove', (e) => {
        const rect = section.getBoundingClientRect();
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        if (!mouse.isInside) {
            mouse.x = mouse.targetX;
            mouse.y = mouse.targetY;
            mouse.isInside = true;
        }
    });

    section.addEventListener('mouseleave', () => {
        mouse.isInside = false;
        mouse.targetX = width * 0.75;
        mouse.targetY = height * 0.5;
    });

    resizeCanvas();
    mouse.x = width * 0.75;
    mouse.y = height * 0.5;
    mouse.targetX = width * 0.75;
    mouse.targetY = height * 0.5;
    initNodes();

    window.addEventListener('resize', () => {
        resizeCanvas();
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);

        const lerpFactor = 0.12;
        mouse.x += (mouse.targetX - mouse.x) * lerpFactor;
        mouse.y += (mouse.targetY - mouse.y) * lerpFactor;

        nodes.forEach(node => {
            node.update();
            node.draw();

            const dx = node.x - mouse.x;
            const dy = node.y - mouse.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            const maxDist = 210;

            if (dist < maxDist) {
                const alpha = (1 - dist / maxDist) * 0.7;
                ctx.beginPath();
                ctx.moveTo(mouse.x, mouse.y);
                ctx.lineTo(node.x, node.y);

                const gradient = ctx.createLinearGradient(mouse.x, mouse.y, node.x, node.y);
                gradient.addColorStop(0, 'rgba(255, 191, 36, 0.85)');
                gradient.addColorStop(1, node.color);

                ctx.strokeStyle = gradient;
                ctx.lineWidth = 1.1;
                ctx.globalAlpha = alpha;
                ctx.stroke();
                ctx.globalAlpha = 1.0;
            }
        });

        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, 4.5, 0, Math.PI * 2);
        ctx.fillStyle = '#ffffff';
        ctx.shadowColor = '#38bdf8';
        ctx.shadowBlur = 15;
        ctx.fill();
        ctx.shadowBlur = 0;

        animationFrameId = requestAnimationFrame(animate);
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (!animationFrameId) animate();
            } else {
                cancelAnimationFrame(animationFrameId);
                animationFrameId = null;
            }
        });
    }, { threshold: 0.1 });

    observer.observe(section);
});
