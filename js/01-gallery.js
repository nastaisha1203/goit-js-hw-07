import { galleryItems } from "./gallery-items.js";

const galleryRef = document.querySelector(".gallery");
galleryRef.addEventListener("click", onElementGallery);

function createGalleryMarkup(galleryItems) {
  const markup = galleryItems.map(({ preview, original, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href='${original}'>
    <img
      class="gallery__image"
      src='${preview}'
      data-source='${original}'
      alt='${description}'
    />
  </a>
</div>`;
  });
  return markup.join("");
}
galleryRef.insertAdjacentHTML("beforeend", createGalleryMarkup(galleryItems));

function onElementGallery(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(
    `<img src = '${evt.target.dataset.source}'>`
  );
  instance.show();

  window.addEventListener("keydown", closeEsc);

  function closeEsc(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
    return;
  }
}
