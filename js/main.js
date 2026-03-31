// ===== Rinda Ubuzima - Main JS =====

document.addEventListener('DOMContentLoaded', () => {
  console.log('Rinda Ubuzima website loaded.');

    // ---- Mobile nav toggle ----
      const navToggle = document.querySelector('.nav-toggle');
        const navMenu   = document.querySelector('nav ul');

          if (navToggle && navMenu) {
              navToggle.addEventListener('click', () => {
                    navMenu.classList.toggle('open');
                        });
                          }

                            // ---- Smooth scroll for anchor links ----
                              document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                                  anchor.addEventListener('click', (e) => {
                                        const target = document.querySelector(anchor.getAttribute('href'));
                                              if (target) {
                                                      e.preventDefault();
                                                              target.scrollIntoView({ behavior: 'smooth' });
                                                                    }
                                                                        });
                                                                          });
                                                                          });
