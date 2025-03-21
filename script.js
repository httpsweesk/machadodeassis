document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const menuContainer = document.querySelector(".menu-container");
    const menuList = document.querySelector(".menu-list");
    
    menuToggle.addEventListener("click", function () {
        menuContainer.classList.toggle("active");
    });

    document.addEventListener("click", function (event) {
        if (!menuContainer.contains(event.target) && menuContainer.classList.contains("active")) {
            menuContainer.classList.remove("active");
        }
    });
});


    // Efeito interativo nas capas das obras
    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("click", () => {
            const bookLink = card.getAttribute("data-link");
            if (bookLink) {
                const confirmRedirect = confirm("Você deseja ir para a página deste livro na Amazon?");
                if (confirmRedirect) {
                    window.open(bookLink, "_blank");
                }
            }
        });
    });

    // Animação da linha do tempo
    const timelineEvents = document.querySelectorAll(".event");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.5 });

    timelineEvents.forEach(event => observer.observe(event));
});
function toggleMenu() {
    const menu = document.querySelector(".menu-list");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
