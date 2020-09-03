function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

const observer = lozad();
observer.observe();

$(document).ready(() => {
    shuffle(images);
    for (const name of images) {
        let element = document.createElement("IMG");
        let url = "./images/" + name;
        element['data-src'] = url;
        element.class = "lozad"
        element.alt = name;
        element.loading = "lazy";
        element.setAttribute("data-image", url);
        $("#gallery").append(element);
    }
    $("#gallery").unitegallery();
    $("#spinner").css("display", "none");
    $("#gallery").css("display", "block");
    $(".main-content").fadeIn(2000);
});