// Tambahkan efek sederhana
document.addEventListener('DOMContentLoaded', () => {
    console.log("7 Bulan yang manis!");
    
    // Smooth scroll tambahan jika diperlukan
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});