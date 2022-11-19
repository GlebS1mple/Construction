const mybutton = document.getElementById("myBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

/*POPUP*/
const calls = document.querySelectorAll('#call')
const popupMain = document.querySelector(".popup")
const popupProduct = document.querySelector(".popup__product")
const popupProductBtn = document.querySelector('.popup__productbtn')
const closePopup = document.querySelector(".popup__close")
const closeProductPopup = document.querySelector(".popup__closeproduct")
const body = document.querySelector('body')

calls.forEach((e) => {
    const openPopUp = () => {
        popupMain.classList.add('popup__active')
        if (popupMain.classList.contains('popup__active')) {
            body.classList.add('no_scroll')
        }
    }
    e.addEventListener('click', openPopUp)
})
const openProductPopUp = (e) => {
    e.preventDefault()
    popupProduct.classList.add('popup__active')
    if (popupProduct.classList.contains('popup__active')) {
        body.classList.add('no_scroll')
    }
}
popupProductBtn.addEventListener('click', openProductPopUp)

window.onload = function () {
    closePopup.addEventListener("click", function () {
        if (popupMain.classList.contains("popup__active")) {
            popupMain.classList.remove("popup__active")
        }
        if (body.classList.contains('no_scroll')) {
            body.classList.remove('no_scroll')
        }
    })
    closeProductPopup.addEventListener("click", function () {
        if (popupProduct.classList.contains("popup__active")) {
            popupProduct.classList.remove("popup__active")
        }
        if (body.classList.contains('no_scroll')) {
            body.classList.remove('no_scroll')
        }
    })
    document.addEventListener("click", actions)
    function actions(e) {
        const targetElement = e.target;
        if (!targetElement.closest(".popup__main") && !targetElement.closest("#call") && !targetElement.closest(".order-btn") && !targetElement.closest(".popup__productbtn")) {
            popupMain.classList.remove("popup__active");
            popupProduct.classList.remove("popup__active")
            if (body.classList.contains('no_scroll')) {
                body.classList.remove('no_scroll')
            }
        }
    }
}