const button = document.querySelector("button");
const authorSpan = document.querySelector(".author");
const imgDiv = document.querySelector(".image-container");
const img = document.querySelector(".img");

const getImage = async function() {
    const res = await fetch("https://picsum.photos/v2/list?limit=100");
    const images = await res.json();
    console.log(images);
    selectRandomImage(images);
};
// getImage(); cut from here and placed inside the button click event so that the data is only retrieved when the button is clicked.

const selectRandomImage = function(images) {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    displayImage(randomImage);
};

const displayImage = function(randomImage) {
    const author = randomImage.author;
    const imageAddress = randomImage.download_url;
    authorSpan.innerText = author;
    img.src = imageAddress;
    imgDiv.classList.remove("hide");
};

button.addEventListener("click", function() {
    getImage();
});