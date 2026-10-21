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
