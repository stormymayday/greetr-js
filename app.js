// JQuery
// $(document).ready(function () {
//     // When the login button is clicked
//     $("#login").click(function () {
//         // Get the selected language from the dropdown
//         const lang = $("#lang").val();

//         // Create a new Greetr instance with the chosen language
//         const greeter = G$("John", "Doe", lang);

//         // Set the language and display a formal greeting in the #greeting element
//         greeter.setLang(lang).htmlGreet("#greeting", true); // true for formal greeting
//     });
// });

// Vanilla JS
document.addEventListener("DOMContentLoaded", function () {
    // When the login button is clicked
    document.getElementById("login").addEventListener("click", function () {
        // Get the selected language from the dropdown
        const lang = document.getElementById("lang").value;

        // Create a new Greetr instance with the chosen language
        const greeter = G$("John", "Doe", lang);

        // Set the language and display a formal greeting in the #greeting element
        greeter.setLang(lang).htmlGreet("#greeting", false); // true for formal greeting
    });
});
