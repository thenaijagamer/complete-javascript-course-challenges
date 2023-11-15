'use strict';
const modal = document.querySelector('.modal');
const showModal = document.querySelectorAll('.show-modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const hideModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};
const displayModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

showModal.forEach(function (e) {
  e.addEventListener('click', displayModal);
});
closeModal.addEventListener('click', hideModal);
overlay.addEventListener('click', hideModal);
