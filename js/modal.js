// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.querySelectorAll(".img-thumb");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Get img thumb
const thumbs = document.querySelectorAll(".img-thumb");

// loop thumbs
for (let thumb of thumbs) {
    thumb.addEventListener('click', function (event) {
        // mendapatkan objek elemen yang diklik
        const title = event.target.alt;
        const desc = event.target.dataset.desc;
        header(title);
        body(desc);
        modal.style.display = "block";

    });
}

// Set header
function header(params) {
    const header = document.querySelector(".modal-title");
    header.innerText=params;
}

// Set body
function body(params) {
    const body = document.querySelector(".modal-desc");
    body.innerText = params;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
} 