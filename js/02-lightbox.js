import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onElementGallery);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `<a class="gallery__item" href='${original}'>
  <img class="gallery__image" src='${preview}' alt='${description}' />
</a>`;
  });
  return markup.join("");
}
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function onElementGallery(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
}
const lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
});
