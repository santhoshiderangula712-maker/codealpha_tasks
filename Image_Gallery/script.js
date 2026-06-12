// Lightbox

const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.style.display = "flex";
        lightboxImg.src = img.src;

    });

});

closeBtn.addEventListener("click", () => {

    lightbox.style.display = "none";

});

// Filter Function

function filterSelection(category){

    const items = document.querySelectorAll(".image");

    items.forEach(item => {

        if(category === "all"){
            item.style.display = "block";
        }
        else if(item.classList.contains(category)){
            item.style.display = "block";
        }
        else{
            item.style.display = "none";
        }

    });

}
