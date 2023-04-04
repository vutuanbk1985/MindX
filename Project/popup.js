//show popup when load
const popup = document.getElementById("popup");
const body = document.getElementsByTagName("body");
const closebtn = document.getElementById('close-btn');

let timeOut;
timeOut = setTimeout(() => {
    
    popup.classList.toggle('visibility-toggle');
    
}, 3000)

window.addEventListener('load', timeOut);

// window.addEventListener('load', () => {
    
//     popup.classList.toggle('visibility-toggle');
    
// })

closebtn.addEventListener('click', () => {
    clearTimeout(timeOut);
    popup.classList.remove('visibility-toggle');
    popup.classList.toggle('invisibility-toggle');
})




