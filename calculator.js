const container = document.querySelector("#container");

for (let i = 0; i <=15; i++) {
    const content = document.createElement("div");
    content.classList.add("content");
    content.textContent = "0";
    container.appendChild(content);
}

