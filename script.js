var navLinks = document.getElementById('navLinks');
function showMenu(){
    navLinks.style.right = '0';
}
function hideMenu(){
    navLinks.style.right = "-200px"
}



document.addEventListener('contextmenu', function(event){
    event.preventDefault();
});
