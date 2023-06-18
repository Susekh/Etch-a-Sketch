let cdiv = document.querySelector(".container");

let gridNo = 16
let amount = gridNo*gridNo;

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
for (let i = 0; i < amount; i++){
    let grid = document.createElement('div');
    grid.classList.add("grid-class");
    grid.style.cssText = "border: 1px solid black;background-color: beige; height: 25px; width: 25px";  
    grid.addEventListener('mouseover', () => {
            grid.style.backgroundColor = getRandomColor();
        });
    cdiv.appendChild(grid);
}



