const btntoggle = document.querySelector(".navbar__humbger");
const menu = document.querySelector(".navbar__list");

btntoggle.onclick = function() {
    btntoggle.classList.toggle("active");
    menu.classList.toggle("active");
}
