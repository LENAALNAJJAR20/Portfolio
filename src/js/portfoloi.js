let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');
menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};
const sr =ScrollReveal({
distance:'40px',
duration :2500,
reset:true
});


sr.reveal('.home-text span' ,{delay:500,origin:'top'});
sr.reveal('.home-text h1' ,{delay:580,origin:'left'});
sr.reveal('.home-text p' ,{delay:650,origin:'right'});
sr.reveal('.main-btn' ,{delay:760,origin:'left'});
sr.reveal('.share p' ,{delay:760,origin:'bottom'});
sr.reveal('.share a' ,{delay:820,origin:'bottom'});
sr.reveal('.home-img' ,{delay:850,origin:'right'});





