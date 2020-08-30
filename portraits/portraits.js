const images = [
    "DSC_4011.jpg",
    "IMG_0194.jpg",
    "IMG_0399.jpg",
    "IMG_0535.jpg",
    "IMG_0817.jpg",
    "IMG_2009.jpg",
    "IMG_2185.jpg",
    "IMG_2297.jpg",
    "IMG_2344.jpg",
    "IMG_2857.jpg",
    "IMG_3708.jpg",
    "IMG_3879.jpg",
    "IMG_3952.jpg",
    "JCP_4781.jpg",
    "JCP_4856.jpg",
    "JCP_5285.jpg",
    "JCP_5369.jpg",
    "JCP_5399.jpg",
    "JCP_5708.jpg",
    "JCP_5728.jpg",
    "JCP_5830.jpg",
    "JCP_6505.jpg",
    "JCP_6679.jpg",
    "JCP_7037.jpg",
    "JCP_7063.jpg",
    "JCP_7176.jpg",
    "JCP_7268.jpg",
    "JCP_7449.jpg",
    "JCP_7553.jpg",
    "JCP_8136.jpg",
    "JCP_8169.jpg",
    "JCP_8269.jpg",
    "JCP_8279.jpg",
    "JCP_8586.jpg",
    "JCP_8653.jpg",
    "JCP_9023.jpg",
    "JCP_9075.jpg",
    "JCP_9112.jpg",
    "JCP_9136.jpg",
    "JCP_9287.jpg",
    "JCP_9342.jpg",
    "JCP_9394.jpg",
    "JCP_9478.jpg",
    "JCP_9559.jpg"
];


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
    $(".everything").fadeIn(3000);
});