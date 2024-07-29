document.addEventListener("DOMContentLoaded", function () {
    function toggleColors(containerId, iconId) {
        var container = document.getElementById(containerId);
        var icon = document.getElementById(iconId);
        var textSpans = container.querySelectorAll("span");

        container.classList.toggle("bg-[#1551fd]");
        container.classList.toggle("bg-white");

        icon.classList.toggle("text-white");
        icon.classList.toggle("text-[#1551fd]");

        textSpans.forEach(span => {
            span.classList.toggle("text-white");
            span.classList.toggle("text-black");
        });
    }

    function toggleContent(buttonId, containerId) {
        var button = document.getElementById(buttonId);
        var container = document.getElementById(containerId);
        var content = container.querySelector(".transition-all");
        var arrow = button.querySelector(".arrow-icon");

        button.addEventListener("click", function () {
            toggleColors(containerId, "icon" + buttonId.replace("toggleButton", ""));
            content.classList.toggle("max-h-0");
            content.classList.toggle("max-h-[500px]"); // Adjust this value as needed
            arrow.classList.toggle("rotate-180");
        });
    }

    toggleContent("toggleButton", "container");
    toggleContent("toggleButton2", "container2");
    toggleContent("toggleButton3", "container3");
});

document.addEventListener("DOMContentLoaded", function () {
    function toggleFAQ(buttonId, containerId, arrowId) {
        var button = document.getElementById(buttonId);
        var container = document.getElementById(containerId);
        var content = container.querySelector(".transition-all");
        var arrow = document.getElementById(arrowId);

        button.addEventListener("click", function () {
            // Alterna a visibilidade do conteúdo
            content.classList.toggle("max-h-0");
            content.classList.toggle("max-h-[500px]"); // Ajuste a altura conforme necessário

            // Alterna a rotação e cor da seta
            arrow.classList.toggle("arrow-rotated");
            arrow.classList.toggle("arrow-blue");
        });
    }

    toggleFAQ("toggleButton3", "container3", "arrowIcon3");
});
