// console.log(colors);

// colors.forEach(color => {
//     console.log(`${color} is my best color`);
// })

// for(let color in colors){
//     console.log(colors[color])
// }

const colors = ['green', 'red', 'rgba(133,122,200)', '#f15025'];
const btn = document.getElementById('btn')
const color = document.querySelector('.color')


btn.addEventListener('click', function() {
   
    // simple
    // get random number between 0 - 3
    const randomNumber = getRandomNumber(); 
    let pickedColor = colors[randomNumber]
    color.textContent = pickedColor;
    document.body.style.background = pickedColor

})

function getRandomNumber () {
    return Math.floor((Math.random() * colors.length))
}






