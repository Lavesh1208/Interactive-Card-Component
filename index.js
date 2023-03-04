const mainContainer = document.querySelector('.main-container');
const thanksContainer = document.querySelector('.thank-you');
const rating = document.getElementById('rating');
const submitButton = document.querySelector('.btn-submit');
const rateButtons = document.querySelectorAll('.btn');

submitButton.addEventListener('click', () => {
   thanksContainer.classList.remove('hidden');
   mainContainer.classList.add('hidden');
})

rateButtons.forEach((rate) => {
   rate.addEventListener('click', () => {
      rating.innerHTML = rate.innerHTML;
   })
})