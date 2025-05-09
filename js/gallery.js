import { images } from './gallery-items';
import * as basicLightbox from 'basiclightbox'
    
const gallery = document.querySelector('.gallery');

const markup = images.map(({ original, preview, description }) => {
    return `<li class="gallery-item">
  <a class="gallery-link" href=${original}>
    <img
      class="gallery-image"
      src=${preview}
      data-source=${original}
      alt=${description}
    />
  </a>
</li>
`
});

gallery.insertAdjacentHTML("beforeend", markup.join(""));

const handleOnCkick = e => {
    e.preventDefault();

    const image = e.target;
    const instance = basicLightbox.create(`<div><img class="image-backdrop" src=${image.getAttribute('data-source')} alt=${image.alt}/></div>`, {
        onShow: (instance) => {
            instance.element().querySelector('div').onclick = (e) => {
                e.preventDefault();
                instance.close();
            };
        }
    });
    instance.show();
}

gallery.addEventListener("click", handleOnCkick);
    