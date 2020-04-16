var offerModal = document.querySelector('.offer-modal');
var searchButton = document.querySelector('.search-button');
var form = offerModal.querySelector('.search-form');
var dateIn = offerModal.querySelector('.arrival-date');
var dateOut = offerModal.querySelector('.departure-date');

searchButton.addEventListener('click', function (evt) {
  evt.preventDefault();
  offerModal.classList.toggle('modal-show');
})

form.addEventListener('submit', function (evt) {
  if (!dateIn.value || !dateOut.value) {
    evt.preventDefault();
    offerModal.classList.remove('modal-error');
    offerModal.offsetWidth = offerModal.offsetWidth;
    offerModal.classList.add('modal-error');
  }
})
