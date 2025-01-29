// IIFE (Immediately Invoked Function Expression) – A function that’s defined and executed right away to create a private scope, preventing global namespace pollution.
(function (global, $) {
    // Greetr Function – A constructor function that creates new instances of Greetr.init, which contains properties like firstName, lastName, and language.
    const Greetr = function (firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);
    };

    // Greetr.prototype – The place where you define methods that all Greetr instances can use.
    Greetr.prototype = {};

    // Greetr.init Constructor – This is the actual constructor that gets used to initialize the instance and its properties.
    Greetr.init = function (firstName, lastName, language) {
        const self = this;
        self.firstName = firstName || "";
        self.lastName = lastName || "";
        self.language = language || "en";
    };

    // This line ensures that instances of Greetr.init (created by calling new Greetr.init(...)) will inherit the methods defined on Greetr.prototype.
    Greetr.init.prototype = Greetr.prototype;

    // Exposing Greetr to the Global Scope
    global.Greetr = global.G$ = Greetr;
})(window, jQuery);
