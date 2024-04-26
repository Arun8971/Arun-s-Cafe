let x=document.getElementById("menu");
let mIcon=document.getElementById("open-menu");
let cIcon=document.getElementById("close-menu");


function openMenu(){
    x.style.display='block';
    mIcon.style.display='none';
    cIcon.style.display='block';
}

function closeMenu(){
    x.style.display='none';
    mIcon.style.display='block';
    cIcon.style.display='none';
}