document.addEventListener("DOMContentLoaded", () => {

    /* ================================================= */
    /* CONFIGURACIÓN GENERAL */
    /* ================================================= */

    const PASSWORD = "22112025";
    const TRANSITION_TIME = 1000;

    const backgroundMusic = document.getElementById("background-music");
    const specialAudio = document.getElementById("special-audio");

    /* ================================================= */
    /* FUNCIÓN TRANSICIÓN ENTRE SECCIONES */
    /* ================================================= */

    function goToStep(currentId, nextId, onEnter = null) {
        const current = document.getElementById(currentId);
        const next = document.getElementById(nextId);

        if (!current || !next) return;

        next.classList.add("active");

        if (onEnter) onEnter();

        requestAnimationFrame(() => {
            current.classList.remove("active");
        });
    }

/* ================================================= */
/* LOGIN */
/* ================================================= */

const loginBtn = document.getElementById("login-btn");
const passwordInput = document.getElementById("password");
const loginMessage = document.getElementById("login-message");
const passwordHint = document.getElementById("password-hint");

function attemptLogin() {

    const value = passwordInput.value.trim();

    if (value === PASSWORD) {

        loginMessage.textContent = "Acceso concedido...";
        loginMessage.style.color = "#6aa8ff";

        passwordHint.classList.add("hidden");

        backgroundMusic.volume = 0.6;
        backgroundMusic.play().catch(() => {});

        goToStep("login", "bienvenida");

    } else {

        loginMessage.textContent = "Acceso denegado.";
        loginMessage.style.color = "#ff5c5c";
    }
}

/* Click botón */
loginBtn.addEventListener("click", attemptLogin);

/* Enter en input */
passwordInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        attemptLogin();
    }
});

/* Mostrar / ocultar hint dinámicamente */
passwordInput.addEventListener("input", () => {

    const value = passwordInput.value.trim();

    if (value.length > 0 && value !== PASSWORD) {
        passwordHint.classList.remove("hidden");
    } else {
        passwordHint.classList.add("hidden");
    }

});


    /* ================================================= */
    /* MEMORIES */
    /* ================================================= */

    const memories = [
            {
                image: "assets/images/memoria1.jpg",
                text: "Esa tarde del 22 de noviembre fue una tarde llena de emoción, de sensaciones, de luces, de oleaje con un precioso aire fresco golpeando nuestro rostro, flores y un hermoso sentimiento compartido de amor. ¿Recuerdas lo hermoso que fue?"
            },
            {
                image: "assets/images/memoria2.jpg",
                text: "Cómo describir una tarde que sería el inicio formal a un destino juntos. Cómo redactar si quiera todas las emociones y sentimientos que brotaron en esa tarde. Parece de ensueño poder sido capaz de experimentar un momento tan precioso, tan sofisticado como lindo, tan gentil como hermoso."
            },
            {
                image: "assets/images/memoria3.jpg",
                text: "Tampoco cómo olvidar esa noche en el Wingman, tú tan preciosa en ese vestido rojo y un metiche ahí en el fondo arruinando las fotos, pero dándole ese toque gracioso a esa increíble noche."
            },
            {
                image: "assets/images/memoria4.jpg",
                text: "Tendré tatuada esa noche siempre, el día que nos vimos por primera vez ¿Lo recuerdas? Los nervios iniciales. Las sonrisas compartidas de emoción, de mucho sentimiento. Una noche corta, una noche que quedé flechado al ver tus ojos, al verte sonreír, al verte por primera vez😍😍"
            },
            {
                image: "assets/images/memoria6.jpg",
                text: "Cuando el mundo, la vida y mi presente se convirtieron en una sola cosa: tú."
            },
            {
                image: "assets/images/memoria7.jpg",
                text: "Amorcito, eres mi todo, mi presente, mi futuro, mi destino. Eres la mujer más hermosa del mundo, la más inteligente, la más dulce, la más tierna, la más linda, la más increíble. Eres mi reina hermosa y siempre lo serás. Te amo con toda el alma y te amaré por toda la eternidad❤️"
            }         
            
        ];

    let currentMemoryIndex = 0;

    const startMemoriesBtn = document.getElementById("start-memories-btn");
    const memoryImage = document.getElementById("memory-image");
    const memoryText = document.getElementById("memory-text");
    const memoryNextBtn = document.getElementById("memory-next-btn");

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
            goToStep("memorias", "preboda", startPreboda);
        }

    });

    /* ================================================= */
    /* PREBODA */
    /* ================================================= */

    const prebodaMoments = [
        { image: "assets/images/Preboda1.jpg", text: "Tampoco olvidaré nunca nuestra preboda, verte de blanco con una corona de flores. Amé completamente tenerte conmigo: Darte el anillo. Decirte mis votos. Mostrarte el video que hice con mucho amor para ti. Si así de especial fue nuestra preboda, no tengas dudas que en nuestro matrimonio será aún más mágico cielito✨ Eres y siempre serás la niña de mis ojos. Te amo infinitamente amorcito" },
        
    ];

    let currentPrebodaIndex = 0;

    const prebodaImage = document.getElementById("preboda-image");
    const prebodaText = document.getElementById("preboda-text");
    const prebodaNextBtn = document.getElementById("preboda-next-btn");

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

    function startPreboda() {
        currentPrebodaIndex = 0;
        renderPreboda(currentPrebodaIndex);

        setTimeout(() => {
            prebodaImage.classList.remove("memory-hidden");
            prebodaText.classList.remove("memory-hidden");
            prebodaNextBtn.classList.remove("memory-btn-hidden");
        }, 50);
    }

    prebodaNextBtn.addEventListener("click", () => {

        if (currentPrebodaIndex < prebodaMoments.length - 1) {
            currentPrebodaIndex++;
            animatePreboda(currentPrebodaIndex);
        } else {
            goToStep("preboda", "confesion", startTypewriter);
        }

    });

    /* ================================================= */
    /* TYPEWRITER */
    /* ================================================= */

    const typewriterElement = document.getElementById("typewriter-text");
    const confesionNextBtn = document.getElementById("confesion-next");

    const confessionText = `
Amorcito,

Gracias por estar ahí, por elegirme cada día. Amo quien eres, la mujer que te has convertido. Irradias energía como un sol y me abrazas siempre con tu inmenso calor.

Te agradezco por todo, por hacerme tan feliz y por sostenerme cuando no he sido capaz de sostenerte a ti.
Quiero que sepas, que te elijo también, cuando todo parece pesar.
Te elijo cuando estamos cerca y cuando los kilómetros nos separan.
Te elijo porque contigo encuentro mi propósito.

Quiero que sigamos creciendo, aprendiendo a hablarnos mejor, a escucharnos más profundo, a cuidarnos incluso en los silencios. Sé que nuestra historia no es perfecta pero nuestro amor es fuerte e inquebrantable.

Estás en mi presente y soy feliz de que caminemos a nuestro futuro, al hogar que estamos construyendo.

Te amo hoy y siempre.



`;

    let typeIndex = 0;
    let typingStarted = false;

    function startTypewriter() {

        if (typingStarted) return;
        typingStarted = true;

        typewriterElement.textContent = "";
        typeIndex = 0;

        function type() {
            if (typeIndex < confessionText.length) {
                typewriterElement.textContent += confessionText.charAt(typeIndex);
                typeIndex++;
                setTimeout(type, 60);
            } else {
                confesionNextBtn.classList.remove("hidden");
            }
        }

        type();
    }

    const blocks = confessionText.trim().split("\n\n");

    blocks.forEach(block => {
        const div = document.createElement("div");
        div.classList.add("confession-block");
        div.textContent = block;
        typewriterElement.appendChild(div);
    });

    /* ================================================= */
    /* FINAL */
    /* ================================================= */

    const finalPhotoContainer = document.getElementById("final-photo-container");
    const choiceButtons = document.querySelectorAll(".btn-choice");
    const lastMessageBtn = document.getElementById("last-message-btn");
    const finalOverlay = document.getElementById("final-overlay");
    const playAudioBtn = document.getElementById("play-audio-btn");
    const restartBtn = document.getElementById("restart-btn");

    confesionNextBtn.addEventListener("click", () => {
        goToStep("confesion", "final");
    });

    choiceButtons.forEach(button => {
        button.addEventListener("click", () => {

            document.querySelector(".final-buttons").style.display = "none";
            finalPhotoContainer.classList.remove("hidden");
            launchHearts();

        });
    });

    lastMessageBtn.addEventListener("click", () => {
        finalOverlay.classList.remove("hidden");
        setTimeout(() => {
            finalOverlay.classList.add("active");
        }, 50);
    });

    playAudioBtn.addEventListener("click", () => {

        // Fade out música principal
        const fadeOut = setInterval(() => {
            if (backgroundMusic.volume > 0.05) {
                backgroundMusic.volume -= 0.05;
            } else {
                clearInterval(fadeOut);
                backgroundMusic.pause();
                backgroundMusic.volume = 0.6;
            }
        }, 100);

        specialAudio.currentTime = 0;
        specialAudio.play().catch(() => {});

        playAudioBtn.classList.add("hidden");
        restartBtn.classList.remove("hidden");

    });

    restartBtn.addEventListener("click", () => {
        location.reload();
    });

    /* ================================================= */
    /* CORAZONES */
    /* ================================================= */

    function launchHearts() {

        const container = document.getElementById("final");

        for (let i = 0; i < 25; i++) {

            const heart = document.createElement("div");
            heart.textContent = "❤️";

            heart.style.position = "absolute";
            heart.style.left = Math.random() * 100 + "%";
            heart.style.bottom = "-20px";
            heart.style.fontSize = (Math.random() * 20 + 15) + "px";
            heart.style.opacity = Math.random() * 0.7 + 0.3;
            heart.style.transition = "transform 4s ease-out, opacity 4s ease-out";

            container.appendChild(heart);

            setTimeout(() => {
                heart.style.transform = `translateY(-${window.innerHeight}px) scale(1.5)`;
                heart.style.opacity = "0";
            }, 50);

            setTimeout(() => {
                heart.remove();
            }, 4000);
        }
    }

});
