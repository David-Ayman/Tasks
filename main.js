let button = document.getElementById('btn')
let body = document.querySelector('body');
console.log(button)
button.onclick = function () {
    if(body.classList.toggle('dark')){
        body.classList.add('dark')
        this.innerText = "Light Mood"
        button.style.background = "white"
        button.style.color = "black"
    }else {
        body.classList.remove('dark')
        this.innerText = "Dark Mood"
        button.style.background = "black"
        button.style.color = "white"
    }
}



/*========== task2 =================*/
let parentImg = document.querySelectorAll('.parent img')
let childImg = document.querySelector('.child img')
console.log(parentImg)
for (let p = 0; p < parentImg.length; p++) {
    parentImg[p].addEventListener('click', function () {
        childImg.src = parentImg[p].src
    })
}


// =========task3=======
let accordion = document.getElementsByClassName(' accordion');
let desc = document.getElementsByClassName('desc');

for (let i = 0; i < accordion.length; i++)
    accordion[i].addEventListener("click", function () {
        this.classList.toggle('active')
        if (desc[i].style.height == 0) {
            desc[i].style.height = desc[i].scrollHeight + 'px'
        } else {
            desc[i].style.height = null;
        }
    });
// ===========End task3================