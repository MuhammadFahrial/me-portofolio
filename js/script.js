const icon = document.getElementById('icon');
const nav = document.querySelector('.nav-item');
const jumbotronI = document.querySelector('.jumbotron-information');
const jumbotronImg = document.querySelector('.jumbotron-img');
const skill = document.getElementById('container-skill');

console.log(skill);
window.addEventListener('load', function(){
    jumbotronI.classList.toggle('active-jumbotron-information');

    jumbotronImg.classList.toggle('active-jumbotron-img');

    skill.classList.toggle('container-active');
});


icon.addEventListener('click', function(){
    nav.classList.toggle('active');
});




