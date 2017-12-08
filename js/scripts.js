var modalLink = document.querySelector(".button-for-modal");
var modal = document.querySelector(".modal");
var modalWindow = document.querySelector(".modal section");
var modalForm = modal.querySelector("form");
var messageName = modalForm.querySelector("input[name=name]");
var messageEmail = modalForm.querySelector("input[name=e-mail]");
var messageText = modalForm.querySelector("textarea");
var modalClose = modal.querySelector(".button-close");
var localMessageName = localStorage.getItem("messageName");
var localMessageEmail = localStorage.getItem("messageEmail");

modalLink.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("modal-on");
  if (localMessageName) {
    messageName.value = localMessageName;
  } else {
    messageName.focus();
  }
  if (localMessageEmail) {
    messageEmail.value = localMessageEmail;
    messageText.focus();
  }
});

modalClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("modal-on");
  modalWindow.classList.remove("modal-error");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (modal.classList.contains("modal-on")) {
      modal.classList.remove("modal-on");
      modalWindow.classList.remove("modal-error");
    }
  }
});

modalForm.addEventListener("submit", function(evt) {
  if (!messageName.value || !messageEmail.value || !messageText.value) {
    evt.preventDefault();
    modalWindow.classList.remove("modal-error");
    modalWindow.offsetWidth = modalWindow.offsetWidth;
    modalWindow.classList.add("modal-error");
  } else {
    localStorage.setItem("messageName", messageName.value);
    localStorage.setItem("messageEmail", messageEmail.value);
  }
});
