document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav ul');

  // Toggle menu saat hamburger diklik
  menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');  // Animasikan ikon hamburger
    nav.classList.toggle('slide');          // Tampilkan/sembunyikan menu nav
  });

  // Tutup menu saat salah satu link diklik (biar user experience lebih baik)
  document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', () => {
      if (menuToggle.classList.contains('active')) {
        menuToggle.classList.remove('active');
        nav.classList.remove('slide');
      }
    });
  });
});
