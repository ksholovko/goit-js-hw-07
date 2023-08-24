import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', galleryMarkup);

galleryContainer.addEventListener('click', onGalleryItemClick);

function createGalleryMarkup(galleryItems) {

 return galleryItems.map(({ preview, original, description }) => {
        return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`
    }).join("");

} 

function onGalleryItemClick(event) {
  event.preventDefault();
  
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  // if (event.target.nodeName !== "IMG") {
  //   return;
  // }

  const imageToShow = event.target.dataset.source;

  const instance = basicLightbox.create(`<img src="${imageToShow}" width="800" height="600">`)

  instance.show()
  
  window.document.addEventListener('keydown', onEscClick);

  function onEscClick(event) {
    if (event.code !== 'Escape') {
      return; 
    }
    
    instance.close();

    window.document.removeEventListener('keydown', onEscClick)
}
}
    
console.log(galleryItems);


    
    

