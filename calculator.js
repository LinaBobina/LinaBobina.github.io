const container = document.querySelector("#container");

for (let i = 0; i <=255; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    container.appendChild(content);
}

const contentHover = document.querySelectorAll(".content");
contentHover.forEach(hover => {
    hover.addEventListener("mouseover", () => {
        console.log("hover event");
        event.target.style.backgroundColor = "black";
    });
});