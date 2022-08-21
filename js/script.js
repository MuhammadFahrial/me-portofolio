const icon = document.getElementById('icon');
const nav = document.querySelector('.nav-item');
const jumbotronI = document.querySelector('.jumbotron-information');
const jumbotronImg = document.querySelector('.jumbotron-img');
const skill = document.getElementById('container-skill');

window.addEventListener('load', function(){
    jumbotronI.classList.toggle('active-jumbotron-information');

    jumbotronImg.classList.toggle('active-jumbotron-img');

    skill.classList.toggle('container-active');
    
$(document).ready(function () {
    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

});

icon.addEventListener('click', function(){
    nav.classList.toggle('active');
});




