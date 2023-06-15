var mixer = mixitup ('.project-list');


const mobil_modal_active = 'mobil_modal_active';
const mobil_modal_not_active = 'mobil_modal_not_active';
const lock = 'lock';

const mobilModal = document.querySelector('#modal-mobile');
const successModal = document.querySelector('#header-logo');
const openFormMobillBtn = document.querySelector('#open-menu-btn');
const mainPageLock = document.querySelector('.main-page-flex');
const closeBtns = document.querySelectorAll('.close-btn');

openFormMobillBtn.addEventListener('click', () => {
   mobilModal.classList.add(mobil_modal_active);
   openFormMobillBtn.classList.add(mobil_modal_not_active);
   successModal.classList.add(mobil_modal_not_active);
   mainPageLock.classList.add(lock);
})
 const closemobilModal = () => {
   mobilModal.classList.remove(mobil_modal_active);
   openFormMobillBtn.classList.remove(mobil_modal_not_active);
   successModal.classList.remove(mobil_modal_not_active);
   mainPageLock.classList.remove(lock);
};

mobilModal.addEventListener('click', () => {
   mobilModal.classList.remove(mobil_modal_active);
   openFormMobillBtn.classList.remove(mobil_modal_not_active);
   successModal.classList.remove(mobil_modal_not_active);
   mainPageLock.classList.remove(lock);
});

closeBtns.forEach(btn => {
   btn.addEventListener('click', e => {
       e.stopPropagation();
       closemobilModal();
   })
})

