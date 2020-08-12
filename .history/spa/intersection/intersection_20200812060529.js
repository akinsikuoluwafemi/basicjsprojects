// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// })

// observer.observe(images)


const images = document.querySelector('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries.intersectionRatio > 0){
        entries.target.style.animation = `anim1 2s forwards ease-out`;
    } 
})

observer.observe(images)