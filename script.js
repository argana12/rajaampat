const video = document.querySelector('video');
video.playbackRate = 0.8;

AOS.init({
    duration: 800,
    once: false // Animasi berulang saat scroll ke atas/bawah
});

const map = L.map('map').setView([-0.5, 130.5], 8);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);
L.marker([-0.489, 130.401]).addTo(map).bindPopup('Waiwo Beach');
L.marker([-0.883, 131.283]).addTo(map).bindPopup('Yeben Beach');
L.marker([-0.413, 130.823]).addTo(map).bindPopup('Arborek Beach');

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: 'smooth'
        });
    });
});