const name1 = document.querySelector('.name') 
const name2 = document.querySelector('.name-2') 
const name3 = document.querySelector('.name-3') 
const name4 = document.querySelector('.name-4') 

const offsetY = 358
const offsetX = 651

const divideConstant = 1000;

const oneSideEnabled = false;

let enabled = true;

document.addEventListener('mousemove', (e) => {
    if (enabled) {
        if ((e.clientX - offsetX) > 0 || !oneSideEnabled) {
            document.querySelector('.name-4').style.left = ((e.clientX - offsetX) / divideConstant) * 0  + "px"
            document.querySelector('.name-3').style.left = ((e.clientX - offsetX) / divideConstant) * 10  + "px"
            document.querySelector('.name-2').style.left = ((e.clientX - offsetX) / divideConstant) * 20  + "px"
            document.querySelector('.name').style.left = ((e.clientX - offsetX) / divideConstant) * 30  + "px"
        }
       
    
        if ((e.clientY - offsetY) > 0 || !oneSideEnabled) {
            document.querySelector('.name-4').style.top = ((e.clientY - offsetY) / divideConstant) * 0  + "px"
            document.querySelector('.name-3').style.top = ((e.clientY - offsetY) / divideConstant) * 10  + "px"
            document.querySelector('.name-2').style.top = ((e.clientY - offsetY) / divideConstant) * 20  + "px"
            document.querySelector('.name').style.top = ((e.clientY - offsetY) / divideConstant) * 30  + "px"
        }
    }
    
})


document.getElementById("cards").onmousemove = e => {
    for(const card of document.getElementsByClassName("card")) {
      const rect = card.getBoundingClientRect(),
            x = e.clientX - rect.left,
            y = e.clientY - rect.top;
  
      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    };
  }