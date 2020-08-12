// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// })

// observer.observe(images)


const images = document.querySelector('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries[0].intersectionRatio > 0){
        entries[].target.style.animation = `anim1 2s forwards ease-out`;
    } else {
        entries.target.style.animation = `none`;
        
    }
})

observer.observe(images)