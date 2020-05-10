let menu = document.querySelector("ul"); 
menu.addEventListener("click", closeNav);//closes the burger button when you click on one of the menu choices


openGallery(); //wait for the click on one of the images in the gallery to open it

nextBtn.addEventListener("click", nextImage);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 39) {
        nextImage();
    }
});

previousBtn.addEventListener("click", previousImage);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 37) {
        previousImage();
    }
});

closeBtn.addEventListener("click", closeGallery);
document.addEventListener("keydown", function (e) {
    if (e.keyCode === 40) {
        closeGallery();
    }
});

//Test if the email address is correct
let email = document.getElementById("email");
let testEmailIndex = false;
email.addEventListener("blur", testEmail);
