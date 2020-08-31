function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

$(document).ready(() => {
    shuffle(images);
    for (const name of images) {
        let element = document.createElement("IMG");
        let url = "./images/" + name;
        element.src = url;
        element.alt = name;
        element.setAttribute("data-image", url);
        $("#gallery").append(element);
    }
    $("#gallery").unitegallery();
    $(".main-content").fadeIn(2000);
});