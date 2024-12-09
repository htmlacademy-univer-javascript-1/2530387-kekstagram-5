import {generatedData} from './data.js';
import {openModalWindow} from './modal.js';

let previewList = document.querySelector('.pictures');
let previewTemplate = document.querySelector('#picture').content.querySelector('.picture');
let generatedPreview = generatedData();
let previewListFragment = document.createDocumentFragment();

generatedPreview.forEach(({url, description, likes, comments}) => {
  let generatedPreview = previewTemplate.cloneNode(true);
  generatedPreview.querySelector('.picture__img').src = url;
  generatedPreview.querySelector('.picture__img').alt = description;
  generatedPreview.querySelector('.picture__comments').textContent = comments.length;
  generatedPreview.querySelector('.picture__likes').textContent = likes;
  pictureListFragment.appendChild(generatedPreview);

  generatedPreview.addEventListener('click', () => {
    openModalWindow({url, description, likes, comments});
  });

  generatedPreview.addEventListener('keydown', (evt) => {
    if (isEnterKey(evt)) {
      openModalWindow({url, description, likes, comments});
    }
  });
});

previewList.appendChild(previewListFragment);