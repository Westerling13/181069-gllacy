var catalog_link = document.querySelector(".catalog-link");
var catalog_popup = document.querySelector(".catalog-navigation");
var search_link = document.querySelector(".search-link");
var search_popup = document.querySelector(".search-modal");
var signin_link = document.querySelector(".sign-in-link");
var signin_popup = document.querySelector(".sign-in-modal");

catalog_link.addEventListener("mouseenter", function (evt) {
  catalog_popup.classList.add("modal-show");
  catalog_link.classList.add("catalog-link-hover");
});

catalog_popup.addEventListener("mouseleave", function (evt) {
  catalog_popup.classList.remove("modal-show");
  catalog_link.classList.remove("catalog-link-hover");
});

signin_link.addEventListener("mouseenter", function (evt) {
  signin_popup.classList.add("modal-show");
  signin_link.classList.add("sign-in-link-hover");
});

signin_popup.addEventListener("mouseleave", function (evt) {
  signin_popup.classList.remove("modal-show");
  signin_link.classList.remove("sign-in-link-hover");
});

search_link.addEventListener("mouseenter", function (evt) {
  search_popup.classList.add("modal-show");
  search_link.classList.add("search-link-hover");
});

search_popup.addEventListener("mouseleave", function (evt) {
  search_popup.classList.remove("modal-show");
  search_link.classList.remove("search-link-hover");
});

var feedback_button = document.querySelector(".feedback-button");
var feedback_popup = document.querySelector(".feedback-modal-wrapper");
var feedback_close = feedback_popup.querySelector(".modal-close");

feedback_button.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback_popup.classList.add("modal-show");
});

feedback_close.addEventListener("click", function (evt) {
  evt.preventDefault();
  feedback_popup.classList.remove("modal-show");
});

window.addEventListener("keydown", function (evt) {
   if (evt.keyCode === 27) {
     if (feedback_popup.classList.contains("modal-show")) {
       feedback_popup.classList.remove("modal-show");
    }
  }
});
