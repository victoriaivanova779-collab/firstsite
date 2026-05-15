document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.getElementById('nav-list');

    // Prüfen, ob die Elemente überhaupt gefunden werden (gut für Fehlersuche)
    if (mobileMenu && navList) {
        mobileMenu.addEventListener('click', () => {
            navList.classList.toggle('active');
            console.log("Menü-Status: ", navList.classList.contains('active'));
        });
    } else {
        console.error("Fehler: mobile-menu oder nav-list wurde im HTML nicht gefunden!");
    }
});