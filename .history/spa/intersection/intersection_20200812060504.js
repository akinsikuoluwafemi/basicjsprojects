// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// })

// observer.observe(images)


const images = document.querySelector('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries.intersectionRatio > 0){
        entries.target.style.animation = `anim`
    } 
})

observer.observe(images)