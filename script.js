var gallery = [
    "images/420100.jpg",
    "images/705610.jpg",
    "images/194023.jpg",
    "images/194228.jpg",
];

var image = document.getElementById("image");
var btnNext = document.getElementById("btnNext");
var btnPrevious = document.getElementById("btnPrevious");

var currentIndex = 0;

function nextImg() {
    if (currentIndex < gallery.length - 1) {
        currentIndex++;
        image.src = gallery[currentIndex];
    }

    if (currentIndex === gallery.length - 1) {
        btnNext.classList.add("disabled");
    }

    btnPrevious.classList.remove("disabled");
}

function preImg() {
    if (currentIndex > 0) {
        currentIndex--;
        image.src = gallery[currentIndex];
    }

    if (currentIndex === 0) {
        btnPrevious.classList.add("disabled");
    }

    btnNext.classList.remove("disabled");
}