export const closeByEsc = e => {
  if (e.code === 'Escape') {
    closeModalWindow(e);
  }
};

export function openModalWindow(e, item) {
  e.preventDefault();
  document.querySelector('#popup-root').classList.remove('is-hide');
  window.addEventListener('keydown', closeByEsc);
  document.querySelector('body').classList.add('scroll');
}

export function closeModalWindow() {
  document.querySelector('#popup-root').classList.add('is-hide');
  window.removeEventListener('keydown', closeByEsc);
  document.querySelector('body').classList.remove('scroll');
}
