function createBord(size) {
    const container = document.querySelector("#container");
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    let totalDiv = size * size;

    for (let i = 0; i < totalDiv; i++) {
        const boxes = document.createElement("div");
        boxes.className = "gridBox";
        boxes.addEventListener("mouseover", getColor);
        container.appendChild(boxes);
    }
}
createBord(16);

const message = document.querySelector(".message");
function getSize() {
    let askSize = prompt("Please Provide A Number Between 0 and 100", 16);
    if (isNaN(askSize)) {
        message.textContent ="Please Provide A Number" ;
    } else if (askSize > 100 || askSize < 0) {
        message.textContent = "Provide A Number Between 0 And 100";
    }
    return askSize;
}

const selectSize = document.querySelector(".select");
selectSize.addEventListener("click",() => {
    createBord(getSize());
});

function getColor() {
    this.style.backgroundColor = "black";
}

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
});