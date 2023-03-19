const container = document.querySelector("#container");
const content = document.createElement("div");
container.appendChild(content);


// Grabbing pixel dimension from HTML button
function pixelBtnSelected() {
    const pixelBtn = document.querySelector('#pixelBtn');
    return parseInt(pixelBtn.dataset.pixelsize);
  };

// 
const pixelBtn = document.querySelector('#pixelBtn');
pixelBtn.addEventListener("click", () => {
    const pixelSize = pixelBtnSelected();
    for (let i = 0; i < (pixelSize * pixelSize); i++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);

        const contentHover = document.querySelectorAll(".content");
        contentHover.forEach(hover => {
        hover.addEventListener("mouseover", () => {
        event.target.style.backgroundColor = "black";
            });
        });
    }
});

const contentHover = document.querySelectorAll(".content");
contentHover.forEach(hover => {
    hover.addEventListener("mouseover", () => {
        console.log("hover event");
        event.target.style.backgroundColor = "black";
    });
});
