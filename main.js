/* ************************ */
//    Cursor custom
/* ************************ */

const cursorCustom = document.querySelector(".cursor-custom");

document.addEventListener('mousemove', e => {
    cursorCustom.setAttribute('style', 'top:'+(e.pageY)+"px; left:" +(e.pageX)+"px");
})

document.addEventListener('click', ()=> {
    cursorCustom.classList.add('expand');

    setTimeout(()=> {
        cursorCustom.classList.remove('expand')
    }, 500);
})

/* ************************ */
//    Title h1
/* ************************ */

const title = document.querySelector("h1");
const txt = "Diane Samadago";

function typeWriter(text, index) {
    if(index < text.length) {
        setTimeout( ()=> {
            title.innerHTML += `<span>${text[index]}</span>`;
            typeWriter(text, index +1)
        }, 200)
    }
}
setTimeout(()=> {
    typeWriter(txt, 0)
}, 300);
