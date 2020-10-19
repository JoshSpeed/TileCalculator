//jshint esversion:6

const submit = document.querySelector("button");
const width = document.querySelector(".width");
const length = document.querySelector(".length");
const totalSize = document.querySelector(".total-size");
const totalTiles = document.querySelector(".total-tiles");
const totalRamps = document.querySelector(".total-ramps");

const tiles = document.querySelectorAll(".grid-item");
const tileChoice = document.querySelector(".selectedTile");

const popup = document.querySelector(".popup");
const popupContent = document.querySelector(".popup-content");
const previewBtn = document.querySelector(".preview");

tiles.forEach(function (i) {
    i.addEventListener("click", function () {

        if (i.classList.contains("grid-1")) {
            tileChoice.value = "Black Raised Disk";
            popupContent.style.backgroundImage = 'url(/images/BlackRaisedDiskTileComp.jpg)';
        }
        if (i.classList.contains("grid-2")) {
            tileChoice.value = "Graphite Raised Disk";
            popupContent.style.backgroundImage = "url(/images/GraphiteRaisedDiskComp.jpg)";
        }
        if (i.classList.contains("grid-3")) {
            tileChoice.value = "Dark Blue Raised Disk";
            popupContent.style.backgroundImage = "url(/images/RaisedDiskDarkBlueComp.jpg)";
        }
        if (i.classList.contains("grid-4")) {
            tileChoice.value = "Dark Grey Raised Disk";
            popupContent.style.backgroundImage = "url(/images/RaisedDiskDarkGreyComp.jpg)";
        }
        if (i.classList.contains("grid-5")) {
            tileChoice.value = "Light Grey Raised Disk";
            popupContent.style.backgroundImage = "url(/images/RaisedDiskLightGreyComp)";
        }
        if (i.classList.contains("grid-6")) {
            tileChoice.value = "Smooth Black";
            popupContent.style.backgroundImage = "url(/images/SmoothBlackComp.jpg)";
        }
        if (i.classList.contains("grid-7")) {
            tileChoice.value = "Smooth Dark Blue";
            popupContent.style.backgroundImage = "url(/images/SmoothDarkBlueComp.jpg)";
        }
        if (i.classList.contains("grid-8")) {
            tileChoice.value = "Smooth Dark Grey";
            popupContent.style.backgroundImage = "url(/images/SmoothDarkGreyComp.jpg)";
        }
        if (i.classList.contains("grid-9")) {
            tileChoice.value = "Smooth Graphite";
            popupContent.style.backgroundImage = "url(/images/SmoothGraphiteComp.jpg)";
        }
        if (i.classList.contains("grid-10")) {
            tileChoice.value = "Smooth Green";
            popupContent.style.backgroundImage = "url(/images/SmoothGreenComp.jpg)";
        }
        if (i.classList.contains("grid-11")) {
            tileChoice.value = "Smooth Light Grey";
            popupContent.style.backgroundImage = "url(/images/SmoothLightGreyComp.jpg)";
        }
        if (i.classList.contains("grid-12")) {
            tileChoice.value = "Smooth Red";
            popupContent.style.backgroundImage = "url(/images/SmoothRedComp.jpg)";
        }
        if (i.classList.contains("grid-13")) {
            tileChoice.value = "Smooth Yellow";
            popupContent.style.backgroundImage = "url(/images/SmoothYellowComp.jpg)";
        }

    });
});

previewBtn.addEventListener("click", function () {

    if (tileChoice.value === "") {
        return;
    } else {
        popup.classList.remove("hidden");
    }
});

popup.addEventListener("click", function () {
    this.classList.add("hidden");
});


submit.addEventListener("click", function () {

    let widthTile = Number(width.value);
    let lengthTile = Number(length.value);

    totalSize.innerText = (widthTile * lengthTile);
    totalTiles.innerText = Math.ceil(totalSize.innerText * 4);
    totalRamps.innerText = Math.ceil(widthTile * 2);
});