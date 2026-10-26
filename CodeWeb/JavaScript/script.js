
function upDate(previewPic) {
    let image = document.getElementById("image");

    image.style.backgroundImage = "url('" + previewPic.src + "')";
    image.textContent = previewPic.alt;
}

function unDo() {
    let image = document.getElementById("image");

    image.style.backgroundImage = "none";
    image.textContent = "Hover over an Image to Display the Alt Text";
}

function addTabFocus() {
    let images = document.querySelectorAll(".gallery img");

    for (let i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
    }
}
