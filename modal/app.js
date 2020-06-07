const modalBtn = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


modalBtn.addEventListener('click', (e) => {
    overlay.classList.add('open-modal');
    
    console.log(e)
})

closeBtn.addEventListener('click', () => {
    overlay.classList.remove('open-modal');
    
})
