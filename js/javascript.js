
  const mobileMenu = document.getElementById('mobile-menu'); // Die ID deines Buttons
  const navList = document.getElementById('nav-list');       // Die ID deiner UL-Liste

  mobileMenu.addEventListener('click', () => {
    // Schaltet die Klasse "active" an und aus
    navList.classList.toggle('active');
    console.log("Menü geklickt!"); // Zum Testen in der Browser-Konsole (F12)
  });
