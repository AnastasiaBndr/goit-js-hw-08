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

gallery.addEventListener("click", onClick);

let lightbox=null; // не прибирала цей рядок, бо навіть якщо роблю "const lightbox=newSimpleLightBox" у функції, створюється поверх нова сутність і накладається на попередню
function onClick(evt){

    if (lightbox !== null) {
        lightbox.parentNode.remove();
        lightbox = null;
      } // затираю попередню сутність щоб не було накладання. Інакше щось ніяк не виходить :(
    
    lightbox = new SimpleLightbox('.gallery a',{
        captions: true,
        captionsData: 'alt', 
        captionSelector:'img',
        captionPosition:'outside', 
        CaptionDelay:'250ms'});
        

    function keyPress(evtKey){ //без цього esc не працює 💀
        if(evtKey.key==="Escape")
        instance.destroy(); 
    }
}