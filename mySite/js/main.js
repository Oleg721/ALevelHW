var links = document.querySelectorAll("ul.menu > li + li a");

links.forEach(function (i) {
    i.onclick = paintAfterClick
})

function paintAfterClick() {
        links.forEach((i) => i.classList.remove("active-a"));
        this.classList.add("active-a")
}
