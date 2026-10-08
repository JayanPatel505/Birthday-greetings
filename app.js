/* =========================================================
   VELJI BHAI — BIRTHDAY WEBSITE
========================================================= */

const openButton = document.getElementById("openBirthdayButton");
const openingScreen = document.getElementById("openingScreen");
const birthdayContent = document.getElementById("birthdayContent");
const soundButton = document.getElementById("soundButton");


/* =========================================================
   BIRTHDAY MUSIC
========================================================= */

const birthdayMusic = new Audio("music/birthday-music.mp3");

birthdayMusic.loop = true;
birthdayMusic.volume = 0.4;

let soundOn = false;


/* =========================================================
   OPEN THE BIRTHDAY SURPRISE
========================================================= */

openButton.addEventListener("click", () => {

    openingScreen.classList.add("hide");

    /* Start music after the visitor interacts with the page */
    birthdayMusic.play()
        .then(() => {

            soundOn = true;
            soundButton.textContent = "♫";

        })
        .catch(() => {

            /* If playback fails, the user can use the music button */

            soundOn = false;
            soundButton.textContent = "♪";

        });


    setTimeout(() => {

        birthdayContent.classList.add("show");

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }, 450);

});


/* =========================================================
   LITTLE BUTTON PRESS EFFECT
========================================================= */

openButton.addEventListener("pointerdown", () => {

    openButton.style.transform = "scale(0.95)";

});

openButton.addEventListener("pointerup", () => {

    openButton.style.transform = "";

});

openButton.addEventListener("pointercancel", () => {

    openButton.style.transform = "";

});


/* =========================================================
   SOUND BUTTON
========================================================= */

soundButton.addEventListener("click", () => {

    if (birthdayMusic.paused) {

        birthdayMusic.play()
            .then(() => {

                soundOn = true;

                soundButton.textContent = "♫";

                soundButton.style.transform =
                    "rotate(10deg) scale(1.08)";

            })
            .catch(() => {

                soundOn = false;

                soundButton.textContent = "♪";

            });

    } else {

        birthdayMusic.pause();

        soundOn = false;

        soundButton.textContent = "♪";

        soundButton.style.transform = "";

    }

});


/* =========================================================
   SUBTLE PARALLAX EFFECT
========================================================= */

const decorativeFlowers =
    document.querySelectorAll(
        ".photo-decoration, .opening-flower"
    );

window.addEventListener("scroll", () => {

    const scrollPosition = window.scrollY;

    decorativeFlowers.forEach((flower, index) => {

        const movement =
            scrollPosition * (0.025 + index * 0.01);

        flower.style.transform =
            `translateY(${movement}px) rotate(${index % 2 === 0 ? -15 : 15}deg)`;

    });

});


/* =========================================================
   IMAGE FALLBACK
========================================================= */

document.querySelectorAll("img").forEach((image) => {

    image.addEventListener("error", () => {

        image.style.display = "none";

        const frame = image.closest(
            ".main-photo-frame, .second-photo-frame"
        );

        if (frame) {

            frame.classList.add("image-missing");

        }

    });

});


/* =========================================================
   LITTLE CONSOLE MESSAGE
========================================================= */

console.log(
    "🌸 Happy Birthday, વેલજી ભાઈ! 🌸"
);
