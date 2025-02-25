document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Mencegah reload
            window.location.href = this.getAttribute("href"); // Berpindah halaman
        });
    });
});
