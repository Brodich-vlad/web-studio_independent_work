const MODAL_ACTIVE_CLASS_NAME = 'modal-active';

const formModal = document.querySelector('#form-modal');
const successModal = document.querySelector('#success-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const launchBtn = document.querySelector('#launch-btn');
const closeBtns = document.querySelectorAll('.close-btn');

const checkBtn = document.querySelectorAll('#checkbox');

openFormModalBtn.addEventListener('click', () => {
    formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
})

const closeFormModal = () => {
    formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
   
};

const closeSuccessModal = () => {
    successModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
    successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
    btn.addEventListener('click', e => {
        e.stopPropagation();
        closeFormModal();
        closeSuccessModal();
    })
})


form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
        closeFormModal();
        setTimeout(openSuccessModal, 700);
        setTimeout(closeSuccessModal, 3000);
      })
      .catch((error) => console.log('Sending form failed'));
})


function clearFormFields() {
    const modalFiends = formModal.querySelectorAll('input');

    modalFiends.forEach( field => { 
        field.value = '';
    });
}
form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => {
      //   showGooseAnim();

        setTimeout(() => {
            closeFormModal();
            setTimeout(openSuccessModal, 700);
            setTimeout(closeSuccessModal, 1000);
            clearFormFields();
        }, 1000);
      })
      .catch((error) => console.log('Sending form failed'));
})



const mobil_modal_active = 'mobil_modal_active';
const mobil_modal_not_active = 'mobil_modal_not_active';
const lock = 'lock';

const mobilModal = document.querySelector('#modal-mobile');
const succesModal = document.querySelector('#header-logo');
const openFormMobillBtn = document.querySelector('#open-menu-btn');
const mainPageLock = document.querySelector('.main-page-flex');

openFormMobillBtn.addEventListener('click', () => {
   mobilModal.classList.add(mobil_modal_active);
   openFormMobillBtn.classList.add(mobil_modal_not_active);
   succesModal.classList.add(mobil_modal_not_active);
   mainPageLock.classList.add(lock);

})
 const closemobilModal = () => {
   mobilModal.classList.remove(mobil_modal_active);
   openFormMobillBtn.classList.remove(mobil_modal_not_active);
   succesModal.classList.remove(mobil_modal_not_active);
   mainPageLock.classList.remove(lock);
 };
 mobilModal.addEventListener('click', () => {
   mobilModal.classList.remove(mobil_modal_active);
   openFormMobillBtn.classList.remove(mobil_modal_not_active);
   succesModal.classList.remove(mobil_modal_not_active);
   mainPageLock.classList.remove(lock);
});
closeBtns.forEach(btn => {
   btn.addEventListener('click', e => {
       e.stopPropagation();
       closemobilModal();
   })
})


