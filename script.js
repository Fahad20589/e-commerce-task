const inputTxt = document.querySelector('.inputTxt');
const submitBtn = document.querySelector('.submitBtn');
const emailErr = document.getElementById('emailErr');


// const carousal = document.querySelector('.carousal')
// const wrapper = document.querySelector('.wrapper')
// const arrowBtns = document.querySelector('.wrapper i')
// const firstCardWidth = document.querySelector('.card').offsetWidth;
// const carousalChildrens = [...carousal.children]

// let isDragging = false , startX , startScrollLeft , timeoutID;

// //Get the number of card that can fit into carousal at once
// let cardPerView = Math.round(carousal.offsetWidth / firstCardWidth);


// //insert copies of the last few cards to beginning of carousal for infinite scrolling
// carousalChildrens.slice(-cardPerView).reverse().forEach(card => {
//     carousal.insertAdjacentHTML("afterbegin" , card.outerHTML)
// })

// carousalChildrens.slice(0 , cardPerView).forEach(card => {
//     carousal.insertAdjacentHTML("beforeend" , card.outerHTML)
// })

// // Add eventlistener for the arrow buttons to scroll the carousal left or right
// arrowBtns.forEach(btn => {
//     btn.addEventListener("click" , () => {
//         carousal.scrollLeft += btn.id === "left" ? -firstCardWidth : firstCardWidth
//     })
// })

// const dragging = (e) => {
//     if(!isDragging) return

//     carousal.scrollLeft = startScrollLeft - (e.pageX - startX)
// }

// const dragStart = (e) => {
//     isDragging = true;
//     carousal.classList.add('dragging')
//     startX = e.pageX;
//     startScrollLeft = carousal.scrollLeft;
// }

// const dragStop = () => {
//     isDragging = false;
//     carousal.classList.remove('dragging')
// }

// const autoplay = () => {
//     if(window.innerWidth < 800) return

//     timeoutID = setTimeout(() => carousal.scrollLeft += firstCardWidth , 2500)
// }
// autoplay();
// const infiniteScroll = () => {
//     if(carousal.scrollLeft === 0){
//         carousal.classList.add("no-transition")
//         carousal.scrollLeft = carousal.scrollWidth - (2 * carousal.offsetWidth);

//         carousal.classList.remove("no-transition")
//     } else if(Math.ceil(carousal.scrollLeft === carousal.scrollWidth - carousal.offsetWidth)) {
//         carousal.classList.add("no-transition")
//         carousal.scrollLeft = carousal.offsetWidth;
//         carousal.classList.remove('no-transition')
//     }

//     clearTimeout(timeoutID)
//     if(!wrapper.matches(":hover")) autoplay();
// }




// function to validate email form
function validateEmail() {
    let email = inputTxt.value;
    if (email.length == 0) {
        emailErr.innerHTML = "Email is required"
        return false
    }
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        emailErr.innerHTML = "Write complete Email"
        return false
    }
    else {
        emailErr.innerHTML = "";
        return true;
    }
}



// adding click listener to submit btn
submitBtn.addEventListener('click' , (e)=> {
    e.preventDefault();
    if(validateEmail()){
        document.querySelector('.inputTxt').value = '';
        alert('Form submitted Successfully')
    }
})

// carousal.addEventListener('mousedown' , dragStart)
// carousal.addEventListener('mousemove' , dragging)
// carousal.addEventListener('mouseup' , dragStop)
// carousal.addEventListener('scroll' , infiniteScroll)
// carousal.addEventListener('mouseenter' , () => clearTimeout(timeoutID))
// carousal.addEventListener('mouseleave' , autoplay)