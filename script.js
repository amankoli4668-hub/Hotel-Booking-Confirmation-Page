const menu = document.querySelector(".menu-open");
const close = document.querySelector(".menu-close");
const nav = document.querySelector(".navbar");

menu.onclick = () => nav.classList.add("show");
close.onclick = () => nav.classList.remove("show");

const items = document.querySelectorAll(".nav-item");

items.forEach(item => {
    item.addEventListener("click", () => {

        items.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");
    });
});