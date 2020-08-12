// basic target

// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
// })

// observer.observe(images)


// basic target with one element
// const images = document.querySelector('.anim');

// observer = new IntersectionObserver((entries) => {
//     console.log(entries);
     
//     if (entries[0].intersectionRatio > 0){
//         entries[0].target.style.animation = `anim1 2s forwards ease-out`;
//     } else {
//         entries[0].target.style.animation = `none`;
        
//     }
// })

// observer.observe(images)


const images = document.querySelectorAll('.anim');

observer = new IntersectionObserver((entries) => {
    // console.log(entries);
    entries.forEach(entry => {
        if (entry.intersectionRatio > 0){
            entry.target.style.animation = `anim1 2s ${ent} forwards ease-out`;
        } else {
            entry.target.style.animation = `none`;
            
        }
    }) 

   
})

images.forEach(image => {
    observer.observe(image)
    
})
