// setInterval to change from one image to the next

var caroEl = document.querySelector(".carousel_img");

var caroImgs = [
    'images/nikes.jpg',
    'images/shoes.jpg',
    'images/blue-shoes.jpg'
]

var index = 0;

function changeImage() {
    caroEl.src = caroImgs[index];
    index++;
    if (index == caroImgs.length) {
        index = 0;
    }
}

setInterval(changeImage, 2500);
