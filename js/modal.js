const Modal = {

  wrapper: document.querySelector('.modal-wrapper'),
  message: document.querySelector('.title span'),
  buttonClose: document.querySelector('.title button.close'),

  open() {
    Modal.wrapper.classList.add('open');
  },
  close() {
    Modal.wrapper.classList.remove('open');
  }
}
Modal.buttonClose.onclick = () => Modal.close();

export { Modal };
