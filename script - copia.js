document.addEventListener("DOMContentLoaded", () => {

    const PASSWORD = "22112025";

    const TRANSITION_TIME = 1000; // 1s exacto, igual que CSS

    function goToStep(currentId, nextId, onEnter = null) {

        const current = document.getElementById(currentId);
        const next = document.getElementById(nextId);

        if (!current || !next) return;

        // Preparamos siguiente antes de animar
        next.classList.add("active");

        if (onEnter) onEnter();

        requestAnimationFrame(() => {
            current.classList.remove("active");
        });
    }

    /* ================= LOGIN ================= */

    const loginBtn = document.getElementById("login-btn");
    const passwordInput = document.getElementById("password");
    const loginMessage = document.getElementById("login-message");
    const backgroundMusic = document.getElementById("background-music");

    loginBtn.addEventListener("click", () => {

        if (passwordInput.value.trim() === PASSWORD) {

            loginMessage.textContent = "Acceso concedido...";
            loginMessage.style.color = "#6aa8ff";

            backgroundMusic.volume = 0.6;
            backgroundMusic.play().catch(() => {});

            goToStep("login", "bienvenida");

        } else {
            loginMessage.textContent = "Acceso denegado.";
            loginMessage.style.color = "#ff5c5c";
        }

    });

    /* ================= MEMORIAS ================= */

    const memories = [
        { image: "assets/images/memoria1.jpg", text: "Recuerdo 1..." },
        { image: "assets/images/memoria2.jpg", text: "Recuerdo 2..." },
        { image: "assets/images/memoria3.jpg", text: "Recuerdo 3..." }
    ];

    const startMemoriesBtn = document.getElementById("start-memories-btn");
    const memoryImage = document.getElementById("memory-image");
    const memoryText = document.getElementById("memory-text");
    const memoryNextBtn = document.getElementById("memory-next-btn");

    let currentMemoryIndex = 0;

    function renderMemory(index) {
        memoryImage.src = memories[index].image;
        memoryText.textContent = memories[index].text;
    }

    function animateMemory(index) {

        memoryImage.classList.add("memory-hidden");
        memoryText.classList.add("memory-hidden");
        memoryNextBtn.classList.add("memory-btn-hidden");

        setTimeout(() => {

            renderMemory(index);

            memoryImage.classList.remove("memory-hidden");
            memoryText.classList.remove("memory-hidden");
            memoryNextBtn.classList.remove("memory-btn-hidden");

        }, TRANSITION_TIME);
    }

    startMemoriesBtn.addEventListener("click", () => {

        goToStep("bienvenida", "memorias", () => {
            currentMemoryIndex = 0;
            renderMemory(currentMemoryIndex);

            setTimeout(() => {
                memoryImage.classList.remove("memory-hidden");
                memoryText.classList.remove("memory-hidden");
                memoryNextBtn.classList.remove("memory-btn-hidden");
            }, 50);
        });

    });

    memoryNextBtn.addEventListener("click", () => {

        if (currentMemoryIndex < memories.length - 1) {

            currentMemoryIndex++;
            animateMemory(currentMemoryIndex);

        } else {

            goToStep("memorias", "preboda", () => {
                currentPrebodaIndex = 0;
                renderPreboda(currentPrebodaIndex);

                setTimeout(() => {
                    prebodaImage.classList.remove("memory-hidden");
                    prebodaText.classList.remove("memory-hidden");
                    prebodaNextBtn.classList.remove("memory-btn-hidden");
                }, 50);
            });

        }

    });

    /* ================= PREBODA ================= */

    const prebodaMoments = [
        { image: "assets/images/preboda1.jpg", text: "Momento 1..." },
        { image: "assets/images/preboda2.jpg", text: "Momento 2..." }
    ];

    const prebodaImage = document.getElementById("preboda-image");
    const prebodaText = document.getElementById("preboda-text");
    const prebodaNextBtn = document.getElementById("preboda-next-btn");

    let currentPrebodaIndex = 0;

    function renderPreboda(index) {
        prebodaImage.src = prebodaMoments[index].image;
        prebodaText.textContent = prebodaMoments[index].text;
    }

    function animatePreboda(index) {

        prebodaImage.classList.add("memory-hidden");
        prebodaText.classList.add("memory-hidden");
        prebodaNextBtn.classList.add("memory-btn-hidden");

        setTimeout(() => {

            renderPreboda(index);

            prebodaImage.classList.remove("memory-hidden");
            prebodaText.classList.remove("memory-hidden");
            prebodaNextBtn.classList.remove("memory-btn-hidden");

        }, TRANSITION_TIME);
    }

    prebodaNextBtn.addEventListener("click", () => {

        if (currentPrebodaIndex < prebodaMoments.length - 1) {

            currentPrebodaIndex++;
            animatePreboda(currentPrebodaIndex);

        } else {

            goToStep("preboda", "confesion", () => {
            startTypewriter();
});

        }

    });

/* ================= TYPEWRITER ================= */

const typewriterElement = document.getElementById("typewriter-text");

const confessionText = `
Ari,

Hay cosas que nunca supe cómo decirte.

No por falta de palabras,
sino porque algunas emociones
no caben en una frase sencilla.

A veces me pregunté
si entendías el peso silencioso
de lo que sentía cuando te miraba.

No era costumbre.
No era rutina.

Era decisión.

Y si hoy estás leyendo esto,
es porque decidí
no guardarlo más.
`;

let typeIndex = 0;
let typingStarted = false;

function startTypewriter() {

    if (typingStarted) return;
    typingStarted = true;

    typewriterElement.textContent = "";

    function type() {
        if (typeIndex < confessionText.length) {
            typewriterElement.textContent += confessionText.charAt(typeIndex);
            typeIndex++;
            setTimeout(type, 35);
        }
    }

    type();
}



});
