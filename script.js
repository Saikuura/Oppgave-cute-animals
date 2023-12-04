let animalPic = [
  "Bilder/axlotl.jpg",
  "Bilder/Bats.jpg",
  "Bilder/Boo kitten.jpg",
  "Bilder/Cappybara.jpg",
  "Bilder/Cute cow.jpg",
  "Bilder/Cute froggy.jpg",
  "Bilder/Cute otter.jpg",
  "Bilder/Goostarion.jpg",
  "Bilder/Hedgehog.jpg",
  "Bilder/Stabby chick.jpg",
];

const container = document.getElementById("image-container");

function randomPic() {
  if ((container.innerHTML = !"")) {
    container.innerHTML = "";
  }
  let randomAnimal = animalPic[Math.floor(Math.random() * animalPic.length)];
  const img = document.createElement("img");
  img.src = randomAnimal;
  container.appendChild(img);
}
