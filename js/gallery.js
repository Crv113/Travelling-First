let openBtn = document.getElementsByClassName("open-btn");
let gallery = document.getElementById("gallery-popup");
let closeBtn = document.getElementById("close-btn");

let image = document.getElementsByClassName("image")[0];
let imagesGallery = document.getElementsByClassName("image-min");

let previousBtn = document.getElementById("previous-btn");
let nextBtn = document.getElementById("next-btn");

let indexImage = 0;


function openGallery() { //open the overlay with the image clicked

    for (let i = 0; i < openBtn.length; i++) {
        openBtn[i].addEventListener("click", function () {
            gallery.style.width = "100%";
            image.setAttribute("src", imagesGallery[i].getAttribute("src"));
            indexImage = i;
        
        })
    }


}

function closeGallery() {
    gallery.style.width = "0";
    indexImage = 0;
}



function previousImage() {
    if (indexImage === 0) {
        indexImage = imagesGallery.length;
    }
    if (indexImage > 0) {
        indexImage--;
        image.setAttribute("src", imagesGallery[indexImage].getAttribute("src"));
        
    }
}

function nextImage() {
    if(indexImage === imagesGallery.length - 1) {
            indexImage = -1;
            console.log(indexImage);
        }
    if (indexImage < imagesGallery.length - 1) {
        indexImage++;
        image.setAttribute("src", imagesGallery[indexImage].getAttribute("src"));
        
    }
}
