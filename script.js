function scrollDown() {
    const sections = document.querySelectorAll(".section");
    let nextSection = null;

    // Aktuelle Scrollposition ermitteln
    sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top > 0 && !nextSection) {
            nextSection = section;
        }
    });

    // Falls eine nächste Sektion existiert, scrollen
    if (nextSection) {
        window.scrollTo({
            top: nextSection.offsetTop,
            behavior: "smooth"
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const scrollButton = document.querySelector(".scroll-container");

    function checkScroll() {
        const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

        if (scrolledToBottom) {
            scrollButton.style.opacity = "0";
            scrollButton.style.pointerEvents = "none"; // Verhindert Klicks
        } else {
            scrollButton.style.opacity = "1";
            scrollButton.style.pointerEvents = "auto";
        }
    }

    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector(".footer");

    function checkScroll() {
        const scrolledToBottom =
            window.innerHeight + window.scrollY >= document.body.offsetHeight - 10;

        if (scrolledToBottom) {
            footer.style.opacity = "1";
            footer.style.transform = "translateY(0%)"; // Footer sichtbar machen
        } else {
            footer.style.opacity = "0";
            footer.style.transform = "translateY(100%)"; // Footer verstecken
        }
    }

    window.addEventListener("scroll", checkScroll);
});

document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".content, .content2, .content3");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => observer.observe(element));
});

function showSnackBar() {
    var snackbar = document.getElementById("snackbar");
    
    // Snackbar einblenden
    snackbar.classList.add("show");

    // Nach 3 Sekunden ausblenden
    setTimeout(function () {
        snackbar.classList.remove("show");
    }, 1500);
}
document.addEventListener("DOMContentLoaded", () => {
    const section2 = document.querySelector(".section-2");
    const blob = document.querySelector(".blob");
    
    // Neue Overlay-Farbe hinzufügen
    const blobOverlay = document.createElement("div");
    blobOverlay.classList.add("blob-overlay");
    blob.parentElement.appendChild(blobOverlay);

    function updateBlobColor(entries) {
        entries.forEach(entry => {
            if (entry.intersectionRatio >= 0.5) {
                // Weiche Überblendung zur neuen Farbe
                blobOverlay.style.opacity = "1";  
            } else {
                // Weiche Überblendung zurück zur alten Farbe
                blobOverlay.style.opacity = "0";
            }
        });
    }

    const observer = new IntersectionObserver(updateBlobColor, { threshold: [0.5] });
    observer.observe(section2);

    function checkBlobColorManually() {
        const rect = section2.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            blobOverlay.style.opacity = "0.12";  
        } else {
            blobOverlay.style.opacity = "0";
        }
    }

    window.addEventListener("scroll", checkBlobColorManually);
    window.addEventListener("resize", checkBlobColorManually);

    checkBlobColorManually(); // Direkt beim Laden prüfen
});

document.addEventListener("DOMContentLoaded", function () {
    const dotContainers = document.querySelectorAll(".pagination-dots, .pagination-dots-2");

    dotContainers.forEach((container) => {
        for (let i = 0; i < 3; i++) {  // Adjust number of dots if needed
            let dot = document.createElement("div");
            dot.classList.add("dot");
            if (i === 0) dot.classList.add("active"); // Mark first dot as active
            container.appendChild(dot);
        }
    });
});


