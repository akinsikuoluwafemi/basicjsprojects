
let navToggle = document.querySelector('.nav-toggle');
let links = document.querySelector('.links');

console.log(navToggle);
navToggle.addEventListener('click', function() {
    if (links.classList.contains('show-links')) {
        links.classList.remove('show-links')
        
    } else {
        links.classList.add('show-links')
        
    }

})

