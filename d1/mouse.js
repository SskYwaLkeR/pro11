var img = document.querySelector('img')


window.addEventListener('scroll', function(e){
    var scroll = window.scrollY;
    console.log(scroll);
    img.style.opacity = scroll/15000;
    img.style.bottom = scroll/100+'%';
    console.log(window.scrollY);
});