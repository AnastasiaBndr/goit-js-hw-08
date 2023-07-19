// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
import { galleryItems } from './gallery-items';
// Change code below this line

const gallery = document.querySelector(".gallery");

const markup=galleryItems.map(({original, preview,description})=>{
    
    return `<li class="gallery__item"><a class="gallery__link" href="${original}" 
    onclick="return false"><img class="gallery__image" src="${preview}" 
    alt="${description}" data-source="${original}"></a></li>`
})

gallery.insertAdjacentHTML("beforeend",markup.join(""));

    const lightbox = new SimpleLightbox('.gallery a',{
        captions: true,
        captionsData: 'alt', 
        captionSelector:'img',
        captionPosition:'outside', 
        CaptionDelay:'250ms'});
        