
const languageButton = document.querySelector(".language-toggle");

const languageContainer = document.querySelector(".language-container");


languageButton.addEventListener("click", function () {

    languageContainer.classList.toggle("active");

});



const languageButtons = document.querySelectorAll(".language-menu button");


languageButtons.forEach(button => {

    button.addEventListener("click", function () {

        languageContainer.classList.remove("active");

    });

});
