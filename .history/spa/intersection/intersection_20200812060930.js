// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// })

// observer.observe(images)


const images = document.querySelector('.anim');

observer = new IntersectionObserver((entries) => {
    console.log(entries);
    if (entries[].intersectionRatio > 0){
        entries.t0arget.style.animation = `anim1 2s forwards ease-out`;
    } else {
        entries.target.style.animation = `none`;
        
    }
})

observer.observe(images)