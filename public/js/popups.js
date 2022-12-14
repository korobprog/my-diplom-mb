const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelectorAll('body');
const lockPadding = document.querySelectorAll(".lock-padding")

let unlock = true;

const timeout = 800;

if (popupLinks.length > 0) {
   for (let index = 0; index < popupLinks.length; index++) {
      const popupLinks = popupLinks[index];
      popupLinks.addEventListener("click", function (e) {
         const popupName = popupLinks.getAttribute('href').replace('#', '');
         const curentPopup = document.getElementById(popupName);
         popupOpen(curentPopup);
         e.preventDefault();
      });
   }
}