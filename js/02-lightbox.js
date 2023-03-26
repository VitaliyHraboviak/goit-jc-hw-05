import { galleryItems } from './gallery-items.js';
// Change code below this line
const ulEl = document.querySelector(".gallery");
const elements = galleryItems.map(galleryItem => {
const liEl = document.createElement('li');
liEl.classList.add("gallery__item"); 
    const aEl = document.createElement('a');
    aEl.classList.add("gallery__link");
  aEl.href = "large-image.jpg";
  let srcEl = galleryItem.original;
  console.log(srcEl);
  liEl.addEventListener('click', (galleryItems) => {

  let gallery = new SimpleLightbox('ul.gallery a');
gallery.on('show.simplelightbox', function (e) {
`<img src="'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg'," width="800" height="600">
`,
  console.log(img);
});
 });    
  const imageEl = document.createElement('img');
  imageEl.src = galleryItem.preview;
  imageEl.dataset.description = galleryItem.description;
  imageEl.classList.add('gallery-img');
  imageEl.width = 370;
  imageEl.height = 240; 
aEl.appendChild(imageEl);
  liEl.appendChild(aEl);
  ulEl.append(liEl);
  aEl.addEventListener('click', (galleryItems) => {
    event.preventDefault();
  });
  return imageEl;

  
});  
console.log(ulEl);

