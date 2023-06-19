let color 
let cdiv = document.querySelector(".container");
let resetBoard = document.getElementById("reset-btn")
let varBlack = document.getElementById("color1");
let varGrey = document.getElementById("color2");
let varRainbow = document.getElementById("color3");


function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


let gridNo = 16;
let amount = gridNo*gridNo;
let gridDimension = (1.5625*gridNo);
console.log(gridDimension);



for (let i = 0; i < amount; i++){
    let grid = document.createElement('div');
    grid.classList.add("grid-class");
    grid.style.cssText = "border: 0.2px solid rgba(0, 0, 0, 0.519);background-color: beige; height: "+gridDimension+"px; width: "+gridDimension+"px; flex-wrap: wrap";  
    grid.addEventListener('mouseover', colorChange);

    cdiv.appendChild(grid);
}

function colorChange (){
  if (color === 'random'){
    this.style.backgroundColor = getRandomColor();
  }else{
    this.style.backgroundColor = color;
  }
  
}

function gridColor(choice){
  color = choice;

}

function refreshPage(){
  window.location.reload();
} 

// function colorChoice(){
//   varBlack.addEventListener('click', () => {
//     color = "black";
//     console.log("blackworking");
//   });
//   varGrey.addEventListener('click', () => {
//     color = "grey";
//   });
//   varRainbow.addEventListener('click', () => {
//     color = getRandomColor();
//   });
// }
