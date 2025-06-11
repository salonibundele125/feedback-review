const rating =document.querySelectorAll('.rating')
const ratingContiner = document.querySelector('.ratings-container')
const sendBtn = document.querySelector('#send')
const panel = document.querySelector('#panel')
let selectedRating = 'satisfied'

ratingContiner.addEventListener('click',(e)=>{
    if (e.target.parentNode.classList.contains('rating')&& e.target.nextElementSilbling){
        removeAction()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.nextElementSilbling.innerHTML
    } else if(
        e.target.parentNode.classList.contains('rating') &&
        e.target.previouseSilbling &&
        e.target.previousElementSibling.nodeName === 'img'
    ){
        removeAction()
        e.target.parentNode.classList.add('active')
        selectedRating = e.target.innerHTML
    }
})

sendBtn.addEventListener('click',(e)=>{
    panel.innerHTML =`
    <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>`
})

function removeAction(){
    for (let i=0; i< rating.length; i++){
        rating[i].classList.remove('active')
    }
}