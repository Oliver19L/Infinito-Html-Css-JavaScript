const BASE_API_URL = "https://rickandmortyapi.com/api";
const IMAGE_GAP = 20;
const IMAGE_WIDTH = 200;
const IMAGE_BIG_WIDTH = 300;

const imagesEl = document.querySelector(".galery_imagenes");
const textEl = document.querySelector(".text");

function createImage(character) {
  const imageEl = document.createElement("img");

  imageEl.classList.add("image");
  imageEl.src = character.image;

  return imageEl;
}

async function init() {
  const index = null;
  const resp = await fetch(`${BASE_API_URL}/character`);
  const { results } = await resp.json();

  textEl.textContent = results[0].name;

  results.forEach((character) => {
    const imagen = createImage(character);

    imagesEl.appendChild(imagen);
  });

  let currentIndex = 0;

  document.querySelector(".button").addEventListener("click", (e) => {
    const { target } = e;
    const nextNumber = ++currentIndex;

    if (nextNumber < results.length) {
      imagesEl.style.transform = `translateX(-${
        (IMAGE_WIDTH + IMAGE_GAP) * nextNumber
      }px)`;
      textEl.textContent = results[nextNumber].name;
    }
  });
}

init();
