
var basket_link = document.querySelector(".basket-full");
var basket_popup = document.querySelector(".basket-list");

basket_link.addEventListener("mouseenter", function (evt) {
    basket_popup.classList.add("modal-show");
});

basket_popup.addEventListener("mouseleave", function (evt) {
    basket_popup.classList.remove("modal-show");
});
