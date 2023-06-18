let cdiv = document.querySelector(".container");



for (let i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.style.cssText = "border: 1px solid black;background-color: beige; height: 25px; width: 25px";  
    cdiv.appendChild(div);
}