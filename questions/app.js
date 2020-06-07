// TRAVERSING THE DOM
// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(btn => {
//     btn.addEventListener('click', function(e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text')
//     })
// })




const questions = document.querySelectorAll('.question');

questions.forEach((question) => {
    // console.log(question);
    const btn = question.querySelector('.question-btn')
    // console.log(btn);



    btn.addEventListener('click', () => {
        // as you are clicking the button, you loop through the item so you close all other questions apart from the one you are clicking
            questions.forEach(item => {
            if(item !== question){
                item.classList.remove('show-text')
            }
        })
        question.classList.toggle('show-text');
    })

});