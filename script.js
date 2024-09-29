'use strict';

let numberOfImages = 10;
let currentImage = 1;

let loadPreviousImage = function () {
	currentImage = --currentImage < 1 ? numberOfImages : currentImage;
	setImage(currentImage);
};

let loadNextImage = function () {
	currentImage = ++currentImage > numberOfImages ? 1 : currentImage;
	setImage(currentImage);
};

let setImage = function (currentImage) {
	document.querySelector('.image').src = `images/${currentImage}.jpg`;
	document.querySelector('body').style.backgroundImage = `url(images/${currentImage}.jpg)`;
};

document.querySelector('.btn-prev').addEventListener('click', loadPreviousImage);
document.querySelector('.btn-next').addEventListener('click', loadNextImage);
