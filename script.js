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
(function initConstellationCanvas() {
  const canvas = document.getElementById('electric-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  const section = document.getElementById('contact');

  // Hub physics (central white node)
  const hub = {
    x: 0,
    y: 0,
    targetX: 0,
    targetY: 0,
    vx: 0,
    vy: 0,
    radius: 5.5
  };

  let isHovered = false;
  let particles = [];
  const PARTICLE_COUNT = 68;

  // Exact color palette from the graph
  const PALETTE = [
    '#ffffff', // bright white
    '#f59e0b', // warm amber / gold
    '#fbbf24', // yellow
    '#ef4444', // coral / orange-red
    '#38bdf8', // cyan
    '#34d399', // soft mint
    '#94a3b8'  // muted slate
  ];

  function resize() {
    const rect = section.getBoundingClientRect();
    width = canvas.width = rect.width;
    height = canvas.height = rect.height;

    if (!isHovered) {
      hub.targetX = width * 0.68;
      hub.targetY = height * 0.52;
      hub.x = hub.targetX;
      hub.y = hub.targetY;
    }
  }

  window.addEventListener('resize', resize);

  section.addEventListener('mousemove', (e) => {
    const rect = section.getBoundingClientRect();
    hub.targetX = e.clientX - rect.left;
    hub.targetY = e.clientY - rect.top;
    isHovered = true;
  });

  section.addEventListener('mouseleave', () => {
    isHovered = false;
    hub.targetX = width * 0.68;
    hub.targetY = height * 0.52;
  });

  class SatelliteNode {
    constructor(index) {
      this.index = index;
      this.baseAngle = (Math.PI * 2 * index) / PARTICLE_COUNT + (Math.random() - 0.5) * 0.3;
      this.baseDist = 45 + Math.pow(Math.random(), 1.4) * 230;
      
      this.x = 0;
      this.y = 0;
      this.vx = 0;
      this.vy = 0;

      this.radius = Math.random() < 0.25 ? 3.5 : (Math.random() * 1.8 + 1.8);
      this.color = PALETTE[Math.floor(Math.random() * PALETTE.length)];
      this.alpha = 0.5 + Math.random() * 0.45;
      this.orbitSpeed = (Math.random() - 0.5) * 0.003;
      this.orbitOffset = Math.random() * Math.PI * 2;
    }

    update(hubX, hubY, time) {
      this.baseAngle += this.orbitSpeed;
      const breathing = Math.sin(time * 0.002 + this.orbitOffset) * 8;
      const targetDist = this.baseDist + breathing;

      const idealX = hubX + Math.cos(this.baseAngle) * targetDist;
      const idealY = hubY + Math.sin(this.baseAngle) * targetDist;

      const spring = 0.045;
      const damping = 0.82;

      this.vx = (this.vx + (idealX - this.x) * spring) * damping;
      this.vy = (this.vy + (idealY - this.y) * spring) * damping;

      this.x += this.vx;
      this.y += this.vy;
    }

    drawRadialLine(hubX, hubY) {
      ctx.beginPath();
      ctx.moveTo(hubX, hubY);
      ctx.lineTo(this.x, this.y);
      ctx.strokeStyle = '#475569';
      ctx.lineWidth = 0.55;
      ctx.globalAlpha = 0.28;
      ctx.stroke();
    }

    drawNode() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.alpha;
      ctx.fill();
    }
  }

  resize();
  particles = [];
  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const node = new SatelliteNode(i);
    node.x = hub.x + Math.cos(node.baseAngle) * node.baseDist;
    node.y = hub.y + Math.sin(node.baseAngle) * node.baseDist;
    particles.push(node);
  }

  let time = 0;

  function render() {
    ctx.clearRect(0, 0, width, height);
    time++;

    const hubSpring = 0.085;
    const hubDamping = 0.8;
    hub.vx = (hub.vx + (hub.targetX - hub.x) * hubSpring) * hubDamping;
    hub.vy = (hub.vy + (hub.targetY - hub.y) * hubSpring) * hubDamping;
    hub.x += hub.vx;
    hub.y += hub.vy;

    particles.forEach(p => p.update(hub.x, hub.y, time));

    particles.forEach(p => p.drawRadialLine(hub.x, hub.y));

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.hypot(dx, dy);

        if (dist < 48) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = '#64748b';
          ctx.lineWidth = 0.45;
          ctx.globalAlpha = (1 - dist / 48) * 0.22;
          ctx.stroke();
        }
      }
    }

    particles.forEach(p => p.drawNode());

    const coreGlow = ctx.createRadialGradient(hub.x, hub.y, 1, hub.x, hub.y, 24);
    coreGlow.addColorStop(0, 'rgba(255, 255, 255, 0.95)');
    coreGlow.addColorStop(0.3, 'rgba(251, 191, 36, 0.45)');
    coreGlow.addColorStop(1, 'rgba(251, 191, 36, 0)');

    ctx.beginPath();
    ctx.arc(hub.x, hub.y, 24, 0, Math.PI * 2);
    ctx.fillStyle = coreGlow;
    ctx.globalAlpha = 0.9;
    ctx.fill();

    ctx.beginPath();
    ctx.arc(hub.x, hub.y, hub.radius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.globalAlpha = 1;
    ctx.fill();

    requestAnimationFrame(render);
  }

  render();
})();
