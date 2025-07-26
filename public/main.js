// Parallax and 3D room tilt effect
const heroBg = document.querySelector('.room');
window.addEventListener('mousemove', (e) => {
  if (!heroBg) return;
  const x = (e.clientX / window.innerWidth - 0.5) * 30;
  const y = (e.clientY / window.innerHeight - 0.5) * 10;
  heroBg.style.transform = `rotateY(${-18 + x}deg) rotateX(${8 - y}deg) scale(1.1)`;
});
window.addEventListener('mouseleave', () => {
  if (!heroBg) return;
  heroBg.style.transform = 'rotateY(-18deg) rotateX(8deg) scale(1.1)';
});

// Portfolio filter logic
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.getAttribute('data-filter');
    portfolioItems.forEach(item => {
      if (filter === 'all' || item.getAttribute('data-type') === filter) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  });
}); 