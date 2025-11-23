var gallery = [
    "images/420100.jpg",
    "images/705610.jpg",
    "images/194023.jpg",
    "images/194228.jpg",
];

var image = document.getElementById("image")
var btnNext = document.getElementById("btnNext")
var btnPrevious = document.getElementById("btnPrevious")
var currentIndex = 0

function nextImg() {
    currentIndex += 1
    image.src = gallery[currentIndex]
    if (currentIndex == 3) {
        btnNext.style.display = "none"
    }
    if (currentIndex > 0) {
        btnPrevious.style.display = "inline"
    }

}

function preImg() {
    currentIndex -= 1
    image.src = gallery[currentIndex]
    if (currentIndex < gallery.length) {
        btnNext.style.display = "inline"
    }
    if (currentIndex == 0) {
        btnPrevious.style.display = "none"
    }
}