import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector(".gallery"); 
const elements = galleryItems.map(galleryItem => {
const liEl = document.createElement('li');

  liEl.classList.add("gallery__item"); 
    const aEl = document.createElement('a');
    aEl.classList.add("gallery__link");
  aEl.href = "large-image.jpg";
  

  
  const imageEl = document.createElement('img');
  aEl.appendChild(imageEl);
  liEl.appendChild(aEl);
  ulEl.append(liEl);
  aEl.addEventListener('click', (galleryItems) => {
    event.preventDefault();
  });
    liEl.addEventListener('click', (galleryItems) => {

    let srcEl = galleryItem.original;
  console.log(srcEl);

    let instance = document.querySelector('.gallery__item')
    instance = basicLightbox.create(
    `<img src="${srcEl}" width="800" height="600">
`)

    instance.show()

  });
    imageEl.src = galleryItem.preview;
  imageEl.dataset.description = galleryItem.description;
  imageEl.classList.add('gallery-img');
  imageEl.width = 370;
  imageEl.height = 240;

    
  return imageEl;
});


