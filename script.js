const raidenPicGrid = document.querySelector(".pic-container");
const postButton = document.querySelector(".postButton");
const picContainer = document.querySelector(".raiden-spam-container");

postButton.addEventListener("click", postRaiden);

function postRaiden () {
    createRaidenCard();
};

function createRaidenCard () {
    let randomNum = getRandomInt(5);
    randomNum = randomNum + 1;
    const picDiv = document.createElement("div");
    const raidenPic = document.createElement("img");
    const url = "../pics/raiden" + randomNum + ".jpg";
    console.log(url);
    raidenPic.src = url;
    picDiv.appendChild(raidenPic);
    raidenPicGrid.appendChild(picDiv);
    picDiv.classList.add("picDiv");
    raidenPic.classList.add("raidenPic");
};

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}