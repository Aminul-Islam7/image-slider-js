'use strict';

// Defines array of filenames and starting index
let images = ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg', '6.jpg', '7.jpg', '8.jpg', '9.jpg', '10.jpg'];
let imageIndex = 0;

let loadPreviousImage = function () {
	// selects previous index if it exists and calls setImage with the corresponding filename
	if (imageIndex > 0) imageIndex--;
	setImage(images[imageIndex]);
};

let loadNextImage = function () {
	// selects next index if it exists and calls setImage with the corresponding filename
	if (imageIndex < images.length - 1) imageIndex++;
	setImage(images[imageIndex]);
};

let setImage = function (fileName) {
	document.querySelector('.image').src = `images/${fileName}`; // updates the slider image according to selected filename
	document.querySelector('body').style.backgroundImage = `url(images/${fileName})`; // similarly updates the backdrop image
};

// Click actions of navigation buttons
document.querySelector('.btn-prev').addEventListener('click', loadPreviousImage);
document.querySelector('.btn-next').addEventListener('click', loadNextImage);
