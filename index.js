let btn = document.querySelector(".press");
let lina = document.querySelector(".lina");
let imglina = lina.querySelector(".img");
let textlina = lina.querySelector("p");
let arrow = document.querySelector(".arrow");
let arrowLeft = document.querySelector(".arrow__left");

btn.addEventListener("click", () => {
  const intervalId = setInterval(() => {
    lina.style.animation = "an 2s linear forwards";

    lina.addEventListener(
      "animationend",
      () => {
        lina.style.animation = "";
        clearInterval(intervalId);

        lina.style.left = "0px";
      },
      { once: true }
    );
  }, 300);
  setInterval(() => {
    if (
      getComputedStyle(imglina, null).getPropertyValue("transform") ==
      `matrix(-1, 0, 0, 1, 0, 0)`
    ) {
      imglina.style.transform = `scaleX(1)`;
    } else if (
      getComputedStyle(imglina, null).getPropertyValue("transform") ==
      `matrix(1, 0, 0, 1, 0, 0)`
    ) {
      imglina.style.transform = `scaleX(-1)`;
    }
  }, 250);
});

function playAudio() {
  var audio = document.getElementById("myAudio");
  audio.play();
}
