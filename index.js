const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
    panel.addEventListener("click", (e) => {
        removeAllActiveClasses();
        e.target.classList.add("active");
    })
})

function removeAllActiveClasses() {
    panels.forEach((panel) => {
        panel.classList.remove("active");
    })
}