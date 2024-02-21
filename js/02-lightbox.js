import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");

function createGallery(galleryItems) {
    let htmlString = "";
    galleryItems.forEach(({preview, original, description }) => {
        htmlString += `
        <li class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </li>`        
    });

    return htmlString;
}

gallery.insertAdjacentHTML("afterbegin", createGallery(galleryItems));


gallery.addEventListener("click", openModal);
function openModal(e) {
    e.preventDefault();
}


var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: "250ms",
});