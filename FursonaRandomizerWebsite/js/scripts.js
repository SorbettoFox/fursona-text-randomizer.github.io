/*!
* Start Bootstrap - Scrolling Nav v5.0.6 (https://startbootstrap.com/template/scrolling-nav)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-scrolling-nav/blob/master/LICENSE)
*/
//
// Scripts
// 

/*
Randomizing text in JS: We want to add an event listener to the button which will display
text and grab a random animal from the text and add it into the sentence like a stringbuilder i guess?

*/


const fs = require('fs');

const data = fs.readFileSync('./assets/common-animals.txt');

console.log(data)




window.addEventListener('DOMContentLoaded', _event => {

    const bigGeneratorButton = document.getElementById("big-generator-button");

    bigGeneratorButton.addEventListener('click', function() {
        // logic here...
        console.log("Beans")
    });

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
